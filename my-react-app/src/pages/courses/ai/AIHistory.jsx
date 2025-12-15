import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const AIHistory = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>History of AI</h1>
      <p className={styles.introParagraph}>
        The quest to create intelligent machines has a long history, blending mythology, philosophy, and eventually, modern computer science.
      </p>

      <h2 className={styles.subsectionTitle}>The Birth of AI (1950-1956)</h2>
      <ul>
        <li><strong>1950: Alan Turing</strong> publishes "Computing Machinery and Intelligence," proposing the famous <strong>Turing Test</strong> to determine if a machine can "think."</li>
        <li><strong>1956: The Dartmouth Conference</strong> takes place. John McCarthy coins the term "Artificial Intelligence." This is widely considered the birth of the field. Early enthusiasm was high, with predictions that machines would soon do any work a man could do.</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Early Successes & The First "AI Winter" (1957-1974)</h2>
      <p>
        Researchers created programs that could solve algebra word problems, prove geometric theorems, and learn to speak English.
      </p>
      <p>
        However, progress stalled. The computers were too slow and had too little memory to handle useful real-world tasks. Funding dried up, leading to the first <strong>"AI Winter"</strong>—a period of reduced funding and interest.
      </p>

      <h2 className={styles.subsectionTitle}>Expert Systems Boom (1980-1987)</h2>
      <p>
        AI research was revived by the commercial success of "expert systems." These were programs that simulated the knowledge and analytical skills of human experts in specific fields (like diagnosing blood infections).
      </p>

      <h2 className={styles.subsectionTitle}>The Deep Learning Revolution (2010s-Present)</h2>
      <p>
        The availability of massive amounts of data ("Big Data") and powerful GPUs (graphics processors) made it possible to train massive neural networks.
      </p>
      <ul>
        <li><strong>2012:</strong> AlexNet, a deep neural network, wins the ImageNet competition by a huge margin, proving the power of deep learning for vision.</li>
        <li><strong>2016:</strong> Google DeepMind's AlphaGo defeats world champion Lee Sedol at the complex game of Go.</li>
        <li><strong>2020s:</strong> The rise of Generative AI (GPT-3, DALL-E, Stable Diffusion) brings AI into mainstream creative tools.</li>
      </ul>

      <div className={styles.infoBox}>
        <p><strong>Key Takeaway:</strong> AI history is a cycle of immense hype followed by periods of disappointment, leading eventually to the massive breakthroughs we see today.</p>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/introduction-to-ai/what-is-ai" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/introduction-to-ai/types-of-ai" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default AIHistory;