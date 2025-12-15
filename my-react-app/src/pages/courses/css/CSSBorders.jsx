import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const CSSBorders = () => {
  const borderExample = `p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}`;

  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>CSS Borders</h1>
      <p className={styles.introParagraph}>
        The CSS border properties allow you to specify the style, width, and color of an element's border.
      </p>

      <h2 className={styles.subsectionTitle}>Border Style</h2>
      <p>
        The <code>border-style</code> property specifies what kind of border to display.
      </p>
      <p>The following values are allowed:</p>
      <ul>
        <li><code>dotted</code> - Defines a dotted border</li>
        <li><code>dashed</code> - Defines a dashed border</li>
        <li><code>solid</code> - Defines a solid border</li>
        <li><code>double</code> - Defines a double border</li>
        <li><code>groove</code> - Defines a 3D grooved border</li>
        <li><code>ridge</code> - Defines a 3D ridged border</li>
        <li><code>inset</code> - Defines a 3D inset border</li>
        <li><code>outset</code> - Defines a 3D outset border</li>
        <li><code>none</code> - Defines no border</li>
        <li><code>hidden</code> - Defines a hidden border</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Border Styles Demo</h2>
      <TryItYourselfEditor initialCode={borderExample} language="css" />

      <h2 className={styles.subsectionTitle}>Border Width and Color</h2>
      <p>
        You can also specify the <code>border-width</code> and <code>border-color</code>.
      </p>
      <div style={{border: '5px solid red', padding: '10px', margin: '10px 0'}}>
        A 5px solid red border.
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/css/backgrounds" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/css/margins" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default CSSBorders;