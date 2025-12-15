import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSSMargins = () => {
  const marginExample = `div {
  border: 1px solid black;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
  background-color: lightblue;
}`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>CSS Margins</h1>
      <p className={styles.introParagraph}>
        Margins are used to create space around elements, outside of any defined borders.
      </p>

      <div className={styles.infoBox}>
        <p><strong>Think of it:</strong> Margin is the space <em>outside</em> the border. Padding is the space <em>inside</em> the border.</p>
      </div>

      <h2 className={styles.subsectionTitle}>CSS Margin Properties</h2>
      <p>
        CSS has properties for specifying the margin for each side of an element:
      </p>
      <ul>
        <li><code>margin-top</code></li>
        <li><code>margin-right</code></li>
        <li><code>margin-bottom</code></li>
        <li><code>margin-left</code></li>
      </ul>
      <p>
        All the margin properties can have the following values:
      </p>
      <ul>
        <li>auto - the browser calculates the margin</li>
        <li>length - specifies a margin in px, pt, cm, etc.</li>
        <li>% - specifies a margin in % of the width of the containing element</li>
        <li>inherit - specifies that the margin should be inherited from the parent element</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Margin - Individual Sides</h2>
      <TryItYourselfEditor initialCode={marginExample} language="css" />

      <h2 className={styles.subsectionTitle}>Margin - Shorthand Property</h2>
      <p>
        To shorten the code, it is possible to specify all the margin properties in one property.
      </p>
      <p><code>margin: 25px 50px 75px 100px;</code></p>
      <ul>
        <li>top margin is 25px</li>
        <li>right margin is 50px</li>
        <li>bottom margin is 75px</li>
        <li>left margin is 100px</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/css/borders" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/css/padding" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default CSSMargins;