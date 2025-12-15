import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JavaSyntax = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Java Syntax</h1>
      <p className={styles.introParagraph}>
        Java syntax is derived from C and C++. It is strict, verbose, and strongly typed. Every detail matters, from semicolons to curly braces.
      </p>

      <h2 className={styles.subsectionTitle}>The Anatomy of a Java Program</h2>
      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`} 
        language="java" 
      />

      <h3>1. The Class</h3>
      <p>
        <code>public class Main</code>
      </p>
      <p>
        Every line of code that runs in Java must be inside a class. 
        By convention, the name of the class should start with an uppercase letter (PascalCase).
      </p>

      <h3>2. The Main Method</h3>
      <p>
        <code>public static void main(String[] args)</code>
      </p>
      <p>This line is terrifying for beginners, but let's break it down:</p>
      <ul className={styles.list}>
        <li><strong>public:</strong> Access modifier. Anyone can access this method.</li>
        <li><strong>static:</strong> The method can be run without creating an instance (object) of the class Main.</li>
        <li><strong>void:</strong> The method does not return any value.</li>
        <li><strong>main:</strong> The name of the method. The JVM looks for this specific name to start the program.</li>
        <li><strong>String[] args:</strong> Accepts command line arguments as an array of strings.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>System.out.println()</h2>
      <p>
        <code>System</code> is a built-in Java class that contains useful members, such as <code>out</code>, which is short for "output". 
        The <code>println()</code> method, short for "print line", is used to print a value to the screen (or console).
      </p>

      <h2 className={styles.subsectionTitle}>Semicolons</h2>
      <p>
        Unlike JavaScript or Python, semicolons are <strong>mandatory</strong> in Java. 
        Every statement must end with <code>;</code>. If you forget one, the code will fail to compile.
      </p>
      <div className={styles.codeBlock} style={{borderLeft: '4px solid red'}}>
        <code>System.out.println("Error") <span style={{color:'red'}}>// Syntax Error</span></code>
      </div>

      <h2 className={styles.subsectionTitle}>Case Sensitivity</h2>
      <p>Java is case-sensitive. <code>MyClass</code> and <code>myclass</code> are different.</p>
      <ul className={styles.list}>
        <li><strong>Classes:</strong> Always start with Uppercase (e.g., <code>String</code>, <code>System</code>, <code>MyClass</code>).</li>
        <li><strong>Methods/Variables:</strong> Always start with Lowercase (e.g., <code>println</code>, <code>main</code>, <code>myVariable</code>).</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/java/get-started"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/java/output"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default JavaSyntax;