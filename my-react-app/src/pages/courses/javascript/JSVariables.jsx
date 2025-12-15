import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JSVariables = () => {
  const varExample = `var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>JavaScript Variables</h1>
      <p className={styles.introParagraph}>
        Variables are containers for storing data (storing data values).
      </p>

      <h2 className={styles.subsectionTitle}>4 Ways to Declare a JavaScript Variable:</h2>
      <ul>
        <li>Using <code>var</code></li>
        <li>Using <code>let</code></li>
        <li>Using <code>const</code></li>
        <li>Using nothing</li>
      </ul>

      <h2 className={styles.subsectionTitle}>What to Use?</h2>
      <p>
        The <code>var</code> keyword was used in all JavaScript code from 1995 to 2015.
      </p>
      <p>
        The <code>let</code> and <code>const</code> keywords were added to JavaScript in 2015.
      </p>
      <div className={styles.infoBox}>
        <p><strong>Modern JS:</strong> Always use <code>const</code> if the value should not be changed. Always use <code>let</code> if the value can change. Only use <code>var</code> if you MUST support very old browsers.</p>
      </div>

      <h2 className={styles.subsectionTitle}>JavaScript Identifiers</h2>
      <p>
        All JavaScript variables must be identified with unique names. These unique names are called identifiers.
      </p>
      <p>
        Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
      </p>
      <p>The general rules for constructing names for variables (unique identifiers) are:</p>
      <ul>
        <li>Names can contain letters, digits, underscores, and dollar signs.</li>
        <li>Names must begin with a letter.</li>
        <li>Names can also begin with $ and _ (but we will not use it in this tutorial).</li>
        <li>Names are case sensitive (y and Y are different variables).</li>
        <li>Reserved words (like JavaScript keywords) cannot be used as names.</li>
      </ul>

      <TryItYourselfEditor initialCode={varExample} language="javascript" />

      <div className={styles.navigationButtons}>
        <Link to="/course/javascript/comments" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/javascript/let" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default JSVariables;