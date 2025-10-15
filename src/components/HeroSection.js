import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroSvg from '../images/hero.png';
import airplanePng from '../images/Airplane.png';

const HeroSection = () => {
  const navigate = useNavigate();
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const title = 'Learning without Border';
  const subtitle = 'with DRAMSVE';

  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 250;
    const deleteSpeed = 150;
    const pauseTime = 3000;

    const typeWriter = () => {
      if (!isDeleting) {
        if (typewriterText.length < subtitle.length) {
          setTypewriterText(subtitle.slice(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(subtitle.slice(0, typewriterText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(typeWriter, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, subtitle]);

  return (
    <section
      className="min-h-[90vh] flex items-center w-full pt-0 mt-0 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8f2ff 0%, #eee6f7 100%)',
      }}
    >
      {/* Airplane Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 70 }}
        initial={{
          x: '-60%',
          y: '100%',
          opacity: 0,
          rotate: -15
        }}
        animate={{
          x: '110%',
          y: '-50%',
          opacity: [0, 1, 1, 0],
          rotate: 15
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          times: [0, 0.1, 0.9, 1],
          repeat: Infinity,
          repeatDelay: 8
        }}
      >
        <div className="relative">
          <img
            src={airplanePng}
            alt="Flying airplane"
            className="absolute w-[35vw] max-w-[700px] min-w-[180px] h-auto"
          />
        </div>
      </motion.div>


      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 lg:col-span-3 lg:pr-2 lg:-ml-2 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.h1
              className="font-display font-bold leading-tight"
              variants={textVariants}
            >
              <motion.div
                className="overflow-hidden text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
              >
                {title.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    style={{ color: '#6A3D9A' }}
                    variants={letterVariants}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span style={{ color: '#6C9E24' }}>
                  {typewriterText}
                  <span className="animate-pulse" style={{ color: '#6C9E24' }}>
                    |
                  </span>
                </span>
              </motion.div>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl font-display font-light leading-relaxed max-w-2xl"
              style={{ color: '#666666', letterSpacing: '0.3px' }}
              variants={textVariants}
              transition={{ delay: 1.5 }}
            >
              Your reliable companion for international academic guidance, skill enhancement, and professional communication training.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={textVariants}
              transition={{ delay: 2 }}
            >
              <motion.button
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-bold text-base sm:text-lg shadow-lg w-full sm:w-auto"
                style={{ backgroundColor: '#8B5FBF' }}
                whileHover={{
                  backgroundColor: '#7FB83D',
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400 }}
                onClick={() => {
                  navigate('/courses');
                  window.scrollTo(0, 0);
                }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Hero SVG */}
          <motion.div
            className="relative flex items-center justify-center lg:col-span-2"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.img
                src={heroSvg}
                alt="DRAMSVE Hero"
                className="w-full h-auto object-contain rounded-3xl"
                style={{ backgroundColor: 'transparent' }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
