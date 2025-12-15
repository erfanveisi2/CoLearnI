import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSharpUserInput = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>C# User Input</h1>
      <p className={styles.introParagraph}>
        You have already learned that <code>Console.WriteLine()</code> is used to output (print) values.
        Now we will use <code>Console.ReadLine()</code> to get user input.
      </p>

      <h2 className={styles.subsectionTitle}>Get User Input</h2>
      <p>
        <code>Console.ReadLine()</code> returns a <code>string</code>. Therefore, you cannot assign it to another data type (like int) directly.
      </p>

      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      // Type your username and press enter
      Console.WriteLine("Enter username:");

      // Create a string variable and get user input from the keyboard
      string userName = Console.ReadLine();

      // Print the value of the variable (userName), which will display the input value
      Console.WriteLine("Username is: " + userName);
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>User Input and Numbers</h2>
      <p>
        The <code>Console.ReadLine()</code> method returns a <code>string</code>. Therefore, you cannot get information from another data type, such as <code>int</code>.
        The following program will cause an error:
      </p>
      <div className={styles.codeBlock} style={{borderLeft: '4px solid red'}}>
        <code>
          Console.WriteLine("Enter your age:");<br/>
          int age = Console.ReadLine(); <span style={{color:'red'}}>// Error: Cannot implicitly convert string to int</span><br/>
          Console.WriteLine("Your age is: " + age);
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Solution: Convert.ToInt32()</h2>
      <p>
        You can convert any type explicitly, by using one of the <code>Convert.To</code> methods (or <code>int.Parse()</code>):
      </p>

      <TryItYourselfEditor 
        initialCode={`using System;

namespace MyApplication {
  class Program {
    static void Main(string[] args) {
      Console.WriteLine("Enter your age:");
      
      // Read string
      string ageInput = Console.ReadLine();
      
      // Convert to int
      int age = Convert.ToInt32(ageInput);
      
      Console.WriteLine("Your age is: " + age);
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>Advanced: TryParse (Best Practice)</h2>
      <p>
        What if the user types "Hello" instead of a number? The program will crash.
        To handle this safely, we use <code>int.TryParse()</code>.
      </p>
      <div className={styles.codeBlock}>
        <code>
          Console.WriteLine("Enter age:");<br/>
          string input = Console.ReadLine();<br/>
          int age;<br/><br/>
          bool success = int.TryParse(input, out age);<br/><br/>
          if (success) &#123;<br/>
          &nbsp;&nbsp;Console.WriteLine("Age: " + age);<br/>
          &#125; else &#123;<br/>
          &nbsp;&nbsp;Console.WriteLine("Invalid number!");<br/>
          &#125;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Console.Read()</h2>
      <p>
        There is also <code>Console.Read()</code>, which reads only the first <strong>character</strong> key press (as an ASCII int), not the whole line. It is less commonly used for text input.
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/course/csharp/type-casting"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/csharp/operators"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default CSharpUserInput;