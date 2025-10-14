import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleNavigation = (item) => {
    if (item.href && item.href.startsWith('/')) {
      navigate(item.href);
      window.scrollTo(0, 0);
    } else if (item.href) {
      window.location.href = item.href;
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
      className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 border-b border-gray-100 shadow-lg"
      style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(247,247,247,0.95) 100%)'}}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div 
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img 
              src={logo}
              alt="DRAMSVE Logo"
              className="h-14"
              style={{ border: 'none', outline: 'none' }}
              whileHover={{ 
                scale: 1.2,
                filter: "drop-shadow(0 0 20px rgba(106, 61, 154, 0.6))"
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'Courses', href: '/courses' },
              { name: 'Services', id: 'services' },
              { name: 'About Us', href: '/about' },
              { name: 'Blog', href: '/blog' },
              { name: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <motion.button 
                key={item.name}
                className="text-base font-semibold font-display text-text-secondary hover:text-primary transition-colors cursor-pointer" 
                onClick={() => handleNavigation(item)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  scale: 1.15,
                  color: '#6A3D9A',
                  y: -2
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <motion.a 
              href="http://Elearning.dramsve.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button 
                className="hidden md:flex items-center justify-center rounded-lg h-10 px-6 text-white text-sm font-bold shadow-lg transition-all duration-300"
                style={{backgroundColor: '#8B5FBF'}}
                whileHover={{ 
                  backgroundColor: '#7FB83D',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Book a free trial</span>
              </motion.button>
            </motion.a>
            
            <motion.button 
              className="md:hidden p-2 rounded-full text-text-primary hover:bg-background-alt"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="material-symbols-outlined">menu</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;