import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl font-bold text-center mb-8" style={{color: '#6A3D9A'}}>About Us</h1>
              <p className="text-lg text-center max-w-4xl mx-auto" style={{color: '#666666'}}>Learn more about DRAMSVE and our mission to provide quality education and training.</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </motion.div>
  );
};

export default AboutUs;