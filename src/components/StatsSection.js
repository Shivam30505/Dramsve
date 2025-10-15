import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const stats = [
    { target: 11, suffix: '+', label: 'Years of Experience', icon: 'schedule' },
    { target: 50, suffix: '+', label: 'Expert Trainers', icon: 'group' },
    { target: 5000, suffix: 'K+', label: 'Students Mentored', icon: 'school' },
    { target: 95, suffix: '%', label: 'Admission Success Rate', icon: 'verified' }
  ];

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 20);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="relative overflow-hidden py-20 sm:py-24"
      style={{background: 'linear-gradient(135deg, #F7F7F7 0%, #FFF9F3 100%)'}}
    >
      <div className="container relative z-10 mx-auto px-4" ref={ref}>
        <motion.h2 
          className="font-display text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-4"
          style={{color: '#6A3D9A', letterSpacing: '0.5px'}}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Impact Dashboard
        </motion.h2>
        <motion.p 
          className="text-center text-lg max-w-2xl mx-auto mb-16"
          style={{color: '#6C9E24', fontWeight: 400}}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
         
        </motion.p>
        
        <motion.div 
          className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="relative bg-white text-center group overflow-hidden p-6 sm:p-8 md:p-10"
              style={{
                borderRadius: '20px',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.08)'
              }}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                boxShadow: "0 8px 20px rgba(106, 61, 154, 0.2)",
                border: "2px solid #6C9E24"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex items-center justify-center mb-4"
                animate={inView ? { scale: [0.5, 1.1, 1] } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <span 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-center"
                  style={{fontWeight: 700, color: '#6A3D9A', lineHeight: 1}}
                >
                  {stat.suffix === 'K+' ? Math.floor(counters[index] / 1000) + 'K+' : counters[index] + stat.suffix}
                </span>
              </motion.div>
              <div className="flex items-center justify-center gap-2">
                <span 
                  className="material-symbols-outlined"
                  style={{color: '#FBB03B', fontSize: '22px'}}
                >
                  {stat.icon}
                </span>
                <p 
                  className="font-medium text-sm sm:text-base md:text-lg text-center"
                  style={{fontWeight: 500, color: '#333333'}}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;