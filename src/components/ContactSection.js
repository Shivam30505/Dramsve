import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import contactImage from '../images/contact.png';


const ContactSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
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
    }, 1000);
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(106, 61, 154, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      className="py-20 sm:py-24"
      style={{background: 'linear-gradient(135deg, #F7F7F7 0%, #FFF9F3 100%)'}}
    >
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="font-display text-4xl font-bold tracking-wide mb-4"
              style={{color: '#6A3D9A', letterSpacing: '0.5px'}}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h2>
            <motion.p 
              className="text-lg font-display mb-8"
              style={{color: '#6C9E24', fontWeight: 300, letterSpacing: '0.3px', lineHeight: '1.6'}}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get in touch with our expert team for personalized guidance
            </motion.p>
            
            <motion.form 
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2" style={{color: '#333333'}} htmlFor="name">
                  Name
                </label>
                <motion.input
                  className="form-input block w-full rounded-lg border-gray-300 bg-white p-3 focus:border-primary focus:ring-primary"
                  style={{color: '#333333'}}
                  id="name"
                  placeholder="Your Name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2" style={{color: '#333333'}} htmlFor="email">
                  Email
                </label>
                <motion.input
                  className="form-input block w-full rounded-lg border-gray-300 bg-white p-3 focus:border-primary focus:ring-primary"
                  style={{color: '#333333'}}
                  id="email"
                  placeholder="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2" style={{color: '#333333'}} htmlFor="phone">
                  Phone Number *
                </label>
                <motion.input
                  className="form-input block w-full rounded-lg border-gray-300 bg-white p-3 focus:border-primary focus:ring-primary"
                  style={{color: '#333333'}}
                  id="phone"
                  placeholder="Your Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2" style={{color: '#333333'}} htmlFor="courseInterest">
                  Course Interest
                </label>
                <motion.input
                  className="form-input block w-full rounded-lg border-gray-300 bg-white p-3 focus:border-primary focus:ring-primary"
                  style={{color: '#333333'}}
                  id="courseInterest"
                  placeholder="Enter course you're interested in"
                  type="text"
                  value={formData.courseInterest}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2" style={{color: '#333333'}} htmlFor="message">
                  Message *
                </label>
                <motion.textarea
                  className="form-textarea block w-full rounded-lg border-gray-300 bg-white p-3 focus:border-primary focus:ring-primary"
                  style={{color: '#333333'}}
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
              
              {submitMessage && (
                <motion.div 
                  className={`p-3 rounded-lg text-center ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitMessage}
                </motion.div>
              )}
              
              <motion.div 
                className="flex justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <motion.button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 py-3 text-sm font-bold leading-normal tracking-wide text-white transition-all duration-300 disabled:opacity-50"
                  style={{backgroundColor: '#8B5FBF'}}
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ 
                    backgroundColor: '#7FB83D',
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.span 
                    className="truncate"
                    animate={{
                      x: [0, 2, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {isSubmitting ? 'Sending OTP...' : 'Submit'}
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
          
          {/* Stable Contact Image with Floating Bubble */}
          <motion.div
            className="flex justify-center items-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img
              src={contactImage}
              alt="Contact Us"
              className="w-96 h-auto cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                filter: "brightness(1.1)"
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                y: [0, -5, 0]
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                hover: {
                  duration: 0.3
                }
              }}
            />
            <motion.div
              className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full shadow-lg cursor-pointer"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              whileHover={{
                scale: 1.5,
                backgroundColor: "#10B981",
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)"
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
      

    </section>
  );
};

export default ContactSection;