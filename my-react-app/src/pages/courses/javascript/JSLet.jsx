import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JSLet = () => {
  const letExample = `let x = 10;
// Here x is 10

{
  let x = 2;
  // Here x is 2
}

// Here x is 10
document.getElementById("demo").innerHTML = x;`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>JavaScript Let</h1>
      <p className={styles.introParagraph}>
        The <code>let</code> keyword was introduced in ES6 (2015).
      </p>

      <h2 className={styles.subsectionTitle}>Cannot be Redeclared</h2>
      <p>Variables defined with <code>let</code> cannot be redeclared.</p>
      <p>You cannot accidentally redeclare a variable declared with <code>let</code>.</p>
      <div style={{background: '#f0f0f0', padding: '15px', borderRadius: '5px', fontFamily: 'monospace'}}>
        let x = "John Doe";<br/>
        let x = 0; // SyntaxError: 'x' has already been declared
      </div>

      <h2 className={styles.subsectionTitle}>Block Scope</h2>
      <p>
        Before ES6 (2015), JavaScript had only <strong>Global Scope</strong> and <strong>Function Scope</strong>.
      </p>
      <p>
        ES6 introduced two important new JavaScript keywords: <code>let</code> and <code>const</code>.
      </p>
      <p>
        These two keywords provide <strong>Block Scope</strong> in JavaScript. Variables declared inside a {`{ }`} block cannot be accessed from outside the block:
      </p>

      <TryItYourselfEditor initialCode={letExample} language="javascript" />

      <div className={styles.navigationButtons}>
        <Link to="/course/javascript/variables" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/javascript/const" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default JSLet;