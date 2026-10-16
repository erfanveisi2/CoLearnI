# SOS Dashboard

Local dashboard for Claude's Solar on Steroids auto-edits: every ad, its stage and who it's waiting on,
revision rounds (your notes vs client notes), earnings (invoiced + next-invoice estimate), and Claude vs
manual edits (benchmark from invoices #003–#005).

    ./run.sh                    # starts http://localhost:8765 and opens it
    python3 server.py --print   # merged data as JSON

Deep link to an open ad: `http://localhost:8765/#hen-ei`

## Data
- `data/ads.json` — curated facts per ad (stage, waiting on, rounds + notes, locks, billing, invoice).
  **Claude updates it on every render / upload / client revision / invoice**, in the same turn as the
  vault Auto-Edit Projects tracker.
- `data/benchmark.json` — manual-edit totals from invoices #003–#005.
- `config.sos_confirmed` in `data/ads.json` — the SOS editors portal's invoice 'Total so far' (editors.onsteroids.com → Invoices),
  shown as the **SOS confirmed** card beside Next invoice. Since 2026-10-12 SOS builds the invoice; Claude refreshes this from the portal.
- Live from the SSD (`/Volumes/PortableSSD/Editing/Clients/{Client}/Videos/{Task}/Versions/{Task} - C{n}.mp4`):
  version list, lengths (ffprobe, cached in `data/.probe_cache.json`), render times. When the SSD is
  unplugged the cache is used.

## What Refresh does
Re-runs the whole merge — nothing is cached in the page:
1. re-reads `data/ads.json`
2. re-reads the vault tracker (`Auto-Edit Projects.md`, read-only): its Status cell **wins** for stage,
   waiting on and status text, and adds any 🔒 locks. Every /sos chat updates that table, so an upload
   done in another chat shows up here without touching `ads.json`. Keywords: "uploaded for QA" /
   "waiting for client" → Client, "with Erv" → You (earliest keyword in the cell wins).
3. rescans the SSD Versions folders (new C-files, lengths)

One ad with bad data never takes the page down: C-number fields (`approved`, `locked`, `rounds[].to`, `final_c`,
`billing.version`) take `7` or `"C7"`, and any ad that still can't be merged shows with a **flag** naming the problem
while every other ad loads (2026-10-16 — `final_c: "C7"` had crashed the whole API).

Round notes + billing still come from `ads.json` only. If the tracker is ahead of the notes, the ad gets
a flag. Changes to `server.py` need a restart (`pkill -f server.py; ./run.sh`); data changes don't.

## Billing rules (from the vault Invoice Workflow)
- per-min ad £14/min on the billed version's length (m:ss, rounded to the second)
- variant £7 flat — only when the main ad was also ours; handheld £10 flat; 1:1 Squared not billed
- one invoice per month: `config.invoice_anchor` (`#006` = 2026-10) → this month's invoice number is worked out from
  today's date, so nothing needs editing when a month ends
- **Invoiced** = ads on a PAST month's invoice (sent). **Next invoice** = ads on this month's invoice (`billing.invoice`
  + `amount` set, confirmed amount) + ads not on any invoice yet (estimate from the latest C-version). On the 1st of a
  new month the old invoice's ads move to Invoiced by themselves and Next invoice starts again (Erv 2026-10-05)

## Adding an ad
Append to `ads` in `data/ads.json`: `id`, `client` (exactly as on the SSD), `task` (full task name = folder
name), `label` (short chart label), `started`, `stage` (0–7, see `stages`), `waiting_on`
(`erv` / `client` / `claude` / `none`), `approved`, `locked`, `first_try`, `billing`, `rounds`
(`{to, by: erv|client, who?, date, note}`). `started` may be `null` when the date is unknown (Erv's own ClickUp-era edits) — a null `started` blanked the whole Ads table on 2026-10-08 (sort crashed); app.js now tolerates it. Version numbers in `approved` / `locked` / `rounds.to` are plain numbers (`2`, not `"C2"`) — a `"C2"` crashed the whole API on 2026-10-06 (the server now tolerates it, but write numbers).
  **`rounds` are 9:16 revision rounds only** — never `"upload"`, `"done"` or `"1:1 C1"` ("upload"/"done" crashed the API on
  2026-10-07; "1:1 C1" read as a fake C1 round). The square goes in `square` {c, file, source, captions, uploaded, billing},
  plus `final_approved` / `done` dates (see `acti-s1`). The server now skips a bad round and flags that ad.
  A variant with no tracker row of its own gets `vault_note: null`, or it copies the main ad's status + locks.
  **`kind` is always `"ad"` — variant hooks too** (`billing.type: "variant"` sets the £7). Only `kind == "ad"` is counted in
  earnings and synced from the vault tracker; a `"variant"` kind silently dropped Glow Green Hook 2's £7 (Erv caught it 2026-10-04).
