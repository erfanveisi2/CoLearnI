import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const ReactRenderHTML = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>React Render HTML</h1>
      <p className={styles.introParagraph}>
        React's goal is to render HTML in a web page. However, it handles rendering differently than traditional JavaScript.
        Instead of manually manipulating DOM elements with <code>document.createElement</code>, you define what you want, and React injects it.
      </p>

      <h2 className={styles.subsectionTitle}>The 'root' Node</h2>
      <p>
        Every React application usually has one single HTML element in the <code>index.html</code> file that acts as the container for the entire application.
      </p>
      <div className={styles.codeBlock}>
        <code>&lt;div id="root"&gt;&lt;/div&gt;</code>
      </div>
      <p>
        We call this the "root" node because everything inside it will be managed by React. React takes control of this div and replaces its content with your components.
      </p>

      <h2 className={styles.subsectionTitle}>createRoot()</h2>
      <p>
        Since React 18, we use the <code>createRoot</code> function to define the entry point. This enables modern features like Concurrent Mode.
      </p>
      <div className={styles.codeBlock}>
        <code>
          const container = document.getElementById('root');<br/>
          const root = ReactDOM.createRoot(container);<br/>
          root.render(&lt;p&gt;Hello&lt;/p&gt;);
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Displaying Dynamic Data</h2>
      <p>
        React renders HTML dynamically. You can display variables from your JavaScript directly inside the HTML using curly braces <code>{}</code>.
      </p>
      
      <TryItYourselfEditor 
        initialCode={`import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = (
  <div>
    <h1>Hello React!</h1>
    <p>The total is {5 + 5}</p>
  </div>
);

// In a real app, this would be:
// root.render(myElement);
`} 
        language="jsx" 
      />

      <h2 className={styles.subsectionTitle}>Conditional Rendering</h2>
      <p>
        You often want to render different HTML based on a condition (like if a user is logged in).
        React doesn't have <code>ng-if</code> or <code>v-if</code> attributes. You use regular JavaScript logic.
      </p>
      
      <p><strong>Method 1: Ternary Operator</strong></p>
      <div className={styles.codeBlock}>
        <code>
          const goal = false;<br/>
          return (<br/>
          &nbsp;&nbsp;&lt;div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'{'}goal ? &lt;MadeGoal/&gt; : &lt;MissedGoal/&gt;{'}'}<br/>
          &nbsp;&nbsp;&lt;/div&gt;<br/>
          );
        </code>
      </div>

      <p><strong>Method 2: && Operator (Short Circuit)</strong></p>
      <div className={styles.codeBlock}>
        <code>
          const cars = ['Ford', 'BMW', 'Audi'];<br/>
          return (<br/>
          &nbsp;&nbsp;&lt;div&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Garage&lt;/h1&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'{'}cars.length {'>'} 0 &&<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;You have cars!&lt;/h2&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
          &nbsp;&nbsp;&lt;/div&gt;<br/>
          );
        </code>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/react/es6"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/react/jsx"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default ReactRenderHTML;