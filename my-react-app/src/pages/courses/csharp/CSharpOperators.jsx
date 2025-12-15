import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';
import { FiBookOpen, FiShoppingCart } from 'react-icons/fi';

const CSharpOperators = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>C# Operators</h1>
      <p className={styles.introParagraph}>
        Operators are used to perform operations on variables and values. C# divides operators into groups: Arithmetic, Assignment, Comparison, Logical, and Bitwise.
      </p>

      <h2 className={styles.subsectionTitle}>1. Arithmetic Operators</h2>
      <p>Common mathematical operations.</p>
      <table className={styles.table}>
        <thead><tr><th>Operator</th><th>Name</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><code>+</code></td><td>Addition</td><td><code>x + y</code></td></tr>
          <tr><td><code>-</code></td><td>Subtraction</td><td><code>x - y</code></td></tr>
          <tr><td><code>*</code></td><td>Multiplication</td><td><code>x * y</code></td></tr>
          <tr><td><code>/</code></td><td>Division</td><td><code>x / y</code></td></tr>
          <tr><td><code>%</code></td><td>Modulus (Remainder)</td><td><code>x % y</code></td></tr>
          <tr><td><code>++</code></td><td>Increment</td><td><code>x++</code></td></tr>
          <tr><td><code>--</code></td><td>Decrement</td><td><code>x--</code></td></tr>
        </tbody>
      </table>

      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      int x = 10;
      int y = 3;
      
      // Integer division drops decimal
      Console.WriteLine(x / y); // 3 
      
      // Modulus
      Console.WriteLine(x % y); // 1
      
      // Increment
      x++;
      Console.WriteLine(x); // 11
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>2. Logical Operators</h2>
      <p>Used to determine the logic between variables or values.</p>
      <ul className={styles.list}>
        <li><code>&&</code> <strong>Logical AND:</strong> Returns true if both statements are true.</li>
        <li><code>||</code> <strong>Logical OR:</strong> Returns true if one of the statements is true.</li>
        <li><code>!</code> <strong>Logical NOT:</strong> Reverse the result, returns false if the result is true.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>3. The Math Class</h2>
      <p>
        The C# Math class has many methods that allows you to perform mathematical tasks on numbers.
      </p>
      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      Console.WriteLine(Math.Max(5, 10));  // 10
      Console.WriteLine(Math.Min(5, 10));  // 5
      Console.WriteLine(Math.Sqrt(64));    // 8
      Console.WriteLine(Math.Abs(-4.7));   // 4.7
      Console.WriteLine(Math.Round(9.99)); // 10
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>4. Special Operators</h2>
      
      <h3>Ternary Operator (? :)</h3>
      <p>A shorthand for <code>if...else</code> statements.</p>
      <div className={styles.codeBlock}>
        <code>
          int time = 20;<br/>
          string result = (time &lt; 18) ? "Good day" : "Good evening";<br/>
          Console.WriteLine(result);
        </code>
      </div>

      <h3>Null-Coalescing Operator (??)</h3>
      <p>Returns the value of its left-hand operand if it isn't <code>null</code>; otherwise, it evaluates the right-hand operand.</p>
      <div className={styles.codeBlock}>
        <code>
          string name = null;<br/>
          // If name is null, use "Guest"
          string displayName = name ?? "Guest"; 
        </code>
      </div>

      <hr className={styles.separator} />

      {/* --- BOOK RECOMMENDATIONS --- */}
      <h2 className={styles.subsectionTitle}>📚 Recommended Reading</h2>
      <p>C# is powerful and vast. To master it, check out these top-tier resources.</p>

      <div className={styles.resourcesGrid}>
        {/* Paid Books */}
        <div className={styles.resourceCard}>
          <h3><FiShoppingCart /> Best Paid Books</h3>
          <ul>
            <li>
              <strong><a href="https://www.oreilly.com/library/view/c-12-in/9781098147433/" target="_blank" rel="noopener noreferrer">C# 12 in a Nutshell</a></strong> by Joseph Albahari<br/>
              The definitive reference. If you only buy one C# book, make it this one.
            </li>
            <li>
              <strong><a href="https://www.manning.com/books/c-sharp-in-depth-fourth-edition" target="_blank" rel="noopener noreferrer">C# in Depth</a></strong> by Jon Skeet<br/>
              For developers who want to understand the "why" and "how" behind C# features.
            </li>
          </ul>
        </div>

        {/* Free Resources */}
        <div className={styles.resourceCard} style={{borderColor: '#28a745'}}>
          <h3><FiBookOpen /> Free Resources</h3>
          <ul>
            <li>
              <strong><a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">Microsoft Learn (Official)</a></strong><br/>
              Microsoft's documentation is widely considered the gold standard in the industry.
            </li>
            <li>
              <strong><a href="https://www.tutorialsteacher.com/csharp" target="_blank" rel="noopener noreferrer">TutorialsTeacher</a></strong><br/>
              Excellent step-by-step guides for C# and .NET concepts.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/csharp/user-input"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/courses"><button className={styles.nextButton}>Finish Course 🏁</button></Link>
      </div>
    </div>
  );
};

export default CSharpOperators;