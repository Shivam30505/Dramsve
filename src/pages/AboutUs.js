import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUsSection from '../components/AboutUsSection';

const AboutUs = () => {
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
          <AboutUsSection />
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};

export default AboutUs;