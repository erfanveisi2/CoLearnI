import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const HTMLParagraphs = () => {
  const pExample = `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`;
  const brExample = `<p>This is<br>a paragraph<br>with line breaks.</p>`;
  const preExample = `<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>HTML Paragraphs</h1>
      <p className={styles.introParagraph}>
        A paragraph always starts on a new line, and is usually a block of text.
      </p>

      <h2 className={styles.subsectionTitle}>HTML Paragraphs</h2>
      <p>
        The HTML <code>&lt;p&gt;</code> element defines a paragraph.
      </p>
      <p>
        A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.
      </p>
      <TryItYourselfEditor initialCode={pExample} language="html" />

      <h2 className={styles.subsectionTitle}>HTML Display</h2>
      <p>
        You cannot be sure how HTML will be displayed. Large or small screens, and resized windows will create different results.
      </p>
      <p>
        With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code. The browser will automatically remove any extra spaces and lines when the page is displayed.
      </p>

      <h2 className={styles.subsectionTitle}>HTML Line Breaks</h2>
      <p>
        The HTML <code>&lt;br&gt;</code> element defines a line break.
      </p>
      <p>
        Use <code>&lt;br&gt;</code> if you want a line break (a new line) without starting a new paragraph:
      </p>
      <TryItYourselfEditor initialCode={brExample} language="html" />

      <h2 className={styles.subsectionTitle}>The HTML &lt;pre&gt; Element</h2>
      <p>
        The HTML <code>&lt;pre&gt;</code> element defines preformatted text.
      </p>
      <p>
        The text inside a <code>&lt;pre&gt;</code> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:
      </p>
      <TryItYourselfEditor initialCode={preExample} language="html" />

      <div className={styles.navigationButtons}>
        <Link to="/course/html/headings" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/html/styles" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default HTMLParagraphs;