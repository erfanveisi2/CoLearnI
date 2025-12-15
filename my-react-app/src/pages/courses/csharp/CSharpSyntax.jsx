import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSharpSyntax = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>C# Syntax</h1>
      <p className={styles.introParagraph}>
        C# syntax is highly expressive, yet simple and easy to learn. It is based on C++ and Java syntax.
        Let's dissect a standard C# program.
      </p>

      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      Console.WriteLine("Hello World");
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>Line-by-Line Analysis</h2>
      
      <h3>1. using System;</h3>
      <p>
        This means we can use classes from the <code>System</code> namespace. 
        For example, <code>Console</code> is a class inside <code>System</code>.
        If we didn't include this line, we would have to write <code>System.Console.WriteLine()</code> every time.
      </p>

      <h3>2. namespace</h3>
      <p>
        <code>namespace MyApplication</code> is used to organize your code. 
        It is a container for classes and other namespaces. 
        Think of it like a folder on your computer to keep files (classes) organized so names don't conflict.
      </p>

      <h3>3. class</h3>
      <p>
        <code>class Program</code> defines a container for data and methods. 
        Every line of code that runs in C# must be inside a class.
      </p>

      <h3>4. Main Method</h3>
      <p>
        <code>static void Main(string[] args)</code> is the entry point. 
        When you run a C# program, the CLR looks for this specific method to start execution.
      </p>
      <ul>
        <li><strong>static:</strong> Means it belongs to the class itself, not an object.</li>
        <li><strong>void:</strong> It returns nothing.</li>
        <li><strong>Main:</strong> Must be capitalized! (Unlike Java's <code>main</code>).</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Braces and Semicolons</h2>
      <p>
        <strong>Curly Braces <code>{`{}`}</code></strong> mark the beginning and the end of a block of code.
      </p>
      <p>
        <strong>Semicolons <code>;</code></strong> mark the end of a statement. C# is strict about this. Missing a semicolon is a syntax error.
      </p>

      <h2 className={styles.subsectionTitle}>Case Sensitivity</h2>
      <p>C# is case-sensitive.</p>
      <div className={styles.codeBlock}>
        <code>
          int myNum = 10;<br/>
          int MyNum = 20; // This is a different variable
        </code>
      </div>
      <p>
        <strong>Naming Convention:</strong> 
        In C#, we use <strong>PascalCase</strong> for Classes and Methods (<code>MyMethod</code>), 
        and <strong>camelCase</strong> for local variables (<code>myVariable</code>).
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/course/csharp/get-started"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/csharp/output"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default CSharpSyntax;