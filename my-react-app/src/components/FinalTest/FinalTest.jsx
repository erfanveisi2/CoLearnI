import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import styles from './FinalTest.module.css';

const FinalTest = ({ courseId, courseName, questions }) => {
  const navigate = useNavigate();
  const { user, fetchUser } = useUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnswerSelect = (answerIndex) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    return (correctCount / questions.length) * 100;
  };

  const handleSubmit = async () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setShowResult(true);

    // If passed (80% or above), save test result and generate certificate
    if (finalScore >= 80) {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      if (!token) {
        setError('Please log in to save your test results.');
        setLoading(false);
        return;
      }

      // Map route courseId to internal courseId (introduction-to-ai -> ai)
      let internalCourseId = courseId;
      if (courseId === 'introduction-to-ai') {
        internalCourseId = 'ai';
      }

      try {
        const res = await fetch('http://localhost:5001/api/user/final-test', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          },
          body: JSON.stringify({ 
            courseId: internalCourseId, 
            score: finalScore,
            passed: true
          })
        });

        if (res.ok) {
          await fetchUser(); // Refresh user data
          setLoading(false);
        } else {
          const data = await res.json();
          setError(data.message || 'Failed to save test results');
          setLoading(false);
        }
      } catch (err) {
        console.error('Error saving test results:', err);
        setError('Failed to save test results');
        setLoading(false);
      }
    }
  };

  const handleViewCertificate = () => {
    navigate(`/certificate/${courseId}`);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setScore(0);
    setError('');
  };

  if (showResult) {
    return (
      <div className={styles.testContainer}>
        <div className={styles.resultCard}>
          <div className={styles.resultIcon}>
            {score >= 80 ? '🎉' : '📚'}
          </div>
          <h1 className={styles.resultTitle}>
            {score >= 80 ? 'Congratulations!' : 'Keep Learning!'}
          </h1>
          <div className={styles.scoreDisplay}>
            <div className={styles.scoreCircle}>
              <span className={styles.scoreNumber}>{score.toFixed(0)}%</span>
            </div>
          </div>
          <p className={styles.resultMessage}>
            {score >= 80 
              ? `You passed the ${courseName} final test! Your certificate is ready.`
              : 'You need at least 80% to pass. Keep studying and try again!'}
          </p>
          <div className={styles.resultStats}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Correct Answers</span>
              <span className={styles.statValue}>{Math.round((score / 100) * questions.length)} / {questions.length}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Passing Score</span>
              <span className={styles.statValue}>80%</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Your Score</span>
              <span className={styles.statValue} style={{ color: score >= 80 ? '#10b981' : '#ef4444' }}>
                {score.toFixed(0)}%
              </span>
            </div>
          </div>
          
          {error && (
            <div className={styles.errorMessage}>{error}</div>
          )}

          {loading && (
            <div className={styles.loadingSpinner}>
              <div className={styles.spinner}></div>
              <p>Generating your certificate...</p>
            </div>
          )}

          <div className={styles.resultActions}>
            {score >= 80 ? (
              <>
                <button className={styles.certificateButton} onClick={handleViewCertificate}>
                  📜 View Certificate
                </button>
                <button className={styles.secondaryButton} onClick={() => navigate('/courses')}>
                  Back to Courses
                </button>
              </>
            ) : (
              <>
                <button className={styles.retryButton} onClick={handleRetry}>
                  Try Again
                </button>
                <button className={styles.secondaryButton} onClick={() => navigate(`/course/${courseId}`)}>
                  Review Course
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.testContainer}>
      <div className={styles.testCard}>
        <div className={styles.testHeader}>
          <h1 className={styles.testTitle}>{courseName} Final Test</h1>
          <p className={styles.testSubtitle}>
            Answer at least 80% of questions correctly to pass and earn your certificate
          </p>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
          <p className={styles.questionCounter}>
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className={styles.questionSection}>
          <h2 className={styles.questionText}>
            {questions[currentQuestion].question}
          </h2>

          <div className={styles.optionsGrid}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`${styles.optionButton} ${
                  answers[currentQuestion] === index ? styles.selected : ''
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <span className={styles.optionLetter}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className={styles.optionText}>{option}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.navigationButtons}>
          <button
            className={styles.navButton}
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ❮ Previous
          </button>
          
          {currentQuestion === questions.length - 1 ? (
            <button
              className={styles.submitButton}
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== questions.length}
            >
              Submit Test
            </button>
          ) : (
            <button
              className={styles.navButton}
              onClick={handleNext}
            >
              Next ❯
            </button>
          )}
        </div>

        <div className={styles.answeredIndicator}>
          {questions.map((_, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${
                answers[index] !== undefined ? styles.answered : ''
              } ${index === currentQuestion ? styles.current : ''}`}
              onClick={() => setCurrentQuestion(index)}
              title={`Question ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinalTest;
