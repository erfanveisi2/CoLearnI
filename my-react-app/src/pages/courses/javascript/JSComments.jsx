import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const JSComments = () => {
  const commentExample = `// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

/*
The code below will change
the paragraph with id="myP"
*/
document.getElementById("myP").innerHTML = "My first paragraph.";`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>JavaScript Comments</h1>
      <p className={styles.introParagraph}>
        JavaScript comments can be used to explain JavaScript code, and to make it more readable.
      </p>
      <p>
        JavaScript comments can also be used to prevent execution, when testing alternative code.
      </p>

      <h2 className={styles.subsectionTitle}>Single Line Comments</h2>
      <p>
        Single line comments start with <code>//</code>.
      </p>
      <p>
        Any text between <code>//</code> and the end of the line will be ignored by JavaScript (will not be executed).
      </p>

      <h2 className={styles.subsectionTitle}>Multi-line Comments</h2>
      <p>
        Multi-line comments start with <code>/*</code> and end with <code>*/</code>.
      </p>
      <p>
        Any text between <code>/*</code> and <code>*/</code> will be ignored by JavaScript.
      </p>

      <h2 className={styles.subsectionTitle}>Example</h2>
      <TryItYourselfEditor initialCode={commentExample} language="javascript" />

      <div className={styles.navigationButtons}>
        <Link to="/course/javascript/syntax" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/javascript/variables" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default JSComments;