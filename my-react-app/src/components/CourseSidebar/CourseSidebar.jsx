import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './CourseSidebar.module.css';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';

const CourseSidebar = ({ courseTitle, courseData, completedTopics, onToggleComplete }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const basePath = location.pathname.split('/').slice(0, 3).join('/');
  const courseId = basePath.split('/').pop();

  // Check if all topics are completed
  const allCompleted = courseData.length > 0 && 
    completedTopics && 
    completedTopics.length === courseData.length;

  const handleFinalTestClick = () => {
    // Map internal courseId to route courseId (ai -> introduction-to-ai)
    let routeCourseId = courseId;
    if (courseId === 'ai') {
      routeCourseId = 'introduction-to-ai';
    }
    navigate(`/course/${routeCourseId}/final-test`);
  };

  return (
    <nav className={styles.sidebarNav}>
      <h3 className={styles.courseTitle}>{courseTitle}</h3>
      <ul className={styles.topicList}>
        {courseData.map((topic, index) => {
          const isCompleted = completedTopics && completedTopics.includes(topic.path);
          
          return (
            <li key={index} className={styles.topicItem}>
              {/* Checkbox / Icon */}
              <button 
                className={styles.checkButton} 
                onClick={() => onToggleComplete(topic.path)}
                title={isCompleted ? "Mark as incomplete" : "Mark as complete"}
              >
                {isCompleted ? <FiCheckCircle className={styles.checked} /> : <FiCircle className={styles.unchecked} />}
              </button>

              <NavLink 
                to={`${basePath}/${topic.path}`} 
                className={({ isActive }) => 
                  isActive ? `${styles.topicLink} ${styles.active}` : styles.topicLink
                }
              >
                {topic.title}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* Final Test Button */}
      <div className={styles.finalTestSection}>
        <button 
          className={`${styles.finalTestButton} ${allCompleted ? styles.enabled : styles.disabled}`}
          onClick={handleFinalTestClick}
          disabled={!allCompleted}
          title={allCompleted ? "Take the final test" : "Complete all lessons first"}
        >
          <span className={styles.testIcon}>🏆</span>
          <span className={styles.testText}>Final Test</span>
          {!allCompleted && (
            <span className={styles.lockIcon}>🔒</span>
          )}
        </button>
        {!allCompleted && (
          <p className={styles.testHint}>
            Complete all {courseData.length} lessons to unlock
          </p>
        )}
      </div>
    </nav>
  );
};

export default CourseSidebar;