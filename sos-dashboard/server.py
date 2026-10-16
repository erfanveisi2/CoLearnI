#!/usr/bin/env python3
"""SOS auto-edit dashboard — local server.

Serves public/ and GET /api/data, which merges data/ads.json (curated facts,
updated by Claude on every render / upload / revision / invoice) with a live
scan of the SSD Versions folders (C-files, lengths, render times).

    python3 server.py            # http://localhost:8765
    python3 server.py --print    # dump the merged JSON and exit
"""
import json
import os
import re
import subprocess
import sys
from datetime import date, datetime
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data"
PUBLIC = ROOT / "public"
CACHE = DATA / ".probe_cache.json"
PORT = int(os.environ.get("SOS_DASH_PORT", 8765))


def load_json(p, default=None):
    try:
        return json.loads(p.read_text())
    except FileNotFoundError:
        return default


def probe_duration(path):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)],
        capture_output=True, text=True, timeout=30,
    ).stdout.strip()
    return float(out) if out else None


def scan_versions(clients_root, ad, cache):
    """C-files for one ad. Falls back to the cache when the SSD is unplugged."""
    folder = Path(clients_root) / ad.get("client_dir", ad["client"]) / "Videos" / ad.get("folder", ad["task"]) / "Versions"   # client_dir: SSD folder when it differs from the Timeliner client name (LET = "LET Electrical")
    pat = re.compile(re.escape(ad.get("folder", ad["task"])) + r" - C(\d+)\.mp4$")   # folder/file names can't hold the task's "/"
    if not folder.is_dir():
        return cache.get(ad["id"], [])
    versions = []
    alias = {name: int(c) for c, name in ad.get("version_files", {}).items()}   # {"8": "<file name>"}: a C-version saved under another name
    for f in folder.iterdir():
        m = pat.match(f.name)
        if not m and f.name not in alias:
            continue
        st = f.stat()
        key = f"{f}|{st.st_size}|{int(st.st_mtime)}"
        dur = cache.get("_probe", {}).get(key)
        if dur is None:
            dur = probe_duration(f)
            cache.setdefault("_probe", {})[key] = dur
        versions.append({
            "c": int(m.group(1)) if m else alias[f.name],
            "seconds": dur,
            "rendered": datetime.fromtimestamp(st.st_mtime).isoformat(timespec="minutes"),
            "path": str(f),
        })
    versions.sort(key=lambda v: v["c"])
    cache[ad["id"]] = versions
    return versions


def price(ad, versions, cfg):
    """(amount_gbp, seconds_billed, status). Invoiced amounts are fixed; others estimated."""
    b = ad["billing"]
    t = b["type"]
    by_c = {v["c"]: v for v in versions}
    ver = by_c.get(b.get("version")) or (versions[-1] if versions else None)
    secs = round(ver["seconds"]) if ver and ver["seconds"] else None
    if secs is None and b.get("est_seconds"):          # not rendered yet: rough length from the timestamps (Erv 2026-10-02)
        secs = int(b["est_seconds"])
    if b.get("amount") is not None:
        amount = b["amount"]
    elif t == "per_min":   # SOS portal (2026-10-12): priced to the penny from the EXACT final length, not whole seconds
        exact = ver["seconds"] if ver and ver["seconds"] else secs
        amount = round(exact / 60 * cfg["rate_per_min_gbp"], 2) if exact else 0.0
    elif t == "variant":
        amount = cfg["variant_gbp"]
    elif t == "handheld":
        amount = cfg["handheld_gbp"]
    else:
        amount = 0.0
    # Invoiced = on a past month's (sent) invoice. Ads on this month's invoice stay in Next invoice
    # with their confirmed amount; ads not on any invoice yet are estimates (Erv 2026-10-05).
    no = invoice_no(b.get("invoice"))
    status = "invoiced" if no is not None and no < cfg["current_invoice_no"] else "estimate"
    return amount, secs, status


# Keyword -> who has the ball. The earliest keyword in the tracker's Status cell wins,
# so a stale "with Erv" later in the cell doesn't beat a fresh "uploaded for QA".
WAIT_WORDS = {
    "done": ["video done", "done (1:1 uploaded)"],      # 1:1 Squared uploaded = finished, no QA on squares (Erv 2026-10-02)
    "client": ["uploaded for qa", "waiting for client", "waiting for qa", "erv uploading"],
    "erv": ["with erv", "erv review", "erv captioning", "waiting on erv"],
    "claude": ["rendering", "claude working", "in progress"],
}
STAGE_FOR = {"done": 8, "client": 7, "erv": 5, "claude": 4}


def read_vault_tracker(path):
    """{note name: {status, latest, locked}} from the Auto-Edit Projects table (read-only)."""
    try:
        text = Path(path).read_text()
    except (FileNotFoundError, TypeError):
        return {}
    rows = {}
    for line in text.splitlines():
        m = re.match(r"\|\s*\[\[([^\]|]+)[^|]*\|[^|]*\|([^|]*)\|([^|]*)\|", line)
        if not m:
            continue
        status = m.group(2).strip()
        latest = re.search(r"C(\d+)", m.group(3))
        locked = set()
        for part in re.split(r"[—.;]", status):
            if "🔒" in part:
                locked |= {int(c) for c in re.findall(r"\bC(\d+)\b", part.split("🔒")[0])}
        rows[m.group(1).strip()] = {
            "status": status,
            "latest": int(latest.group(1)) if latest else None,
            "locked": locked,
        }
    return rows


def vault_waiting(status):
    low = status.lower()
    hits = [(low.find(w), who) for who, words in WAIT_WORDS.items() for w in words if w in low]
    return min(hits)[1] if hits else None


def clean_md(s):
    return re.sub(r"\*\*|\[\[|\]\]|^[✅🔁🧪⭐\s]+", "", s).strip()


def hours_between(a, b):
    return round((datetime.fromisoformat(b) - datetime.fromisoformat(a)).total_seconds() / 3600, 1)


def c_num(v):
    """2 or "C2" -> 2. A chat wrote "C2" into approved/locked and the whole API crashed (2026-10-06)."""
    return v if isinstance(v, int) else int(re.search(r"\d+", str(v)).group())


def is_c_ref(v):
    """True for 2 / "2" / "C2"; False for "upload", "done", "1x1 C1", "1:1 C1"."""
    return isinstance(v, int) or bool(re.fullmatch(r"\s*C?\s*\d+\s*", str(v), re.I))


def invoice_no(label):
    m = re.search(r"\d+", label or "")
    return int(m.group()) if m else None


def current_invoice(cfg, today=None):
    """One invoice per month: the anchor month's number + months since. On the 1st of a new month the
    previous invoice counts as sent (moves to Invoiced) and Next invoice starts again (Erv 2026-10-05)."""
    today = today or date.today()
    y, m = map(int, cfg["invoice_anchor"]["month"].split("-"))
    return cfg["invoice_anchor"]["no"] + (today.year - y) * 12 + today.month - m


def c_ref_or_none(v):
    """final_c / billing.version: 7 or "C7" -> 7; missing or not a C-number -> None."""
    return c_num(v) if v is not None and is_c_ref(v) else None


def broken_ad(ad, err):
    """Fallback row for an ad whose data couldn't be merged: shown with a flag, priced from billing.amount if set."""
    billing = {"type": "per_min", **(ad["billing"] if isinstance(ad.get("billing"), dict) else {})}
    amount = billing.get("amount")
    return {
        **ad,
        "synced": False,
        "kind": ad.get("kind", "ad"),
        "approved": [], "locked": [], "rounds": [],
        "billing": billing,
        "versions": [],
        "latest": None,
        "amount_gbp": amount if isinstance(amount, (int, float)) else 0.0,
        "billed_seconds": None,
        "billing_status": "estimate",
        "erv_rounds": 0,
        "client_rounds": 0,
        "turnaround_h": None,
        "waiting_on": ad.get("waiting_on", "claude"),
        "stage": ad.get("stage", 0),
        "flags": list(ad.get("flags", [])) + [f"ads.json data for this ad could not be read ({type(err).__name__}: {err}) — fix the entry."],
    }


def build_ad(ad, vault, cfg, cache):
    bad = [r for r in ad["rounds"] if not is_c_ref(r["to"])]
    ad = {**ad, "synced": False,
          "final_c": c_ref_or_none(ad.get("final_c")),
          "billing": {**ad["billing"], "version": c_ref_or_none(ad["billing"].get("version"))},
          "approved": [c_num(c) for c in ad["approved"] if is_c_ref(c)],
          "locked": [c_num(c) for c in ad["locked"] if is_c_ref(c)],
          "rounds": [{**r, "to": c_num(r["to"])} for r in ad["rounds"] if is_c_ref(r["to"])],
          "flags": list(ad.get("flags", [])) + [
              f"ads.json round to {r['to']!r} skipped — rounds are 9:16 C-numbers only (squares go in 'square')."
              for r in bad]}
    row = vault.get(ad.get("vault_note"))
    if row and ad["kind"] == "ad":
        # The vault tracker is updated by every /sos chat — it wins for stage + waiting on.
        who = vault_waiting(row["status"])
        if who:
            ad["waiting_on"], ad["stage"] = who, STAGE_FOR[who]
        ad["status_note"] = clean_md(row["status"])
        ad["locked"] = sorted(set(ad["locked"]) | row["locked"])
        ad["synced"] = True
    versions = scan_versions(cfg["ssd_clients_root"], ad, cache)
    amount, secs, status = price(ad, versions, cfg)
    latest = ad.get("final_c") or (versions[-1]["c"] if versions else None)   # final_c: a later C was made but not used
    noted = max([r["to"] for r in ad["rounds"]] + ad["approved"] + [0]) or None
    vault_latest = row["latest"] if row else None
    flags = list(ad.get("flags", []))
    if latest and noted and latest > max(noted, vault_latest or 0):
        flags.append(f"C{latest} is on the SSD but no tracker mentions it yet.")
    elif vault_latest and noted and vault_latest > noted:
        flags.append(f"Round notes for C{noted + 1}–C{vault_latest} not in the dashboard yet (see the vault project note).")
    by_c = {v["c"]: v for v in versions}
    # C1 render -> first version Erv approved (skipped when early renders were deleted/overwritten)
    turnaround = None
    first_ok = min(ad["approved"]) if ad["approved"] else None
    if not ad.get("renders_pruned") and first_ok in by_c and 1 in by_c:
        turnaround = hours_between(by_c[1]["rendered"], by_c[first_ok]["rendered"])
    return {
        **ad,
        "versions": versions,
        "latest": latest,
        "amount_gbp": amount,
        "billed_seconds": secs,
        "billing_status": status,
        "erv_rounds": sum(r["by"] == "erv" for r in ad["rounds"]),
        "client_rounds": sum(r["by"] == "client" for r in ad["rounds"]),
        "turnaround_h": turnaround,
        "flags": flags,
    }


def build():
    src = load_json(DATA / "ads.json")
    bench = load_json(DATA / "benchmark.json", {})
    cfg = src["config"]
    cur = current_invoice(cfg)
    cfg["next_invoice"] = f"#{cur:03d}"
    cfg["current_invoice_no"] = cur
    cache = load_json(CACHE, {})
    ssd = Path(cfg["ssd_clients_root"]).is_dir()

    vault = read_vault_tracker(cfg.get("vault_tracker"))

    ads, seen = [], set()
    for ad in src["ads"]:
        if ad["id"] in seen:  # two chats added the same ad: first one wins
            continue
        seen.add(ad["id"])
        # One ad with a badly typed field ("C7" where a number belongs, 2026-10-16) used to take the whole
        # page down. Now that ad gets a flag and every other ad still loads.
        try:
            ads.append(build_ad(ad, vault, cfg, cache))
        except Exception as e:
            ads.append(broken_ad(ad, e))
    CACHE.write_text(json.dumps(cache, indent=1))

    real = [a for a in ads if a["kind"] == "ad"]
    invoiced = sum(a["amount_gbp"] for a in real if a["billing_status"] == "invoiced")
    estimate = sum(a["amount_gbp"] for a in real if a["billing_status"] == "estimate")
    days = (date.today() - date.fromisoformat(cfg["auto_edit_start"])).days + 1
    main = [a for a in real if a["billing"]["type"] == "per_min" and a["billed_seconds"]]
    turn = [a["turnaround_h"] for a in real if a["turnaround_h"] is not None]
    claude = {
        "ads": len(real),
        "days": days,
        "ads_per_week": round(len(real) / days * 7, 1),
        "avg_gbp_per_main": round(sum(a["amount_gbp"] for a in main) / len(main), 2) if main else 0,
        "avg_main_minutes": round(sum(a["billed_seconds"] for a in main) / 60 / len(main), 2) if main else 0,
        "avg_rounds": round(sum(a["erv_rounds"] + a["client_rounds"] for a in real) / len(real), 1),
        "avg_client_rounds": round(sum(a["client_rounds"] for a in real) / len(real), 1),
        "first_try": sum(bool(a.get("first_try")) for a in real),  # null = not judged yet (no client QA)
        "median_turnaround_h": sorted(turn)[len(turn) // 2] if turn else None,
        "earned_gbp": round(invoiced + estimate, 2),
    }

    inv = bench.get("invoices", [])
    weeks = sum((date.fromisoformat(b) - date.fromisoformat(a)).days + 1 for a, b in bench.get("window", [])) / 7
    m_count = sum(i["main_count"] for i in inv)
    manual = {
        "ads": m_count,
        "weeks": round(weeks, 1),
        "ads_per_week": round(m_count / weeks, 1) if weeks else 0,
        "avg_gbp_per_main": round(sum(i["main_gbp"] for i in inv) / m_count, 2) if m_count else 0,
        "avg_main_minutes": round(sum(i["main_minutes"] for i in inv) / m_count, 2) if m_count else 0,
        "variants": sum(i["variants"] for i in inv),
        "invoiced_gbp": round(sum(i["total_gbp"] for i in inv), 2),
        "invoices": inv,
    }

    return {
        "generated": datetime.now().isoformat(timespec="minutes"),
        "ssd_mounted": ssd,
        "config": cfg,
        "stages": src["stages"],
        "ads": ads,
        "totals": {
            "invoiced_gbp": round(invoiced, 2),
            "estimate_gbp": round(estimate, 2),
            "invoiced_on": sorted({a["billing"]["invoice"] for a in real if a["billing_status"] == "invoiced"}),
            "next_confirmed": sum(a["billing_status"] == "estimate" and bool(a["billing"].get("invoice")) for a in real),
            "next_done_gbp": round(sum(a["amount_gbp"] for a in real if a["billing_status"] == "estimate" and a["waiting_on"] == "done"), 2),
            "next_done_n": sum(a["billing_status"] == "estimate" and a["waiting_on"] == "done" for a in real),
            "waiting": {w: sum(a["waiting_on"] == w for a in real) for w in ("erv", "client", "claude")},
        },
        "claude": claude,
        "manual": manual,
    }


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(PUBLIC), **kw)

    def do_GET(self):
        if self.path.split("?")[0] == "/api/data":
            try:
                body = json.dumps(build()).encode()
                self.send_response(200)
            except Exception as e:  # show the error in the page instead of a blank screen
                body = json.dumps({"error": f"{type(e).__name__}: {e}"}).encode()
                self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def end_headers(self):
        # page files too: a cached old app.js showed 'undefined' for the new Done state (2026-10-02)
        if not self.path.startswith("/api/"):
            self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def log_message(self, *a):
        pass


if __name__ == "__main__":
    if "--print" in sys.argv:
        print(json.dumps(build(), indent=1))
        sys.exit()
    print(f"SOS dashboard → http://localhost:{PORT}")
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
