import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const PythonIntro = () => {
  const pythonExample = `print("Hello, World!")`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Python Introduction</h1>
      <p className={styles.introParagraph}>
        Python is a popular, high-level, general-purpose programming language.
      </p>

      <div className={styles.infoBox}>
        <p>Python is known for its simple syntax and readability.</p>
      </div>

      <h2 className={styles.subsectionTitle}>What is Python?</h2>
      <p>
        Python's design philosophy emphasizes code readability with its notable use of significant whitespace.
      </p>
      <p>
        It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented, and functional programming.
      </p>

      <h2 className={styles.subsectionTitle}>Python Example</h2>
      <p>
        A simple "Hello, World!" in Python.
      </p>

      <TryItYourselfEditor initialCode={pythonExample} language="python" />

      <div className={styles.navigationButtons}>
        <button className={styles.prevButton} disabled>❮ Previous</button>
        <Link to="/course/python/syntax" style={{textDecoration: 'none'}}>
          <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default PythonIntro;