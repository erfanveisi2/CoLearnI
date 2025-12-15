import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSharpVariables = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>C# Variables</h1>
      <p className={styles.introParagraph}>
        Variables are containers for storing data values. In C#, there are different types of variables (defined with different keywords), for example:
      </p>
      <ul className={styles.list}>
        <li><code>int</code> - stores integers (whole numbers), without decimals, such as 123 or -123</li>
        <li><code>double</code> - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
        <li><code>char</code> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
        <li><code>string</code> - stores text, such as "Hello World". String values are surrounded by double quotes</li>
        <li><code>bool</code> - stores values with two states: true or false</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Declaring (Creating) Variables</h2>
      <p>
        To create a variable, you must specify the type and assign it a value:
      </p>
      <div className={styles.codeBlock}>
        <code>type variableName = value;</code>
      </div>

      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      string name = "John";
      Console.WriteLine(name);

      int myNum = 15;
      Console.WriteLine(myNum);
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>Type Inference (The 'var' keyword)</h2>
      <p>
        You can often omit the explicit type and use the <code>var</code> keyword. 
        The compiler will figure out the type based on the value on the right side.
        <strong>Note:</strong> This is NOT like JavaScript's <code>var</code>. It is still strongly typed!
      </p>
      <div className={styles.codeBlock}>
        <code>
          var myNum = 5;       // Compiled as int<br/>
          var myString = "Hi"; // Compiled as string<br/>
          // myNum = "Hello";  // Error! Cannot change type later.
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Constants</h2>
      <p>
        If you don't want others (or yourself) to overwrite existing values, you can add the <code>const</code> keyword.
        This declares the variable as "constant", which means unchangeable and read-only.
      </p>
      <div className={styles.codeBlock} style={{borderLeft: '4px solid red'}}>
        <code>
          const int myNum = 15;<br/>
          myNum = 20; <span style={{color:'red'}}>// Error</span>
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Display Variables</h2>
      <p>The <code>WriteLine()</code> method is often used to display variable values to the console window.</p>
      <p>To combine both text and a variable, use the <code>+</code> character:</p>
      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      string name = "John";
      Console.WriteLine("Hello " + name);
      
      string firstName = "John ";
      string lastName = "Doe";
      string fullName = firstName + lastName;
      Console.WriteLine(fullName);
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>Multiple Variables</h2>
      <p>To declare more than one variable of the <strong>same type</strong>, use a comma-separated list:</p>
      <div className={styles.codeBlock}>
        <code>
          int x = 5, y = 6, z = 50;<br/>
          Console.WriteLine(x + y + z);
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Identifiers</h2>
      <p>All C# variables must be identified with unique names.</p>
      <ul className={styles.list}>
        <li>Names can contain letters, digits and the underscore character (_).</li>
        <li>Names must begin with a letter.</li>
        <li>Names are case-sensitive ("myVar" and "myvar" are different variables).</li>
        <li>Reserved words (like C# keywords, such as <code>int</code> or <code>double</code>) cannot be used as names.</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/csharp/comments"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/csharp/data-types"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default CSharpVariables;