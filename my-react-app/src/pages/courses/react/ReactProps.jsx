import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const ReactProps = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>React Props</h1>
      <p className={styles.introParagraph}>
        Props are arguments passed into React components. Props are passed to components via HTML attributes.
        React Props are like function arguments in JavaScript and attributes in HTML.
      </p>

      

      <h2 className={styles.subsectionTitle}>Passing Data</h2>
      <p>
        To pass a prop to a component, use the same syntax as HTML attributes:
      </p>
      <div className={styles.codeBlock}>
        <code>&lt;Car brand="Ford" /&gt;</code>
      </div>
      <p>
        The component receives the argument as a <code>props</code> object:
      </p>
      <TryItYourselfEditor 
        initialCode={`function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

// Usage: <Car brand="Ford" />`} 
        language="jsx" 
      />

      <h2 className={styles.subsectionTitle}>Props are Read-Only (Immutability)</h2>
      <p>
        This is a strict rule: <strong>A component must never modify its own props.</strong>
      </p>
      <p>
        React components should act like "pure" functions with respect to their props.
      </p>

      <h2 className={styles.subsectionTitle}>Destructuring Props</h2>
      <p>
        In modern React, we rarely use <code>props.brand</code>. Instead, we destructure the props directly in the function signature for cleaner code.
      </p>
      <TryItYourselfEditor 
        initialCode={`// Cleaner Syntax
function Car({ brand, model, year }) {
  return (
    <div>
      <h2>{year} {brand} {model}</h2>
    </div>
  );
}`} 
        language="jsx" 
      />

      <h2 className={styles.subsectionTitle}>Pass Data Types</h2>
      <p>You can pass any data type as a prop: numbers, arrays, objects, or even functions.</p>
      <div className={styles.codeBlock}>
        <code>
          &lt;Car <br/>
          &nbsp;&nbsp;age=&#123;10&#125; <br/>
          &nbsp;&nbsp;isSold=&#123;true&#125; <br/>
          &nbsp;&nbsp;features=&#123;['AC', 'GPS']&#125; <br/>
          &nbsp;&nbsp;owner=&#123;&#123;name: 'John'&#125;&#125; <br/>
          /&gt;
        </code>
      </div>

      <h2 className={styles.subsectionTitle}>Children Prop</h2>
      <p>
        There is a special prop called <code>children</code>. It contains whatever content you place <em>between</em> the opening and closing tags of your component.
      </p>
      <TryItYourselfEditor 
        initialCode={`function Card({ children }) {
  return <div className="card-box">{children}</div>;
}

// Usage
// <Card>
//   <h2>Title</h2>
//   <p>This is content inside.</p>
// </Card>`} 
        language="jsx" 
      />

      <div className={styles.navigationButtons}>
        <Link to="/course/react/class"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/react/events"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default ReactProps;