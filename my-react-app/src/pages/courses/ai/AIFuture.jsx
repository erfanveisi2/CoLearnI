import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';
import { FiBookOpen, FiShoppingCart } from 'react-icons/fi';

const AIFuture = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>The Future of AI</h1>
      <p className={styles.introParagraph}>
        We are likely only in the very early stages of the AI revolution. The future holds immense potential for both positive transformation and significant risk.
      </p>

      <h2 className={styles.subsectionTitle}>Artificial General Intelligence (AGI)</h2>
      <p>
        The "Holy Grail" of AI research is AGI—an AI that has the same flexible, general intelligence as a human. It could learn any intellectual task that a human can.
      </p>
      <p>
        Estimates for when AGI might arrive vary wildly, from within the next decade to never.
      </p>

      <h2 className={styles.subsectionTitle}>The Singularity</h2>
      <p>
        A hypothetical future point where technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization.
      </p>
      <p>
        This is often linked to an "intelligence explosion," where an AGI becomes capable of recursively improving itself, rapidly becoming an Artificial Superintelligence (ASI) far beyond human capability.
      </p>

      <h2 className={styles.subsectionTitle}>AI as a Partner, Not a Replacement</h2>
      <p>
        A more immediate and likely future is "Intelligence Augmentation" (IA). Instead of replacing humans, AI will be used as a powerful tool to enhance human capabilities—helping doctors diagnose better, scientists discover faster, and artists create more freely.
      </p>

      <div className={styles.infoBox}>
        <p><strong>Final Thought:</strong> The future of AI is not predetermined. It is up to researchers, policymakers, and society as a whole to guide its development toward beneficial outcomes for humanity.</p>
      </div>

      <hr className={styles.separator} />

      {/* --- BOOK RECOMMENDATIONS --- */}
      <h2 className={styles.subsectionTitle}>📚 Recommended Reading</h2>
      <p>Want to dive deeper? Here are some of the best books to continue your AI journey.</p>

      <div className={styles.resourcesGrid}>
        {/* Paid Books */}
        <div className={styles.resourceCard}>
          <h3><FiShoppingCart /> Best Paid Books</h3>
          <ul>
            <li>
              <strong><a href="https://www.penguin.co.uk/books/288272/life-30-by-tegmark-max/9780141981802" target="_blank" rel="noopener noreferrer">Life 3.0</a></strong> by Max Tegmark<br/>
              A fascinating look at the future of AI and its impact on being human.
            </li>
            <li>
              <strong><a href="https://global.oup.com/academic/product/superintelligence-9780199678112" target="_blank" rel="noopener noreferrer">Superintelligence</a></strong> by Nick Bostrom<br/>
              A deep dive into the risks and strategies for managing advanced AI.
            </li>
            <li>
              <strong><a href="https://www.deeplearningbook.org/" target="_blank" rel="noopener noreferrer">Deep Learning</a></strong> by Ian Goodfellow<br/>
              The definitive textbook for technical understanding (Advanced).
            </li>
          </ul>
        </div>

        {/* Free Resources */}
        <div className={styles.resourceCard} style={{borderColor: '#28a745'}}>
          <h3><FiBookOpen /> Free Resources</h3>
          <ul>
            <li>
              <strong><a href="http://aima.cs.berkeley.edu/" target="_blank" rel="noopener noreferrer">Artificial Intelligence: A Modern Approach</a></strong><br/>
              The standard university textbook. The official site offers chapters and code.
            </li>
            <li>
              <strong><a href="https://www.fast.ai/" target="_blank" rel="noopener noreferrer">Fast.ai</a></strong><br/>
              Completely free, top-tier practical deep learning courses.
            </li>
            <li>
              <strong><a href="https://arxiv.org/list/cs.AI/recent" target="_blank" rel="noopener noreferrer">arXiv.org</a></strong><br/>
              The latest cutting-edge research papers (free).
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/introduction-to-ai/ethics" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/courses" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Finish Course 🏁</button>
        </Link>
      </div>
    </div>
  );
};

export default AIFuture;