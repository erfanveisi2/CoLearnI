import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const HTMLLinks = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>HTML Links</h1>
      <p className={styles.introParagraph}>
        Links are found in nearly all web pages. Links allow users to click their way from page to page.
      </p>

      <h2 className={styles.subsectionTitle}>HTML Links - Hyperlinks</h2>
      <p>
        HTML links are hyperlinks. You can click on a link and jump to another document.
      </p>
      <p>
        When you move the mouse over a link, the mouse arrow will turn into a little hand.
      </p>

      <h2 className={styles.subsectionTitle}>HTML Links - Syntax</h2>
      <p>
        The HTML <code>&lt;a&gt;</code> tag defines a hyperlink. It has the following syntax:
      </p>
      <div style={{background: '#f0f0f0', padding: '15px', borderRadius: '5px', fontFamily: 'monospace'}}>
        &lt;a href="url"&gt;link text&lt;/a&gt;
      </div>
      <p>
        The most important attribute of the <code>&lt;a&gt;</code> element is the <code>href</code> attribute, which indicates the link's destination.
      </p>
      <p>
        The <em>link text</em> is the part that will be visible to the reader. Clicking on the link text, will send the reader to the specified URL address.
      </p>
      <TryItYourselfEditor initialCode={`<a href="https://www.google.com">Visit Google</a>`} language="html" />

      <h2 className={styles.subsectionTitle}>HTML Links - The target Attribute</h2>
      <p>
        By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.
      </p>
      <p>
        The <code>target</code> attribute specifies where to open the linked document.
      </p>
      <p>
        The most common value is <code>_blank</code>, which opens the linked document in a new window or tab:
      </p>
      <TryItYourselfEditor initialCode={`<a href="https://www.google.com" target="_blank">Visit Google in a new tab!</a>`} language="html" />

      <div className={styles.navigationButtons}>
        <Link to="/course/html/styles" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/html/images" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default HTMLLinks;