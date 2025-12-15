import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PopularCourses.module.css';
import { FaCertificate, FaRegClock, FaUserFriends } from 'react-icons/fa';

const coursesData = [
    {
        id: 1,
        tag: 'Free',
        title: 'Introduction to AI',
        description: 'Learn the fundamentals of Artificial Intelligence, including machine learning, deep learning, NLP, and computer vision.',
        level: 'Beginner friendly',
        duration: '3 Hours',
        link: '/course/introduction-to-ai/introduction',
        category: ['Free', 'AI', 'Recomended']
    },
    {
        id: 2,
        tag: 'Free',
        title: 'HTML',
        description: 'Master the standard markup language for creating web pages. Learn HTML elements, attributes, and structure.',
        level: 'Beginner friendly',
        duration: '2 Hours',
        link: '/course/html/introduction',
        category: ['Free', 'Web Development', 'New to coding', 'Recomended']
    },
    {
        id: 3,
        tag: 'Free',
        title: 'CSS',
        description: 'Learn to style your web pages with CSS. Master selectors, colors, backgrounds, borders, and layouts.',
        level: 'Beginner friendly',
        duration: '2 Hours',
        link: '/course/css/introduction',
        category: ['Free', 'Web Development', 'New to coding', 'Recomended']
    },
    {
        id: 4,
        tag: 'Free',
        title: 'JavaScript',
        description: 'Build interactive web applications with JavaScript. Learn variables, operators, functions, and more.',
        level: 'Beginner friendly',
        duration: '3 Hours',
        link: '/course/javascript/introduction',
        category: ['Free', 'Web Development', 'Recomended']
    },
    {
        id: 5,
        tag: 'Free',
        title: 'Python',
        description: 'Start your programming journey with Python. Learn syntax, variables, data types, and more.',
        level: 'Beginner friendly',
        duration: '3 Hours',
        link: '/course/python/introduction',
        category: ['Free', 'Programming', 'New to coding', 'Recomended']
    },
    {
        id: 6,
        tag: 'Premium',
        title: 'React',
        description: 'Build modern user interfaces with React. Learn components, props, JSX, and state management.',
        level: 'Intermediate',
        duration: '4 Hours',
        link: '/course/react/introduction',
        isPremium: true,
        category: ['Premium', 'Web Development', 'Recomended']
    },
    {
        id: 7,
        tag: 'Premium',
        title: 'Java',
        description: 'Learn Java programming fundamentals. Master syntax, variables, data types, and object-oriented concepts.',
        level: 'Beginner friendly',
        duration: '4 Hours',
        link: '/course/java/introduction',
        isPremium: true,
        category: ['Premium', 'Programming', 'New to coding']
    },
    {
        id: 8,
        tag: 'Premium',
        title: 'C#',
        description: 'Get started with C# programming. Learn syntax, variables, data types, and basic programming concepts.',
        level: 'Beginner friendly',
        duration: '3 Hours',
        link: '/course/csharp/introduction',
        isPremium: true,
        category: ['Premium', 'Programming']
    },
    {
        id: 9,
        tag: 'Premium',
        title: 'SQL',
        description: 'Master database management with SQL. Learn to query, manipulate, and manage relational databases.',
        level: 'Beginner friendly',
        duration: '2 Hours',
        link: '/course/sql/introduction',
        isPremium: true,
        category: ['Premium', 'Database', 'Recomended']
    }
];

const CourseCard = ({ course }) => (
  <Link to={course.link} className={styles.cardLink}>
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={`${styles.tag} ${styles[course.tag.toLowerCase()]}`}>{course.tag}</span>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{course.title}</h3>
        <p className={styles.cardDescription}>{course.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.footerItem}><FaUserFriends /> {course.level}</div>
        <div className={styles.footerItem}><FaRegClock /> {course.duration}</div>
        {course.isCertificated && <div className={styles.footerItem}><FaCertificate /> Certificated</div>}
      </div>
    </div>
  </Link>
);

const PopularCourses = () => {
  const [activeTab, setActiveTab] = useState('Recomended');
  const tabs = ['Recomended', 'Free', 'Premium', 'New to coding', 'Web Development', 'Programming', 'AI', 'Database'];

  return (
    <section className={styles.coursesSection}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.preTitle}>/Take a look at/</p>
          <h2 className={styles.title}>Popular <span>Courses</span></h2>
        </div>
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.cardGrid}>
          {coursesData.filter(c => c.category.includes(activeTab)).map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className={styles.exploreContainer}>
          <Link to="/courses">
            <button className={styles.exploreButton}>Explore more</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;