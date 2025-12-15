import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const ReactES6 = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>React ES6 Requirements</h1>
      <p className={styles.introParagraph}>
        React isn't a new language; it is just JavaScript. However, it relies heavily on modern features introduced in ES6 (ECMAScript 2015). 
        You <strong>must</strong> master these concepts to write React effectively.
      </p>

      <h2 className={styles.subsectionTitle}>1. Arrow Functions</h2>
      <p>
        Arrow functions allow you to write shorter function syntax. They are used everywhere in React, especially for components and event handlers.
      </p>
      <div className={styles.codeBlock}>
        <code>
          // Old Way<br/>
          function hello() &#123;<br/>
          &nbsp;&nbsp;return "Hello World!";<br/>
          &#125;<br/><br/>
          // ES6 Arrow Function<br/>
          const hello = () ={'>'} "Hello World!";
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>2. Destructuring</h2>
      <p>
        Destructuring makes it easy to extract only what is needed from arrays or objects. In React, this is used constantly to read <strong>Props</strong>.
      </p>
      <TryItYourselfEditor 
        initialCode={`const vehicle = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

// Extracting brand and model directly
const { brand, model } = vehicle;

console.log(brand);
console.log(model);`} 
        language="javascript" 
      />

      <h2 className={styles.subsectionTitle}>3. The Spread Operator (...)</h2>
      <p>
        The spread operator <code>...</code> allows us to quickly copy all or part of an existing array or object into another. 
        In React, this is crucial for updating <strong>State</strong> without mutating the original object.
      </p>
      <TryItYourselfEditor 
        initialCode={`const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// Combine them into a new array
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);`} 
        language="javascript" 
      />

      <h2 className={styles.subsectionTitle}>4. Array Methods: .map()</h2>
      <p>
        React doesn't have a <code>for</code> loop for rendering lists inside JSX. Instead, we use <code>.map()</code>. 
        It takes an array and returns a new array (usually of HTML elements).
      </p>
      <TryItYourselfEditor 
        initialCode={`const myArray = ['apple', 'banana', 'orange'];

// Transform array into a list of messages
const myList = myArray.map((item) => "I like " + item);

console.log(myList);`} 
        language="javascript" 
      />

      <h2 className={styles.subsectionTitle}>5. Modules (Import/Export)</h2>
      <p>
        React creates a file for every component. To use a component in another file, you must <strong>export</strong> it from one and <strong>import</strong> it in the other.
      </p>
      <div className={styles.codeBlock}>
        <code>
          // person.js<br/>
          export const name = "Jesse";<br/>
          export const age = 40;<br/><br/>
          // message.js<br/>
          import &#123; name, age &#125; from "./person.js";
        </code>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/react/upgrade"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/react/render-html"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default ReactES6;