import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const HTMLAttributes = () => {
  const hrefExample = `<a href="https://www.google.com">Visit Google</a>`;
  const imgExample = `<img src="img_girl.jpg" width="500" height="600">`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>HTML Attributes</h1>
      <p className={styles.introParagraph}>
        HTML attributes provide additional information about HTML elements.
      </p>

      <ul>
        <li>All HTML elements can have <strong>attributes</strong></li>
        <li>Attributes provide <strong>additional information</strong> about elements</li>
        <li>Attributes are always specified in the <strong>start tag</strong></li>
        <li>Attributes usually come in name/value pairs like: <strong>name="value"</strong></li>
      </ul>

      <h2 className={styles.subsectionTitle}>The href Attribute</h2>
      <p>
        The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to:
      </p>
      <TryItYourselfEditor initialCode={hrefExample} language="html" />

      <h2 className={styles.subsectionTitle}>The src Attribute</h2>
      <p>
        The <code>&lt;img&gt;</code> tag is used to embed an image in an HTML page. The <code>src</code> attribute specifies the path to the image to be displayed:
      </p>
      <TryItYourselfEditor initialCode={imgExample} language="html" />

      <h2 className={styles.subsectionTitle}>The width and height Attributes</h2>
      <p>
        Images also have <code>width</code> and <code>height</code> attributes, which specify the width and height of the image (in pixels by default):
      </p>
      <div style={{background: '#f0f0f0', padding: '15px', borderRadius: '5px', fontFamily: 'monospace'}}>
        &lt;img src="img_girl.jpg" width="500" height="600"&gt;
      </div>

      <h2 className={styles.subsectionTitle}>The alt Attribute</h2>
      <p>
        The required <code>alt</code> attribute for the <code>&lt;img&gt;</code> tag specifies an alternate text for an image, if the image for some reason cannot be displayed.
      </p>
      <div style={{background: '#f0f0f0', padding: '15px', borderRadius: '5px', fontFamily: 'monospace'}}>
        &lt;img src="img_girl.jpg" alt="Girl with a jacket"&gt;
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/html/elements" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/html/headings" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default HTMLAttributes;