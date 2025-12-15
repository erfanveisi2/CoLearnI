import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JSSyntax = () => {
  const syntaxExample = `// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>JavaScript Syntax</h1>
      <p className={styles.introParagraph}>
        JavaScript syntax is the set of rules, how JavaScript programs are constructed.
      </p>

      <h2 className={styles.subsectionTitle}>JavaScript Values</h2>
      <p>
        The JavaScript syntax defines two types of values:
      </p>
      <ul>
        <li><strong>Fixed values</strong> (called Literals)</li>
        <li><strong>Variable values</strong> (called Variables)</li>
      </ul>

      <h2 className={styles.subsectionTitle}>JavaScript Literals</h2>
      <p>The two most important syntax rules for fixed values are:</p>
      <p>1. <strong>Numbers</strong> are written with or without decimals:</p>
      <div style={{background: '#f0f0f0', padding: '10px', fontFamily: 'monospace'}}>
        10.50<br/>1001
      </div>
      <p>2. <strong>Strings</strong> are text, written within double or single quotes:</p>
      <div style={{background: '#f0f0f0', padding: '10px', fontFamily: 'monospace'}}>
        "John Doe"<br/>'John Doe'
      </div>

      <h2 className={styles.subsectionTitle}>JavaScript Variables</h2>
      <p>
        In a programming language, variables are used to <strong>store</strong> data values.
      </p>
      <p>
        JavaScript uses the keywords <code>var</code>, <code>let</code> and <code>const</code> to declare variables.
      </p>
      <p>
        An <strong>equal sign</strong> is used to assign values to variables.
      </p>
      <TryItYourselfEditor initialCode={syntaxExample} language="javascript" />

      <div className={styles.navigationButtons}>
        <Link to="/course/javascript/statements" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/javascript/comments" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default JSSyntax;