import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSSSelectors = () => {
  const selectorExample = `/* Element Selector */
p {
  text-align: center;
  color: red;
}

/* ID Selector */
#para1 {
  text-align: center;
  color: blue;
}

/* Class Selector */
.center {
  text-align: center;
  color: green;
}`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>CSS Selectors</h1>
      <p className={styles.introParagraph}>
        CSS selectors are used to "find" (or select) the HTML elements you want to style.
      </p>

      <h2 className={styles.subsectionTitle}>The CSS element Selector</h2>
      <p>
        The element selector selects HTML elements based on the element name.
      </p>
      <p>Here, all <code>&lt;p&gt;</code> elements on the page will be center-aligned, with a red text color:</p>
      <div style={{background: '#f0f0f0', padding: '10px', fontFamily: 'monospace'}}>
        p &#123; text-align: center; color: red; &#125;
      </div>

      <h2 className={styles.subsectionTitle}>The CSS id Selector</h2>
      <p>
        The id selector uses the id attribute of an HTML element to select a specific element.
        The id of an element is unique within a page, so the id selector is used to select one unique element!
      </p>
      <p>To select an element with a specific id, write a hash (#) character, followed by the id of the element.</p>
      <div style={{background: '#f0f0f0', padding: '10px', fontFamily: 'monospace'}}>
        #para1 &#123; text-align: center; color: blue; &#125;
      </div>

      <h2 className={styles.subsectionTitle}>The CSS class Selector</h2>
      <p>
        The class selector selects HTML elements with a specific class attribute.
        To select elements with a specific class, write a period (.) character, followed by the class name.
      </p>
      <div style={{background: '#f0f0f0', padding: '10px', fontFamily: 'monospace'}}>
        .center &#123; text-align: center; color: red; &#125;
      </div>

      <h2 className={styles.subsectionTitle}>Try it Yourself</h2>
      <TryItYourselfEditor initialCode={selectorExample} language="css" />

      <div className={styles.navigationButtons}>
        <Link to="/course/css/syntax" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/css/how-to" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default CSSSelectors;