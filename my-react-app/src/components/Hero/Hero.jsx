import React from 'react';
import styles from './Hero.module.css';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // 1. Import Link

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={'container'}>
        <div className={styles.heroContent}>
            <h1 className={styles.title}>
              /* We Teach You <span className={styles.highlight}>Coding</span> */
            </h1>
            <div className={styles.subContent}>
              <p className={styles.subtitle}>Start Coding and Build Your Future:</p>
              <p className={styles.description}>
                Learn to Create Websites, Apps, and Software from Scratch with Our Expert-Guided Courses
              </p>
              
              {/* 2. Replace <button> with <Link> */}
              <Link to="/courses" className={styles.exploreButton}>
                Explore more <FiArrowRight />
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;