import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const PythonVariables = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Python Variables</h1>
      <p className={styles.introParagraph}>
        Variables are containers for storing data values. In Python, variables are <strong>labels</strong> or <strong>references</strong> to objects in memory, not just empty boxes where you put data.
      </p>

      

      <h2 className={styles.subsectionTitle}>Creating Variables</h2>
      <p>
        Python has no command for declaring a variable. A variable is created the moment you first assign a value to it using the assignment operator <code>=</code>.
      </p>
      <TryItYourselfEditor 
        initialCode={`x = 5
y = "John"
print(x)
print(y)`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Variable Naming Rules (Strict)</h2>
      <p>A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume). Following these rules is mandatory:</p>
      <ul className={styles.list}>
        <li>Must start with a letter or the underscore character (<code>_</code>).</li>
        <li>Cannot start with a number.</li>
        <li>Can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ ).</li>
        <li>Case-sensitive (<code>age</code>, <code>Age</code> and <code>AGE</code> are three different variables).</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Naming Conventions (Best Practices)</h2>
      <p>To make variable names readable, developers use specific cases. In Python, <strong>Snake Case</strong> is the standard (PEP 8).</p>
      <table className={styles.table}>
        <thead><tr><th>Style</th><th>Example</th><th>Used For</th></tr></thead>
        <tbody>
          <tr><td><strong>Snake Case</strong></td><td><code>my_variable_name</code></td><td>Variables, Functions</td></tr>
          <tr><td><strong>Camel Case</strong></td><td><code>myVariableName</code></td><td>JavaScript/Java (Avoid in Python)</td></tr>
          <tr><td><strong>Pascal Case</strong></td><td><code>MyVariableName</code></td><td>Classes</td></tr>
          <tr><td><strong>Screaming Snake</strong></td><td><code>MY_VARIABLE</code></td><td>Constants</td></tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Many Values to Multiple Variables</h2>
      <p>Python allows you to assign values to multiple variables in one line. This is extremely powerful for swapping values without a temporary variable.</p>
      <TryItYourselfEditor 
        initialCode={`x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)

# Swapping values in one line!
a = 10
b = 20
a, b = b, a
print(f"a is now {a}, b is now {b}")`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Unpacking a Collection</h2>
      <p>
        If you have a collection of values in a list, tuple etc. Python allows you to extract the values into variables. This is called <strong>unpacking</strong>.
      </p>
      <TryItYourselfEditor 
        initialCode={`fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Global Variables</h2>
      <p>
        Variables that are created outside of a function (as in all of the examples above) are known as global variables.
        Global variables can be used by everyone, both inside of functions and outside.
      </p>
      
      <h2 className={styles.subsectionTitle}>The 'global' Keyword</h2>
      <p>
        Normally, when you create a variable inside a function, that variable is local, and can only be used inside that function.
        To create a global variable inside a function, or to modify a global variable inside a function, you can use the <code>global</code> keyword.
      </p>
      
      <TryItYourselfEditor 
        initialCode={`x = "awesome"

def myfunc():
  global x
  x = "fantastic"

myfunc()
print("Python is " + x)`} 
        language="python" 
      />

      <div className={styles.navigationButtons}>
        <Link to="/course/python/comments"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/python/data-types"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default PythonVariables;