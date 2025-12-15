import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';
import { courseDataConfig } from '../data/courseData'; // Import the data to know totals

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });
  const [message, setMessage] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

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
          setFormData({ firstName: data.firstName || '', lastName: data.lastName || '' });
          setPreviewImage(data.profilePicture || null);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setMessage('Image size should be less than 5MB');
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setMessage('Please upload an image file');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = async () => {
    if (!profilePicture) {
      setMessage('Please select an image first');
      return;
    }

    setUploading(true);
    setMessage('');
    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:5001/api/auth/update-profile-picture', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-auth-token': token },
        body: JSON.stringify({ profilePicture }),
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data);
        setProfilePicture(null);
        setMessage('Profile picture updated successfully!');
      } else {
        setMessage('Failed to update profile picture.');
      }
    } catch (err) {
      setMessage('Error uploading profile picture.');
    } finally {
      setUploading(false);
    }
  };

  const removeProfilePicture = async () => {
    setMessage('');
    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:5001/api/auth/remove-profile-picture', {
        method: 'PUT',
        headers: { 'x-auth-token': token },
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data);
        setPreviewImage(null);
        setProfilePicture(null);
        setMessage('Profile picture removed successfully!');
      } else {
        setMessage('Failed to remove profile picture.');
      }
    } catch (err) {
      setMessage('Error removing profile picture.');
    }
  };

  const handleUpdate = async (e) => {
    // ... (Keep existing update logic)
    e.preventDefault();
    setMessage('');
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('http://localhost:5001/api/auth/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'x-auth-token': token },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) { setUser(data); setMessage('Profile updated successfully!'); }
      else { setMessage('Failed to update profile.'); }
    } catch (err) { setMessage('Error updating profile.'); }
  };
  
  if (!user) return <div className={styles.loading}>Loading...</div>;

  // --- CALCULATE PROGRESS ---
  const getProgress = (courseKey) => {
    if (!user.progress) return 0;
    const userCourseData = user.progress.find(p => p.courseId === courseKey);
    if (!userCourseData) return 0;
    
    const completedCount = userCourseData.completedTopics.length;
    const totalCount = courseDataConfig[courseKey].length;
    
    if (totalCount === 0) return 0;
    return Math.round((completedCount / totalCount) * 100);
  };

  const courseKeys = Object.keys(courseDataConfig);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileBox}>
        <h2>User Profile</h2>
        
        {/* Profile Picture Section */}
        <div className={styles.profilePictureSection}>
          <div className={styles.avatarContainer}>
            {previewImage ? (
              <img src={previewImage} alt="Profile" className={styles.avatar} />
            ) : (
              <div className={styles.avatarPlaceholder}>
                <span>{user.username ? user.username.charAt(0).toUpperCase() : 'U'}</span>
              </div>
            )}
          </div>
          
          <div className={styles.pictureControls}>
            <input
              type="file"
              id="profilePictureInput"
              accept="image/*"
              onChange={handleImageChange}
              className={styles.fileInput}
            />
            <label htmlFor="profilePictureInput" className={styles.uploadLabel}>
              Choose Photo
            </label>
            
            {profilePicture && (
              <button
                type="button"
                onClick={handleImageUpload}
                disabled={uploading}
                className={styles.uploadButton}
              >
                {uploading ? 'Uploading...' : 'Upload'}
              </button>
            )}
            
            {previewImage && !profilePicture && (
              <button
                type="button"
                onClick={removeProfilePicture}
                className={styles.removeButton}
              >
                Remove
              </button>
            )}
          </div>
        </div>

        <hr />

        <div className={styles.infoGroup}>
          <label>Email</label>
          <p>{user.email}</p>
        </div>
        <div className={styles.infoGroup}>
          <label>Account Type</label>
          <p className={styles.role}>{user.role}</p>
        </div>

        <hr />
        
        <h3>Course Progress</h3>
        <div className={styles.progressSection}>
          {courseKeys.map(key => {
            const percent = getProgress(key);
            // Only show courses with progress
            if (percent === 0) return null; 
            
            return (
              <div key={key} className={styles.courseProgressItem}>
                <div className={styles.courseHeader}>
                  <span className={styles.courseName}>{key.toUpperCase()}</span>
                  <span className={styles.coursePercent}>{percent}%</span>
                </div>
                <div className={styles.progressBarBg}>
                  <div 
                    className={styles.progressBarFill} 
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
          {/* Fallback if no progress */}
          {(!user.progress || user.progress.length === 0) && <p style={{color:'#888'}}>No courses started yet.</p>}
        </div>

        <hr />

        <form onSubmit={handleUpdate}>
          <h3>Edit Information</h3>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <button type="submit" className={styles.updateButton}>Save Changes</button>
          {message && <p className={styles.message}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Profile;