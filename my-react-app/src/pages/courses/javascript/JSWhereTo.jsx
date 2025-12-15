import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JSWhereTo = () => {
  const headExample = `<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>JavaScript Where To</h1>
      <p className={styles.introParagraph}>
        In HTML, JavaScript code is inserted between <code>&lt;script&gt;</code> and <code>&lt;/script&gt;</code> tags.
      </p>

      <h2 className={styles.subsectionTitle}>The &lt;script&gt; Tag</h2>
      <p>
        Old JavaScript examples may use a type attribute: <code>&lt;script type="text/javascript"&gt;</code>.
        The type attribute is not required. JavaScript is the default scripting language in HTML.
      </p>

      <h2 className={styles.subsectionTitle}>JavaScript in &lt;head&gt; or &lt;body&gt;</h2>
      <p>
        You can place any number of scripts in an HTML document. Scripts can be placed in the <code>&lt;body&gt;</code>, or in the <code>&lt;head&gt;</code> section of an HTML page, or in both.
      </p>

      <h2 className={styles.subsectionTitle}>JavaScript in &lt;head&gt;</h2>
      <p>
        In this example, a JavaScript function is placed in the <code>&lt;head&gt;</code> section. The function is invoked (called) when a button is clicked:
      </p>
      <TryItYourselfEditor initialCode={headExample} language="html" />

      <h2 className={styles.subsectionTitle}>JavaScript in &lt;body&gt;</h2>
      <p>
        In this example, a JavaScript function is placed in the <code>&lt;body&gt;</code> section.
      </p>
      <div style={{background: '#f0f0f0', padding: '15px', borderRadius: '5px', fontFamily: 'monospace'}}>
        &lt;body&gt;<br/>
          &nbsp;&nbsp;&lt;script&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById("demo").innerHTML = "My First JavaScript";<br/>
          &nbsp;&nbsp;&lt;/script&gt;<br/>
        &lt;/body&gt;
      </div>
      <div className={styles.infoBox}>
        <p><strong>Tip:</strong> Placing scripts at the bottom of the <code>&lt;body&gt;</code> element improves the display speed, because script interpretation slows down the display.</p>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/javascript/introduction" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/javascript/output" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default JSWhereTo;