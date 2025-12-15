import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import styles from './VerifyCode.module.css';

const VerifyCode = () => {
  const [searchParams] = useSearchParams();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const email = searchParams.get('email');

  useEffect(() => {
    if (!email) {
      navigate('/signup');
    }
  }, [email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !code || code.length !== 6) {
      setError('Please enter a valid 6-digit code.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:5001/api/auth/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });
      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        navigate('/'); // Redirect home (logged in)
      } else {
        setError(data.msg || 'Verification failed. Please check the code and try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.verifyContainer}>
      <form className={styles.verifyForm} onSubmit={handleSubmit}>
        <h2>Verify Your Email</h2>
        <p>Enter the 6-digit code sent to <strong>{email || 'your email'}</strong>.</p>
        <div className={styles.inputGroup}>
          <label htmlFor="code">Verification Code</label>
          <input
            type="text"
            inputMode="numeric" // Helps mobile users get numeric keyboard
            pattern="[0-9]*" // Further helps with numeric input
            name="code"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength="6"
            required
            className={styles.codeInput}
            disabled={isLoading}
          />
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Verifying...' : 'Verify Account'}
        </button>
        <p className={styles.resendText}>
          Didn't receive a code? <Link to="/signup">Sign up again</Link> to resend.
        </p>
      </form>
    </div>
  );
};

export default VerifyCode;