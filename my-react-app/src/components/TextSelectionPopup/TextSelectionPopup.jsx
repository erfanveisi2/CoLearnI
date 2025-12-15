import React, { useState, useEffect } from 'react';
import { useChatbot } from '../../context/ChatbotContext';
import styles from './TextSelectionPopup.module.css';
import { FiCpu } from 'react-icons/fi'; // Using a "chip" icon for AI

const TextSelectionPopup = () => {
  const { openChatWithContext } = useChatbot();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const text = selection.toString().trim();

      if (text.length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        // Calculate position: centered above the selection
        // We add window.scrollY to account for scrolling
        setPosition({
          x: rect.left + (rect.width / 2),
          y: rect.top + window.scrollY - 40 // 40px above text
        });
        setSelectedText(text);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen for mouse up (end of selection)
    document.addEventListener('mouseup', handleSelection);
    // Also handle keyup for keyboard selection
    document.addEventListener('keyup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('keyup', handleSelection);
    };
  }, []);

  const handleAskAI = (e) => {
    e.stopPropagation(); // Prevent clicking the button from clearing selection immediately
    openChatWithContext(selectedText);
    setIsVisible(false);
    window.getSelection().removeAllRanges(); // Optional: clear selection after asking
  };

  if (!isVisible) return null;

  return (
    <button 
      className={styles.aiPopup}
      style={{ left: position.x, top: position.y }}
      onClick={handleAskAI}
      onMouseDown={(e) => e.preventDefault()} // Prevent button click from deselecting text
    >
      <FiCpu /> Ask AI
    </button>
  );
};

export default TextSelectionPopup;