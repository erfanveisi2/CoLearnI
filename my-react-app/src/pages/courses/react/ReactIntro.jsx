import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const ReactIntro = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>React Introduction</h1>
      <p className={styles.introParagraph}>
        React is a JavaScript library for building user interfaces. It is maintained by Meta (Facebook) and a community of individual developers and companies.
        React allows developers to create large web applications that can change data, without reloading the page.
      </p>

      

      <h2 className={styles.subsectionTitle}>What is React?</h2>
      <p>
        React is sometimes referred to as a frontend framework, but technically it is a <strong>library</strong>. It focuses strictly on the "View" layer of an application (in the Model-View-Controller pattern).
      </p>
      <ul className={styles.list}>
        <li><strong>Declarative:</strong> You tell React <em>what</em> you want the UI to look like based on the current state, and React figures out <em>how</em> to update the DOM to match it.</li>
        <li><strong>Component-Based:</strong> You build encapsulated components that manage their own state, then compose them to make complex UIs.</li>
        <li><strong>Learn Once, Write Anywhere:</strong> React can also render on the server using Node and power mobile apps using React Native.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>The Virtual DOM (Critical Concept)</h2>
      <p>
        The most important concept to understand in React is the <strong>Virtual DOM</strong>.
      </p>
      <p>
        In traditional JavaScript (jQuery or Vanilla JS), updating the DOM (the HTML structure) is computationally expensive and slow. If you want to change a list item, the browser often has to re-paint the entire list.
      </p>
      <p>
        <strong>How React solves this:</strong>
      </p>
      <ol>
        <li>React keeps a lightweight copy of the DOM in memory (The Virtual DOM).</li>
        <li>When data changes, React creates a <em>new</em> Virtual DOM tree.</li>
        <li>React compares the new tree with the previous one (a process called <strong>Diffing</strong>).</li>
        <li>React calculates the minimum number of changes required to update the real DOM.</li>
        <li>It updates <em>only</em> those specific parts of the real DOM (Reconciliation).</li>
      </ol>

      <div className={styles.infoBox}>
        <p><strong>Analogy:</strong> Imagine you are an architect. Instead of rebuilding the whole house (Real DOM) every time you want to change a window, you draw a blueprint (Virtual DOM), erase the window on the blueprint, and tell the builders to change <em>only</em> that window.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Single Page Applications (SPAs)</h2>
      <p>
        React is primarily used to build Single Page Applications.
      </p>
      <p>
        In a traditional website (MPA - Multi Page Application), every time you click a link, the browser requests a new HTML file from the server. The screen flashes white, and the page reloads.
      </p>
      <p>
        In a <strong>React SPA</strong>, the browser loads one single HTML file (`index.html`) initially. When the user interacts with the app, JavaScript (React) swaps the content inside that HTML file instantly. This makes the app feel like a native mobile application—fast and fluid.
      </p>

      <h2 className={styles.subsectionTitle}>React vs Angular vs Vue</h2>
      <table className={styles.table}>
        <thead><tr><th>Feature</th><th>React</th><th>Angular</th><th>Vue</th></tr></thead>
        <tbody>
          <tr><td><strong>Created By</strong></td><td>Meta (Facebook)</td><td>Google</td><td>Evan You</td></tr>
          <tr><td><strong>Type</strong></td><td>Library</td><td>Framework</td><td>Framework</td></tr>
          <tr><td><strong>Learning Curve</strong></td><td>Medium</td><td>Steep</td><td>Easy</td></tr>
          <tr><td><strong>Syntax</strong></td><td>JSX (JS + HTML)</td><td>TypeScript + HTML</td><td>HTML Templates</td></tr>
          <tr><td><strong>Data Binding</strong></td><td>One-Way</td><td>Two-Way</td><td>Two-Way</td></tr>
        </tbody>
      </table>

      <h2 className={styles.subsectionTitle}>Prerequisites</h2>
      <p>Before learning React, you should have a solid understanding of:</p>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript (ES6 features are mandatory: Classes, Arrow Functions, Destructuring, Modules)</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/courses">
            <button className={styles.prevButton}>❮ Course Menu</button>
        </Link>
        <Link to="/course/react/get-started">
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default ReactIntro;