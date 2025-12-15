import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSharpComments = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>C# Comments</h1>
      <p className={styles.introParagraph}>
        Comments can be used to explain C# code, make it more readable, and prevent execution when testing alternative code. 
        C# supports single-line, multi-line, and XML documentation comments.
      </p>

      <h2 className={styles.subsectionTitle}>1. Single-line Comments</h2>
      <p>
        Single-line comments start with two forward slashes (<code>//</code>).
        Any text between <code>//</code> and the end of the line is ignored by C#.
      </p>
      <TryItYourselfEditor 
        initialCode={`using System;

namespace Demo {
  class Program {
    static void Main(string[] args) {
      // This is a comment
      Console.WriteLine("Hello World"); // This is a comment too
    }
  }
}`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>2. Multi-line Comments</h2>
      <p>
        Multi-line comments start with <code>/*</code> and ends with <code>*/</code>.
        Any text between them will be ignored by C#. This is useful for disabling blocks of code.
      </p>
      <TryItYourselfEditor 
        initialCode={`/* The code below will print the words Hello World
to the screen, and it is amazing */
Console.WriteLine("Hello World");`} 
        language="csharp" 
      />

      <h2 className={styles.subsectionTitle}>3. XML Documentation Comments (Unique to C#)</h2>
      <p>
        C# has a special feature called XML comments using <strong>three slashes</strong> (<code>///</code>). 
        These are used to create automatic documentation for your classes and methods. 
        When you hover over the method in Visual Studio, this text will appear in the tooltip.
      </p>
      
      <div className={styles.codeBlock}>
        <code>
          /// &lt;summary&gt;<br/>
          /// This method adds two numbers together.<br/>
          /// &lt;/summary&gt;<br/>
          /// &lt;param name="x"&gt;The first number&lt;/param&gt;<br/>
          /// &lt;param name="y"&gt;The second number&lt;/param&gt;<br/>
          /// &lt;returns&gt;The sum of x and y&lt;/returns&gt;<br/>
          public int Add(int x, int y) &#123;<br/>
          &nbsp;&nbsp;return x + y;<br/>
          &#125;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Task List Comments (TODO)</h2>
      <p>
        In IDEs like Visual Studio and Rider, if you start a comment with <code>// TODO:</code>, 
        it will add the line to a special "Task List" window so you remember to come back to it later.
      </p>
      <div className={styles.codeBlock}>
        <code>
          // TODO: Refactor this logic later, it's too slow.<br/>
          int x = 5000;
        </code>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/csharp/output"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/csharp/variables"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default CSharpComments;