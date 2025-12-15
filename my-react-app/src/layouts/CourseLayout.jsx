import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, Link, Navigate } from 'react-router-dom';
import CourseSidebar from '../components/CourseSidebar/CourseSidebar';
import styles from './CourseLayout.module.css';
import { useUser } from '../context/UserContext';

const CourseLayout = ({ courseTitle, courseData, courseId, isPremium }) => {
  const { user, fetchUser } = useUser();
  const [completedTopics, setCompletedTopics] = useState([]);
  const [trackingError, setTrackingError] = useState('');
  const location = useLocation();

  // Check if course is premium and user doesn't have access
  const hasPremiumAccess = user && (user.role === 'PAID' || user.role === 'EXPERT');
  const shouldBlockAccess = isPremium && !hasPremiumAccess;
  
  // Debug logging
  useEffect(() => {
    console.log('CourseLayout - User:', user);
    console.log('CourseLayout - User Role:', user?.role);
    console.log('CourseLayout - Is Premium Course:', isPremium);
    console.log('CourseLayout - Has Premium Access:', hasPremiumAccess);
    console.log('CourseLayout - Should Block Access:', shouldBlockAccess);
  }, [user, isPremium, hasPremiumAccess, shouldBlockAccess]);

  useEffect(() => {
    if (user && user.progress) {
      const courseProg = user.progress.find(p => p.courseId === courseId);
      if (courseProg) {
        setCompletedTopics(courseProg.completedTopics);
      } else {
        setCompletedTopics([]);
      }
    } else {
      setCompletedTopics([]);
    }
  }, [user, courseId]);

  const toggleComplete = async (topicPath) => {
    const token = localStorage.getItem('token');
    
    // 1. Check Login
    if (!token) {
      setTrackingError('Please log in to save progress.');
      setTimeout(() => setTrackingError(''), 3000);
      return;
    }

    // --- 2. NEW: Check Sequential Order ---
    // Find where this topic is in the list
    const currentIndex = courseData.findIndex(t => t.path === topicPath);

    // If it's NOT the first lesson...
    if (currentIndex > 0) {
      const prevTopic = courseData[currentIndex - 1];
      
      // ...and the previous lesson is NOT complete...
      if (!completedTopics.includes(prevTopic.path)) {
        // ...Block the action and show error
        setTrackingError(`Please complete "${prevTopic.title}" first!`);
        setTimeout(() => setTrackingError(''), 3000);
        return;
      }
    }
    // --------------------------------------

    try {
      const res = await fetch('http://localhost:5001/api/user/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({ courseId, topicPath })
      });

      if (res.ok) {
        await fetchUser(); 
        setTrackingError(''); 
      }
    } catch (err) {
      console.error(err);
    }
  };

  // If course is premium and user doesn't have access, show upgrade message
  if (shouldBlockAccess) {
    return (
      <div className={styles.coursePageContainer}>
        <div className={styles.premiumBlockContainer}>
          <div className={styles.premiumBlockContent}>
            <div className={styles.lockIcon}>🔒</div>
            <h1>Premium Course</h1>
            <p>This course is only available to premium members.</p>
            <p>Upgrade your account to access all premium courses and exclusive content.</p>
            <div className={styles.premiumButtons}>
              <Link to="/upgrade" className={styles.upgradeButton}>
                Upgrade to Premium
              </Link>
              {!user && (
                <Link to="/signin" className={styles.signInButton}>
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.coursePageContainer}>
      <aside className={styles.sidebar}>

        {/* Display error message */}
        {trackingError && (
          <div className={styles.errorToast}>
            {trackingError.includes('log in') ? (
               <>{trackingError} <Link to="/signin">Sign in</Link></>
            ) : (
               // Just show text for sequential errors
               trackingError
            )}
          </div>
        )}

        <CourseSidebar
          courseTitle={courseTitle}
          courseData={courseData}
          completedTopics={completedTopics}
          onToggleComplete={toggleComplete}
        />
      </aside>
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default CourseLayout;