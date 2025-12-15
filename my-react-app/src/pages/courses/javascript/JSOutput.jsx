import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JSOutput = () => {
  const outputExample = `<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>JavaScript Output</h1>
      <p className={styles.introParagraph}>
        JavaScript does not have any built-in print or display functions.
      </p>
      <p>However, JavaScript can "display" data in different ways:</p>
      <ul>
        <li>Writing into an HTML element, using <code>innerHTML</code>.</li>
        <li>Writing into the HTML output using <code>document.write()</code>.</li>
        <li>Writing into an alert box, using <code>window.alert()</code>.</li>
        <li>Writing into the browser console, using <code>console.log()</code>.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Using innerHTML</h2>
      <p>
        To access an HTML element, JavaScript can use the <code>document.getElementById(id)</code> method.
      </p>
      <p>
        The <code>id</code> attribute defines the HTML element. The <code>innerHTML</code> property defines the HTML content:
      </p>
      <TryItYourselfEditor initialCode={outputExample} language="html" />

      <h2 className={styles.subsectionTitle}>Using document.write()</h2>
      <p>
        For testing purposes, it is convenient to use <code>document.write()</code>:
      </p>
      <div style={{background: '#f0f0f0', padding: '15px', borderRadius: '5px', fontFamily: 'monospace'}}>
        &lt;script&gt;<br/>
        document.write(5 + 6);<br/>
        &lt;/script&gt;
      </div>
      <div className={styles.infoBox}>
        <p><strong>Warning:</strong> Using <code>document.write()</code> after an HTML document is loaded, will <strong>delete all existing HTML</strong>.</p>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/javascript/where-to" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/javascript/statements" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default JSOutput;