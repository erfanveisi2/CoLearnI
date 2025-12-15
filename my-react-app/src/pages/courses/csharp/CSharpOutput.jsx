import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSharpOutput = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>C# Output</h1>
      <p className={styles.introParagraph}>
        To output values or print text in C#, you can use the <code>WriteLine()</code> or <code>Write()</code> methods.
        These belong to the <code>Console</code> class.
      </p>

      <h2 className={styles.subsectionTitle}>WriteLine()</h2>
      <p>
        The most common method to output text. It prints the text and adds a new line at the end.
      </p>
      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      Console.WriteLine("Hello World!");
      Console.WriteLine("I am learning C#");
      Console.WriteLine("It is awesome!");
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>Write()</h2>
      <p>
        The <code>Write()</code> method is similar, but it does NOT add a new line. 
        The next output will appear on the same line.
      </p>
      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      Console.Write("Hello ");
      Console.Write("World! ");
      Console.Write("I am on the same line.");
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>Outputting Variables</h2>
      <p>
        You can combine text and variables using the <code>+</code> operator (concatenation).
      </p>
      <div className={styles.codeBlock}>
        <code>
          string name = "John";<br/>
          Console.WriteLine("Hello " + name);
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>String Interpolation ($)</h2>
      <p>
        The modern and preferred way to format strings in C# is using <strong>Interpolation</strong>. 
        You put a <code>$</code> before the quote, and use curly braces <code>{`{}`}</code> for variables.
      </p>
      
      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      string firstName = "John";
      string lastName = "Doe";
      int age = 25;

      // Old way (Concatenation)
      Console.WriteLine("Name: " + firstName + " " + lastName);

      // New way (Interpolation) - Much cleaner!
      Console.WriteLine($"Name: {firstName} {lastName}, Age: {age}");
    }
  }
}`} 
        language="csharp" 
      />

      <div className={styles.infoBox}>
        <p><strong>Note:</strong> You can even perform math inside the braces: <code>{`Console.WriteLine($"In 5 years: {age + 5}");`}</code></p>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/csharp/syntax"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/csharp/comments"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default CSharpOutput;