import React, { useState } from 'react';
import styles from './WhyUs.module.css';
import { FiArrowRight } from 'react-icons/fi';
import whyUsPyramidGraphic from '../../assets/whyus_pyramid.png'; 

// Data for the slides
const slidesData = [
  {
    title: 'AI-Assisted Learning',
    description: 'Our AI-Assisted Learning feature enhances your coding education with personalized, real-time support.',
    link: "Here's how it works",
    features: [
      { title: 'Personalized Learning Paths', text: 'Tailors your curriculum based on your skill level and learning style.' },
      { title: 'Real-Time Code Assistance', text: 'Provides instant feedback to help you understand and fix errors.' },
      { title: 'Intelligent Problem Solving', text: 'Suggests alternative approaches to coding challenges.' },
      { title: 'Adaptive Practice Exercises', text: 'Adjusts exercises based on your progress to keep you challenged.' },
    ]
  },
  {
    title: 'Community Support',
    description: 'Get help and collaborate with a vibrant community of learners and mentors.',
    link: "Explore the community",
    features: [
      { title: 'Active Q&A Forums', text: 'Ask questions and get answers from peers and experts 24/7.' },
      { title: 'Peer Code Reviews', text: 'Submit your projects for constructive feedback from other students.' },
      { title: 'Study Groups', text: 'Join groups focused on specific languages or goals to learn together.' },
      { title: 'Expert Mentorship', text: 'Paid users get access to one-on-one help from industry veterans.' },
    ]
  },
  {
    title: 'Hands-On Projects',
    description: 'Build your portfolio as you learn with real-world projects and challenges.',
    link: "See project examples",
    features: [
      { title: 'Guided Projects', text: 'Follow along with expert-led projects from start to finish.' },
      { title: 'Open-Ended Challenges', text: 'Test your skills by building complex applications with real-world specs.' },
      { title: 'Career-Ready Portfolio', text: 'Graduate with a portfolio of projects that showcase your abilities to employers.' },
      { title: 'Live Sandboxes', text: 'Code directly in your browser with our integrated development environment.' },
    ]
  },
  {
    title: 'Trackable Progress',
    description: 'Stay motivated by visualizing your learning journey and celebrating your achievements.',
    link: "View a sample profile",
    features: [
      { title: 'Detailed Dashboard', text: 'See your progress per language, topic, and lesson at a glance.' },
      { title: 'Learning Streaks', text: 'Build a habit and maintain your coding streak every day.' },
      { title: 'Reputation & Badges', text: 'Earn points and badges for completing lessons and helping others.' },
      { title: 'Quiz Score Tracking', text: 'Review your quiz history to identify and strengthen weak spots.' },
    ]
  }
];

const WhyUs = () => {
  // State to track the current active slide index
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlideData = slidesData[activeSlide];

  return (
    <section className={styles.whyUsSection}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.preTitle}>/The platform/</p>
          <h2 className={styles.title}>Why <span>✱</span> Us?</h2>
        </div>

        <div className={styles.contentWrapper}>
          
          <div className={styles.textContainer}>
            
            {/* This 'key' is the magic for the animation.
              When 'activeSlide' changes, React sees a new key and
              remounts this div, which re-plays the CSS fade-in animation.
            */}
            <div key={activeSlide} className={styles.slideContent}>
              <h3 className={styles.featureTitle}>{currentSlideData.title}</h3>
              <p className={styles.description}>
                Our <a href="#ai" className={styles.highlight}>{currentSlideData.title}</a> feature enhances your coding education with personalized, real-time support.
              </p>
              <a href="#how-it-works" className={styles.link}>
                {currentSlideData.link} <FiArrowRight />
              </a>
              
              <ul className={styles.featureList}>
                {currentSlideData.features.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.title}</strong><br/>
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pagination dots */}
            <div className={styles.paginationDots}>
              {slidesData.map((slide, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${activeSlide === index ? styles.active : ''}`}
                  onClick={() => setActiveSlide(index)} // Click handler to change the slide
                />
              ))}
            </div>
          </div>

          <div className={styles.graphicContainer}>
            <img 
              src={whyUsPyramidGraphic} 
              alt="Abstract graphic representing AI learning" 
              className={styles.graphic}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;