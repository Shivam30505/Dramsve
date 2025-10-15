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
        {metric.value === 1.2 ? count.toFixed(1) : metric.value === 4.8 ? count.toFixed(1) : Math.floor(count)}{metric.suffix}
      </div>
      <p style={{color: '#666666'}}>{metric.label}</p>
    </motion.div>
  );
};

const IeltsAcademicMarathon = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [journeyRef, journeyInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const { openContact } = useContact();

  const marathonOptions = [
    {
      title: 'Reading Marathon',
      description: 'Master all 14 question types with speed and accuracy',
      duration: '4 Weeks',
      validity: '45 Days',
      sessions: 'Tue & Fri',
      color: '#6A3D9A',
      bgColor: 'bg-purple-100',
      icon: 'menu_book'
    },
    {
      title: 'Writing Marathon',
      description: 'Excel in Task 1 & Task 2 with structured approach',
      duration: '4 Weeks',
      validity: '45 Days',
      sessions: 'Wed & Fri',
      color: '#6A3D9A',
      bgColor: 'bg-purple-100',
      icon: 'edit_document'
    },
    {
      title: 'Speaking Marathon',
      description: 'Build fluency and confidence for all 3 speaking parts',
      duration: '4 Weeks',
      validity: '45 Days',
      sessions: 'Thu & Fri',
      color: '#6A3D9A',
      bgColor: 'bg-purple-100',
      icon: 'record_voice_over'
    }
  ];

  const features = [
    {
      title: 'Focused Training',
      description: 'Concentrated 4-week program targeting one specific module for maximum improvement.',
      icon: 'target',
      color: '#3B82F6'
    },
    {
      title: 'Daily Practice',
      description: 'Structured daily sessions with consistent practice and immediate feedback.',
      icon: 'schedule',
      color: '#10B981'
    },
    {
      title: 'Small Groups',
      description: '15-20 students per batch ensuring personalized attention and interaction.',
      icon: 'groups',
      color: '#6A3D9A'
    },
    {
      title: 'Progress Tracking',
      description: 'Weekly assessments and performance analytics to measure improvement.',
      icon: 'monitoring',
      color: '#F59E0B'
    },
    {
      title: 'Study Resources',
      description: 'Module-specific materials, practice tests, and vocabulary builders.',
      icon: 'download',
      color: '#EF4444'
    },
    {
      title: 'Expert Feedback',
      description: 'Personalized corrections and improvement strategies from IELTS specialists.',
      icon: 'forum',
      color: '#8B5CF6'
    }
  ];



  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)'}}>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="relative rounded-2xl overflow-hidden"
              style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 p-8 md:p-12 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">B2B PRODUCT</span>
                  <span className="px-3 py-1 rounded-full text-sm font-bold" style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}>Evaluation on Kanan</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4" style={{color: '#FFFFFF'}}>
                  IELTS ACADEMIC MARATHON
                </h1>
                <p className="text-xl mb-6 max-w-2xl">4-Week Intensive Module-Specific Training for Band 7+ Scores</p>
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>schedule</span>
                    <span>4 Weeks Intensive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>calendar_clock</span>
                    <span>45 Days Validity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>star</span>
                    <span>4.8 Rating (650+ Students)</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    className="px-8 py-3 font-bold rounded-lg transition-all"
                    style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                    whileHover={{ scale: 1.05, backgroundColor: '#6C9E24', color: '#FFFFFF' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openContact}
                  >
                    Start Free Trial
                  </motion.button>
                  
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Marathon Options */}
        <section className="py-16" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4" style={{color: '#6A3D9A'}}>Choose Your Focus Area</h2>
              <p className="max-w-2xl mx-auto" style={{color: '#6C9E24'}}>
                Specialized 4-week intensive programs targeting specific IELTS modules
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marathonOptions.map((option, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border-t-4 cursor-pointer"
                  style={{borderTopColor: option.color}}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15), 0 0 30px rgba(106, 61, 154, 0.4)" }}
                >
                  <div className={`w-16 h-16 ${option.bgColor} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <span className="material-symbols-outlined text-2xl" style={{color: option.color}}>
                      {option.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center" style={{color: '#333333'}}>
                    {option.title}
                  </h3>
                  <p className="text-center mb-4" style={{color: '#666666'}}>
                    {option.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{color: '#666666'}}>Duration</span>
                      <span className="font-semibold" style={{color: option.color}}>{option.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{color: '#666666'}}>Validity</span>
                      <span className="font-semibold" style={{color: option.color}}>{option.validity}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{color: '#666666'}}>Live Sessions</span>
                      <span className="font-semibold" style={{color: option.color}}>{option.sessions}</span>
                    </div>
                  </div>
                  
                  <motion.button 
                    className="w-full py-3 text-white font-bold rounded-lg transition-all"
                    style={{backgroundColor: option.color}}
                    whileHover={{ scale: 1.02, backgroundColor: '#8B5FBF' }}
                    whileTap={{ scale: 0.98 }}
                     onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
                  >
                    Select Reading Marathon
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl p-8" style={{background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.05) 0%, rgba(108, 158, 36, 0.05) 100%)'}}>
              <motion.h2 
                className="text-3xl font-bold text-center mb-8"
                style={{color: '#6A3D9A'}}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                 onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
              >
                Why Choose IELTS Marathon?
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md cursor-pointer"
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{backgroundColor: `${feature.color}20`}}
                    >
                      <span className="material-symbols-outlined text-2xl" style={{color: feature.color}}>
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{color: '#333333'}}>
                      {feature.title}
                    </h3>
                    <p style={{color: '#666666'}}>
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4-Week Journey */}
        <section className="py-16" ref={journeyRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={journeyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-display" style={{color: '#6A3D9A'}}>
                Your 4-Week Success Journey
              </h2>
              <p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
                Structured progression from fundamentals to advanced test strategies
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{backgroundColor: '#6A3D9A'}}></div>
                
                <div className="space-y-8">
                  {[
                    {
                      number: '1',
                      title: 'Foundation & Strategy Building',
                      description: 'Module-specific fundamentals and test format, core strategies and time management, diagnostic assessment and goal setting'
                    },
                    {
                      number: '2',
                      title: 'Skill Development Intensive',
                      description: 'Advanced techniques and approaches, vocabulary and language enhancement, practice with varied question types'
                    },
                    {
                      number: '3',
                      title: 'Advanced Application',
                      description: 'Complex scenarios and challenges, speed and accuracy training, error analysis and correction'
                    },
                    {
                      number: '4',
                      title: 'Mastery & Final Preparation',
                      description: 'Full-length mock tests, performance review and strategies, confidence building and final tips'
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
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Proven Marathon Results
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: 1.2, suffix: '+', label: 'Average Band Improvement' },
                { value: 89, suffix: '%', label: 'Achieve Target Scores' },
                { value: 650, suffix: '+', label: 'Students Transformed' },
                { value: 4.8, suffix: '/5', label: 'Student Satisfaction' }
              ].map((metric, index) => (
                <CounterCard key={index} metric={metric} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="rounded-2xl p-8 md:p-12 text-center text-white"
              style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Master Your Weakest Module?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join hundreds of students who transformed their band scores with our focused Marathon programs
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>verified</span>
                  <span>45 Days Extended Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>verified</span>
                  <span>Module Completion Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>verified</span>
                  <span>Score Improvement Guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IeltsAcademicMarathon;