import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JSStatements = () => {
  const stmtExample = `let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4

document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>JavaScript Statements</h1>
      <p className={styles.introParagraph}>
        A computer program is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called statements.
      </p>

      <h2 className={styles.subsectionTitle}>JavaScript Programs</h2>
      <p>
        A JavaScript program is a list of programming statements.
      </p>
      <p>
        In HTML, JavaScript statements are executed by the web browser.
      </p>

      <h2 className={styles.subsectionTitle}>JavaScript Statements</h2>
      <p>
        JavaScript statements are composed of:
      </p>
      <ul>
        <li>Values, Operators, Expressions, Keywords, and Comments.</li>
      </ul>
      <p>
        This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":
      </p>
      <div style={{background: '#f0f0f0', padding: '15px', borderRadius: '5px', fontFamily: 'monospace'}}>
        document.getElementById("demo").innerHTML = "Hello Dolly.";
      </div>

      <h2 className={styles.subsectionTitle}>Semicolons ;</h2>
      <p>
        Semicolons separate JavaScript statements.
      </p>
      <p>
        Add a semicolon at the end of each executable statement:
      </p>
      <TryItYourselfEditor initialCode={stmtExample} language="javascript" />

      <div className={styles.navigationButtons}>
        <Link to="/course/javascript/output" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/javascript/syntax" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default JSStatements;