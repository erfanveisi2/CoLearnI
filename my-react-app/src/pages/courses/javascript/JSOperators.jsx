import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';
import { FiBookOpen, FiShoppingCart } from 'react-icons/fi';

const JSOperators = () => {
  const operatorExample = `let x = 5;
let y = 2;
let z = x + y;
let w = x * y;

document.getElementById("demo").innerHTML = 
"z = " + z + "<br>" + "w = " + w;`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>JavaScript Operators</h1>
      <p className={styles.introParagraph}>
        Operators are used to perform operations on variables and values.
      </p>

      <h2 className={styles.subsectionTitle}>Arithmetic Operators</h2>
      <p>Arithmetic operators are used to perform arithmetic on numbers:</p>
      <ul className={styles.list}>
        <li><code>+</code> : Addition</li>
        <li><code>-</code> : Subtraction</li>
        <li><code>*</code> : Multiplication</li>
        <li><code>**</code> : Exponentiation (ES2016)</li>
        <li><code>/</code> : Division</li>
        <li><code>%</code> : Modulus (Remainder)</li>
        <li><code>++</code> : Increment</li>
        <li><code>--</code> : Decrement</li>
      </ul>
      
      <TryItYourselfEditor initialCode={operatorExample} language="javascript" />

      <h2 className={styles.subsectionTitle}>Assignment Operators</h2>
      <p>
        Assignment operators assign values to JavaScript variables. The most common one is the equal sign <code>=</code>.
      </p>
      <p>
        <code>let x = 10;</code> assigns the value 10 to x.
      </p>
      <p>
        The addition assignment operator <code>+=</code> adds a value to a variable:
      </p>
      <p><code>x += 5;</code> (Same as <code>x = x + 5;</code>)</p>

      <h2 className={styles.subsectionTitle}>String Operators</h2>
      <p>
        The <code>+</code> operator can also be used to add (concatenate) strings.
      </p>
      <div className={styles.codeBlock}>
        <code>
          let text1 = "John";<br/>
          let text2 = "Doe";<br/>
          let text3 = text1 + " " + text2;<br/>
          // Result: "John Doe"
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Comparison Operators</h2>
      <p>Comparison operators are used in logical statements to determine equality or difference between variables or values.</p>
      <ul className={styles.list}>
        <li><code>==</code> : equal to</li>
        <li><code>===</code> : equal value and equal type (Strict)</li>
        <li><code>!=</code> : not equal</li>
        <li><code>!==</code> : not equal value or not equal type</li>
        <li><code>&gt;</code> : greater than</li>
        <li><code>&lt;</code> : less than</li>
      </ul>

      <hr className={styles.separator} />

      {/* --- BOOK RECOMMENDATIONS --- */}
      <h2 className={styles.subsectionTitle}>📚 Recommended Reading</h2>
      <p>Congratulations on finishing the basics! JavaScript is deep. Here are the best resources to master it.</p>

      <div className={styles.resourcesGrid}>
        {/* Paid Books */}
        <div className={styles.resourceCard}>
          <h3><FiShoppingCart /> Best Paid Books</h3>
          <ul>
            <li>
              <strong><a href="https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/" target="_blank" rel="noopener noreferrer">JavaScript: The Definitive Guide</a></strong> by David Flanagan<br/>
              Known as the "Rhino Book," this is the comprehensive reference for serious developers.
            </li>
            <li>
              <strong><a href="https://www.oreilly.com/library/view/javascript-the-good/9780596517748/" target="_blank" rel="noopener noreferrer">JavaScript: The Good Parts</a></strong> by Douglas Crockford<br/>
              A classic that teaches you to avoid the bad parts of the language and focus on the powerful features.
            </li>
          </ul>
        </div>

        {/* Free Resources */}
        <div className={styles.resourceCard} style={{borderColor: '#28a745'}}>
          <h3><FiBookOpen /> Free Resources</h3>
          <ul>
            <li>
              <strong><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">JavaScript.info</a></strong><br/>
              The most modern, detailed, and easy-to-read tutorial available online. Highly recommended.
            </li>
            <li>
              <strong><a href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer">Eloquent JavaScript</a></strong><br/>
              A book that creates a deep understanding of programming logic. Free online.
            </li>
            <li>
              <strong><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></strong><br/>
              The official documentation maintained by Mozilla. Always your first stop for syntax.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/javascript/const" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/courses" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Finish Course 🏁</button>
        </Link>
      </div>
    </div>
  );
};

export default JSOperators;