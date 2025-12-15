import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Courses.module.css';

// --- Import Icons (with workaround) ---
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaCode } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { AiOutlineDatabase, AiOutlineRobot } from 'react-icons/ai';

// --- Define Course Data Locally for this Page ---
// AI Course Topics
const aiCourseData = [ { path: 'introduction' } ];
// HTML Course Topics
const htmlCourseData = [ { path: 'introduction' } ];
// CSS Course Topics
const cssCourseData = [ { path: 'introduction' } ];

// All Courses Catalog
const allCourses = [
  {
    id: 'ai', title: 'Introduction to AI',
    description: 'Learn the fundamentals...', basePath: '/course/introduction-to-ai', icon: AiOutlineRobot, topicsData: aiCourseData,
    isPremium: false,
  },
  {
    id: 'html', title: 'HTML',
    description: 'Build web pages...', basePath: '/course/html', icon: FaHtml5, topicsData: htmlCourseData,
    isPremium: false,
  },
  {
    id: 'css', title: 'CSS',
    description: 'Style web pages...', basePath: '/course/css', icon: FaCss3Alt, topicsData: cssCourseData,
    isPremium: false,
  },
  {
    id: 'javascript', title: 'JavaScript',
    description: 'Program web pages...', basePath: '/course/javascript', icon: FaJsSquare, topicsData: [],
    isPremium: false,
  },
  {
    id: 'python', title: 'Python',
    description: 'Versatile language...', basePath: '/course/python', icon: FaPython, topicsData: [],
    isPremium: false,
  },
  {
    id: 'react', title: 'React',
    description: 'Build user interfaces...', basePath: '/course/react', icon: FaReact, topicsData: [],
    isPremium: true,
  },
  {
    id: 'java', title: 'Java',
    description: 'Object-oriented language...', basePath: '/course/java',
    icon: FaCode, // Using FaCode as the workaround
    topicsData: [],
    isPremium: true,
  },
  {
    id: 'csharp', title: 'C#',
    description: '.NET development...', basePath: '/course/csharp',
    icon: FaCode, // Using FaCode as the workaround
    topicsData: [],
    isPremium: true,
  },
  {
    id: 'sql', title: 'SQL',
    description: 'Manage databases...', basePath: '/course/sql', icon: AiOutlineDatabase, topicsData: [],
    isPremium: true,
  },
];
// --- End of Data ---


const Courses = () => {
  return (
    <div className={styles.coursesPage}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1>All Courses</h1>
          <p>Browse our full catalog of subjects to start your learning journey.</p>
        </header>

        <div className={styles.courseGrid}>
          {allCourses.map((course) => {
            const IconComponent = course.icon;
            // Ensure topicsData exists and has at least one item before accessing path
            const firstTopicPath = (course.topicsData && course.topicsData.length > 0) ? course.topicsData[0].path : 'introduction';

            return (
              <Link
                to={`${course.basePath}/${firstTopicPath}`}
                key={course.id}
                className={styles.courseCard}
              >
                {course.isPremium && (
                  <div className={styles.premiumBadge}>Premium</div>
                )}
                <div className={styles.cardIcon}>
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className={styles.cardTitle}>{course.title}</h3>
                <p className={styles.cardDescription}>{course.description}</p>
                <span className={styles.startButton}>
                  Start Learning
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;