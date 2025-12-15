import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSSComments = () => {
  const commentExample = `/* This is a single-line comment */
p {
  color: red;
}

/* This is
a multi-line
comment */
h1 {
  color: blue; /* This is a comment at the end of a line */
}`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>CSS Comments</h1>
      <p className={styles.introParagraph}>
        CSS comments are not displayed in the browser, but they can help document your source code.
      </p>

      <div className={styles.infoBox}>
        <p><strong>Tip:</strong> Comments are highly recommended for large projects to help you and others understand the code later.</p>
      </div>

      <h2 className={styles.subsectionTitle}>CSS Comment Syntax</h2>
      <p>
        Comments are used to explain the code, and may help when you edit the source code at a later date.
        Comments are ignored by browsers.
      </p>
      <p>
        A CSS comment starts with <code>/*</code> and ends with <code>*/</code>. Comments can also span multiple lines.
      </p>

      <h2 className={styles.subsectionTitle}>Comment Examples</h2>
      <TryItYourselfEditor initialCode={commentExample} language="css" />

      <h2 className={styles.subsectionTitle}>HTML vs CSS Comments</h2>
      <p>
        Remember that standard HTML comments are different: <code>&lt;!-- This is HTML --&gt;</code>.
        In CSS, you must use <code>/* This is CSS */</code>.
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/course/css/how-to" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/css/colors" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default CSSComments;