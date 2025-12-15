import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor'; // Adjust path as needed
import styles from '../CourseContent.module.css'; // General styling for course content

const AICourseIntro = () => {
  const htmlExample = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>AI Introduction</h1>
      <p className={styles.introParagraph}>
        Welcome to the Introduction to Artificial Intelligence (AI) course! This course is designed to
        provide you with a fundamental understanding of what AI is, how it works, and its impact
        on our world.
      </p>

      <h2 className={styles.subsectionTitle}>Learn AI</h2>
      <p>
        Artificial Intelligence (AI) is a rapidly evolving field that aims to create machines
        capable of performing tasks that typically require human intelligence. From simple automation
        to complex decision-making, AI is transforming industries and daily life.
      </p>
      <p>
        Understanding AI is becoming increasingly important in today's technological landscape.
        This tutorial will guide you through the core concepts, history, applications, and ethical
        considerations of AI.
      </p>

      <h2 className={styles.subsectionTitle}>Learning by Examples</h2>
      <p>
        With our "Try it Yourself" Editor, you can edit the HTML code and view the result in the browser:
      </p>

      <TryItYourselfEditor initialCode={htmlExample} language="html" />

      {/* Navigation buttons */}
      <div className={styles.navigationButtons}>
        <button className={styles.prevButton} disabled>❮ Previous</button>
        <Link to="/course/introduction-to-ai/what-is-ai" style={{textDecoration: 'none'}}>
          <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default AICourseIntro;