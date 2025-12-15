import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const PythonDataTypes = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Python Data Types</h1>
      <p className={styles.introParagraph}>
        In programming, data type is an important concept. Variables can store data of different types, and different types can do different things. 
        Python is <strong>dynamically typed</strong>, meaning you don't declare the type, but every value carries its type with it.
      </p>

      

      <h2 className={styles.subsectionTitle}>Built-in Data Types</h2>
      <p>Python has the following data types built-in by default, in these categories:</p>
      <table className={styles.table}>
        <thead><tr><th>Category</th><th>Types</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>Text Type</td><td><code>str</code></td><td>"Hello"</td></tr>
          <tr><td>Numeric Types</td><td><code>int</code>, <code>float</code>, <code>complex</code></td><td>1, 1.5, 1j</td></tr>
          <tr><td>Sequence Types</td><td><code>list</code>, <code>tuple</code>, <code>range</code></td><td>[1,2], (1,2)</td></tr>
          <tr><td>Mapping Type</td><td><code>dict</code></td><td>{"{key: val}"}</td></tr>
          <tr><td>Set Types</td><td><code>set</code>, <code>frozenset</code></td><td>{"{1, 2}"}</td></tr>
          <tr><td>Boolean Type</td><td><code>bool</code></td><td>True</td></tr>
          <tr><td>Binary Types</td><td><code>bytes</code>, <code>bytearray</code>, <code>memoryview</code></td><td>b"Hello"</td></tr>
          <tr><td>None Type</td><td><code>NoneType</code></td><td>None</td></tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Mutable vs Immutable</h2>
      <p>This is a crucial concept in Python that affects how variables behave:</p>
      <ul>
        <li><strong>Immutable (Cannot Change):</strong> int, float, bool, str, tuple. When you "change" these, Python actually creates a <em>new</em> object in memory and moves the variable label.</li>
        <li><strong>Mutable (Can Change):</strong> list, dict, set. You can modify these objects in place without creating a new object.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Getting the Data Type</h2>
      <p>You can get the data type of any object by using the <code>type()</code> function:</p>
      <TryItYourselfEditor 
        initialCode={`x = 5
print(type(x))
y = ["apple", "banana"]
print(type(y))`} 
        language="python" 
      />

      <h2 className={styles.subsectionTitle}>Setting the Data Type</h2>
      <p>In Python, the data type is set when you assign a value to a variable:</p>
      <div className={styles.codeBlock}>
        <code>
          x = "Hello World"  # str<br/>
          x = 20             # int<br/>
          x = 20.5           # float<br/>
          x = 1j             # complex<br/>
          x = ["apple", "banana"]  # list<br/>
          x = ("apple", "banana")  # tuple<br/>
          x = range(6)       # range<br/>
          x = {"{"}"name" : "John", "age" : 36{"}"}  # dict<br/>
          x = {"{"}"apple", "banana{"}"}  # set<br/>
          x = True           # bool
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Setting the Specific Data Type</h2>
      <p>
        If you wish to specify the data type, you can use the constructor functions. This is often used for <strong>casting</strong>.
      </p>
      <div className={styles.codeBlock}>
        <code>
          x = str("Hello World")<br/>
          x = int(20)<br/>
          x = float(20.5)<br/>
          x = complex(1j)<br/>
          x = list(("apple", "banana", "cherry"))<br/>
          x = tuple(("apple", "banana", "cherry"))<br/>
          x = range(6)<br/>
          x = dict(name="John", age=36)<br/>
          x = set(("apple", "banana", "cherry"))<br/>
          x = frozenset(("apple", "banana", "cherry"))<br/>
          x = bool(5)<br/>
          x = bytes(5)<br/>
          x = bytearray(5)<br/>
          x = memoryview(bytes(5))
        </code>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/python/variables"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/python/numbers"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default PythonDataTypes;