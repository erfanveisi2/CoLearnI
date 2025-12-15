import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const PythonCasting = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Python Casting</h1>
      <p className={styles.introParagraph}>
        There may be times when you want to specify a type on to a variable. This can be done with casting. Python is an object-orientated language, and as such it uses classes to define data types, including its primitive types.
      </p>

      <h2 className={styles.subsectionTitle}>Explicit vs Implicit Conversion</h2>
      <ul>
        <li><strong>Implicit:</strong> Python handles it automatically (e.g., adding an <code>int</code> to a <code>float</code> results in a <code>float</code>).</li>
        <li><strong>Explicit:</strong> You force the conversion using constructor functions (Casting).</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Integers: int()</h2>
      <p>
        The <code>int()</code> function constructs an integer from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number).
      </p>
      
      <h3>Truncation Warning</h3>
      <p>When casting a float to an int, Python simply <strong>chops off</strong> the decimal part. It does not round.</p>
      
      <TryItYourselfEditor 
        initialCode={`x = int(1)     # 1
y = int(2.8)   # 2 (NOT 3)
z = int("3")   # 3

print(x)
print(y)
print(z)`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Floats: float()</h2>
      <p>
        The <code>float()</code> function constructs a float number from an integer literal, a float literal, or a string literal.
      </p>
      <TryItYourselfEditor 
        initialCode={`x = float(1)     # 1.0
y = float(2.8)   # 2.8
z = float("3")   # 3.0
w = float("4.2") # 4.2

print(x)
print(y)
print(z)
print(w)`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Strings: str()</h2>
      <p>
        Converting values to strings is extremely common when you want to output messages to the user.
        Python does <strong>not</strong> allow you to add numbers and strings together using <code>+</code>. You must cast first.
      </p>
      
      <div className={styles.codeBlock} style={{borderLeft: '4px solid red'}}>
        <code>
          age = 30<br/>
          print("I am " + age) <span style={{color:'red'}}># TypeError!</span>
        </code>
      </div>

      <div className={styles.codeBlock} style={{borderLeft: '4px solid green'}}>
        <code>
          age = 30<br/>
          print("I am " + str(age)) <span style={{color:'green'}}># Correct</span>
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Practical Example: User Input</h2>
      <p>
        In Python, the <code>input()</code> function <strong>always returns a string</strong>. If you want to do math with user input, you MUST cast it.
      </p>
      <div className={styles.codeBlock}>
        <code>
          num = input("Enter a number: ") # User types 5<br/>
          # print(num + 10)  # Error! "5" + 10<br/><br/>
          print(int(num) + 10) # Correct! 15
        </code>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/python/numbers"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/python/strings"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default PythonCasting;