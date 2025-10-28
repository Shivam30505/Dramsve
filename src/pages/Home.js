import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import CoursesSection from '../components/CoursesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnersSection from '../components/PartnersSection';
import BlogsSection from '../components/BlogsSection';
import Footer from '../components/Footer';
import heroSvg from '../images/hero.png';
import airplanePng from '../images/Airplane.png';

const Home = () => {
  const navigate = useNavigate();
  const titleLine1 = 'Learning without';
  const titleLine2 = 'Border';
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
    <motion.div 
      className="bg-background-light dark:bg-background-dark font-sans text-text-dark dark:text-slate-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 pt-20">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Airplane Animation */}
            {/* <motion.div
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
            </motion.div> */}
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
                times: [0, 0.1, 0.9, 1]
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

            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <motion.div 
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight" style={{color: '#333'}}>
                    <div className="mb-2">
                      {titleLine1.split('').map((char, index) => (
                        <motion.span
                          key={index}
                          className="inline-block"
                          style={{ color: '#6A3D9A' }}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.05,
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                          whileHover={{
                            scale: 1.2,
                            color: '#8B5FBF',
                            textShadow: '0 0 20px rgba(139, 95, 191, 0.5)'
                          }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                      ))}
                    </div>
                    <div className="mb-2">
                      {titleLine2.split('').map((char, index) => (
                        <motion.span
                          key={index + titleLine1.length}
                          className="inline-block"
                          style={{ color: '#6A3D9A' }}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: (index + titleLine1.length) * 0.05,
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                          whileHover={{
                            scale: 1.2,
                            color: '#8B5FBF',
                            textShadow: '0 0 20px rgba(139, 95, 191, 0.5)'
                          }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                      ))}
                    </div>
                    <motion.div
                      style={{ color: '#6C9E24' }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                    >
                      {typewriterText}
                      <motion.span
                        className="inline-block"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        |
                      </motion.span>
                    </motion.div>
                  </motion.h2>
                  <motion.p 
                    className="text-lg mb-8 font-light"
                    style={{color: '#666', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px', lineHeight: '1.8'}}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Your reliable companion for international academic guidance, skill enhancement, and professional communication training.
                  </motion.p>
                  <motion.button
                    className="inline-block rounded-lg px-8 py-4 text-white text-base font-bold tracking-wide transition-all duration-300 shadow-lg"
                    style={{backgroundColor: '#8B5FBF'}}
                    whileHover={{ scale: 1.05, y: -2, backgroundColor: '#7FB83D' }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      navigate('/courses');
                      window.scrollTo(0, 0);
                    }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.img 
                    alt="DRAMSVE Hero" 
                    className="object-cover w-full h-96 cursor-pointer" 
                    src={heroSvg}
                    style={{
                      borderRadius: '60px 20px 60px 20px',
                      boxShadow: '0 20px 40px rgba(106, 61, 154, 0.2)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 10, 
                      rotateX: 5,
                      borderRadius: '20px 60px 20px 60px',
                      boxShadow: '0 30px 60px rgba(106, 61, 154, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    animate={{ 
                      y: [0, -10, 0],
                      borderRadius: ['60px 20px 60px 20px', '40px 40px 40px 40px', '60px 20px 60px 20px']
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-2xl opacity-60"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div 
                    className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-2xl opacity-60"
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 180, 0]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full"
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </section>

          <StatsSection />
          <div id="services"><ServicesSection /></div>
          <div id="courses"><CoursesSection /></div>
          <TestimonialsSection />
          <PartnersSection />
          <div id="blogs"><BlogsSection /></div>
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;