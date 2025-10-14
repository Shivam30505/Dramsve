import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import CoursesSection from '../components/CoursesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnersSection from '../components/PartnersSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';


const Home = () => {
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
          <HeroSection />
          <StatsSection />
          <div id="services"><ServicesSection /></div>
          <div id="courses"><CoursesSection /></div>
          <TestimonialsSection />
          <PartnersSection />
          <div id="contact"><ContactSection /></div>
        </main>
        <Footer />

      </div>
    </motion.div>
  );
};

export default Home;