import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JSConst = () => {
  const constExample = `try {
  const PI = 3.141592653589793;
  PI = 3.14; // This will cause an error
}
catch (err) {
  document.getElementById("demo").innerHTML = err;
}`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>JavaScript Const</h1>
      <p className={styles.introParagraph}>
        The <code>const</code> keyword was introduced in ES6 (2015).
      </p>

      <div className={styles.infoBox}>
        <p>Variables defined with <code>const</code> cannot be Redeclared.</p>
        <p>Variables defined with <code>const</code> cannot be Reassigned.</p>
        <p>Variables defined with <code>const</code> have Block Scope.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Cannot be Reassigned</h2>
      <p>
        A <code>const</code> variable cannot be reassigned:
      </p>
      <TryItYourselfEditor initialCode={constExample} language="javascript" />

      <h2 className={styles.subsectionTitle}>Must be Assigned</h2>
      <p>
        JavaScript <code>const</code> variables must be assigned a value when they are declared:
      </p>
      <div style={{background: '#f0f0f0', padding: '15px', borderRadius: '5px', fontFamily: 'monospace'}}>
        const PI = 3.14159265359; // Correct<br/><br/>
        const PI;<br/>
        PI = 3.14159265359; // Incorrect
      </div>

      <h2 className={styles.subsectionTitle}>When to use JavaScript const?</h2>
      <p>
        Always declare a variable with <code>const</code> when you know that the value should not be changed.
      </p>
      <p>
        Use <code>const</code> when you declare:
      </p>
      <ul>
        <li>A new Array</li>
        <li>A new Object</li>
        <li>A new Function</li>
        <li>A new RegExp</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/javascript/let" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/javascript/operators" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default JSConst;