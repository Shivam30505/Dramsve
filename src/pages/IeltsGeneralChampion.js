import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useContact } from '../contexts/ContactContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CounterCard = ({ metric, index }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
    
  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = metric.value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          setCount(metric.value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [inView, metric.value]);

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl p-6 text-center shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 12px 25px rgba(106, 61, 154, 0.15)"
      }}
    >
      <div className="text-3xl font-bold mb-2" style={{color: '#6A3D9A'}}>
        {metric.value === 1.4 ? count.toFixed(1) : Math.floor(count)}{metric.suffix}
      </div>
      <p style={{color: '#666666'}}>{metric.label}</p>
    </motion.div>
  );
};

const IeltsGeneralChampion = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [scheduleRef, scheduleInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [journeyRef, journeyInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const { openContact } = useContact();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const features = [
    {
      icon: 'live_tv',
      title: '50+ Live Hours',
      description: 'Comprehensive live sessions covering all four IELTS General modules in depth.',
      color: 'blue'
    },
    {
      icon: 'assignment',
      title: 'Mock Tests & Scoring',
      description: 'Full-length simulated tests with detailed scoring pattern and feedback sessions.',
      color: 'green'
    },
    {
      icon: 'trending_up',
      title: 'Performance Tracking',
      description: 'Individual progress monitoring with detailed analytics and improvement insights.',
      color: 'purple'
    },
    {
      icon: 'language',
      title: 'Immigration Focus',
      description: 'Specialized training for immigration and work visa requirements worldwide.',
      color: 'orange'
    },
    {
      icon: 'computer',
      title: 'Online/Offline Mode',
      description: 'Flexible learning options with both online and offline class availability.',
      color: 'red'
    },
    {
      icon: 'school',
      title: 'Expert Faculty',
      description: 'IELTS General specialists with proven immigration success records.',
      color: 'indigo'
    }
  ];

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)'}}>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16" ref={heroRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 p-8 md:p-12 text-white">
                <motion.div
                  className="flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">IMMIGRATION FOCUSED</span>
                  <span className="px-3 py-1 rounded-full text-sm font-bold" style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}>Top Rated</span>
                </motion.div>
                
                <motion.h1
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 font-display"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  IELTS GENERAL CHAMPION
                </motion.h1>
                
                <motion.p
                  className="text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  2-Month Comprehensive Program for Immigration & Work Visas
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-6 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>schedule</span>
                    <span>2 Months Program</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>live_tv</span>
                    <span>50+ Live Hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>star</span>
                    <span>4.9 Rating (800+ Students)</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button
                    className="px-8 py-3 font-bold rounded-lg transition-all"
                    style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                    whileHover={{ scale: 1.05, backgroundColor: '#6C9E24', color: '#FFFFFF' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openContact}
                  >
                    Start Free Trial
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Live Class Schedule */}
        <section className="py-16" ref={scheduleRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={scheduleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-display" style={{color: '#6A3D9A'}}>
                Live Class Schedule
              </h2>
              <p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
                Structured weekly sessions covering all IELTS General modules with expert guidance.
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              animate={scheduleInView ? "visible" : "hidden"}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                {[
                  { day: 'Tuesday', time: '7:00 - 9:00 PM', module: 'Listening & Speaking', icon: 'hearing', color: '#6A3D9A' },
                  { day: 'Thursday', time: '7:00 - 9:00 PM', module: 'Reading', icon: 'menu_book', color: '#6C9E24' },
                  { day: 'Saturday', time: '10:00 - 12:00 AM', module: 'Writing & Feedback', icon: 'edit_document', color: '#FBB03B' }
                ].map((schedule, index) => (
                  <motion.div
                    key={index}
                    className="p-6 text-center"
                    variants={cardVariants}
                    whileHover={{ 
                      y: -5,
                      boxShadow: `0 10px 25px ${schedule.color}25`
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{backgroundColor: `${schedule.color}20`}}
                    >
                      <span className="material-symbols-outlined text-2xl" style={{color: schedule.color}}>
                        {schedule.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{color: '#333333'}}>{schedule.day}</h3>
                    <p className="mb-4" style={{color: '#666666'}}>{schedule.module}</p>
                    <div className="rounded-lg p-3" style={{backgroundColor: `${schedule.color}10`}}>
                      <p className="font-semibold" style={{color: schedule.color}}>{schedule.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-16" ref={featuresRef}>
          <div className="container mx-auto px-4">
            <div className="rounded-2xl p-8" style={{background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.05) 0%, rgba(108, 158, 36, 0.05) 100%)'}}>
              <motion.h2
                className="text-3xl font-bold text-center mb-8 font-display"
                style={{color: '#6A3D9A'}}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Why Choose IELTS General Champion?
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md cursor-pointer"
                    variants={cardVariants}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 12px 25px rgba(106, 61, 154, 0.15)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{backgroundColor: `rgba(106, 61, 154, 0.1)`}}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: `rgba(108, 158, 36, 0.1)`
                      }}
                    >
                      <span className="material-symbols-outlined text-2xl" style={{color: '#6A3D9A'}}>
                        {feature.icon}
                      </span>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2" style={{color: '#333333'}}>{feature.title}</h3>
                    <p style={{color: '#666666'}}>{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8-Week Journey */}
        <section className="py-16" ref={journeyRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={journeyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-display" style={{color: '#6A3D9A'}}>
                Your 8-Week Success Journey
              </h2>
              <p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
                Structured progression from fundamentals to immigration-ready proficiency
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{backgroundColor: '#6A3D9A'}}></div>
                
                <div className="space-y-8">
                  {[
                    {
                      number: '1-2',
                      title: 'Foundation & Immigration Focus',
                      description: 'IELTS General overview and immigration requirements, understanding letter writing formats, and everyday English contexts'
                    },
                    {
                      number: '3-4',
                      title: 'Listening & Reading Mastery',
                      description: 'Social and workplace listening skills, everyday reading comprehension, and practical vocabulary building'
                    },
                    {
                      number: '5-6',
                      title: 'Writing Excellence',
                      description: 'Letter writing mastery (formal, semi-formal, informal), task structure, and immigration-specific writing skills'
                    },
                    {
                      number: '7-8',
                      title: 'Speaking Confidence & Final Prep',
                      description: 'Daily life conversations, work scenarios, mock tests with immigration focus, and confidence building'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative flex items-start gap-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                      <motion.div
                        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0"
                        style={{background: 'linear-gradient(135deg, #6A3D9A, #8B5FBF)'}}
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          boxShadow: [
                            '0 4px 15px rgba(106, 61, 154, 0.3)',
                            '0 8px 25px rgba(106, 61, 154, 0.5)',
                            '0 4px 15px rgba(106, 61, 154, 0.3)'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      >
                        {item.number}
                      </motion.div>
                      
                      <motion.div
                        className="flex-1 bg-white rounded-lg p-6 shadow-md"
                        style={{borderLeft: '4px solid transparent'}}
                        whileHover={{
                          borderLeftColor: '#6A3D9A',
                          y: -2,
                          boxShadow: '0 8px 20px rgba(106, 61, 154, 0.15)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-bold mb-2" style={{color: '#333333'}}>
                          {item.title}
                        </h3>
                        <p style={{color: '#666666', lineHeight: '1.6'}}>
                          {item.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 font-display"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Proven Track Record
            </motion.h2>
            
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { value: 92, suffix: '%', label: 'Immigration Success Rate' },
                { value: 1.4, suffix: '+', label: 'Average Band Score Improvement' },
                { value: 800, suffix: '+', label: 'Students Helped with Visas' },
                { value: 45, suffix: '+', label: 'Countries Immigrated To' }
              ].map((metric, index) => (
                <CounterCard key={index} metric={metric} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="rounded-2xl p-8 md:p-12 text-center text-white"
              style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Ace Your IELTS Exam?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of successful students who achieved their dream scores with our Champion program
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <motion.button
                  className="px-8 py-4 font-bold rounded-lg text-lg transition-all"
                  style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                  whileHover={{ scale: 1.05, backgroundColor: '#6C9E24', color: '#FFFFFF' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openContact}
                >
                  Know More
                </motion.button>
                
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-white/80">
                {['180 Days Access', 'Certificate of Completion'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>verified</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IeltsGeneralChampion;