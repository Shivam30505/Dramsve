import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const socialIcons = [
    {
      name: 'Twitter',
      path: 'M22 5.924c-.75.333-1.563.556-2.417.656.865-.52 1.52-1.333 1.833-2.302-.812.48-1.708.833-2.656 1.02-.77-.82-1.854-1.333-3.062-1.333-2.312 0-4.187 1.875-4.187 4.187 0 .333.042.656.104.958-3.48-.166-6.562-1.833-8.625-4.354-.354.625-.562 1.354-.562 2.125 0 1.458.75 2.74 1.875 3.48-.687-.02-1.333-.208-1.896-.52v.042c0 2.02 1.437 3.708 3.333 4.094-.354.104-.72.166-1.104.166-.27 0-.52-.02-.77-.062.52 1.645 2.042 2.833 3.854 2.875-1.416 1.104-3.187 1.77-5.104 1.77-.333 0-.666-.02-1-.062 1.854 1.187 4.062 1.875 6.416 1.875 7.708 0 11.916-6.375 11.916-11.916 0-.187 0-.375-.02-.562.812-.583 1.52-1.312 2.083-2.145',
      url: 'https://twitter.com/dramsve' // Replace with your actual Twitter URL
    },
    {
      name: 'Facebook',
      path: 'M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.99,3.66,9.13,8.44,9.88V15.5H8.29v-3.48h2.15V9.61c0-2.12,1.26-3.28,3.2-3.28.91,0,1.85.07,2.78.14v3.08h-1.8c-1.03,0-1.23.49-1.23,1.2v1.58h3.42l-.44,3.48h-2.98v6.38A10,10,0,0,0,22,12Z',
      url: 'https://facebook.com/dramsve' // Replace with your actual Facebook URL
    },
    {
      name: 'Instagram',
      path: 'M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z',
      url: 'https://www.instagram.com/dramsve_edu?igsh=bXU5czI4cDhkeHhy' // Replace with your actual Instagram URL
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

  const handleSocialClick = (url) => {
    // Open social media link in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
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
                Nashik, India
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
                <motion.button 
                  key={index}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer" 
                  onClick={() => handleSocialClick(icon.url)}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    color: "#FACC15"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  aria-label={`Visit our ${icon.name} page`}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon.path}></path>
                  </svg>
                </motion.button>
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