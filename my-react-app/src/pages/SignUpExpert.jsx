import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Add useNavigate
import styles from './AuthForm.module.css';

const SignUpExpert = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  // Remove successMessage
  const navigate = useNavigate(); // Add navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate form data
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    // Redirect to expert test with form data
    navigate('/expert-test', { 
      state: { 
        email: formData.email, 
        password: formData.password 
      } 
    });
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h2>Apply to be an Expert</h2>
        <p>Share your knowledge with the CoLearnI community.</p>
        <> {/* No conditional rendering */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
          </div>
          
          {error && <p className={styles.errorMessage}>{error}</p>}

          <button type="submit" className={styles.submitButton}>Apply Now</button>
          <p className={styles.switchFormText}>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
          <p className={styles.switchFormText}>
            Are you a student? <Link to="/signup">Sign up here</Link>
          </p>
        </>
      </form>
    </div>
  );
};

export default SignUpExpert;