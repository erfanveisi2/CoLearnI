import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSSColors = () => {
  const colorExample = `h1 {
  background-color: DodgerBlue;
  color: Tomato;
}

p {
  color: MediumSeaGreen;
}`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>CSS Colors</h1>
      <p className={styles.introParagraph}>
        Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.
      </p>

      <h2 className={styles.subsectionTitle}>Color Names</h2>
      <p>
        In CSS, a color can be specified by using a predefined color name:
      </p>
      <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px'}}>
        <div style={{background: 'Tomato', padding: '20px', color: 'white'}}>Tomato</div>
        <div style={{background: 'Orange', padding: '20px', color: 'white'}}>Orange</div>
        <div style={{background: 'DodgerBlue', padding: '20px', color: 'white'}}>DodgerBlue</div>
        <div style={{background: 'MediumSeaGreen', padding: '20px', color: 'white'}}>MediumSeaGreen</div>
        <div style={{background: 'Gray', padding: '20px', color: 'white'}}>Gray</div>
        <div style={{background: 'SlateBlue', padding: '20px', color: 'white'}}>SlateBlue</div>
        <div style={{background: 'Violet', padding: '20px', color: 'white'}}>Violet</div>
        <div style={{background: 'LightGray', padding: '20px', color: 'black'}}>LightGray</div>
      </div>

      <h2 className={styles.subsectionTitle}>CSS Color Values</h2>
      <p>
        In CSS, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and HSLA values:
      </p>
      <ul>
        <li><strong>RGB:</strong> <code>rgb(255, 99, 71)</code></li>
        <li><strong>HEX:</strong> <code>#ff6347</code></li>
        <li><strong>HSL:</strong> <code>hsl(9, 100%, 64%)</code></li>
      </ul>
      <p>
        Same color (Tomato) specified in different ways:
      </p>
      <div style={{background: 'rgb(255, 99, 71)', padding: '10px', color: 'white', marginBottom: '5px'}}>rgb(255, 99, 71)</div>
      <div style={{background: '#ff6347', padding: '10px', color: 'white', marginBottom: '5px'}}>#ff6347</div>
      <div style={{background: 'hsl(9, 100%, 64%)', padding: '10px', color: 'white', marginBottom: '5px'}}>hsl(9, 100%, 64%)</div>

      <h2 className={styles.subsectionTitle}>Try it Yourself</h2>
      <TryItYourselfEditor initialCode={colorExample} language="css" />

      <div className={styles.navigationButtons}>
        <Link to="/course/css/comments" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/css/backgrounds" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default CSSColors;