import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import styles from './Certificate.module.css';

const Certificate = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const certificateRef = useRef();
  const [certificateData, setCertificateData] = useState(null);

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
    if (!user) {
      navigate('/signin');
      return;
    }

    // Map route courseId to internal courseId (introduction-to-ai -> ai)
    let internalCourseId = courseId;
    if (courseId === 'introduction-to-ai') {
      internalCourseId = 'ai';
    }

    // Check if user has passed the test for this course
    const testResult = user.testResults?.find(t => t.courseId === internalCourseId && t.passed);
    
    if (!testResult) {
      navigate(`/course/${courseId}`);
      return;
    }

    setCertificateData({
      name: user.username || user.email,
      course: courseNames[internalCourseId] || courseId.toUpperCase(),
      date: new Date(testResult.completedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      score: testResult.score,
      certificateId: `${internalCourseId.toUpperCase()}-${user._id.slice(-8)}-${Date.now().toString().slice(-6)}`
    });
  }, [user, courseId, navigate]);

  const handleDownload = () => {
    // Create a canvas from the certificate
    const certificate = certificateRef.current;
    
    // Use html2canvas library (you'll need to install it)
    // For now, we'll use the browser's print functionality
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Certificate - ${certificateData?.course}`,
        text: `I just earned a certificate in ${certificateData?.course}!`,
        url: window.location.href
      }).catch(err => console.log('Error sharing:', err));
    } else {
      // Fallback: copy link to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Certificate link copied to clipboard!');
    }
  };

  if (!certificateData) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading your certificate...</p>
      </div>
    );
  }

  return (
    <div className={styles.certificateContainer}>
      <div className={styles.actions}>
        <button className={styles.actionButton} onClick={handleDownload}>
          📥 Download PDF
        </button>
        <button className={styles.actionButton} onClick={handleShare}>
          📤 Share
        </button>
        <button className={styles.actionButton} onClick={() => navigate('/profile')}>
          👤 View Profile
        </button>
      </div>

      <div className={styles.certificateWrapper} ref={certificateRef}>
        <div className={styles.certificate}>
          {/* Decorative Border */}
          <div className={styles.border}>
            <div className={styles.innerBorder}>
              
              {/* Header */}
              <div className={styles.header}>
                <div className={styles.logo}>🎓</div>
                <h1 className={styles.title}>Certificate of Completion</h1>
                <div className={styles.subtitle}>This certifies that</div>
              </div>

              {/* Recipient Name */}
              <div className={styles.recipientName}>
                {certificateData.name}
              </div>

              {/* Course Info */}
              <div className={styles.courseInfo}>
                <p className={styles.hasCompleted}>has successfully completed the course</p>
                <h2 className={styles.courseName}>{certificateData.course}</h2>
                <p className={styles.withScore}>with a score of <strong>{certificateData.score.toFixed(0)}%</strong></p>
              </div>

              {/* Date and Signature */}
              <div className={styles.footer}>
                <div className={styles.dateSection}>
                  <div className={styles.line}></div>
                  <p className={styles.label}>Date</p>
                  <p className={styles.value}>{certificateData.date}</p>
                </div>

                <div className={styles.seal}>
                  <div className={styles.sealInner}>
                    <div className={styles.sealText}>VERIFIED</div>
                    <div className={styles.sealIcon}>✓</div>
                  </div>
                </div>

                <div className={styles.signatureSection}>
                  <div className={styles.line}></div>
                  <p className={styles.label}>Instructor Signature</p>
                  <p className={styles.signature}>CodeMaster Academy</p>
                </div>
              </div>

              {/* Certificate ID */}
              <div className={styles.certificateId}>
                Certificate ID: {certificateData.certificateId}
              </div>

              {/* Decorative Elements */}
              <div className={styles.decorativeCorner} style={{ top: 20, left: 20 }}>❖</div>
              <div className={styles.decorativeCorner} style={{ top: 20, right: 20 }}>❖</div>
              <div className={styles.decorativeCorner} style={{ bottom: 20, left: 20 }}>❖</div>
              <div className={styles.decorativeCorner} style={{ bottom: 20, right: 20 }}>❖</div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .${styles.certificateWrapper}, .${styles.certificateWrapper} * {
            visibility: visible;
          }
          .${styles.certificateWrapper} {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .${styles.actions} {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Certificate;
