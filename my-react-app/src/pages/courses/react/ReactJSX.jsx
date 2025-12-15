import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const ReactJSX = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>React JSX</h1>
      <p className={styles.introParagraph}>
        JSX stands for <strong>JavaScript XML</strong>. It allows us to write HTML directly within JavaScript. 
        It is not valid JavaScript by itself; build tools like Babel compile it into standard JavaScript function calls.
      </p>

      [Image of JSX compilation process diagram]

      <h2 className={styles.subsectionTitle}>Why Use JSX?</h2>
      <p>
        React doesn't <em>require</em> using JSX, but most people find it helpful as a visual aid when working with UI inside JavaScript code. It allows React to show more useful error and warning messages.
      </p>

      <h2 className={styles.subsectionTitle}>Under the Hood</h2>
      <p>
        When you write this JSX:
      </p>
      <div className={styles.codeBlock}><code>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</code></div>
      <p>Babel compiles it down to this:</p>
      <div className={styles.codeBlock}>
        <code>
          const element = React.createElement(<br/>
          &nbsp;&nbsp;'h1',<br/>
          &nbsp;&nbsp;null,<br/>
          &nbsp;&nbsp;'Hello, world!'<br/>
          );
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Embedding Expressions</h2>
      <p>
        You can put any valid JavaScript expression inside the curly braces <code>{'{'} {'}'}</code>.
        This includes variables, math, ternary operators, or function calls.
      </p>
      <TryItYourselfEditor 
        initialCode={`const name = "Josh";
const age = 30;

const element = (
  <div>
    <h1>Hello, {name}</h1>
    <p>Next year you will be {age + 1}</p>
    <p>Is adult? {age >= 18 ? "Yes" : "No"}</p>
  </div>
);`} 
        language="jsx" 
      />

      <h2 className={styles.subsectionTitle}>The Top Level Rule</h2>
      <p>
        A React component must return <strong>ONE</strong> parent element. You cannot return two sibling elements side-by-side without a wrapper.
      </p>
      <div className={styles.codeBlock} style={{borderLeft: '4px solid red'}}>
        <code>
          // WRONG<br/>
          return (<br/>
          &nbsp;&nbsp;&lt;h1&gt;Hello&lt;/h1&gt;<br/>
          &nbsp;&nbsp;&lt;p&gt;World&lt;/p&gt;<br/>
          );
        </code>
      </div>
      <p>
        If you don't want to add an extra <code>&lt;div&gt;</code> to the DOM, use a <strong>Fragment</strong>: <code>&lt;&gt;...&lt;/&gt;</code>.
      </p>
      <div className={styles.codeBlock} style={{borderLeft: '4px solid green'}}>
        <code>
          // CORRECT<br/>
          return (<br/>
          &nbsp;&nbsp;&lt;&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello&lt;/h1&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;World&lt;/p&gt;<br/>
          &nbsp;&nbsp;&lt;/&gt;<br/>
          );
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Attributes in JSX</h2>
      <p>
        Since JSX is closer to JavaScript than HTML, React DOM uses <strong>camelCase</strong> property naming convention instead of HTML attribute names.
      </p>
      <ul className={styles.list}>
        <li><code>class</code> becomes <code>className</code></li>
        <li><code>onclick</code> becomes <code>onClick</code></li>
        <li><code>tabindex</code> becomes <code>tabIndex</code></li>
        <li><code>for</code> becomes <code>htmlFor</code></li>
      </ul>

      <h2 className={styles.subsectionTitle}>Injection Attacks (XSS)</h2>
      <p>
        By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. 
        Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/course/react/render-html"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/react/components"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default ReactJSX;