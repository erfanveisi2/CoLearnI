import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const PythonGetStarted = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Getting Started with Python</h1>
      <p className={styles.introParagraph}>
        Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.
      </p>

      <h2 className={styles.subsectionTitle}>The History of Python</h2>
      <p>
        Python was conceived in the late 1980s by Guido van Rossum at CWI in the Netherlands as a successor to the ABC programming language. 
        It was named after the BBC TV show <em>"Monty Python's Flying Circus"</em>, not the snake.
      </p>
      <ul>
        <li><strong>1991:</strong> Python 0.9.0 released (classes with inheritance, exception handling).</li>
        <li><strong>2000:</strong> Python 2.0 released (list comprehensions, garbage collection).</li>
        <li><strong>2008:</strong> Python 3.0 released (major revision, not backward-compatible).</li>
        <li><strong>2020:</strong> Python 2 reached End-of-Life. We strictly use Python 3.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Why Python is the #1 Language</h2>
      <p>Python consistently ranks as the most popular language for several reasons:</p>
      <div className={styles.infoBox}>
        <ul className={styles.list}>
          <li><strong>Readability:</strong> Python reads like English. This lowers the barrier to entry and makes maintenance easier.</li>
          <li><strong>Versatility:</strong> Used in Web (Django/Flask), Data Science (Pandas), AI (PyTorch), Automation, and Hacking.</li>
          <li><strong>Cross-Platform:</strong> Run the same code on Windows, macOS, Linux, and Raspberry Pi.</li>
          <li><strong>Huge Ecosystem:</strong> The Python Package Index (PyPI) hosts over 350,000 packages.</li>
        </ul>
      </div>

      <h2 className={styles.subsectionTitle}>Python Implementations</h2>
      <p>When people say "Python", they usually mean <strong>CPython</strong>, the reference implementation written in C. However, there are others:</p>
      <table className={styles.table}>
        <thead><tr><th>Name</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><strong>CPython</strong></td><td>The standard version. Best compatibility with C extensions.</td></tr>
          <tr><td><strong>PyPy</strong></td><td>Uses a Just-In-Time (JIT) compiler. Often faster than CPython.</td></tr>
          <tr><td><strong>Jython</strong></td><td>Python running on the Java Virtual Machine (JVM).</td></tr>
          <tr><td><strong>IronPython</strong></td><td>Python running on the .NET framework.</td></tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Checking Your Environment</h2>
      <p>To check if Python is installed, open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and type:</p>
      <div className={styles.codeBlock}>
        <code>
          # Windows<br/>
          {'C:\>'} python --version<br/><br/>
          # Mac / Linux<br/>
          $ python3 --version
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Mode 1: The REPL (Interactive)</h2>
      <p>
        Python can be run in "Interactive Mode". This is called the REPL (Read-Eval-Print Loop). 
        It is perfect for testing small snippets of code or doing math.
      </p>
      <div className={styles.codeBlock}>
        <code>
          $ python3<br/>
          Python 3.10.0 (default, Oct 4 2021, 00:00:00)<br/>
          [GCC 9.3.0] on linux<br/>
          Type "help", "copyright", "credits" or "license" for more information.<br/>
          {'>>>'} 5 + 5<br/>
          10<br/>
          {'>>>'} print("I am live!")<br/>
          I am live!
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Mode 2: Script Execution</h2>
      <p>
        For real programs, you save code in a file ending with <code>.py</code>.
        The Python interpreter reads the file top-to-bottom and executes the commands.
      </p>
      <p><strong>Step 1:</strong> Create a file <code>main.py</code></p>
      <p><strong>Step 2:</strong> Write code inside it:</p>
      <div className={styles.codeBlock}><code>print("Hello from the file!")</code></div>
      <p><strong>Step 3:</strong> Run it from the terminal:</p>
      <div className={styles.codeBlock}><code>$ python3 main.py</code></div>

      <h2 className={styles.subsectionTitle}>Try It Yourself</h2>
      <p>You don't need to install anything right now. Use our integrated environment to run your first code:</p>
      <TryItYourselfEditor 
        initialCode={`# This is a Python script
print("Hello, World!")
print("Welcome to CodeQuest!")

# You can do math directly
print(100 * 5 + 50)

if 5 > 2:
    print("Five is greater than two!")`} 
        language="python" 
      />

      <div className={styles.navigationButtons}>
        <Link to="/course/python/introduction">
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/python/syntax">
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default PythonGetStarted;