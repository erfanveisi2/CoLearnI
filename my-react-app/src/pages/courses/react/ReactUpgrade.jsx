import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const ReactUpgrade = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>React Upgrade: Classes vs Functions</h1>
      <p className={styles.introParagraph}>
        React has undergone a massive evolution. Before 2019 (React 16.8), managing "State" required using complicated Class Components. Today, we use <strong>Functional Components</strong> with <strong>Hooks</strong>.
      </p>

      <h2 className={styles.subsectionTitle}>The Old Way: Class Components</h2>
      <p>
        In the past, if you wanted a component to "remember" something (like a counter number), you had to write a JavaScript Class extending <code>React.Component</code>.
      </p>
      
      <div className={styles.codeBlock}>
        <code>
          class Car extends React.Component &#123;<br/>
          &nbsp;&nbsp;constructor(props) &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;super(props);<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123; color: "red" &#125;;<br/>
          &nbsp;&nbsp;&#125;<br/>
          &nbsp;&nbsp;render() &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;return &lt;h2&gt;I am a &#123;this.state.color&#125; Car!&lt;/h2&gt;;<br/>
          &nbsp;&nbsp;&#125;<br/>
          &#125;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>The New Way: Functional Components + Hooks</h2>
      <p>
        React 16.8 introduced <strong>Hooks</strong>. Hooks allow you to use state and other React features without writing a class.
      </p>

      <TryItYourselfEditor 
        initialCode={`import React, { useState } from 'react';

function Car() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h2>I am a {color} Car!</h2>
      <button onClick={() => setColor("blue")}>
        Paint it Blue
      </button>
    </div>
  );
}`} 
        language="jsx" 
      />

      <h2 className={styles.subsectionTitle}>Why the Change?</h2>
      <ul className={styles.list}>
        <li><strong>Simplicity:</strong> Functions are easier to read and test than classes.</li>
        <li><strong>The 'this' Keyword:</strong> In JavaScript, <code>this</code> works differently than in other languages and was a major source of confusion.</li>
        <li><strong>Code Reuse:</strong> Hooks allow you to create custom hooks to share logic easily.</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/react/get-started"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/react/es6"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default ReactUpgrade;