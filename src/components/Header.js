import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContact } from '../contexts/ContactContext';
import StudyAbroad from './StudyAbroad';
import logo from '../images/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStudyAbroadOpen, setIsStudyAbroadOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { openContact } = useContact();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleNavigation = (item) => {
    setIsMobileMenuOpen(false);
    if (item.id === 'study-abroad') {
      setIsStudyAbroadOpen(true);
    } else if (item.href && item.href.startsWith('/')) {
      navigate(item.href);
      window.scrollTo(0, 0);
    } else if (item.href) {
      window.location.href = item.href;
    } else if (item.id === 'contact') {
      openContact();
    } else if (item.id) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          window.scrollTo(0, 0);
          scrollToSection(item.id);
        }, 100);
      } else {
        scrollToSection(item.id);
      }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 shadow-lg bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div 
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}
            className="cursor-pointer z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img 
              src={logo}
              alt="DRAMSVE Logo"
              className="h-16 sm:h-20"
              style={{ border: 'none', outline: 'none' }}
              whileHover={{ 
                scale: 1.2,
                filter: "drop-shadow(0 0 20px rgba(106, 61, 154, 0.6))"
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: 'Study Abroad', id: 'study-abroad' },
              { name: 'Courses', href: '/courses' },
              { name: 'Services', id: 'services' },
              { name: 'About Us', href: '/about' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <motion.button
                key={item.name}
                className="text-lg font-semibold text-gray-700 hover:text-primary transition-colors"
                onClick={() => handleNavigation(item)}
                whileHover={{ scale: 1.05, color: '#6A3D9A' }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden lg:flex items-center">
            <motion.button 
              className="flex items-center justify-center rounded-lg h-10 px-6 text-white text-sm font-bold shadow-lg transition-all duration-300"
              style={{backgroundColor: '#8B5FBF'}}
              whileHover={{ 
                backgroundColor: '#7FB83D',
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
            >
              <span>Book a free trial</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden menu-button z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-gray-800 block"
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-0.5 bg-gray-800 block"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-0.5 bg-gray-800 block"
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] md:w-[40%] bg-white shadow-lg z-50 mobile-menu lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex flex-col h-full pt-20 pb-6 px-6">
                <nav className="flex flex-col gap-4">
                  {[
                    { name: 'Study Abroad', id: 'study-abroad' },
                    { name: 'Courses', href: '/courses' },
                    { name: 'Services', id: 'services' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Contact', id: 'contact' }
                  ].map((item, index) => (
                    <motion.button
                      key={item.name}
                      className="text-lg font-semibold text-gray-700 hover:text-primary text-left py-2 border-b border-gray-100"
                      onClick={() => handleNavigation(item)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10, color: '#6A3D9A' }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>
                
                <motion.button
                  className="w-full py-4 px-6 rounded-lg font-bold text-white text-center mt-8"
                  style={{ backgroundColor: '#8B5FBF' }}
                  whileHover={{ backgroundColor: '#7FB83D' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openContact();
                  }}
                >
                  Book a free trial
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Study Abroad Modal */}
      <StudyAbroad 
        isOpen={isStudyAbroadOpen} 
        onClose={() => setIsStudyAbroadOpen(false)} 
      />
    </motion.header>
  );
};

export default Header;