import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSSIntro = () => {
  const cssExample = `body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>CSS Introduction</h1>
      <p className={styles.introParagraph}>
        CSS is the language we use to style an HTML document.
      </p>

      <div className={styles.infoBox}>
        <p><strong>CSS</strong> stands for Cascading Style Sheets.</p>
      </div>

      <h2 className={styles.subsectionTitle}>What is CSS?</h2>
      <p>
        CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
      </p>
      <p>
        It can control the layout of multiple web pages all at once. External stylesheets are stored in <strong>.css</strong> files.
      </p>

      <h2 className={styles.subsectionTitle}>CSS Example</h2>
      <p>
        This example shows how to add a style sheet to an HTML page.
      </p>

      <TryItYourselfEditor initialCode={cssExample} language="css" />

      <div className={styles.navigationButtons}>
        <button className={styles.prevButton} disabled>❮ Previous</button>
        <Link to="/course/css/syntax" style={{textDecoration: 'none'}}>
          <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default CSSIntro;