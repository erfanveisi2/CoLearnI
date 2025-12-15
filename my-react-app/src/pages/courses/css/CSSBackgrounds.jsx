import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSSBackgrounds = () => {
  const bgExample = `body {
  background-image: url("paper.gif");
  background-color: #cccccc;
}

h1 {
  background-color: green;
}

div {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>CSS Backgrounds</h1>
      <p className={styles.introParagraph}>
        The CSS background properties are used to define the background effects for elements.
      </p>

      <h2 className={styles.subsectionTitle}>CSS Background Properties</h2>
      <p>Here are the most common background properties:</p>
      <ul>
        <li><code>background-color</code></li>
        <li><code>background-image</code></li>
        <li><code>background-repeat</code></li>
        <li><code>background-attachment</code></li>
        <li><code>background-position</code></li>
      </ul>

      <h2 className={styles.subsectionTitle}>Background Color</h2>
      <p>
        The <code>background-color</code> property specifies the background color of an element.
      </p>
      <div style={{background: 'lightblue', padding: '20px', marginBottom: '20px'}}>
        This &lt;div&gt; element has a lightblue background color.
      </div>

      <h2 className={styles.subsectionTitle}>Background Image</h2>
      <p>
        The <code>background-image</code> property specifies an image to use as the background of an element.
        By default, the image is repeated so it covers the entire element.
      </p>

      <h2 className={styles.subsectionTitle}>Try it Yourself</h2>
      <TryItYourselfEditor initialCode={bgExample} language="css" />

      <div className={styles.navigationButtons}>
        <Link to="/course/css/colors" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/css/borders" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default CSSBackgrounds;