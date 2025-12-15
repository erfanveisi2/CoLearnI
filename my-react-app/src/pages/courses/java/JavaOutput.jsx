import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JavaOutput = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Java Output</h1>
      <p className={styles.introParagraph}>
        Displaying data to the user is the most basic functionality of any program. In Java, we rely on the <code>System</code> class.
      </p>

      <h2 className={styles.subsectionTitle}>Print Text</h2>
      <p>
        You learned about <code>println()</code> in the previous chapter. It prints text and then inserts a new line break.
      </p>
      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World!");
    System.out.println("I am learning Java.");
    System.out.println("It is awesome!");
  }
}`} 
        language="java" 
      />
      <p>When working with text, it must be wrapped inside double quotes <code>""</code>.</p>

      <h2 className={styles.subsectionTitle}>The print() Method</h2>
      <p>
        There is also a <code>print()</code> method, which is similar to <code>println()</code>.
        The only difference is that it does not insert a new line at the end of the output.
      </p>
      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    System.out.print("Hello World! ");
    System.out.print("I will print on the same line.");
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>Printing Numbers</h2>
      <p>
        You can also print numbers. However, unlike text, we don't put numbers inside double quotes.
      </p>
      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    System.out.println(3);
    System.out.println(358);
    System.out.println(50000);
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>Performing Math</h2>
      <p>
        You can also perform mathematical calculations inside the println method:
      </p>
      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    System.out.println(3 + 3);
    System.out.println(2 * 5);
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>Common Mistake: String Concatenation</h2>
      <p>
        Be careful when mixing strings and math. Java processes from left to right.
      </p>
      <div className={styles.codeBlock}>
        <code>
          System.out.println("Result: " + 5 + 5);<br/>
          // Output: Result: 55 (String concatenation)<br/><br/>
          System.out.println("Result: " + (5 + 5));<br/>
          // Output: Result: 10 (Math happens first due to parens)
        </code>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/java/syntax"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/java/comments"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default JavaOutput;