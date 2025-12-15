import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AuthForm.module.css';

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    digit: false,
    special: false,
    uppercase: false,
    lowercase: false
  });
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const requirements = {
      length: password.length >= 8,
      digit: /\d/.test(password),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password)
    };
    setPasswordRequirements(requirements);
    return Object.values(requirements).every(req => req);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'password') {
      validatePassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate password before submitting
    if (!validatePassword(formData.password)) {
      setError('Password does not meet all requirements.');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:5001/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.status === 201 || res.status === 200) {
        navigate(`/verify-code?email=${encodeURIComponent(data.email)}`);
      } else {
        setError(data.msg || 'Signup failed.');
      }
    } catch (err) {
      setError('An error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <p>Join the CoLearnI community!</p>
        
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} required disabled={isLoading} placeholder="Choose a unique username" />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required disabled={isLoading} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required disabled={isLoading} />
          
          {formData.password && (
            <div className={styles.passwordRequirements}>
              <p className={styles.requirementsTitle}>Password must contain:</p>
              <ul className={styles.requirementsList}>
                <li className={passwordRequirements.length ? styles.met : styles.unmet}>
                  {passwordRequirements.length ? '✓' : '○'} At least 8 characters
                </li>
                <li className={passwordRequirements.uppercase ? styles.met : styles.unmet}>
                  {passwordRequirements.uppercase ? '✓' : '○'} One uppercase letter (A-Z)
                </li>
                <li className={passwordRequirements.lowercase ? styles.met : styles.unmet}>
                  {passwordRequirements.lowercase ? '✓' : '○'} One lowercase letter (a-z)
                </li>
                <li className={passwordRequirements.digit ? styles.met : styles.unmet}>
                  {passwordRequirements.digit ? '✓' : '○'} One number (0-9)
                </li>
                <li className={passwordRequirements.special ? styles.met : styles.unmet}>
                  {passwordRequirements.special ? '✓' : '○'} One special character (!@#$%^&*_-)
                </li>
              </ul>
            </div>
          )}
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Sign Up'}
        </button>
        <p className={styles.switchFormText}>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
        <p className={styles.switchFormText}>
          Are you an expert? <Link to="/signup-expert">Apply here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;