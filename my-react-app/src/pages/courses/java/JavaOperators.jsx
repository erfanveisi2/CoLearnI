import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JavaOperators = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Java Operators</h1>
      <p className={styles.introParagraph}>
        Operators are used to perform operations on variables and values. Java divides operators into the following groups: Arithmetic, Assignment, Comparison, Logical, and Bitwise.
      </p>

      <h2 className={styles.subsectionTitle}>Arithmetic Operators</h2>
      <p>Arithmetic operators are used to perform common mathematical operations.</p>
      <table className={styles.table}>
        <thead><tr><th>Operator</th><th>Name</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>+</code></td><td>Addition</td><td>Adds together two values</td></tr>
          <tr><td><code>-</code></td><td>Subtraction</td><td>Subtracts one value from another</td></tr>
          <tr><td><code>*</code></td><td>Multiplication</td><td>Multiplies two values</td></tr>
          <tr><td><code>/</code></td><td>Division</td><td>Divides one value by another</td></tr>
          <tr><td><code>%</code></td><td>Modulus</td><td>Returns the division remainder</td></tr>
          <tr><td><code>++</code></td><td>Increment</td><td>Increases the value of a variable by 1</td></tr>
          <tr><td><code>--</code></td><td>Decrement</td><td>Decreases the value of a variable by 1</td></tr>
        </tbody>
      </table>

      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    int x = 10;
    int y = 3;
    
    System.out.println(x + y);  // 13
    System.out.println(x % y);  // 1 (Remainder of 10/3)
    
    x++; // Increment
    System.out.println(x);      // 11
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>Assignment Operators</h2>
      <p>Assignment operators are used to assign values to variables. The addition assignment operator <code>+=</code> adds a value to a variable.</p>
      <div className={styles.codeBlock}>
        <code>
          int x = 10;<br/>
          x += 5; // Same as x = x + 5;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Comparison Operators</h2>
      <p>These are used to compare two values. The return value is always a <code>boolean</code> (true/false).</p>
      <ul className={styles.list}>
        <li><code>==</code> Equal to</li>
        <li><code>!=</code> Not equal</li>
        <li><code>&gt;</code> Greater than</li>
        <li><code>&lt;</code> Less than</li>
        <li><code>&gt;=</code> Greater than or equal to</li>
        <li><code>&lt;=</code> Less than or equal to</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Logical Operators</h2>
      <p>Used to determine the logic between variables or values.</p>
      <table className={styles.table}>
        <thead><tr><th>Operator</th><th>Name</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>&&</code></td><td>Logical and</td><td>Returns true if both statements are true</td></tr>
          <tr><td><code>||</code></td><td>Logical or</td><td>Returns true if one of the statements is true</td></tr>
          <tr><td><code>!</code></td><td>Logical not</td><td>Reverse the result, returns false if the result is true</td></tr>
        </tbody>
      </table>

      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    int x = 5;
    System.out.println(x > 3 && x < 10); // True, because 5 is greater than 3 AND 5 is less than 10
  }
}`} 
        language="java" 
      />

      <div className={styles.navigationButtons}>
        <Link to="/course/java/type-casting"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/java/strings"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default JavaOperators;