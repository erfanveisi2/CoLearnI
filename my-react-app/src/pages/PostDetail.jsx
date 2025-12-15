import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Community.module.css';
import { FiMessageSquare, FiCornerDownRight } from 'react-icons/fi';
import { useUser } from '../context/UserContext';

// --- Comment Item Component (Handles displaying 1 comment + replies) ---
const CommentItem = ({ comment, onReplySubmit }) => {
  const { user } = useUser();
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    onReplySubmit(comment._id, replyText);
    setReplyText('');
    setShowReply(false);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.commentWithAvatar}>
        {comment.authorProfilePicture ? (
          <img src={comment.authorProfilePicture} alt={comment.authorName} className={styles.commentAvatar} />
        ) : (
          <div className={styles.commentAvatarPlaceholder}>
            {comment.authorName.charAt(0).toUpperCase()}
          </div>
        )}
        <div className={styles.commentContent}>
          <div className={styles.commentHeader}>
            <strong>@{comment.authorName}</strong>
            {comment.authorRole === 'EXPERT' && <span className={styles.expertBadge}>Expert</span>}
          </div>
          <p>{comment.text}</p>
      
          {/* Reply Button */}
          {user && (
            <button className={styles.replyBtn} onClick={() => setShowReply(!showReply)}>
              Reply
            </button>
          )}
        </div>
      </div>

      {/* Reply Form */}
      {showReply && (
        <form onSubmit={handleSubmit} className={styles.replyForm}>
          <input 
            type="text" 
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button type="submit">Send</button>
          <button type="button" className={styles.cancelBtn} onClick={() => setShowReply(false)}>Cancel</button>
        </form>
      )}

      {/* Render Nested Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className={styles.repliesList}>
          {comment.replies.map((reply, idx) => (
            <div key={idx} className={styles.replyItem}>
              <FiCornerDownRight className={styles.replyIcon}/>
              {reply.authorProfilePicture ? (
                <img src={reply.authorProfilePicture} alt={reply.authorName} className={styles.replyAvatar} />
              ) : (
                <div className={styles.replyAvatarPlaceholder}>
                  {reply.authorName.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <div className={styles.commentHeader}>
                  <strong>@{reply.authorName}</strong>
                  {reply.authorRole === 'EXPERT' && <span className={styles.expertBadge}>Expert</span>}
                </div>
                <p>{reply.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const PostDetail = () => {
  const { id } = useParams();
  const { user } = useUser();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const fetchData = async () => {
    try {
      const postRes = await fetch(`http://localhost:5001/api/community/posts/${id}`);
      setPost(await postRes.json());
      
      const commentsRes = await fetch(`http://localhost:5001/api/community/posts/${id}/comments`);
      setComments(await commentsRes.json());
    } catch (err) { console.error(err); }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleMainComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    try {
      const res = await fetch(`http://localhost:5001/api/community/posts/${id}/comment`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ text: newComment })
      });
      
      if (res.ok) {
        fetchData(); // Refresh all comments
        setNewComment('');
      }
    } catch (err) { console.error(err); }
  };

  const handleReplySubmit = async (commentId, text) => {
    try {
      const res = await fetch(`http://localhost:5001/api/community/comments/${commentId}/reply`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ text })
      });

      if (res.ok) {
        fetchData(); // Refresh all comments to show new reply
      }
    } catch (err) { console.error(err); }
  };

  if (!post) return <div className="container">Loading...</div>;

  return (
    <div className={`container ${styles.detailContainer}`}>
      <div className={styles.postCard}>
        <div className={styles.postContent}>
          <span className={styles.meta}>Posted by @{post.authorName}</span>
          <h2 className={styles.caption}>{post.caption}</h2>
          {post.image && <img src={post.image} alt="Post" className={styles.postImage} />}
        </div>
      </div>

      <div className={styles.commentsSection}>
        <h3><FiMessageSquare /> Comments</h3>
        
        {user && (
          <form onSubmit={handleMainComment} className={styles.commentForm}>
            <input 
              type="text" 
              placeholder="Add a top-level comment..." 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit">Post</button>
          </form>
        )}

        <div className={styles.commentsList}>
          {comments.map(c => (
            <CommentItem 
              key={c._id} 
              comment={c} 
              onReplySubmit={handleReplySubmit} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;