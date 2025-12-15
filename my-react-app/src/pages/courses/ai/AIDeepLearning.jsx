import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const AIDeepLearning = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Deep Learning</h1>
      <p className={styles.introParagraph}>
        Deep Learning is a specialized subset of Machine Learning inspired by the structure and function of the human brain, known as Artificial Neural Networks.
      </p>

      <div className={styles.infoBox}>
        <p><strong>Relationship:</strong> AI &gt; Machine Learning &gt; Deep Learning. All deep learning is ML, but not all ML is deep learning.</p>
      </div>

      <h2 className={styles.subsectionTitle}>Artificial Neural Networks (ANNs)</h2>
      <p>
        Deep learning uses multi-layered neural networks to solve complex problems. "Deep" refers to the number of hidden layers in the network.
      </p>
      <ul>
        <li><strong>Input Layer:</strong> Receives the raw data (e.g., pixels of an image).</li>
        <li><strong>Hidden Layers:</strong> Intermediate layers where the "magic" happens. They perform mathematical computations to extract features (edges, textures, shapes). Modern networks can have hundreds of these layers.</li>
        <li><strong>Output Layer:</strong> Provides the final prediction or classification (e.g., "95% chance this is a dog").</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Why is Deep Learning Popular Now?</h2>
      <ol>
        <li><strong>Data Availability:</strong> We generate massive amounts of data every day (Big Data), which deep learning models need to train.</li>
        <li><strong>Computing Power:</strong> GPUs (Graphics Processing Units), originally designed for gaming, are incredibly good at the matrix math required for deep learning.</li>
        <li><strong>Better Algorithms:</strong> Researchers have improved how these networks learn, preventing them from getting stuck during training.</li>
      </ol>

      <h2 className={styles.subsectionTitle}>Applications of Deep Learning</h2>
      <p>
        Deep learning is responsible for most of the recent "breakthroughs" in AI:
      </p>
      <ul>
        <li>Advanced facial recognition.</li>
        <li>High-quality machine translation (like DeepL).</li>
        <li>Generative AI (creating realistic art from text).</li>
        <li>Self-driving car perception systems.</li>
      </ul>

      <div className={styles.navigationButtons}>
        <Link to="/course/introduction-to-ai/machine-learning" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/introduction-to-ai/nlp" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default AIDeepLearning;