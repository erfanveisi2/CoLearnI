import React from 'react';
import styles from './CourseContent.module.css'; // Reuse existing styles
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className={styles.courseContentSection}>
      <h1 className={styles.sectionTitle}>Content Coming Soon!</h1>
      <p className={styles.introParagraph}>
        This lesson is currently under development. Please check back later!
      </p>
      <Link to="/courses" style={{textDecoration: 'none'}}>
        <button className={styles.nextButton}>Back to All Courses</button>
      </Link>
    </div>
  );
};

export default ComingSoon;