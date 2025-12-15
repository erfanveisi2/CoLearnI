import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';
import { FiBookOpen, FiShoppingCart } from 'react-icons/fi';

const ReactEvents = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>React Events</h1>
      <p className={styles.introParagraph}>
        Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
      </p>
      <ul className={styles.list}>
        <li>React events are named using <strong>camelCase</strong>, rather than lowercase.</li>
        <li>With JSX you pass a function as the event handler, rather than a string.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Adding an Event</h2>
      <p>HTML:</p>
      <div className={styles.codeBlock}>
        <code>&lt;button onclick="activateLasers()"&gt;</code>
      </div>
      <p>React:</p>
      <div className={styles.codeBlock}>
        <code>&lt;button onClick=&#123;activateLasers&#125;&gt;</code>
      </div>

      <TryItYourselfEditor 
        initialCode={`function Button() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}`} 
        language="jsx" 
      />

      <h2 className={styles.subsectionTitle}>Synthetic Events</h2>
      <p>
        React wraps the native browser events in a <strong>SyntheticEvent</strong> wrapper. 
        This ensures that your events work identically across all browsers.
      </p>

      <h2 className={styles.subsectionTitle}>Passing Arguments</h2>
      <p>
        To pass an argument to an event handler, use an arrow function. 
        If you write <code>onClick=&#123;shoot("Goal")&#125;</code>, the function will run <em>immediately</em> when the page loads (infinite loop risk). 
        You must wrap it: <code>onClick=&#123;() =&gt; shoot("Goal")&#125;</code>.
      </p>
      
      <TryItYourselfEditor 
        initialCode={`function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}`} 
        language="jsx" 
      />

      <h2 className={styles.subsectionTitle}>The Event Object</h2>
      <p>React event handlers receive an event object argument (usually denoted as <code>e</code> or <code>event</code>).</p>
      
      <TryItYourselfEditor 
        initialCode={`function Button() {
  const handleClick = (event) => {
    console.log(event.type); // "click"
    console.log(event.target); // The button element
  }

  return <button onClick={handleClick}>Click Me</button>;
}`} 
        language="jsx" 
      />

      <hr className={styles.separator} />

      {/* --- BOOK RECOMMENDATIONS --- */}
      <h2 className={styles.subsectionTitle}>📚 Recommended Reading</h2>
      <p>You've mastered the React basics! To become a Pro, check these out:</p>

      <div className={styles.resourcesGrid}>
        <div className={styles.resourceCard}>
          <h3><FiShoppingCart /> Best Paid Books</h3>
          <ul>
            <li>
              <strong><a href="https://www.roadtoreact.com/" target="_blank" rel="noopener noreferrer">The Road to React</a></strong> by Robin Wieruch<br/>
              A comprehensive, pragmatic guide to modern React with Hooks.
            </li>
            <li>
              <strong><a href="https://www.manning.com/books/react-in-action" target="_blank" rel="noopener noreferrer">React in Action</a></strong> by Mark Tielens Thomas<br/>
              Deep dive into rendering, lifecycle, and data flow.
            </li>
          </ul>
        </div>

        <div className={styles.resourceCard} style={{borderColor: '#28a745'}}>
          <h3><FiBookOpen /> Free Resources</h3>
          <ul>
            <li>
              <strong><a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">React Official Docs</a></strong><br/>
              The new documentation (react.dev) is interactive and arguably the best resource available.
            </li>
            <li>
              <strong><a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer">Full Stack Open</a></strong><br/>
              University of Helsinki's legendary free course on React, Node, and GraphQL.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/react/props"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/courses"><button className={styles.nextButton}>Finish Course 🏁</button></Link>
      </div>
    </div>
  );
};

export default ReactEvents;