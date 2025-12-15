import React, { useState, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css';
import OpenAI from 'openai';
import { useLocation } from 'react-router-dom';
import { FiMessageSquare, FiSend, FiX } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

// 1. Import Contexts
import { useChatbot } from '../../context/ChatbotContext';
import { useUser } from '../../context/UserContext';

// 2. Import Course Data
import { courseDataConfig } from '../../data/courseData';

// 3. Import System Prompt
import systemPromptText from '../../assets/systemPrompt.txt?raw';

const Chatbot = () => {
  const { isOpen, setIsOpen, prefilledMessage, setPrefilledMessage } = useChatbot();
  const { user: currentUser, fetchUser } = useUser(); 
  
  // Ref to access latest user inside async functions without stale closures
  const userRef = useRef(currentUser);
  useEffect(() => { userRef.current = currentUser; }, [currentUser]);
  
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const chatHistoryRef = useRef(null);

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true, 
  });

  // Load Chat History
  useEffect(() => {
    // If we are currently loading a new message, DO NOT fetch history.
    // This prevents the "glitch" where old DB history overwrites the new pending message.
    if (isLoading) return; 

    const fetchHistory = async () => {
      const token = localStorage.getItem('token');
      if (token && currentUser) {
        try {
          const chatRes = await fetch('http://localhost:5001/api/chat', {
            headers: { 'x-auth-token': token },
          });
          if (chatRes.ok) {
            const history = await chatRes.json();
            setMessages(history);
          }
        } catch (err) {
          console.error('Failed to load chat history', err);
        }
      } else if (!currentUser) {
        setMessages([]);
      }
    };
    fetchHistory();
  }, [currentUser, isLoading]);

  // Handle "Ask AI" context
  useEffect(() => {
    if (prefilledMessage) {
      setUserInput(prefilledMessage);
      setPrefilledMessage('');
      setIsOpen(true);
    }
  }, [prefilledMessage, setPrefilledMessage, setIsOpen]);

  // Auto-scroll
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Helper to Calculate Progress
  const getProgressContext = (userData) => {
    if (!userData) return "User is not logged in.";
    if (!userData.progress || userData.progress.length === 0) return "User has not started any courses yet (0% progress).";
    
    let progressStrings = [];
    
    Object.keys(courseDataConfig).forEach(courseKey => {
      const userCourseData = userData.progress.find(p => p.courseId === courseKey);
      
      const totalLessons = courseDataConfig[courseKey].length;
      const completedLessons = userCourseData ? userCourseData.completedTopics.length : 0;
      const percentage = totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100);
      
      if (completedLessons > 0 || courseKey === 'ai' || courseKey === 'html') {
        const niceName = courseKey.toUpperCase();
        progressStrings.push(`- ${niceName} Course: ${percentage}% completed (${completedLessons}/${totalLessons} lessons finished).`);
      }
    });

    if (progressStrings.length === 0) return "User has started courses but has 0 lessons completed.";
    return progressStrings.join('\n');
  };

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!userInput.trim()) return;

    const userMsgObj = { role: 'user', parts: [{ text: userInput }] };
    const newMessagesList = [...messages, userMsgObj];
    
    setMessages(newMessagesList);
    setUserInput('');
    setIsLoading(true); // Locks the history fetch effect

    try {
      // 1. Force fresh data fetch
      await fetchUser();
      const freshUser = userRef.current;

      // 2. Generate context
      const currentProgressData = getProgressContext(freshUser);
      
      const fullSystemPrompt = `
        ${systemPromptText}

        --- CURRENT CONTEXT ---
        Current Page URL: ${location.pathname}
        User Name: ${freshUser?.firstName || 'Guest'}
        
        --- USER PROGRESS DATA (SOURCE OF TRUTH) ---
        ${currentProgressData}
        --------------------------------------------
      `;

      const apiMessages = newMessagesList.map(msg => ({
        role: msg.role === 'model' ? 'assistant' : 'user',
        content: msg.parts[0].text,
      }));

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: 'system', content: fullSystemPrompt }, ...apiMessages],
      });
      
      const aiText = completion.choices[0].message.content;
      const aiMsgObj = { role: 'model', parts: [{ text: aiText }] };

      const finalMessagesList = [...newMessagesList, aiMsgObj];
      setMessages(finalMessagesList);

      // 3. Save to DB
      const token = localStorage.getItem('token');
      if (token && freshUser) {
        await fetch('http://localhost:5001/api/chat/message', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'x-auth-token': token 
          },
          body: JSON.stringify({ messages: [userMsgObj, aiMsgObj] })
        });
      }

    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: "I'm having trouble connecting right now. Please try again." }] }]);
    } finally {
      setIsLoading(false); // Unlocks the history fetch effect
    }
  };

  return (
    <div>
      <button className={styles.chatIcon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMessageSquare />}
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>CodeMentor</h3>
            <p>Your personal AI coding assistant</p>
          </div>
          
          <div className={styles.chatHistory} ref={chatHistoryRef}>
            {messages.length === 0 && (
               <div style={{padding: '30px 20px', textAlign: 'center', color: '#888'}}>
                 <p>Hi {currentUser?.firstName || 'there'}! 👋</p>
                 <p style={{fontSize: '0.9rem'}}>I have access to your real-time progress. Ask me "How am I doing?"</p>
                 {!currentUser && <p style={{fontSize:'0.8rem', marginTop:'10px', color:'orange'}}>Log in to save your chat.</p>}
               </div>
            )}
            
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${styles[msg.role]}`}>
                <ReactMarkdown>{msg.parts[0].text}</ReactMarkdown>
              </div>
            ))}
            {isLoading && <div className={`${styles.message} ${styles.loading}`}><span></span><span></span><span></span></div>}
          </div>

          <form className={styles.chatInputForm} onSubmit={handleSendMessage}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
              autoFocus
            />
            <button type="submit" disabled={isLoading}><FiSend /></button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;