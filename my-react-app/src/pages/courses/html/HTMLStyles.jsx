import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const HTMLStyles = () => {
  const styleExample = `<p style="color:red;">I am red</p>
<p style="color:blue;">I am blue</p>
<p style="font-size:50px;">I am big</p>`;
  const bgExample = `<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>HTML Styles</h1>
      <p className={styles.introParagraph}>
        The HTML <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.
      </p>

      <h2 className={styles.subsectionTitle}>The HTML Style Attribute</h2>
      <p>
        Setting the style of an HTML element, can be done with the <code>style</code> attribute.
      </p>
      <p>The HTML <code>style</code> attribute has the following syntax:</p>
      <div style={{background: '#f0f0f0', padding: '15px', borderRadius: '5px', fontFamily: 'monospace'}}>
        &lt;tagname style="property:value;"&gt;
      </div>
      <p>The <em>property</em> is a CSS property. The <em>value</em> is a CSS value.</p>

      <h2 className={styles.subsectionTitle}>Background Color</h2>
      <p>
        The CSS <code>background-color</code> property defines the background color for an HTML element.
      </p>
      <TryItYourselfEditor initialCode={bgExample} language="html" />

      <h2 className={styles.subsectionTitle}>Text Color</h2>
      <p>
        The CSS <code>color</code> property defines the text color for an HTML element:
      </p>
      <TryItYourselfEditor initialCode={`<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>`} language="html" />

      <h2 className={styles.subsectionTitle}>Fonts</h2>
      <p>
        The CSS <code>font-family</code> property defines the font to be used for an HTML element:
      </p>
      <TryItYourselfEditor initialCode={`<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>`} language="html" />

      <div className={styles.navigationButtons}>
        <Link to="/course/html/paragraphs" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/html/links" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default HTMLStyles;