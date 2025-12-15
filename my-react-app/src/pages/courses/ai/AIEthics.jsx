import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const AIEthics = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>AI Ethics & Challenges</h1>
      <p className={styles.introParagraph}>
        As AI systems become more integrated into daily life, they raise complex ethical questions and societal challenges that we must address.
      </p>

      <h2 className={styles.subsectionTitle}>1. Bias and Fairness</h2>
      <p>
        AI models are trained on data created by humans. If that data contains historical biases (race, gender, age), the AI will learn and amplify those biases.
      </p>
      <ul>
        <li><strong>Example:</strong> An AI hiring tool might unfairly downgrade resumes from women if it was trained on past hiring data from a male-dominated industry.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>2. Privacy and Surveillance</h2>
      <p>
        AI systems, especially facial recognition, can be used for mass surveillance, potentially eroding individual privacy and civil liberties.
      </p>

      <h2 className={styles.subsectionTitle}>3. Job Displacement</h2>
      <p>
        While AI will create new jobs, it will likely automate many existing ones, particularly routine cognitive tasks. Society needs to plan for retraining and supporting displaced workers.
      </p>

      <h2 className={styles.subsectionTitle}>4. "Black Box" Problem (Explainability)</h2>
      <p>
        Many deep learning models are so complex that even their creators don't fully understand <em>why</em> they made a specific decision.
      </p>
      <p>
        This is a major problem in high-stakes fields like medicine or criminal justice. If an AI denies you a loan, you have a right to know why.
      </p>

      <h2 className={styles.subsectionTitle}>5. Misinformation & Deepfakes</h2>
      <p>
        Generative AI makes it easy to create highly realistic fake videos (deepfakes), audio, and text, which can be used to spread misinformation or commit fraud.
      </p>

      <div className={styles.navigationButtons}>
        <Link to="/course/introduction-to-ai/computer-vision" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/introduction-to-ai/future" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default AIEthics;