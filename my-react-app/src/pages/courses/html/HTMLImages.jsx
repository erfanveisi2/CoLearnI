import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';
import { FiBookOpen, FiShoppingCart } from 'react-icons/fi';

const HTMLImages = () => {
  const imgExample = `<img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Trulli" width="500" height="333">`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>HTML Images</h1>
      <p className={styles.introParagraph}>
        Images can improve the design and the appearance of a web page.
      </p>

      <h2 className={styles.subsectionTitle}>HTML Images Syntax</h2>
      <p>
        The HTML <code>&lt;img&gt;</code> tag is used to embed an image in a web page.
      </p>
      <p>
        The <code>&lt;img&gt;</code> tag is empty, it contains attributes only, and does not have a closing tag.
      </p>
      <TryItYourselfEditor initialCode={imgExample} language="html" />

      <h2 className={styles.subsectionTitle}>The src & alt Attributes</h2>
      <p>
        The <code>src</code> attribute specifies the path (URL) to the image.
        The <code>alt</code> attribute provides an alternate text if the user cannot view the image.
      </p>

      <hr className={styles.separator} />

      {/* --- BOOK RECOMMENDATIONS --- */}
      <h2 className={styles.subsectionTitle}>📚 Recommended Reading</h2>
      <p>You've learned the basics! Here are some resources to master HTML.</p>

      <div className={styles.resourcesGrid}>
        <div className={styles.resourceCard}>
          <h3><FiShoppingCart /> Best Paid Books</h3>
          <ul>
            <li>
              <strong><a href="https://www.wiley.com/en-us/HTML+and+CSS%3A+Design+and+Build+Websites-p-9781118008188" target="_blank" rel="noopener noreferrer">HTML and CSS: Design and Build Websites</a></strong><br/>
              by Jon Duckett. The most beautiful and easiest book to learn from.
            </li>
            <li>
              <strong><a href="https://www.oreilly.com/library/view/head-first-html/059610197X/" target="_blank" rel="noopener noreferrer">Head First HTML and CSS</a></strong><br/>
              A visually rich, brain-friendly guide to learning web coding.
            </li>
          </ul>
        </div>

        <div className={styles.resourceCard} style={{borderColor: '#28a745'}}>
          <h3><FiBookOpen /> Free Resources</h3>
          <ul>
            <li>
              <strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></strong><br/>
              The "Bible" of web development documentation. Completely free.
            </li>
            <li>
              <strong><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a></strong><br/>
              Interactive certification courses for full-stack development.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/html/links" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/courses" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Finish Course 🏁</button>
        </Link>
      </div>
    </div>
  );
};

export default HTMLImages;