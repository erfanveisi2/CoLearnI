import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';
import { FiBookOpen, FiShoppingCart } from 'react-icons/fi';

const CSSPadding = () => {
  const paddingExample = `div {
  border: 1px solid black;
  padding: 50px;
  background-color: lightblue;
}`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>CSS Padding</h1>
      <p className={styles.introParagraph}>
        Padding is used to create space around an element's content, inside of any defined borders.
      </p>

      <h2 className={styles.subsectionTitle}>CSS Padding Properties</h2>
      <p>
        CSS has properties for specifying the padding for each side of an element: <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.
      </p>

      <h2 className={styles.subsectionTitle}>Padding Shorthand</h2>
      <TryItYourselfEditor initialCode={paddingExample} language="css" />

      <hr className={styles.separator} />

      {/* --- BOOK RECOMMENDATIONS --- */}
      <h2 className={styles.subsectionTitle}>📚 Recommended Reading</h2>
      <p>Ready to become a CSS master? Check out these resources.</p>

      <div className={styles.resourcesGrid}>
        <div className={styles.resourceCard}>
          <h3><FiShoppingCart /> Best Paid Books</h3>
          <ul>
            <li>
              <strong><a href="https://www.oreilly.com/library/view/css-secrets/9781449372736/" target="_blank" rel="noopener noreferrer">CSS Secrets</a></strong> by Lea Verou<br/>
              Amazing tips and tricks for intermediate to advanced developers.
            </li>
            <li>
              <strong><a href="https://www.oreilly.com/library/view/css-the-definitive/9781449325053/" target="_blank" rel="noopener noreferrer">CSS: The Definitive Guide</a></strong> by Eric Meyer<br/>
              The comprehensive reference for everything CSS.
            </li>
          </ul>
        </div>

        <div className={styles.resourceCard} style={{borderColor: '#28a745'}}>
          <h3><FiBookOpen /> Free Resources</h3>
          <ul>
            <li>
              <strong><a href="https://adamschwartz.co/magic-of-css/" target="_blank" rel="noopener noreferrer">Magic of CSS</a></strong><br/>
              A free online book that teaches CSS fundamentals visually.
            </li>
            <li>
              <strong><a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer">CSS-Tricks</a></strong><br/>
              The ultimate website for specific CSS guides (e.g., Flexbox & Grid).
            </li>
            <li>
              <strong><a href="https://web.dev/learn/css/" target="_blank" rel="noopener noreferrer">Google Web.dev</a></strong><br/>
              Modern CSS guides and best practices directly from Google.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/css/margins" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/courses" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Finish Course 🏁</button>
        </Link>
      </div>
    </div>
  );
};

export default CSSPadding;