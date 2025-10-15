import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.name || !formData.phone || !formData.message) {
      setSubmitMessage('Please fill all required fields');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', courseInterest: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => {
        onClose();
        setSubmitMessage('');
      }, 2000);
    }, 1000);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 
                  className="text-2xl font-bold"
                  style={{color: '#6A3D9A'}}
                >
                  Contact Us
                </h2>
                <p 
                  className="text-sm mt-1"
                  style={{color: '#6C9E24'}}
                >
                  Get personalized guidance from our experts
                </p>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#333333'}} htmlFor="name">
                  Name *
                </label>
                <motion.input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  style={{color: '#333333'}}
                  id="name"
                  placeholder="Your Name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#333333'}} htmlFor="email">
                  Email *
                </label>
                <motion.input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  style={{color: '#333333'}}
                  id="email"
                  placeholder="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#333333'}} htmlFor="phone">
                  Phone Number *
                </label>
                <motion.input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  style={{color: '#333333'}}
                  id="phone"
                  placeholder="Your Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#333333'}} htmlFor="courseInterest">
                  Course Interest
                </label>
                <motion.select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  style={{color: '#333333'}}
                  id="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleInputChange}
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Select a course</option>
                  <option value="IELTS">IELTS Preparation</option>
                  <option value="PTE">PTE Academic</option>
                  <option value="TOEFL">TOEFL iBT</option>
                  <option value="French">French Language</option>
                  <option value="German">German Language</option>
                  <option value="Digital SAT">Digital SAT</option>
                  <option value="GMAT">GMAT</option>
                  <option value="GRE">GRE</option>
                  <option value="CELPIP">CELPIP</option>
                  <option value="Duolingo">Duolingo English Test</option>
                  <option value="Spoken English">Spoken English</option>
                </motion.select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{color: '#333333'}} htmlFor="message">
                  Message *
                </label>
                <motion.textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  style={{color: '#333333'}}
                  id="message"
                  placeholder="Tell us about your goals and how we can help"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
              
              {submitMessage && (
                <motion.div 
                  className={`p-3 rounded-lg text-center text-sm ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitMessage}
                </motion.div>
              )}
              
              <motion.button
                className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 disabled:opacity-50"
                style={{backgroundColor: '#8B5FBF'}}
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  backgroundColor: '#7FB83D',
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Start Free Trial'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;