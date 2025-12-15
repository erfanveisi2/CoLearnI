import React from 'react';
import styles from './Testimonials.module.css';

// Updated data array to hold only your testimonial
const testimonialData = [
  {
    name: 'Erfan Veisi',
    text: "I'm doing this for my graduation project and I started coding and I always had this dream to teach everyone coding"
  }
];

const TestimonialCard = ({ name, text }) => (
  <div className={styles.card}>
    <div className={styles.textContainer}>
      <h3 className={styles.name}>{`/${name}/`}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.preTitle}>/Here's some/</p>
          <h2 className={styles.title}>Testimonials</h2>
        </div>
        <div className={styles.grid}>
          {testimonialData.map(t => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;