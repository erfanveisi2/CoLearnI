import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const AIWhatIs = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>What is AI?</h1>
      <p className={styles.introParagraph}>
        Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction.
      </p>

      <div className={styles.infoBox}>
        <p><strong>Simplest Definition:</strong> AI is building smart machines capable of performing tasks that typically require human intelligence.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Core Goals of AI</h2>
      <p>
        AI research focuses on creating systems that can perform specific tasks intelligently. The primary goals include:
      </p>
      <ul>
        <li><strong>Reasoning & Problem Solving:</strong> Developing algorithms that simulate step-by-step human reasoning to solve puzzles or make logical deductions.</li>
        <li><strong>Knowledge Representation:</strong> Storing information about the world in a way that a computer can use to solve complex tasks.</li>
        <li><strong>Learning (Machine Learning):</strong> Getting computers to learn from data and improve their performance without being explicitly programmed for every scenario.</li>
        <li><strong>Perception:</strong> Using sensors (like cameras and microphones) to understand the world (e.g., Computer Vision, Speech Recognition).</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Narrow AI vs. General AI</h2>
      <p>
        AI is generally categorized into two main types based on its capability:
      </p>

      <h3>1. Weak or Narrow AI (ANI)</h3>
      <p>
        This is AI designed and trained for a <strong>specific task</strong>. Virtual personal assistants, such as Apple's Siri, are a form of weak AI. ALL current AI is considered Narrow AI.
      </p>
      <ul>
        <li><strong>Examples:</strong> Google Search algorithms, image recognition software, self-driving cars, ChatGPT.</li>
        <li><strong>Limitation:</strong> It cannot perform tasks outside of its specific programming or training.</li>
      </ul>

      <h3>2. Strong or General AI (AGI)</h3>
      <p>
        AGI is a theoretical form of AI where a machine would have an intelligence equal to humans. It would have a self-aware consciousness that has the ability to solve problems, learn, and plan for the future.
      </p>
      <div className={styles.infoBox}>
        <p><strong>Note:</strong> Artificial Superintelligence (ASI)—an intellect that is much smarter than the best human brains in practically every field—is the hypothetical stage after AGI.</p>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/introduction-to-ai/introduction" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/introduction-to-ai/history-of-ai" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default AIWhatIs;