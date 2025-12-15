import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';
import { FiBookOpen, FiShoppingCart } from 'react-icons/fi';

const PythonBooleans = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Python Booleans</h1>
      <p className={styles.introParagraph}>
        Booleans represent one of two values: <code>True</code> or <code>False</code>. They are named after George Boole, who defined an algebraic system of logic in the mid-19th century.
      </p>

      

[Image of Python boolean logic diagram]


      <h2 className={styles.subsectionTitle}>Boolean Values</h2>
      <p>
        In programming you often need to know if an expression is True or False.
        You can evaluate any expression in Python, and get one of two answers, <code>True</code> or <code>False</code>.
        <br/>
        <strong>Note:</strong> In Python, <code>True</code> and <code>False</code> must be capitalized.
      </p>

      <TryItYourselfEditor 
        initialCode={`print(10 > 9)   # True
print(10 == 9)  # False
print(10 < 9)   # False`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>The bool() Function</h2>
      <p>The <code>bool()</code> function allows you to evaluate any value, and give you True or False in return.</p>

      <h2 className={styles.subsectionTitle}>Truthy vs Falsy (Important!)</h2>
      <p>Every value in Python evaluates to True or False when used in a condition (like an <code>if</code> statement). This is called "Truthiness".</p>
      
      <h3>Most Values are True</h3>
      <p>Almost any value is evaluated to <code>True</code> if it has some sort of content.</p>
      <ul className={styles.list}>
        <li>Any string is True, except empty strings.</li>
        <li>Any number is True, except 0.</li>
        <li>Any list, tuple, set, and dictionary are True, except empty ones.</li>
      </ul>

      <h3>Some Values are False</h3>
      <p>There are not many values that evaluate to <code>False</code>, but it is critical to know them:</p>
      <div className={styles.codeBlock}>
        <code>
          bool(False)<br/>
          bool(None)<br/>
          bool(0)<br/>
          bool("")<br/>
          bool(())<br/>
          bool([])<br/>
          bool({})
        </code>
      </div>

      <TryItYourselfEditor 
        initialCode={`# Check if list is empty
my_list = []

if my_list:
    print("List has items")
else:
    print("List is empty (Falsy)")`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Short-Circuit Evaluation</h2>
      <p>Python's logical operators <code>and</code> and <code>or</code> stop evaluating as soon as the result is determined.</p>
      <ul>
        <li><code>X and Y</code>: If X is False, returns X immediately. Else returns Y.</li>
        <li><code>X or Y</code>: If X is True, returns X immediately. Else returns Y.</li>
      </ul>

      <TryItYourselfEditor 
        initialCode={`# 'or' returns the first truthy value
name = ""
default = "Guest"
user = name or default
print(user) # Guest`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Using `isinstance()`</h2>
      <p>Python has many built-in functions that return a boolean value, like the <code>isinstance()</code> function, which can be used to determine if an object is of a certain data type:</p>
      <TryItYourselfEditor 
        initialCode={`x = 200
print(isinstance(x, int)) # True`} 
        language="python" 
      />

      <hr className={styles.separator} />

      {/* --- BOOK RECOMMENDATIONS --- */}
      <h2 className={styles.subsectionTitle}>📚 Recommended Reading</h2>
      <p>You've completed the Python basics! Here are the best resources to master Python.</p>

      <div className={styles.resourcesGrid}>
        {/* Paid Books */}
        <div className={styles.resourceCard}>
          <h3><FiShoppingCart /> Best Paid Books</h3>
          <ul>
            <li>
              <strong><a href="https://ehmatthes.github.io/pcc/" target="_blank" rel="noopener noreferrer">Python Crash Course</a></strong> by Eric Matthes<br/>
              The world's best-selling guide. It covers basics and projects like games and data visualization.
            </li>
            <li>
              <strong><a href="https://shop.oreilly.com/product/0636920032519.do" target="_blank" rel="noopener noreferrer">Fluent Python</a></strong> by Luciano Ramalho<br/>
              For developers who know the basics but want to write idiomatic, "Pythonic" code.
            </li>
          </ul>
        </div>

        {/* Free Resources */}
        <div className={styles.resourceCard} style={{borderColor: '#28a745'}}>
          <h3><FiBookOpen /> Free Resources</h3>
          <ul>
            <li>
              <strong><a href="https://automatetheboringstuff.com/" target="_blank" rel="noopener noreferrer">Automate the Boring Stuff</a></strong><br/>
              Highly practical guide for total beginners to build useful scripts.
            </li>
            <li>
              <strong><a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Official Python Docs</a></strong><br/>
              The primary source of truth. The "Tutorial" section is excellent.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/python/strings" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        {/* Back to main catalog */}
        <Link to="/courses" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Finish Course 🏁</button>
        </Link>
      </div>
    </div>
  );
};

export default PythonBooleans;