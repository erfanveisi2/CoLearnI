import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const AITypes = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Types of AI</h1>
      <p className={styles.introParagraph}>
        Beyond Narrow vs. General AI, Artificial Intelligence can also be categorized into four types based on functionality, as proposed by Arend Hintze.
      </p>

      <h2 className={styles.subsectionTitle}>Type 1: Reactive Machines</h2>
      <p>
        These are the most basic types of AI. They do not have memories and cannot use past experiences to inform current decisions. They only react to currently existing situations.
      </p>
      <ul>
        <li><strong>Example:</strong> IBM's Deep Blue chess-playing supercomputer. It could identify pieces on a chessboard and know how each moves, but it had no concept of past games.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Type 2: Limited Memory</h2>
      <p>
        These AI systems can use past experiences to inform future decisions. Most of the practical AI applications we have today fall under this category.
      </p>
      <ul>
        <li><strong>Example:</strong> Self-driving cars. They observe other cars' speed and direction. This data is kept for a short period to decide when to change lanes, but it's not saved permanently as "experience."</li>
      </ul>

      <div className={styles.infoBox}>
        <p><strong>Note:</strong> Almost all modern Machine Learning and Deep Learning models are effectively Type 2 AI.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Type 3: Theory of Mind (Future AI)</h2>
      <p>
        This refers to AI that can understand that humans, animals, and other machines have thoughts, emotions, and intentions that affect their own behavior.
      </p>
      <p>
        To work with us effectively, future AI machines will have to be able to understand human emotions and adjust their behavior accordingly. This does not fully exist yet.
      </p>

      <h2 className={styles.subsectionTitle}>Type 4: Self-Awareness (Future AI)</h2>
      <p>
        The final step of AI development. These machines would have a sense of self and consciousness. They would understand their own state and be able to predict the feelings of others.
      </p>
      <p>
        For example, a "Theory of Mind" AI might understand that "something is blocking the road," but a Self-Aware AI would understand "I know that something is blocking the road, and I am experiencing frustration because of it."
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/course/introduction-to-ai/history-of-ai" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/introduction-to-ai/machine-learning" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default AITypes;