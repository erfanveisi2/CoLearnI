import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const HTMLEditors = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>HTML Editors</h1>
      <p className={styles.introParagraph}>
        A simple text editor is all you need to learn HTML.
      </p>

      <h2 className={styles.subsectionTitle}>Learn HTML Using Notepad or TextEdit</h2>
      <p>
        Web pages can be created and modified by using professional HTML editors.
        However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).
      </p>
      <p>
        We believe that using a simple text editor is a good way to learn HTML.
      </p>

      <div className={styles.infoBox}>
        <p><strong>Recommended:</strong> As you get more advanced, you'll likely want to switch to a more powerful code editor like <strong>VS Code</strong> (Visual Studio Code), which provides helpful features like color-coding and auto-completion.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Step 1: Open Notepad (PC)</h2>
      <p><strong>Windows 8 or later:</strong></p>
      <ol>
        <li>Open the <strong>Start Screen</strong> (the window symbol at the bottom left on your screen).</li>
        <li>Type <strong>Notepad</strong>.</li>
        <li>Select <strong>Notepad</strong>.</li>
      </ol>

      <h2 className={styles.subsectionTitle}>Step 1: Open TextEdit (Mac)</h2>
      <p>Open <strong>Finder &gt; Applications &gt; TextEdit</strong>.</p>
      <p>Also change some preferences to get the application to save files correctly. In <strong>Preferences &gt; Format &gt;</strong> choose <strong>"Plain text"</strong></p>

      <h2 className={styles.subsectionTitle}>Step 2: Write Some HTML</h2>
      <p>Write or copy the following HTML code into Notepad:</p>
      <div style={{background: '#f0f0f0', padding: '15px', borderRadius: '5px', fontFamily: 'monospace', whiteSpace: 'pre-wrap'}}>
{`<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}
      </div>

      <h2 className={styles.subsectionTitle}>Step 3: Save the HTML Page</h2>
      <p>Save the file on your computer. Select <strong>File &gt; Save as</strong> in the Notepad menu.</p>
      <p>Name the file <strong>"index.html"</strong> and set the encoding to <strong>UTF-8</strong> (which is the preferred encoding for HTML files).</p>

      <h2 className={styles.subsectionTitle}>Step 4: View the HTML Page in Your Browser</h2>
      <p>Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</p>

      <div className={styles.navigationButtons}>
        <Link to="/course/html/introduction" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/html/basic" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default HTMLEditors;