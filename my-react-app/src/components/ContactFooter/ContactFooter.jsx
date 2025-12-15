import React from 'react';
import styles from './ContactFooter.module.css';
import { FiSend, FiArrowUp } from 'react-icons/fi';

const ContactFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container`}>
          <div className={styles.footerContainer}>
            <div className={styles.infoSection}>
              <h2 className={styles.title}>
                {`//`}<span>Start</span> Coding and Build Your Future
              </h2>
              <p className={styles.subText}>
                Feel free to give us a call if you have a more urgent matter.
              </p>
              <div className={styles.contactDetails}>
                <p>Contact us</p>
                <p className={styles.phone}>+965 60075148</p>
                <p className={styles.email}>colearni.tech@gmail.com</p>
              </div>
            </div>
            <div className={styles.formSection}>
              <form>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
                <button type="submit" className={styles.sendButton}>
                  <FiSend /> Send Message
                </button>
              </form>
            </div>
        </div>
      </div>
       <button className={styles.scrollToTopButton} onClick={scrollToTop}>
        <FiArrowUp />
      </button>
    </footer>
  );
};

export default ContactFooter;