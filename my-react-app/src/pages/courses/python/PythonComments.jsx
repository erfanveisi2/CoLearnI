import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const PythonComments = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Python Comments</h1>
      <p className={styles.introParagraph}>
        Comments are lines of text in your code that are ignored by the Python interpreter during execution. 
        They are critical for maintaining code, explaining complex logic, and collaborating with other developers.
      </p>

      <h2 className={styles.subsectionTitle}>Single Line Comments</h2>
      <p>
        Comments start with a hash symbol (<code>#</code>). Python will ignore everything from the <code>#</code> to the end of the line.
      </p>
      <TryItYourselfEditor 
        initialCode={`# This is a comment before code
print("Hello, World!") 

print("Cheers!") # This is an inline comment`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Why Use Comments?</h2>
      <ul>
        <li><strong>Explanation:</strong> Explain <em>why</em> you did something, not just <em>what</em> you did.</li>
        <li><strong>Readability:</strong> Break up large chunks of code with headers.</li>
        <li><strong>Debugging:</strong> Prevent code execution without deleting it.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Preventing Execution</h2>
      <p>
        Comments are often used to "comment out" code that is buggy or currently unused.
      </p>
      <div className={styles.codeBlock}>
        <code>
          # print("This line has a bug")<br/>
          print("This line works fine")
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Multi-Line Comments</h2>
      <p>
        Python does not have a specific syntax for multi-line comments (like <code>/* ... */</code> in Java or C). 
        To create a multi-line comment, you can insert a <code>#</code> for each line:
      </p>
      <div className={styles.codeBlock}>
        <code>
          # This is a comment<br/>
          # written in<br/>
          # more than just one line<br/>
          print("Hello, World!")
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Docstrings (Documentation Strings)</h2>
      <p>
        Python has a special feature called "Docstrings". If a string literal is the very first thing in a function, class, or module, it is treated as documentation.
        Docstrings are written using triple quotes (<code>"""</code>).
      </p>
      <p>
        Unlike regular comments, Docstrings are <strong>retained at runtime</strong> and can be accessed programmatically using the <code>__doc__</code> attribute.
      </p>

      <TryItYourselfEditor 
        initialCode={`def add(x, y):
    """
    This function adds two numbers.
    
    Args:
        x (int): The first number
        y (int): The second number
    
    Returns:
        int: The sum of x and y
    """
    return x + y

# You can actually print the documentation!
print(add.__doc__)`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>The Shebang Line</h2>
      <p>In Linux/Unix/macOS environments, you might see a comment at the very top of a file starting with <code>#!</code>.</p>
      <div className={styles.codeBlock}><code>#!/usr/bin/env python3</code></div>
      <p>
        This is called a "shebang" or "hashbang". It tells the operating system which interpreter to use to run the file if you execute the script directly like <code>./script.py</code>.
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/course/python/syntax"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/python/variables"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default PythonComments;