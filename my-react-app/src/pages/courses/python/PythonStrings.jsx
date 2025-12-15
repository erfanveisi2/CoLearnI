import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const PythonStrings = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Python Strings</h1>
      <p className={styles.introParagraph}>
        Strings in Python are surrounded by either single quotation marks or double quotation marks. <code>'hello'</code> is the same as <code>"hello"</code>. Python treats single characters simply as strings of length 1.
      </p>

      [Image of Python string indexing]

      <h2 className={styles.subsectionTitle}>Strings are Arrays</h2>
      <p>
        Like many other programming languages, strings in Python are arrays of bytes representing Unicode characters. However, Python does not have a character data type.
      </p>
      <TryItYourselfEditor 
        initialCode={`a = "Hello, World!"
print(a[1])  # 'e'
print(len(a)) # 13`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Slicing Strings (Superpower)</h2>
      <p>
        You can return a range of characters by using the slice syntax.
        Syntax: <code>string[start:end:step]</code>
      </p>
      <ul className={styles.list}>
        <li><strong>start:</strong> Starting index (inclusive).</li>
        <li><strong>end:</strong> Ending index (exclusive).</li>
        <li><strong>step:</strong> How many characters to jump (optional).</li>
      </ul>
      
      <TryItYourselfEditor 
        initialCode={`b = "Hello, World!"
print(b[2:5])   # llo
print(b[:5])    # Hello (Slice from start)
print(b[2:])    # llo, World! (Slice to end)
print(b[-5:-2]) # orl (Negative indexing)
print(b[::-1])  # !dlroW ,olleH (Reverse String)`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Immutability</h2>
      <p>
        Strings are <strong>immutable</strong>. You cannot change a character in an existing string. You must create a new one.
      </p>
      <div className={styles.codeBlock} style={{borderLeft: '4px solid red'}}>
        <code>
          a = "Hello"<br/>
          a[0] = "J" <span style={{color:'red'}}># TypeError!</span>
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Essential Built-in Methods</h2>
      <p>Python has a set of built-in methods that you can use on strings.</p>
      <ul className={styles.list}>
        <li><code>upper()</code> / <code>lower()</code> - Case conversion</li>
        <li><code>strip()</code> - Removes whitespace from beginning/end</li>
        <li><code>replace(old, new)</code> - Replaces a string with another string</li>
        <li><code>split(separator)</code> - Splits string into a list</li>
      </ul>

      <TryItYourselfEditor 
        initialCode={`a = " Hello, World! "
print(a.strip()) 
print(a.replace("H", "J"))
print(a.split(",")) # [' Hello', ' World! ']`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>String Formatting (f-Strings)</h2>
      <p>
        As of Python 3.6, f-strings are the preferred way to format strings. They are faster and more readable than the old <code>.format()</code> method or <code>%</code> operator.
      </p>
      
      <TryItYourselfEditor 
        initialCode={`name = "John"
age = 36
price = 49.95

# Basic f-string
print(f"My name is {name} and I am {age}")

# Math inside f-string
print(f"Next year I will be {age + 1}")

# Formatting numbers (2 decimal places)
print(f"The price is {price:.2f} dollars")`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Escape Characters</h2>
      <p>To insert characters that are illegal in a string, use an escape character <code>\</code>.</p>
      <table className={styles.table}>
        <thead><tr><th>Code</th><th>Result</th></tr></thead>
        <tbody>
          <tr><td><code>\'</code></td><td>Single Quote</td></tr>
          <tr><td><code>\\</code></td><td>Backslash</td></tr>
          <tr><td><code>\n</code></td><td>New Line</td></tr>
          <tr><td><code>\t</code></td><td>Tab</td></tr>
        </tbody>
      </table>

      <div className={styles.navigationButtons}>
        <Link to="/course/python/casting"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/python/booleans"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default PythonStrings;