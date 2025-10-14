import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const socialIcons = [
    {
      name: 'Twitter',
      path: 'M22.46,6.52,16.89,6.28a1.23,1.23,0,0,0-1.12.87,1.18,1.18,0,0,0,.43,1.3l2.84,2.23a.13.13,0,0,1,0,.2L14.7,14.77a.13.13,0,0,1-.2,0L12.27,12a1.18,1.18,0,0,0-1.3-.43,1.23,1.23,0,0,0-.87,1.12l-.24,5.57a1.2,1.2,0,0,0,1.2,1.2H17.5a6.5,6.5,0,0,0,6.5-6.5V7.72A1.2,1.2,0,0,0,22.46,6.52ZM4.9,2.5A2.4,2.4,0,0,0,2.5,4.9V10A2.4,2.4,0,0,0,4.9,12.4H10A2.4,2.4,0,0,0,12.4,10V4.9A2.4,2.4,0,0,0,10,2.5Z'
    },
    {
      name: 'Facebook',
      path: 'M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.99,3.66,9.13,8.44,9.88V15.5H8.29v-3.48h2.15V9.61c0-2.12,1.26-3.28,3.2-3.28.91,0,1.85.07,2.78.14v3.08h-1.8c-1.03,0-1.23.49-1.23,1.2v1.58h3.42l-.44,3.48h-2.98v6.38A10,10,0,0,0,22,12Z'
    },
    {
      name: 'Instagram',
      path: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm6.46,14.61a6.08,6.08,0,0,1-1.6,1.6,6.08,6.08,0,0,1-1.6,1.6,3.12,3.12,0,0,1-2.26,0,6.08,6.08,0,0,1-1.6-1.6,6.08,6.08,0,0,1-1.6-1.6,3.12,3.12,0,0,1,0-2.26,6.08,6.08,0,0,1,1.6-1.6,6.08,6.08,0,0,1,1.6-1.6,3.12,3.12,0,0,1,2.26,0,6.08,6.08,0,0,1,1.6,1.6,6.08,6.08,0,0,1,1.6,1.6A3.12,3.12,0,0,1,18.46,14.61ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Z'
    }
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: 'Services', path: '/', section: 'services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/', section: 'contact' }
  ];

  const courseCategories = {
    'Language Training': [
      { name: 'IELTS Academic Champion', route: '/course/ielts-academic-champion' },
      { name: 'IELTS General Champion', route: '/course/ielts-general-champion' },
      { name: 'PTE Academic', route: '/course/pte-academic' },
      { name: 'TOEFL IBT', route: '/course/toefl' },
      { name: 'French Language (A1-B2)', route: '/course/french-language' },
      { name: 'German Language (A1-B2)', route: '/course/german-language' }
    ],
    'Test Preparation': [
      { name: 'Digital SAT', route: '/course/digital-sat' },
      { name: 'GMAT', route: '/course/gmat' },
      { name: 'Shorter GRE', route: '/course/shorter-gre' }
    ],
    'Career Development': [
      { name: 'Career Mentor', route: '/course/career-mentor' },
      { name: 'English Champion', route: '/course/english-champion' }
    ]
  };

  const handleLinkClick = (link) => {
    if (link.section) {
      if (location.pathname === '/') {
        document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          window.scrollTo(0, 0);
          document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(link.path);
      window.scrollTo(0, 0);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      className="bg-background-dark text-background-light"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold mb-4"
              whileHover={{ color: "#FACC15" }}
              transition={{ duration: 0.3 }}
            >
              About DRAMSVE
            </motion.h3>
            <p className="text-sm text-gray-400">
              Your trusted partner for study abroad guidance, skill enhancement, and language training.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-bold mb-4"
              whileHover={{ color: "#FACC15" }}
              transition={{ duration: 0.3 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <motion.button 
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer" 
                    onClick={() => handleLinkClick(link)}
                    whileHover={{ 
                      x: 5,
                      color: "#FACC15"
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {Object.entries(courseCategories).map(([category, courses]) => (
            <motion.div key={category} variants={itemVariants}>
              <motion.h3 
                className="text-lg font-bold mb-4"
                whileHover={{ color: "#FACC15" }}
                transition={{ duration: 0.3 }}
              >
                {category}
              </motion.h3>
              <ul className="space-y-2 text-sm">
                {courses.map((course, index) => (
                  <motion.li key={index}>
                    <motion.button 
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer text-left" 
                      onClick={() => {
                        navigate(course.route);
                        window.scrollTo(0, 0);
                      }}
                      whileHover={{ 
                        x: 5,
                        color: "#FACC15"
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {course.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.h3 
              className="text-lg font-bold mb-4"
              whileHover={{ color: "#FACC15" }}
              transition={{ duration: 0.3 }}
            >
              Contact Info
            </motion.h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <motion.li
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                123 Education Lane, Global City, 12345
              </motion.li>
              <motion.li
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Email: dramsve@gmail.com
              </motion.li>
              <motion.li
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Phone: +91 7058486440
              </motion.li>
            </ul>
            
            <motion.div 
              className="flex space-x-4 mt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {socialIcons.map((icon, index) => (
                <motion.a 
                  key={index}
                  className="text-gray-400 hover:text-white transition-colors" 
                  href="#"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    color: "#FACC15"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon.path}></path>
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            © 2024 DRAMSVE. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;