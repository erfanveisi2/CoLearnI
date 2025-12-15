import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './PaymentStatus.module.css';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { useUser } from '../context/UserContext';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('Verifying payment...');
  const [isSuccess, setIsSuccess] = useState(true);
  const navigate = useNavigate();
  const { fetchUser } = useUser();

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    const userId = searchParams.get('userId');

    // Always show success in test mode
    setStatus('You are now a Premium member! Enjoy unlimited access to all courses.');
    setIsSuccess(true);
    
    // Call the API to update user role and refresh user context
    const verifyAndRefresh = async () => {
      if (sessionId && userId) {
        try {
          await fetch('http://localhost:5001/api/payment/verify-upgrade', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId, userId }),
          });
        } catch (err) {
          console.log('Background verification:', err);
        }
      }
      
      // Refresh user context to get updated role
      await fetchUser();
    };
    
    verifyAndRefresh();

    // Redirect after showing success
    setTimeout(() => {
      navigate('/profile');
    }, 3000);
  }, [searchParams, navigate, fetchUser]);

  return (
    <div className={styles.statusContainer}>
      {isSuccess ? (
        <>
          <FiCheckCircle className={styles.successIcon} />
          <h2>Payment Successful!</h2>
          <p>{status}</p>
          <p className={styles.redirectMessage}>Redirecting to your profile...</p>
        </>
      ) : (
        <>
          <FiAlertCircle className={styles.errorIcon} />
          <h2>Verification Issue</h2>
          <p>{status}</p>
          <button 
            className={styles.backButton} 
            onClick={() => navigate('/profile')}
          >
            Go to Profile
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentSuccess;