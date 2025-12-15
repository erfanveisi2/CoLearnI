import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formMessage, setFormMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage('');
    setIsError(false);

    try {
      const res = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Show success message
        setFormMessage('Thank you! Your message has been sent.');
        setIsError(false);
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        // Show error message from server
        setFormMessage(data.msg || 'Failed to send message.');
        setIsError(true);
      }
    } catch (err) {
      setFormMessage('An error occurred. Please try again later.');
      setIsError(true);
    }

    setIsLoading(false);
    
    // Clear message after 5 seconds
    setTimeout(() => setFormMessage(''), 5000);
  };

  return (
    <div className={styles.contactPage}>
      <div className="container">
        <header className={styles.header}>
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.</p>
        </header>

        <div className={styles.contentWrapper}>
          {/* Left Side: Contact Info */}
          <div className={styles.infoWrapper}>
            <h2>Contact Information</h2>
            <p>Fill out the form and our team will get back to you within 24 hours.</p>
            <ul className={styles.infoList}>
              <li>
                <FiPhone /> 
                <span>+965 60075148</span>
              </li>
              <li>
                <FiMail /> 
                <span>colearni.tech@gmail.com</span>
              </li>
              <li>
                <FiMapPin /> 
                <span>Salmiya, Hawalli Governorate, Kuwait</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Contact Form */}
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required disabled={isLoading} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required disabled={isLoading} />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required disabled={isLoading}></textarea>
              </div>
              <button type="submit" className={styles.submitButton} disabled={isLoading}>
                {isLoading ? 'Sending...' : <><FiSend /> Send Message</>}
              </button>
              {/* Show success or error message */}
              {formMessage && (
                <p className={isError ? styles.formError : styles.formSuccess}>
                  {formMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;