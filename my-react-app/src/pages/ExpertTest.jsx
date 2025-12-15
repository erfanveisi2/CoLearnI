import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './ExpertTest.module.css';

const ExpertTest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, password } = location.state || {};

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text Marking Language"
      ],
      correctAnswer: 0
    },
    {
      question: "Which CSS property is used to change the text color?",
      options: ["text-color", "color", "font-color", "text-style"],
      correctAnswer: 1
    },
    {
      question: "What does 'AI' stand for in computer science?",
      options: [
        "Automatic Intelligence",
        "Artificial Intelligence",
        "Advanced Integration",
        "Automated Information"
      ],
      correctAnswer: 1
    },
    {
      question: "Which programming language is known as the 'language of the web'?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correctAnswer: 2
    },
    {
      question: "What is the correct syntax for a JavaScript function?",
      options: [
        "function = myFunction()",
        "function myFunction()",
        "function:myFunction()",
        "def myFunction()"
      ],
      correctAnswer: 1
    },
    {
      question: "In Python, which keyword is used to create a function?",
      options: ["func", "function", "def", "define"],
      correctAnswer: 2
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Simple Question Language",
        "Structured Question Language",
        "Simple Query Language"
      ],
      correctAnswer: 0
    },
    {
      question: "Which data structure uses LIFO (Last In First Out)?",
      options: ["Queue", "Stack", "Array", "Tree"],
      correctAnswer: 1
    },
    {
      question: "What is machine learning?",
      options: [
        "Teaching machines to physically move",
        "A subset of AI that enables systems to learn from data",
        "A type of computer hardware",
        "A programming language"
      ],
      correctAnswer: 1
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<hyperlink>"],
      correctAnswer: 1
    }
  ];

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

    // Generate username from email
    const username = email.split('@')[0] + Math.floor(Math.random() * 1000);

    if (finalScore >= 80) {
      // Score is 80% or above, create expert account
      setLoading(true);
      try {
        const res = await fetch('http://localhost:5001/api/auth/signup-expert-verified', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, username }),
        });
        const data = await res.json();
        
        setLoading(false);
        if (res.status === 201 || res.status === 200) {
          setTimeout(() => {
            navigate(`/verify-code?email=${encodeURIComponent(data.email)}`);
          }, 3000);
        }
      } catch (err) {
        setLoading(false);
        console.error('Error creating expert account:', err);
      }
    } else {
      // Score is below 80%, create normal account
      setLoading(true);
      try {
        const res = await fetch('http://localhost:5001/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            email, 
            password,
            username
          }),
        });
        const data = await res.json();
        
        setLoading(false);
        if (res.status === 201 || res.status === 200) {
          setTimeout(() => {
            navigate(`/verify-code?email=${encodeURIComponent(data.email)}`);
          }, 3000);
        }
      } catch (err) {
        setLoading(false);
        console.error('Error creating normal account:', err);
      }
    }
  };

  if (!email || !password) {
    navigate('/signup-expert');
    return null;
  }

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
              ? 'You passed the expert test! Your expert account is being created...'
              : 'You scored below 80%. A regular account will be created for you. Keep learning and try again later!'}
          </p>
          <div className={styles.resultStats}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Correct Answers</span>
              <span className={styles.statValue}>{Math.round((score / 100) * questions.length)} / {questions.length}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Required Score</span>
              <span className={styles.statValue}>80%</span>
            </div>
          </div>
          {loading && (
            <div className={styles.loadingSpinner}>
              <div className={styles.spinner}></div>
              <p>Creating your account...</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.testContainer}>
      <div className={styles.testCard}>
        <div className={styles.testHeader}>
          <h1 className={styles.testTitle}>Expert Verification Test</h1>
          <p className={styles.testSubtitle}>
            Answer at least 8 out of 10 questions correctly (80%) to become an expert
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertTest;
