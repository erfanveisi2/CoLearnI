import React from 'react';
import { Link } from 'react-router-dom';
import TryItYourselfEditor from '../../../components/TryItYourselfEditor/TryItYourselfEditor';
import styles from '../CourseContent.module.css';

const ReactClass = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>React Class Components</h1>
      <p className={styles.introParagraph}>
        Before React 16.8 (Hooks), Class components were the only way to track state and lifecycle. 
        While you should use Functions for new code, you will encounter Classes in older codebases.
      </p>

      <h2 className={styles.subsectionTitle}>Creating a Class Component</h2>
      <p>
        A class component must include the <code>extends React.Component</code> statement. 
        This inheritance gives your component access to React.Component's functions.
        The component also requires a <code>render()</code> method, this method returns HTML.
      </p>

      <TryItYourselfEditor 
        initialCode={`class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}`} 
        language="jsx" 
      />

      <h2 className={styles.subsectionTitle}>The Constructor</h2>
      <p>
        If there is a <code>constructor()</code> function in your component, this function will be called when the component gets initiated.
        The constructor is where you initiate the component's properties.
      </p>
      <p>
        You <strong>must</strong> call <code>super(props)</code> before anything else, otherwise <code>this.props</code> will be undefined.
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

      <h2 className={styles.subsectionTitle}>State in Classes</h2>
      <p>
        State is where you store property values that belong to the component. When the state object changes, the component re-renders.
        Unlike Hooks where you can have multiple state variables, in Classes, <code>state</code> is always one single object.
      </p>

      <h2 className={styles.subsectionTitle}>Lifecycle Methods</h2>
      <p>Class components rely on specific methods that run at specific times:</p>
      <ul className={styles.list}>
        <li><strong>componentDidMount()</strong>: Runs after the component is rendered. Good for API calls.</li>
        <li><strong>componentDidUpdate()</strong>: Runs after the state changes.</li>
        <li><strong>componentWillUnmount()</strong>: Runs before the component is removed from the DOM (Cleanup).</li>
      </ul>

      <h2 className={styles.subsectionTitle}>The 'this' Keyword Issue</h2>
      <p>
        In JavaScript classes, methods are not bound by default. If you forget to bind <code>this.handleClick</code> and pass it to <code>onClick</code>, 
        <code>this</code> will be undefined when the function is actually called. This was a major pain point resolved by Function components.
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/course/react/components"><button className={styles.prevButton}>❮ Previous</button></Link>
        <Link to="/course/react/props"><button className={styles.nextButton}>Next ❯</button></Link>
      </div>
    </div>
  );
};

export default ReactClass;