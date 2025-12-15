import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JavaComments = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Java Comments</h1>
      <p className={styles.introParagraph}>
        Comments can be used to explain Java code, and to make it more readable. It can also be used to prevent execution when testing alternative code.
        Java supports three types of comments.
      </p>

      <h2 className={styles.subsectionTitle}>1. Single-line Comments</h2>
      <p>
        Single-line comments start with two forward slashes (<code>//</code>).
        Any text between <code>//</code> and the end of the line is ignored by Java (will not be executed).
      </p>
      <TryItYourselfEditor 
        initialCode={`// This is a comment
System.out.println("Hello World"); // This is a comment too`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>2. Multi-line Comments</h2>
      <p>
        Multi-line comments start with <code>/*</code> and ends with <code>*/</code>.
        Any text between them will be ignored by Java.
      </p>
      <TryItYourselfEditor 
        initialCode={`/* The code below will print the words Hello World
to the screen, and it is amazing */
System.out.println("Hello World");`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>3. Documentation Comments (Javadoc)</h2>
      <p>
        This is a special type of comment used to generate documentation HTML files. 
        It starts with <code>/**</code> and ends with <code>*/</code>.
      </p>
      <p>
        It usually contains special tags like <code>@author</code>, <code>@param</code>, and <code>@return</code>.
      </p>
      <div className={styles.codeBlock}>
        <code>
          /**<br/>
          * Adds two numbers together.<br/>
          * @param x The first number<br/>
          * @param y The second number<br/>
          * @return The sum of x and y<br/>
          */<br/>
          public int add(int x, int y) &#123;<br/>
          &nbsp;&nbsp;return x + y;<br/>
          &#125;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Which One to Use?</h2>
      <div className={styles.infoBox}>
        <ul>
          <li>Use <code>//</code> for short notes to yourself or teammates inside methods.</li>
          <li>Use <code>/* */</code> for temporarily disabling large chunks of code during debugging.</li>
          <li>Use <code>/** */</code> above Classes and Methods to explain what they do to other developers using your code.</li>
        </ul>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/java/output"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/java/variables"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default JavaComments;