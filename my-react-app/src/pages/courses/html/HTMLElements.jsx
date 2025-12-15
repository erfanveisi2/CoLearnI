import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const HTMLElements = () => {
  const nestedExample = `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>HTML Elements</h1>
      <p className={styles.introParagraph}>
        An HTML element is defined by a start tag, some content, and an end tag.
      </p>

      <div className={styles.infoBox}>
        <p><strong>Syntax:</strong> <code>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</code></p>
      </div>

      <p>The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>
      <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '20px', marginBottom: '20px'}}>
        <tr style={{borderBottom: '1px solid #ddd', textAlign: 'left'}}>
          <th style={{padding: '10px'}}>Start tag</th>
          <th style={{padding: '10px'}}>Element content</th>
          <th style={{padding: '10px'}}>End tag</th>
        </tr>
        <tr style={{borderBottom: '1px solid #ddd'}}>
          <td style={{padding: '10px'}}><code>&lt;h1&gt;</code></td>
          <td style={{padding: '10px'}}>My First Heading</td>
          <td style={{padding: '10px'}}><code>&lt;/h1&gt;</code></td>
        </tr>
        <tr style={{borderBottom: '1px solid #ddd'}}>
          <td style={{padding: '10px'}}><code>&lt;p&gt;</code></td>
          <td style={{padding: '10px'}}>My first paragraph.</td>
          <td style={{padding: '10px'}}><code>&lt;/p&gt;</code></td>
        </tr>
        <tr style={{borderBottom: '1px solid #ddd'}}>
          <td style={{padding: '10px'}}><code>&lt;br&gt;</code></td>
          <td style={{padding: '10px'}}><em>none</em></td>
          <td style={{padding: '10px'}}><em>none</em></td>
        </tr>
      </table>

      <h2 className={styles.subsectionTitle}>Nested HTML Elements</h2>
      <p>
        HTML elements can be nested (this means that elements can contain other elements).
        All HTML documents consist of nested HTML elements.
      </p>
      <p>
        The following example contains four HTML elements (<code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>):
      </p>
      <TryItYourselfEditor initialCode={nestedExample} language="html" />

      <h2 className={styles.subsectionTitle}>Never Skip the End Tag</h2>
      <p>
        Some HTML elements will display correctly even if you forget the end tag, but NEVER rely on this. Unexpected results and errors may occur if you forget the end tag.
      </p>

      <h2 className={styles.subsectionTitle}>Empty HTML Elements</h2>
      <p>
        HTML elements with no content are called empty elements.
        <code>&lt;br&gt;</code> is an empty element without a closing tag (the <code>&lt;br&gt;</code> tag defines a line break).
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/course/html/basic" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/html/attributes" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default HTMLElements;