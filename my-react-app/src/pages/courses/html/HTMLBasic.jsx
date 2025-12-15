import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const HTMLBasic = () => {
  const basicExample = `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>HTML Basic Examples</h1>
      <p className={styles.introParagraph}>
        In this chapter we will show some basic HTML examples. Don't worry if we use tags you have not learned about yet.
      </p>

      <h2 className={styles.subsectionTitle}>HTML Documents</h2>
      <p>
        All HTML documents must start with a document type declaration: <code>&lt;!DOCTYPE html&gt;</code>.
      </p>
      <p>
        The HTML document itself begins with <code>&lt;html&gt;</code> and ends with <code>&lt;/html&gt;</code>.
      </p>
      <p>
        The visible part of the HTML document is between <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code>.
      </p>
      <TryItYourselfEditor initialCode={basicExample} language="html" />

      <h2 className={styles.subsectionTitle}>HTML Headings</h2>
      <p>
        HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.
      </p>
      <p>
        <code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading.
      </p>
      <TryItYourselfEditor initialCode={`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`} language="html" />

      <h2 className={styles.subsectionTitle}>HTML Paragraphs</h2>
      <p>
        HTML paragraphs are defined with the <code>&lt;p&gt;</code> tag.
      </p>
      <TryItYourselfEditor initialCode={`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`} language="html" />

      <h2 className={styles.subsectionTitle}>HTML Links</h2>
      <p>
        HTML links are defined with the <code>&lt;a&gt;</code> tag.
      </p>
      <TryItYourselfEditor initialCode={`<a href="https://www.w3schools.com">This is a link</a>`} language="html" />
      <p>The link's destination is specified in the <code>href</code> attribute.</p>

      <div className={styles.navigationButtons}>
        <Link to="/course/html/editors" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/html/elements" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default HTMLBasic;