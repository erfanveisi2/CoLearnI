import React, { createContext, useState, useContext } from 'react';

const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledMessage, setPrefilledMessage] = useState('');

  const openChatWithContext = (text) => {
    setPrefilledMessage(`Can you explain this: "${text}"?`);
    setIsOpen(true);
  };

  return (
    <ChatbotContext.Provider value={{ isOpen, setIsOpen, prefilledMessage, setPrefilledMessage, openChatWithContext }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => useContext(ChatbotContext);