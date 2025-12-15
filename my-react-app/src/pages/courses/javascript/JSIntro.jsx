import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JSIntro = () => {
  const jsExample = `<!DOCTYPE html>
<html>
<body>

<h2>JavaScript in Action</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>JavaScript Introduction</h1>
      <p className={styles.introParagraph}>
        JavaScript is the world's most popular programming language. It is the language of the Web.
      </p>

      <div className={styles.infoBox}>
        <p><strong>JavaScript</strong> is easy to learn.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Why Study JavaScript?</h2>
      <p>
        JavaScript is one of the <strong>3 languages</strong> all web developers must learn:
      </p>
      <ol>
        <li><strong>HTML</strong> to define the content of web pages</li>
        <li><strong>CSS</strong> to specify the layout of web pages</li>
        <li><strong>JavaScript</strong> to program the behavior of web pages</li>
      </ol>

      <h2 className={styles.subsectionTitle}>JavaScript Can Change HTML Content</h2>
      <p>
        One of many JavaScript HTML methods is <code>getElementById()</code>.
      </p>
      <p>
        The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript!":
      </p>

      <TryItYourselfEditor initialCode={jsExample} language="html" />

      <h2 className={styles.subsectionTitle}>JavaScript Can Change HTML Attribute Values</h2>
      <p>
        In this example, JavaScript changes the value of the <code>src</code> (source) attribute of an <code>&lt;img&gt;</code> tag.
      </p>

      <div className={styles.navigationButtons}>
        <button className={styles.prevButton} disabled>❮ Previous</button>
        <Link to="/course/javascript/where-to" style={{textDecoration: 'none'}}>
          <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default JSIntro;