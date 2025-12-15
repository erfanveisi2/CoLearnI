import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JavaVariables = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Java Variables</h1>
      <p className={styles.introParagraph}>
        Variables are containers for storing data values. In Java, every variable has a specific <strong>type</strong>, which determines the size and layout of the variable's memory; the range of values that can be stored within that memory; and the set of operations that can be applied to the variable.
      </p>

      [Image of Java variable memory allocation]

      <h2 className={styles.subsectionTitle}>Declaring Variables</h2>
      <p>
        To create a variable, you must specify the type and assign it a value:
      </p>
      <div className={styles.codeBlock}>
        <code>type variableName = value;</code>
      </div>
      <p>Where <code>type</code> is one of Java's types (such as <code>int</code> or <code>String</code>), and <code>variableName</code> is the name of the variable (such as <strong>x</strong> or <strong>name</strong>). The equal sign is used to assign values to the variable.</p>

      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    String name = "John";
    System.out.println(name);

    int myNum = 15;
    System.out.println(myNum);
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>Creating Constants (final)</h2>
      <p>
        If you don't want others (or yourself) to overwrite existing values, use the <code>final</code> keyword (this will declare the variable as "constant" or "read-only").
      </p>
      
      <div className={styles.codeBlock} style={{borderLeft: '4px solid red'}}>
        <code>
          final int myNum = 15;<br/>
          myNum = 20;  <span style={{color:'red'}}>// will generate an error: cannot assign a value to a final variable</span>
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Variable Types</h2>
      <p>In Java, there are three types of variables:</p>
      <ul className={styles.list}>
        <li><strong>Local Variables:</strong> Declared inside the body of a method. They can only be used within that method.</li>
        <li><strong>Instance Variables:</strong> Declared inside the class but outside any method. They belong to an instance (object) of the class.</li>
        <li><strong>Static Variables:</strong> Declared with the <code>static</code> keyword. They belong to the class itself, not any specific object.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Display Variables</h2>
      <p>The <code>println()</code> method is often used to display variables. To combine both text and a variable, use the <code>+</code> character:</p>
      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    String firstName = "John ";
    String lastName = "Doe";
    String fullName = firstName + lastName;
    System.out.println(fullName);
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>Variable Naming Rules</h2>
      <p>All Java variables must be identified with unique names called <strong>identifiers</strong>.</p>
      <ul>
        <li>Names can contain letters, digits, underscores, and dollar signs.</li>
        <li>Names must begin with a letter.</li>
        <li>Names are case-sensitive (<code>myVar</code> and <code>myvar</code> are different variables).</li>
        <li>Reserved words (like <code>int</code> or <code>boolean</code>) cannot be used as names.</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/java/comments"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/java/data-types"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default JavaVariables;