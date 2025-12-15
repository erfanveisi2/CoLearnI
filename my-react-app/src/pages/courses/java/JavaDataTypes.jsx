import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JavaDataTypes = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Java Data Types</h1>
      <p className={styles.introParagraph}>
        Java is a <strong>strongly typed</strong> language. This means that every variable must have a declared type.
        Data types are divided into two groups: <strong>Primitive</strong> data types and <strong>Non-Primitive</strong> (Reference) data types.
      </p>

      <h2 className={styles.subsectionTitle}>1. Primitive Data Types</h2>
      <p>
        Primitive types are the building blocks of data manipulation. They contain simple values and are stored directly in the <strong>Stack Memory</strong> for speed.
      </p>
      <table className={styles.table}>
        <thead><tr><th>Type</th><th>Size</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>byte</code></td><td>1 byte</td><td>Stores whole numbers from -128 to 127</td></tr>
          <tr><td><code>short</code></td><td>2 bytes</td><td>Stores whole numbers from -32,768 to 32,767</td></tr>
          <tr><td><code>int</code></td><td>4 bytes</td><td>Stores whole numbers from -2,147,483,648 to 2,147,483,647</td></tr>
          <tr><td><code>long</code></td><td>8 bytes</td><td>Stores huge whole numbers. Ends with 'L'.</td></tr>
          <tr><td><code>float</code></td><td>4 bytes</td><td>Stores fractional numbers. Ends with 'f'.</td></tr>
          <tr><td><code>double</code></td><td>8 bytes</td><td>Stores fractional numbers. High precision. Ends with 'd'.</td></tr>
          <tr><td><code>boolean</code></td><td>1 bit</td><td>Stores <code>true</code> or <code>false</code> values.</td></tr>
          <tr><td><code>char</code></td><td>2 bytes</td><td>Stores a single character/letter or ASCII values.</td></tr>
        </tbody>
      </table>

      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    int myNum = 5;               // Integer (whole number)
    float myFloatNum = 5.99f;    // Floating point number
    char myLetter = 'D';         // Character
    boolean myBool = true;       // Boolean
    String myText = "Hello";     // String (Reference Type)
    
    System.out.println(myNum);
    System.out.println(myFloatNum);
    System.out.println(myLetter);
    System.out.println(myBool);
    System.out.println(myText);
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>2. Non-Primitive (Reference) Data Types</h2>
      <p>
        Non-primitive data types refer to objects. They are created by the programmer and are not defined by Java (except for <code>String</code>, <code>Arrays</code>, and <code>Classes</code>).
      </p>
      <p>
        <strong>Key Differences:</strong>
      </p>
      <ul>
        <li>Primitives are predefined in Java. Non-primitives are created by the programmer.</li>
        <li>Non-primitives can be used to call methods to perform certain operations.</li>
        <li>Primitives always have a value. Non-primitives can be <code>null</code>.</li>
        <li><strong>Memory:</strong> The variable is stored in the <strong>Stack</strong>, but it points (references) to an object stored in the <strong>Heap Memory</strong>.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Scientific Numbers</h2>
      <p>
        A floating point number can also be a scientific number with an "e" to indicate the power of 10:
      </p>
      <div className={styles.codeBlock}>
        <code>
          float f1 = 35e3f;<br/>
          double d1 = 12E4d;<br/>
          System.out.println(f1);  // 35000.0<br/>
          System.out.println(d1);  // 120000.0
        </code>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/java/variables"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/java/type-casting"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default JavaDataTypes;