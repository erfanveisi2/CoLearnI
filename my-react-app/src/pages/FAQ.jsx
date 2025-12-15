import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { FiChevronDown } from 'react-icons/fi';

// Data for the FAQ
const faqData = [
  {
    question: 'What is CoLearnI?',
    answer: 'CoLearnI is an interactive, AI-powered platform designed to make learning to code accessible and engaging for everyone, from absolute beginners to seasoned developers.'
  },
  {
    question: 'Is CoLearnI free to use?',
    answer: 'We offer a robust free plan (NORMAL) that gives you access to all core learning features and the general community. We also offer a PAID plan that gives you access to the private Expert Community and more AI credits.'
  },
  {
    question: 'How do I become an EXPERT?',
    answer: 'You can apply to be an expert through our "Sign up as Expert" page. We review applications to ensure our experts are knowledgeable and can provide high-quality help to our PAID users.'
  },
  {
    question: 'How does the payment work for the Premium plan?',
    answer: 'We use Stripe, a secure and globally trusted payment processor. You can upgrade at any time from the "Upgrade" page. We accept all major credit cards in test mode with test card numbers.'
  },
  {
    question: 'Can I cancel my Premium subscription?',
    answer: 'Yes, you can manage your subscription at any time. Since this is a test project, your "PAID" status can be reset in the database, but in a real app, you would manage this through your user profile.'
  }
];

// Reusable Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={onClick}>
        <span>{question}</span>
        <FiChevronDown className={isOpen ? styles.iconOpen : ''} />
      </button>
      <div className={`${styles.faqAnswer} ${isOpen ? styles.answerOpen : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqPage}>
      <div className="container">
        <header className={styles.header}>
          <h1>Frequently Asked Questions</h1>
          <p>Have a question? We're here to help. Find answers to common questions below.</p>
        </header>

        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;