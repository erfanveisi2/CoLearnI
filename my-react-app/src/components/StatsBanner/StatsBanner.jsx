import React from 'react';
import styles from './StatsBanner.module.css';
import { FaCode } from 'react-icons/fa';

const StatsBanner = () => {
  // We'll create a repeatable chunk of the sentence to keep the code clean
  const sentenceChunk = (
    <>
      <span>best at mastering</span> <span className={styles.separator}></span>
      <span>Coding</span> <span className={styles.separator}></span>
      <span>We are</span> <span className={styles.separator}></span>
    </>
  );

  return (
    <section className={styles.statsSection}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {/* Increased from 4 to 8 repetitions to fill all screen sizes */}
          {sentenceChunk}
          {sentenceChunk}
          {sentenceChunk}
          {sentenceChunk}
          {sentenceChunk}
          {sentenceChunk}
          {sentenceChunk}
          {sentenceChunk}
        </div>
      </div>
      
      <div className={'container'}>
          <div className={styles.statsContainer}>
            <div className={styles.joinInfo}>
              <div className={styles.iconWrapper}>
                <FaCode size={24} />
              </div>
              <h2 className={styles.joinTitle}>Join To Something Big</h2>
            </div>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40M</span>
                <span className={styles.statLabel}>Learners</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>90+</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>99+</span>
                <span className={styles.statLabel}>Courses</span>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default StatsBanner;