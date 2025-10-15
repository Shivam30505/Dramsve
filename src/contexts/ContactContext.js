import React, { createContext, useContext, useState, useEffect } from 'react';

const ContactContext = createContext();

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

export const ContactProvider = ({ children }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  // Auto-popup every 35 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsContactOpen(true);
    }, 60000); // 35 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <ContactContext.Provider value={{
      isContactOpen,
      openContact,
      closeContact
    }}>
      {children}
    </ContactContext.Provider>
  );
};