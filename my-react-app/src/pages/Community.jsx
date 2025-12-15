import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Community.module.css';
import { FiPlus, FiMessageSquare, FiArrowUp, FiArrowDown, FiStar } from 'react-icons/fi';
import { useUser } from '../context/UserContext';

const Community = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/community/posts');
      const data = await res.json();
      setPosts(data);
    } catch (err) { console.error(err); }
  };

  const handleVote = async (postId, type) => {
    if (!user) return alert("Please log in to vote!");
    try {
      const res = await fetch(`http://localhost:5001/api/community/posts/${postId}/vote`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ type })
      });
      if (res.ok) fetchPosts(); // Refresh to see new score
    } catch (err) { console.error(err); }
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.header}>
        <h1>Community Feed</h1>
        {user && (
          <Link to="/community/create" className={styles.createBtn}>
            <FiPlus /> Create Post
          </Link>
        )}
      </div>

      <Link to="/community/expert" className={styles.expertLink}>
        <FiStar /> Expert Community
      </Link>

      <div className={styles.feed}>
        {posts.map(post => {
          const score = (post.upvotes?.length || 0) - (post.downvotes?.length || 0);
          return (
            <div key={post._id} className={styles.postCard}>
              <div className={styles.voteColumn}>
                <button onClick={() => handleVote(post._id, 'up')}><FiArrowUp /></button>
                <span className={styles.score}>{score}</span>
                <button onClick={() => handleVote(post._id, 'down')}><FiArrowDown /></button>
              </div>
              
              <Link to={`/community/post/${post._id}`} className={styles.postContent}>
                <div className={styles.postHeader}>
                  {post.authorProfilePicture ? (
                    <img src={post.authorProfilePicture} alt={post.authorName} className={styles.postAvatar} />
                  ) : (
                    <div className={styles.postAvatarPlaceholder}>
                      {post.authorName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className={styles.meta}>@{post.authorName}</span>
                </div>
                <h3 className={styles.caption}>{post.caption}</h3>
                {post.image && <img src={post.image} alt="Post" className={styles.postImage} />}
                
                <div className={styles.actions}>
                  <span className={styles.commentCount}>
                    <FiMessageSquare /> {post.commentsCount} Comments
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;