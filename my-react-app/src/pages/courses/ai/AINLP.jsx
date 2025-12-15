import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CourseContent.module.css';

const AINLP = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Natural Language Processing (NLP)</h1>
      <p className={styles.introParagraph}>
        Natural Language Processing (NLP) is the branch of AI that gives computers the ability to understand, interpret, and generate human language in a valuable way.
      </p>

      <h2 className={styles.subsectionTitle}>Why is NLP Hard?</h2>
      <p>
        Human language is messy, ambiguous, and full of rules, exceptions, slang, and context.
      </p>
      <ul>
        <li><strong>Ambiguity:</strong> "I saw the man with the telescope." Did I have the telescope, or did the man?</li>
        <li><strong>Sarcasm & Irony:</strong> Extremely difficult for machines to detect.</li>
        <li><strong>Context:</strong> The word "bank" means something different in "river bank" vs. "savings bank."</li>
      </ul>

      <h2 className={styles.subsectionTitle}>Key NLP Tasks</h2>
      <p>
        Modern AI uses powerful Large Language Models (LLMs) like GPT-4 to handle these tasks with amazing accuracy.
      </p>
      <ul>
        <li><strong>Sentiment Analysis:</strong> Determining the emotional tone behind words (e.g., analyzing tweets to see if people are happy or angry about a product).</li>
        <li><strong>Machine Translation:</strong> Translating text from one language to another fluently.</li>
        <li><strong>Named Entity Recognition (NER):</strong> Identifying and classifying key information in text (names of people, organizations, locations, dates).</li>
        <li><strong>Text Summarization:</strong> Creating a short, accurate summary of a longer document.</li>
        <li><strong>Chatbots & Virtual Assistants:</strong> Understanding spoken or typed queries and responding naturally.</li>
      </ul>

      <div className={styles.infoBox}>
        <p><strong>LLMs:</strong> Large Language Models are trained on vast amounts of text data to predict the next word in a sequence, allowing them to generate highly coherent human-like text.</p>
      </div>

      <div className={styles.navigationButtons}>
        <Link to="/course/introduction-to-ai/deep-learning" style={{textDecoration: 'none'}}>
            <button className={styles.prevButton}>❮ Previous</button>
        </Link>
        <Link to="/course/introduction-to-ai/computer-vision" style={{textDecoration: 'none'}}>
            <button className={styles.nextButton}>Next ❯</button>
        </Link>
      </div>
    </div>
  );
};

export default AINLP;