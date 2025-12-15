import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSharpTypeCasting = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>C# Type Casting</h1>
      <p className={styles.introParagraph}>
        Type casting is when you assign a value of one data type to another type.
        In C#, there are two types of casting: <strong>Implicit</strong> and <strong>Explicit</strong>.
      </p>

      <h2 className={styles.subsectionTitle}>1. Implicit Casting (Automatic)</h2>
      <p>
        Implicit casting is done automatically when passing a smaller size type to a larger size type.
        No data is lost.
      </p>
      <p><code>char</code> -&gt; <code>int</code> -&gt; <code>long</code> -&gt; <code>float</code> -&gt; <code>double</code></p>

      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      int myInt = 9;
      double myDouble = myInt;       // Automatic casting: int to double

      Console.WriteLine(myInt);      // Outputs 9
      Console.WriteLine(myDouble);   // Outputs 9
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>2. Explicit Casting (Manual)</h2>
      <p>
        Explicit casting must be done manually by placing the type in parentheses in front of the value.
        This is required when converting a larger type to a smaller size type (e.g. double to int).
        <strong>Warning:</strong> Data might be lost (decimals truncated).
      </p>

      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      double myDouble = 9.78;
      int myInt = (int) myDouble;    // Manual casting: double to int

      Console.WriteLine(myDouble);   // Outputs 9.78
      Console.WriteLine(myInt);      // Outputs 9
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>3. Type Conversion Methods</h2>
      <p>
        It is also possible to convert data types explicitly by using built-in methods, such as <code>Convert.ToBoolean</code>, <code>Convert.ToDouble</code>, <code>Convert.ToString</code>, and <code>Convert.ToInt32</code> (int).
      </p>
      <div className={styles.infoBox}>
        <p><strong>Note:</strong> C# uses <code>ToInt32</code> for standard integers and <code>ToInt64</code> for longs.</p>
      </div>

      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      int myInt = 10;
      double myDouble = 5.25;
      bool myBool = true;

      Console.WriteLine(Convert.ToString(myInt));    // convert int to string
      Console.WriteLine(Convert.ToDouble(myInt));    // convert int to double
      Console.WriteLine(Convert.ToInt32(myDouble));  // convert double to int
      Console.WriteLine(Convert.ToString(myBool));   // convert bool to string
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>Parsing Strings (Important!)</h2>
      <p>
        Often you will receive numbers as Strings (from user input or files). You cannot cast a String to an Int using <code>(int)</code>.
        You must use <code>Parse()</code> methods.
      </p>
      <div className={styles.codeBlock}>
        <code>
          string numStr = "123";<br/>
          int num = int.Parse(numStr); // 123
        </code>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/csharp/data-types"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/csharp/user-input"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default CSharpTypeCasting;