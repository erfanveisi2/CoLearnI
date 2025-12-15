import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const PythonSyntax = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Python Syntax</h1>
      <p className={styles.introParagraph}>
        Python syntax is the set of rules that defines how a Python program will be written and interpreted. 
        Unlike C++ or Java which use braces <code>{}</code> to define blocks of code, Python uses <strong>whitespace</strong>.
      </p>

      

      <h2 className={styles.subsectionTitle}>Indentation: The Golden Rule</h2>
      <p>
        Indentation refers to the spaces at the beginning of a code line. 
        In most other programming languages, indentation is used only for readability. 
        In Python, <strong>indentation is mandatory</strong>.
      </p>
      <p>
        Python uses indentation to indicate a <strong>block of code</strong> (scope). 
        A block starts with a colon (<code>:</code>) and all indented lines following it are part of that block.
      </p>

      <TryItYourselfEditor 
        initialCode={`if 5 > 2:
    print("Five is greater than two!")
    print("This line is also inside the if-block")
    
print("This line is OUTSIDE the block, it runs regardless")`} 
        language="python" 
      />

      <div className={styles.infoBox}>
        <p><strong>Syntax Error:</strong> Python will give you an <code>IndentationError</code> if you skip the indentation:</p>
      </div>
      
      <div className={styles.codeBlock} style={{borderLeft: '4px solid red'}}>
        <code>
        if 5 {'>'} 2:<br/>
        print("Five is greater than two!") <span style={{color:'red'}}># Syntax Error!</span>
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Tabs vs Spaces (PEP 8)</h2>
      <p>
        The official Python Style Guide (PEP 8) recommends using <strong>4 spaces</strong> per indentation level.
      </p>
      <ul>
        <li>Do <strong>not</strong> use tabs.</li>
        <li>Do <strong>not</strong> mix tabs and spaces (Python 3 will raise an error).</li>
        <li>Most modern IDEs (VS Code, PyCharm) automatically convert the "Tab" key to 4 spaces for you.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Python Variables</h2>
      <p>In Python, variables are created when you assign a value to them. Python has no command for declaring a variable type (like <code>int x;</code> in C).</p>
      <TryItYourselfEditor 
        initialCode={`x = 5
y = "Hello, World!"

# Python is dynamically typed
print(x)
print(y)`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Multi-Line Statements</h2>
      <p>
        Statements in Python typically end with a new line. Python does not require semicolons <code>;</code> at the end of lines.
      </p>
      <p>If a statement is too long, you can use the backslash <code>\</code> line continuation character:</p>
      <div className={styles.codeBlock}>
        <code>
          total_sum = item_one + \<br/>
                      item_two + \<br/>
                      item_three
        </code>
      </div>
      <p>However, the preferred way (Pythonic way) is to use parentheses <code>()</code>:</p>
      <div className={styles.codeBlock}>
        <code>
          total_sum = (<br/>
              item_one +<br/>
              item_two +<br/>
              item_three<br/>
          )
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Python Identifiers</h2>
      <p>A Python identifier is a name used to identify a variable, function, class, module or other object. Rules:</p>
      <ul className={styles.list}>
        <li>Must start with a letter (A-Z or a-z) or an underscore (<code>_</code>).</li>
        <li>Can be followed by zero or more letters, underscores and digits (0-9).</li>
        <li>Case sensitive: <code>Manpower</code> and <code>manpower</code> are two different identifiers.</li>
        <li>Cannot contain punctuation characters such as @, $, and %.</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/python/get-started"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/python/comments"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default PythonSyntax;