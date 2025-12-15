import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import FinalTest from '../components/FinalTest/FinalTest';
import { testQuestions } from '../data/testQuestions';
import { courseDataConfig } from '../data/courseData';
import styles from './CourseFinalTest.module.css';

const CourseFinalTest = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const [canTakeTest, setCanTakeTest] = useState(false);
  const [loading, setLoading] = useState(true);
  const [alreadyPassed, setAlreadyPassed] = useState(false);

  const courseNames = {
    html: 'HTML Fundamentals',
    css: 'CSS Styling',
    javascript: 'JavaScript Programming',
    python: 'Python Programming',
    react: 'React Development',
    java: 'Java Programming',
    csharp: 'C# Programming',
    sql: 'SQL Database',
    ai: 'Artificial Intelligence'
  };

  useEffect(() => {
    // Check if user is logged in
    if (!user) {
      navigate('/signin');
      return;
    }

    // Map route courseId to internal courseId (handle introduction-to-ai -> ai)
    let internalCourseId = courseId;
    if (courseId === 'introduction-to-ai') {
      internalCourseId = 'ai';
    }

    // Check if user already passed this test
    const testResult = user.testResults?.find(t => t.courseId === internalCourseId && t.passed);
    if (testResult) {
      setAlreadyPassed(true);
      setLoading(false);
      return;
    }

    // Check if user has completed all topics in this course
    const courseTopics = courseDataConfig[internalCourseId] || [];
    const userProgress = user.progress?.find(p => p.courseId === internalCourseId);
    const completedTopics = userProgress?.completedTopics || [];

    // User must complete all topics to take the test
    if (completedTopics.length >= courseTopics.length && courseTopics.length > 0) {
      setCanTakeTest(true);
    } else {
      setCanTakeTest(false);
    }

    setLoading(false);
  }, [user, courseId, navigate]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading test...</p>
      </div>
    );
  }

  if (alreadyPassed) {
    return (
      <div className={styles.messageContainer}>
        <div className={styles.messageCard}>
          <div className={styles.successIcon}>🎉</div>
          <h1>You've Already Passed!</h1>
          <p>You have already completed and passed the {courseNames[courseId]} final test.</p>
          <p>Your certificate is ready to view.</p>
          <div className={styles.actions}>
            <button 
              className={styles.primaryButton} 
              onClick={() => navigate(`/certificate/${courseId}`)}
            >
              📜 View Certificate
            </button>
            <button 
              className={styles.secondaryButton} 
              onClick={() => navigate('/courses')}
            >
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!canTakeTest) {
    // Map route courseId to internal courseId
    let internalCourseId = courseId;
    if (courseId === 'introduction-to-ai') {
      internalCourseId = 'ai';
    }

    const courseTopics = courseDataConfig[internalCourseId] || [];
    const userProgress = user.progress?.find(p => p.courseId === internalCourseId);
    const completedTopics = userProgress?.completedTopics || [];
    const remaining = courseTopics.length - completedTopics.length;

    return (
      <div className={styles.messageContainer}>
        <div className={styles.messageCard}>
          <div className={styles.warningIcon}>⚠️</div>
          <h1>Complete All Lessons First</h1>
          <p>You need to complete all lessons before taking the final test.</p>
          <div className={styles.progressInfo}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${(completedTopics.length / courseTopics.length) * 100}%` }}
              ></div>
            </div>
            <p className={styles.progressText}>
              {completedTopics.length} / {courseTopics.length} lessons completed
            </p>
            <p className={styles.remainingText}>
              {remaining} lesson{remaining !== 1 ? 's' : ''} remaining
            </p>
          </div>
          <div className={styles.actions}>
            <button 
              className={styles.primaryButton} 
              onClick={() => navigate(`/course/${courseId}`)}
            >
              Continue Learning
            </button>
            <button 
              className={styles.secondaryButton} 
              onClick={() => navigate('/courses')}
            >
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Get questions for this course (map introduction-to-ai to ai)
  let internalCourseId = courseId;
  if (courseId === 'introduction-to-ai') {
    internalCourseId = 'ai';
  }
  const questions = testQuestions[internalCourseId];

  if (!questions || questions.length === 0) {
    return (
      <div className={styles.messageContainer}>
        <div className={styles.messageCard}>
          <div className={styles.errorIcon}>❌</div>
          <h1>Test Not Available</h1>
          <p>The final test for this course is not yet available.</p>
          <button 
            className={styles.primaryButton} 
            onClick={() => navigate('/courses')}
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <FinalTest 
      courseId={courseId}
      courseName={courseNames[courseId]}
      questions={questions}
    />
  );
};

export default CourseFinalTest;
