import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const ReactGetStarted = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>React Getting Started</h1>
      <p className={styles.introParagraph}>
        To use React in production, you need a build setup. React relies on tools like Node.js, npm, and bundlers (like Webpack or Vite) to compile modern JavaScript code into something browsers can understand.
      </p>

      <h2 className={styles.subsectionTitle}>Step 1: Install Node.js</h2>
      <p>
        React development requires <strong>Node.js</strong> installed on your computer. Node.js is a JavaScript runtime that allows us to run JS outside the browser. It also comes with <strong>npm</strong> (Node Package Manager).
      </p>
      <p>To check if you have it installed, open your terminal:</p>
      <div className={styles.codeBlock}>
        <code>node -v</code>
      </div>

      <h2 className={styles.subsectionTitle}>Step 2: Create a React App</h2>
      <p>
        Historically, developers used <code>create-react-app</code> (CRA). However, in 2024 and beyond, the industry standard has shifted to <strong>Vite</strong> because it is significantly faster.
      </p>
      
      <h3>Option A: Using Vite (Recommended)</h3>
      <div className={styles.codeBlock}>
        <code>
          npm create vite@latest my-react-app -- --template react<br/>
          cd my-react-app<br/>
          npm install<br/>
          npm run dev
        </code>
      </div>

      <h3>Option B: Using Create React App (Legacy)</h3>
      <div className={styles.codeBlock}>
        <code>
          npx create-react-app my-app<br/>
          cd my-app<br/>
          npm start
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Step 3: Understanding the Folder Structure</h2>
      <p>Once your app is created, you will see several files. Here is what they do:</p>
      
      <ul className={styles.list}>
        <li><strong><code>node_modules/</code></strong>: Contains all the thousands of dependency libraries (like React itself). You never edit this.</li>
        <li><strong><code>public/</code></strong>: Contains static assets like <code>favicon.ico</code> and <code>index.html</code> (in CRA). In Vite, <code>index.html</code> is in the root.</li>
        <li><strong><code>src/</code></strong>: This is where you work. It contains your React components, CSS, and logic.</li>
        <li><strong><code>package.json</code></strong>: The manifest file. It lists the project name, scripts (like `dev` or `build`), and library dependencies.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>The Entry Point (main.jsx)</h2>
      <p>
        How does React actually load? It starts in <code>src/main.jsx</code> (or <code>index.js</code>).
      </p>
      <div className={styles.codeBlock}>
        <code>
          import React from 'react'<br/>
          import ReactDOM from 'react-dom/client'<br/>
          import App from './App.jsx'<br/>
          <br/>
          ReactDOM.createRoot(document.getElementById('root')).render(<br/>
          &nbsp;&nbsp;&lt;React.StrictMode&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;App /&gt;<br/>
          &nbsp;&nbsp;&lt;/React.StrictMode&gt;,<br/>
          )
        </code>
      </div>
      <p>
        This code tells React to find the HTML element with <code>id="root"</code> (which lives in your HTML file) and inject the entire <code>&lt;App /&gt;</code> component inside it.
      </p>

      <h2 className={styles.subsectionTitle}>Running the App</h2>
      <p>
        When you run <code>npm run dev</code>, a local development server starts.
        Any change you make to the code will cause the browser to automatically refresh (Hot Module Replacement), making development extremely fast.
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/course/react/introduction"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/react/upgrade"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default ReactGetStarted;