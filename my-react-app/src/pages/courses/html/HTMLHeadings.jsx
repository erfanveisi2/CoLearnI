import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const HTMLHeadings = () => {
  const headingExample = `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>HTML Headings</h1>
      <p className={styles.introParagraph}>
        HTML headings are titles or subtitles that you want to display on a webpage.
      </p>

      <h2 className={styles.subsectionTitle}>HTML Headings</h2>
      <p>
        HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.
      </p>
      <p>
        <code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading.
      </p>
      <TryItYourselfEditor initialCode={headingExample} language="html" />

      <div className={styles.infoBox}>
        <p><strong>Note:</strong> Browsers automatically add some white space (a margin) before and after a heading.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Headings Are Important</h2>
      <p>
        Search engines use the headings to index the structure and content of your web pages.
      </p>
      <p>
        Users often skim a page by its headings. It is important to use headings to show the document structure.
      </p>
      <p>
        <code>&lt;h1&gt;</code> headings should be used for main headings, followed by <code>&lt;h2&gt;</code> headings, then the less important <code>&lt;h3&gt;</code>, and so on.
      </p>

      <h2 className={styles.subsectionTitle}>Bigger Headings</h2>
      <p>
        Each HTML heading has a default size. However, you can specify the size for any heading with the <code>style</code> attribute, using the CSS <code>font-size</code> property:
      </p>
      <TryItYourselfEditor initialCode={`<h1 style="font-size:60px;">Heading 1</h1>`} language="html" />

      <div className={styles.navigationButtons}>
        <Link to="/course/html/attributes" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/html/paragraphs" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default HTMLHeadings;