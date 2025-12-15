import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Community.module.css'; // Reusing styles
import { FiImage } from 'react-icons/fi';

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if this is an expert post based on the route
  const isExpertPost = location.pathname.includes('/expert/');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:5001/api/community/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({ caption, image, isExpert: isExpertPost })
      });

      if (res.ok) {
        // Navigate back to the appropriate community page
        navigate(isExpertPost ? '/community/expert' : '/community');
      } else {
        const errorData = await res.json();
        alert(errorData.msg || 'Failed to create post');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while creating the post');
    }
    setIsLoading(false);
  };

  return (
    <div className={`container ${styles.createContainer}`}>
      <h2>{isExpertPost ? 'Create Expert Post' : 'Create a Post'}</h2>
      <form onSubmit={handleSubmit} className={styles.createForm}>
        <textarea 
          placeholder="What's on your mind?" 
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
          rows={4}
        />
        
        <div className={styles.imageUpload}>
          <label htmlFor="file-input">
            <FiImage /> {image ? "Change Image" : "Add Image"}
          </label>
          <input 
            id="file-input" 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            style={{display: 'none'}}
          />
        </div>
        
        {image && <img src={image} alt="Preview" className={styles.previewImage} />}

        <button type="submit" className={styles.submitBtn} disabled={isLoading}>
          {isLoading ? 'Posting...' : 'Post'}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;