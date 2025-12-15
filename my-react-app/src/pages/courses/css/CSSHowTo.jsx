import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSSHowTo = () => {
  const internalExample = `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>How To Add CSS</h1>
      <p className={styles.introParagraph}>
        When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.
      </p>

      <h2 className={styles.subsectionTitle}>Three Ways to Insert CSS</h2>
      <p>There are three ways of inserting a style sheet:</p>
      <ul>
        <li>External CSS</li>
        <li>Internal CSS</li>
        <li>Inline CSS</li>
      </ul>

      <h2 className={styles.subsectionTitle}>External CSS</h2>
      <p>
        With an external style sheet, you can change the look of an entire website by changing just one file!
        Each HTML page must include a reference to the external style sheet file inside the <code>&lt;link&gt;</code> element, inside the head section.
      </p>
      <div style={{background: '#f0f0f0', padding: '10px', fontFamily: 'monospace'}}>
        &lt;link rel="stylesheet" href="mystyle.css"&gt;
      </div>

      <h2 className={styles.subsectionTitle}>Internal CSS</h2>
      <p>
        An internal style sheet may be used if one single HTML page has a unique style.
        The internal style is defined inside the <code>&lt;style&gt;</code> element, inside the head section.
      </p>
      <TryItYourselfEditor initialCode={internalExample} language="html" />

      <h2 className={styles.subsectionTitle}>Inline CSS</h2>
      <p>
        An inline style may be used to apply a unique style for a single element.
        To use inline styles, add the style attribute to the relevant element.
      </p>
      <div style={{background: '#f0f0f0', padding: '10px', fontFamily: 'monospace'}}>
        &lt;h1 style="color:blue;text-align:center;"&gt;This is a heading&lt;/h1&gt;
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/css/selectors" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/css/comments" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default CSSHowTo;