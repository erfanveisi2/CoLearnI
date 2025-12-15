import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JavaGetStarted = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Java Getting Started</h1>
      <p className={styles.introParagraph}>
        Unlike Python or JavaScript, Java requires a bit of setup. You need to install the JDK (Java Development Kit) to compile code.
      </p>

      <h2 className={styles.subsectionTitle}>1. Install the JDK</h2>
      <p>
        Go to the Oracle website or adopt OpenJDK and download the latest JDK for your operating system.
      </p>
      <div className={styles.codeBlock}>
        <code>
          # Check if installed<br/>
          java -version<br/>
          javac -version
        </code>
      </div>
      <p>If you see version numbers, you are ready. If not, you may need to add Java to your System Environment Variables (PATH).</p>

      <h2 className={styles.subsectionTitle}>2. Choose an IDE</h2>
      <p>While you can use Notepad, Java is very verbose. An IDE helps manage the boilerplate code.</p>
      <ul>
        <li><strong>IntelliJ IDEA:</strong> The industry standard. Highly intelligent code completion.</li>
        <li><strong>Eclipse:</strong> The classic, open-source choice. Historically very popular.</li>
        <li><strong>VS Code:</strong> Lightweight, but requires the "Extension Pack for Java" to work well.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>3. Writing Your First Program</h2>
      <p>
        In Java, <strong>everything</strong> is an object. This means every line of code you write must be inside a <strong>Class</strong>.
      </p>
      <p>Create a file named <code>Main.java</code>.</p>
      <div className={styles.infoBox}>
        <p><strong>Crucial Rule:</strong> The filename <strong>must</strong> match the class name exactly. If the class is <code>Main</code>, the file must be <code>Main.java</code>.</p>
      </div>

      <TryItYourselfEditor 
        initialCode={`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`} 
        language="java" 
      />

      <h2 className={styles.subsectionTitle}>4. Running the Code (CLI)</h2>
      <p>Java involves a two-step process: Compilation and Execution.</p>
      
      <h3>Step A: Compilation</h3>
      <p>Use the java compiler (<code>javac</code>) to translate your code into bytecode.</p>
      <div className={styles.codeBlock}>
        <code>javac Main.java</code>
      </div>
      <p>If successful, this creates a new file called <code>Main.class</code> in your folder.</p>

      <h3>Step B: Execution</h3>
      <p>Use the <code>java</code> command to run the bytecode on the JVM.</p>
      <div className={styles.codeBlock}>
        <code>java Main</code>
      </div>
      <p><strong>Note:</strong> Do not add .class or .java extension in the second command.</p>

      <div className={styles.navigationButtons}>
        <Link to="/course/java/introduction"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/java/syntax"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default JavaGetStarted;