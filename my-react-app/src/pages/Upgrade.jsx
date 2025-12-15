import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Upgrade.module.css';
import { FiCheck } from 'react-icons/fi';
import { loadStripe } from '@stripe/stripe-js';

// Load Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Upgrade = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch user data on load
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/signin');
        return;
      }
      try {
        const res = await fetch('http://localhost:5001/api/auth/me', {
          headers: { 'x-auth-token': token },
        });
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        } else {
          localStorage.removeItem('token');
          navigate('/signin');
        }
      } catch (err) {
        console.error('Failed to fetch user data');
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleUpgrade = async () => {
    setIsLoading(true);
    setError('');
    const token = localStorage.getItem('token');

    try {
      // 1. Call our backend to create the session
      const res = await fetch('http://localhost:5001/api/payment/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      });

      const data = await res.json();

      if (res.ok && data.url) {
        // 2. We got the Stripe URL! Redirect to it.
        window.location.href = data.url;
      } else {
        setError(data.msg || 'An error occurred during payment setup.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
    setIsLoading(false);
  };

  const currentRole = user?.role || 'NORMAL';

  return (
    <div className={styles.upgradePage}>
      <div className={styles.header}>
        <h2>Choose Your Plan</h2>
        <p>Unlock your full learning potential with CodeQuest Premium.</p>
      </div>

      <div className={styles.planGrid}>
        {/* Free Plan Card */}
        <div className={`${styles.planCard} ${currentRole === 'NORMAL' ? styles.currentPlan : ''}`}>
          <h3>Free</h3>
          <p className={styles.price}>$0</p>
          <p className={styles.description}>Basic access to get you started on your coding journey.</p>
          <ul className={styles.featureList}>
            <li><FiCheck /> Access to core lessons</li>
            <li><FiCheck /> Standard AI tutor credits</li>
            <li><FiCheck /> General community access</li>
          </ul>
          {currentRole === 'NORMAL' && (
            <button disabled className={styles.upgradeButton}>
              Current Plan
            </button>
          )}
        </div>

        {/* Premium Plan Card */}
        <div className={`${styles.planCard} ${styles.premium} ${currentRole === 'PAID' ? styles.currentPlan : ''}`}>
          <div className={styles.bestValue}>Best Value</div>
          <h3>Premium</h3>
          <p className={styles.price}>$9.9</p>
          <p className={styles.description}>Go all-in with exclusive features and unlimited access.</p>
          <ul className={styles.featureList}>
            <li><FiCheck /> Access to ALL courses</li>
            <li><FiCheck /> Priority AI tutor credits</li>
            <li><FiCheck /> Private Expert Community</li>
            <li><FiCheck /> Priority support</li>
          </ul>

          {currentRole === 'NORMAL' && (
            <button onClick={handleUpgrade} disabled={isLoading} className={styles.upgradeButton}>
              {isLoading ? 'Creating session...' : 'Upgrade Now'}
            </button>
          )}
          {currentRole === 'PAID' && (
            <button disabled className={styles.upgradeButton}>
              Current Plan
            </button>
          )}
          {currentRole === 'EXPERT' && (
            <button disabled className={styles.upgradeButton}>
              (Expert Access)
            </button>
          )}

          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Upgrade;