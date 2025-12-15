import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '../context/UserContext';
import { io } from 'socket.io-client';
import styles from './Messages.module.css';
import { FiSend, FiSearch, FiUser, FiMessageSquare } from 'react-icons/fi';

const Messages = () => {
  const { user } = useUser();
  const [socket, setSocket] = useState(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [conversations, setConversations] = useState([]); 

  const [activeChatUser, setActiveChatUser] = useState(null); 
  const [activeChatUserData, setActiveChatUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  const scrollRef = useRef();
  const activeChatUserRef = useRef(activeChatUser);
  
  useEffect(() => {
    activeChatUserRef.current = activeChatUser;
  }, [activeChatUser]);

  const getInitials = (first, last) => {
    const f = first ? first[0].toUpperCase() : '?';
    const l = last ? last[0].toUpperCase() : '';
    return `${f}${l}`;
  };

  // 1. Initialize Socket & Load
  useEffect(() => {
    if (user) {
      const newSocket = io('http://localhost:5001');
      setSocket(newSocket);
      newSocket.emit('join', user.username);

      fetchConversations(); // Load sidebar on mount

      newSocket.on('receiveMessage', (msg) => {
        // If we are looking at the chat, add it
        if (activeChatUserRef.current === msg.sender) {
          setMessages((prev) => [...prev, msg]);
        }
        // Refresh sidebar list
        fetchConversations(); 
      });

      return () => newSocket.close();
    }
  }, [user]);

  const fetchConversations = async () => {
    const token = localStorage.getItem('token');
    if(!token) return;
    try {
      const res = await fetch('http://localhost:5001/api/messages/conversations', {
        headers: { 'x-auth-token': token }
      });
      if(res.ok) {
        const data = await res.json();
        setConversations(data);
      }
    } catch (err) { console.error(err); }
  };

  useEffect(() => {
    if (activeChatUser && user) {
      const fetchHistory = async () => {
        const token = localStorage.getItem('token');
        try {
          const res = await fetch(`http://localhost:5001/api/messages/history/${activeChatUser}`, {
            headers: { 'x-auth-token': token }
          });
          if (res.ok) {
            const data = await res.json();
            setMessages(data);
          }
        } catch (err) { console.error(err); }
      };
      fetchHistory();
    }
  }, [activeChatUser, user]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchQuery) return;
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`http://localhost:5001/api/messages/search?q=${searchQuery}`, {
         headers: { 'x-auth-token': token }
      });
      const data = await res.json();
      setSearchResults(data);
    } catch(err) { console.error(err); }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !socket || !activeChatUser) return;

    const text = newMessage;
    setNewMessage(''); // Clear input immediately

    const msgPayload = {
      sender: user.username,
      recipient: activeChatUser,
      text: text,
      timestamp: new Date().toISOString() // Add local timestamp for immediate display
    };

    // OPTIMISTIC UPDATE: Add to UI immediately
    setMessages((prev) => [...prev, msgPayload]);

    // Send to server
    socket.emit('sendMessage', msgPayload);
    
    // Refresh sidebar after short delay to show updated order (optional)
    setTimeout(fetchConversations, 500);
  };

  const selectUser = (u) => {
    setActiveChatUser(u.username);
    setActiveChatUserData(u);
    setSearchResults([]);
    setSearchQuery('');
  };

  return (
    <div className={`container ${styles.pageContainer}`}>
      <div className={styles.layout}>
        
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h3>Messages</h3>
          </div>
          
          <form onSubmit={handleSearch} className={styles.searchForm}>
             <input 
               type="text" 
               placeholder="Search users..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
             <button type="submit"><FiSearch /></button>
          </form>
          
          <div className={styles.userList}>
            {searchResults.length > 0 ? (
              <>
                <div className={styles.listLabel}>Search Results</div>
                {searchResults.map(u => (
                  <div key={u._id} className={styles.userItem} onClick={() => selectUser(u)}>
                    {u.profilePicture ? (
                      <img src={u.profilePicture} alt={u.username} className={styles.avatarImg} />
                    ) : (
                      <div className={styles.avatar}>{getInitials(u.firstName, u.lastName)}</div>
                    )}
                    <div className={styles.userInfo}>
                      <span className={styles.fullName}>{u.firstName} {u.lastName}</span>
                      <span className={styles.username}>@{u.username}</span>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className={styles.listLabel}>Recent Chats</div>
                {conversations.length === 0 && <div className={styles.noChats}>No conversations yet.</div>}
                {conversations.map(u => (
                  <div 
                    key={u._id} 
                    className={`${styles.userItem} ${activeChatUser === u.username ? styles.active : ''}`}
                    onClick={() => selectUser(u)}
                  >
                    {u.profilePicture ? (
                      <img src={u.profilePicture} alt={u.username} className={styles.avatarImg} />
                    ) : (
                      <div className={styles.avatar}>{getInitials(u.firstName, u.lastName)}</div>
                    )}
                    <div className={styles.userInfo}>
                      <span className={styles.fullName}>{u.firstName} {u.lastName}</span>
                      <span className={styles.username}>@{u.username}</span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className={styles.chatArea}>
          {!activeChatUser ? (
            <div className={styles.emptyState}>
              <FiMessageSquare size={60} />
              <p>Select a conversation to start chatting</p>
            </div>
          ) : (
            <>
              <div className={styles.chatHeader}>
                {activeChatUserData?.profilePicture ? (
                  <img src={activeChatUserData.profilePicture} alt={activeChatUser} className={styles.headerAvatarImg} />
                ) : (
                  <div className={styles.headerAvatar}>
                    {activeChatUserData ? getInitials(activeChatUserData.firstName, activeChatUserData.lastName) : activeChatUser[0].toUpperCase()}
                  </div>
                )}
                <div className={styles.headerInfo}>
                  <span className={styles.headerName}>
                    {activeChatUserData ? `${activeChatUserData.firstName} ${activeChatUserData.lastName}` : activeChatUser}
                  </span>
                  <span className={styles.headerUsername}>@{activeChatUser}</span>
                </div>
              </div>
              
              <div className={styles.messagesList}>
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`${styles.messageBubble} ${msg.sender === user.username ? styles.sent : styles.received}`}
                  >
                    <p>{msg.text}</p>
                    <span className={styles.time}>{new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                  </div>
                ))}
                <div ref={scrollRef} />
              </div>

              <form className={styles.inputArea} onSubmit={handleSend}>
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  autoFocus
                />
                <button type="submit"><FiSend /></button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;