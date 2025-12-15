import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const HTMLIntro = () => {
  const htmlExample = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>HTML Introduction</h1>
      <p className={styles.introParagraph}>
        HTML is the standard markup language for creating Web pages.
      </p>

      <div className={styles.infoBox}>
        <p><strong>What is HTML?</strong></p>
        <ul>
          <li>HTML stands for Hyper Text Markup Language</li>
          <li>HTML describes the structure of a Web page</li>
          <li>HTML consists of a series of elements</li>
          <li>HTML elements tell the browser how to display the content</li>
        </ul>
      </div>

      <h2 className={styles.subsectionTitle}>A Simple HTML Document</h2>
      <TryItYourselfEditor initialCode={htmlExample} language="html" />

      <h2 className={styles.subsectionTitle}>Example Explained</h2>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code> defines that this document is an HTML5 document</li>
        <li><code>&lt;html&gt;</code> is the root element of an HTML page</li>
        <li><code>&lt;head&gt;</code> contains meta information about the HTML page</li>
        <li><code>&lt;title&gt;</code> specifies a title for the HTML page (shown in the browser's title bar or in the page's tab)</li>
        <li><code>&lt;body&gt;</code> defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
        <li><code>&lt;h1&gt;</code> defines a large heading</li>
        <li><code>&lt;p&gt;</code> defines a paragraph</li>
      </ul>

      <div className={styles.navigationButtons}>
        <button className={styles.prevButton} disabled>❮ Previous</button>
        <Link to="/course/html/editors" style={{textDecoration: 'none'}}>
          <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default HTMLIntro;