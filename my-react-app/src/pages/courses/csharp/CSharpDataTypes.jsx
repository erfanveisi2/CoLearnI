import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSharpDataTypes = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>C# Data Types</h1>
      <p className={styles.introParagraph}>
        As explained in the Variables chapter, a variable in C# must be a specified data type.
        Data types are divided into two groups: <strong>Value Types</strong> and <strong>Reference Types</strong>.
      </p>

      

      <h2 className={styles.subsectionTitle}>1. Value Types (Primitives)</h2>
      <p>
        These directly contain their data. They are stored on the <strong>Stack</strong>.
      </p>
      <table className={styles.table}>
        <thead><tr><th>Data Type</th><th>Size</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>int</code></td><td>4 bytes</td><td>Stores whole numbers from -2,147,483,648 to 2,147,483,647</td></tr>
          <tr><td><code>long</code></td><td>8 bytes</td><td>Stores huge numbers. End with 'L'.</td></tr>
          <tr><td><code>float</code></td><td>4 bytes</td><td>Stores fractional numbers. End with 'F'.</td></tr>
          <tr><td><code>double</code></td><td>8 bytes</td><td>Stores fractional numbers. End with 'D'.</td></tr>
          <tr><td><code>bool</code></td><td>1 bit</td><td>Stores true or false values</td></tr>
          <tr><td><code>char</code></td><td>2 bytes</td><td>Stores a single character/letter, surrounded by single quotes</td></tr>
        </tbody>
      </table>

      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      int myNum = 100000;
      long myLong = 15000000000L;
      float myFloat = 5.75F;
      double myDouble = 19.99D;
      bool isCSharpFun = true;
      char myGrade = 'B';

      Console.WriteLine(myNum);
      Console.WriteLine(myLong);
      Console.WriteLine(myFloat);
      Console.WriteLine(isCSharpFun);
      Console.WriteLine(myGrade);
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>Scientific Numbers</h2>
      <p>A floating point number can also be a scientific number with an "e" to indicate the power of 10:</p>
      <div className={styles.codeBlock}>
        <code>
          float f1 = 35e3F;<br/>
          double d1 = 12E4D;<br/>
          Console.WriteLine(f1);  // 35000<br/>
          Console.WriteLine(d1);  // 120000
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>2. Reference Types</h2>
      <p>
        These store a <em>reference</em> (memory address) to the actual data. The data is stored on the <strong>Heap</strong>.
        The most common reference type is <code>string</code>.
      </p>
      <p>Other reference types include Arrays, Classes, and Delegates.</p>

      <h2 className={styles.subsectionTitle}>Verbatim Strings (@)</h2>
      <p>
        In C#, the <code>@</code> symbol before a string literal creates a <strong>verbatim string</strong>.
        This disables escape characters (like <code>\n</code> or <code>\\</code>). It is incredibly useful for file paths.
      </p>
      <TryItYourselfEditor 
        initialCode={`using System;

namespace Demo {
  class Program {
    static void Main(string[] args) {
      // Normal String (Needs escaping)
      string path1 = "C:\\\\Windows\\\\System32";
      
      // Verbatim String (Cleaner)
      string path2 = @"C:\\Windows\\System32";
      
      Console.WriteLine(path1);
      Console.WriteLine(path2);
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>Nullable Types (?)</h2>
      <p>
        By default, value types (like <code>int</code> or <code>bool</code>) cannot be null.
        To allow them to hold a null value (useful for databases), add a <code>?</code> after the type.
      </p>
      <div className={styles.codeBlock}>
        <code>
          int? myNum = null; // Valid<br/>
          // int myNum2 = null; // Error
        </code>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/csharp/variables"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/csharp/type-casting"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default CSharpDataTypes;