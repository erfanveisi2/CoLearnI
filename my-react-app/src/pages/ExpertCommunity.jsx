import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import styles from './Community.module.css';
import { FiPlus, FiMessageSquare, FiArrowUp, FiArrowDown, FiStar } from 'react-icons/fi';
import { useUser } from '../context/UserContext';

const ExpertCommunity = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useUser();

  // Check if user has premium access
  const hasPremiumAccess = user && (user.role === 'PAID' || user.role === 'EXPERT');

  useEffect(() => {
    console.log('ExpertCommunity - User:', user);
    console.log('ExpertCommunity - User Role:', user?.role);
    console.log('ExpertCommunity - Has Premium Access:', hasPremiumAccess);
    if (hasPremiumAccess) {
      fetchPosts();
    }
  }, [hasPremiumAccess]);

  const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/community/expert-posts', {
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      });
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
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
      if (res.ok) fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  // If user doesn't have access, show upgrade prompt
  if (!hasPremiumAccess) {
    return (
      <div className={`container ${styles.container}`}>
        <div className={styles.premiumBlock}>
          <div className={styles.premiumBlockContent}>
            <FiStar className={styles.premiumIcon} />
            <h1>Expert Community</h1>
            <p>This is an exclusive community for premium members and experts.</p>
            <p>Connect with industry professionals, get expert advice, and collaborate on advanced projects.</p>
            <div className={styles.premiumButtons}>
              <Link to="/upgrade" className={styles.upgradeButton}>
                Upgrade to Premium
              </Link>
              {!user && (
                <Link to="/signin" className={styles.signInButton}>
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1>
            <FiStar className={styles.starIcon} /> Expert Community
          </h1>
          <span className={styles.premiumBadge}>Premium Only</span>
        </div>
        {user && (
          <Link to="/community/expert/create" className={styles.createBtn}>
            <FiPlus /> Create Expert Post
          </Link>
        )}
      </div>

      <Link to="/community" className={styles.expertLink}>
        ← Back to Community
      </Link>

      <div className={styles.feed}>
        {posts.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No expert posts yet. Be the first to start a discussion!</p>
          </div>
        ) : (
          posts.map(post => {
            const score = (post.upvotes?.length || 0) - (post.downvotes?.length || 0);
            return (
              <div key={post._id} className={styles.postCard}>
                <div className={styles.voteColumn}>
                  <button onClick={() => handleVote(post._id, 'up')}><FiArrowUp /></button>
                  <span className={styles.score}>{score}</span>
                  <button onClick={() => handleVote(post._id, 'down')}><FiArrowDown /></button>
                </div>

                <Link to={`/community/expert/post/${post._id}`} className={styles.postContent}>
                  <div className={styles.postHeader}>
                    {post.authorProfilePicture ? (
                      <img src={post.authorProfilePicture} alt={post.authorName} className={styles.postAvatar} />
                    ) : (
                      <div className={styles.postAvatarPlaceholder}>
                        {post.authorName.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className={styles.meta}>
                      @{post.authorName}
                      {post.authorRole === 'EXPERT' && <span className={styles.expertBadge}>Expert</span>}
                    </span>
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
          })
        )}
      </div>
    </div>
  );
};

export default ExpertCommunity;
