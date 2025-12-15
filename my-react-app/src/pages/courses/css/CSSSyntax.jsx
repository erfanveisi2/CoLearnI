import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSSSyntax = () => {
  const syntaxExample = `p {
  color: red;
  text-align: center;
}`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>CSS Syntax</h1>
      <p className={styles.introParagraph}>
        A CSS rule-set consists of a selector and a declaration block.
      </p>

      <div className={styles.infoBox}>
        <p><strong>Selector:</strong> Points to the HTML element you want to style.</p>
      </div>

      <h2 className={styles.subsectionTitle}>CSS Syntax</h2>
      <p>
        The declaration block contains one or more declarations separated by semicolons.
        Each declaration includes a CSS property name and a value, separated by a colon.
      </p>
      <div style={{background: '#f0f0f0', padding: '15px', borderRadius: '5px', fontFamily: 'monospace', fontSize: '1.1rem'}}>
        h1 &#123; color: blue; font-size: 12px; &#125;
      </div>
      <ul>
        <li><code>h1</code> is the <strong>selector</strong> (it points to the HTML element you want to style: &lt;h1&gt;).</li>
        <li><code>color</code> is a <strong>property</strong>, and <code>blue</code> is the <strong>property value</strong>.</li>
        <li><code>font-size</code> is another <strong>property</strong>, and <code>12px</code> is its <strong>value</strong>.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>CSS Example</h2>
      <p>
        In this example all <code>&lt;p&gt;</code> elements will be center-aligned, with a red text color:
      </p>
      <TryItYourselfEditor initialCode={syntaxExample} language="css" />

      <div className={styles.navigationButtons}>
        <Link to="/course/css/introduction" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/css/selectors" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default CSSSyntax;