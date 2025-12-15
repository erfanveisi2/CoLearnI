import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const ReactComponents = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>React Components</h1>
      <p className={styles.introParagraph}>
        Components are the building blocks of any React application. A component is a self-contained module that renders some output. 
        We can write components like functions that return HTML elements.
      </p>

      <h2 className={styles.subsectionTitle}>Components are Functions</h2>
      <p>
        In React, a component is basically a JavaScript function that returns JSX. 
        The function name <strong>MUST</strong> start with a capital letter (e.g., <code>Car</code>, not <code>car</code>).
      </p>
      <TryItYourselfEditor 
        initialCode={`function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

// Using the component
// <Car />`} 
        language="jsx" 
      />

      <h2 className={styles.subsectionTitle}>Component Composition</h2>
      <p>
        Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail.
        A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.
      </p>
      <TryItYourselfEditor 
        initialCode={`function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
      <Car />
      <Car />
    </>
  );
}`} 
        language="jsx" 
      />

      <h2 className={styles.subsectionTitle}>Splitting Components into Files</h2>
      <p>
        Ideally, each component should live in its own file.
        Note that the filename must start with an uppercase character.
      </p>
      <div className={styles.codeBlock}>
        <code>
          // Car.js<br/>
          function Car() &#123;<br/>
          &nbsp;&nbsp;return &lt;h2&gt;Hi, I am a Car!&lt;/h2&gt;;<br/>
          &#125;<br/>
          export default Car;
        </code>
      </div>
      <p>Then you import it in your main application:</p>
      <div className={styles.codeBlock}>
        <code>
          import Car from './Car.js';<br/>
          <br/>
          root.render(&lt;Car /&gt;);
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Pure Functions</h2>
      <p>
        React assumes that your components are unique like mathematical <strong>Pure Functions</strong>.
        This means that for the same input (props), they should always return the same output (JSX), and they should not modify variables outside their scope during rendering.
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/course/react/jsx"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/react/class"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default ReactComponents;