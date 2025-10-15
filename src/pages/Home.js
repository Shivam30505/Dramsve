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
          <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight" style={{color: '#6A3D9A'}}>
                    <div className="mb-2">{titleLine1}</div>
                    <div className="mb-2">{titleLine2}</div>
                    <div style={{ color: '#6C9E24' }}>{typewriterText}</div>
                  </h2>
                  <p 
                    className="text-lg mb-8 font-light"
                    style={{color: '#666', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px', lineHeight: '1.8'}}
                  >
                    Your reliable companion for international academic guidance, skill enhancement, and professional communication training.
                  </p>
                  <button
                    className="inline-block rounded-lg px-8 py-4 text-white text-base font-bold tracking-wide transition-all duration-300 shadow-lg hover:bg-green-600"
                    style={{backgroundColor: '#8B5FBF'}}
                    onClick={() => {
                      navigate('/courses');
                      window.scrollTo(0, 0);
                    }}
                  >
                    Get Started
                  </button>
                </div>
                <div className="relative">
                  <img 
                    alt="DRAMSVE Hero" 
                    className="object-cover w-full h-96" 
                    src={heroSvg}
                    style={{
                      borderRadius: '60px 20px 60px 20px',
                      boxShadow: '0 20px 40px rgba(106, 61, 154, 0.2)'
                    }}
                  />
                </div>
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