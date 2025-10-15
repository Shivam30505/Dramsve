import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useContact } from '../contexts/ContactContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ToeflIbt = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formatRef, formatInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [courseRef, courseInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [openFaq, setOpenFaq] = useState(null);
  const { openContact } = useContact();

  const keyBenefits = [
    {
      title: 'Global Recognition',
      description: 'Accepted by 12,000+ universities in 150+ countries worldwide.',
      icon: 'public',
      color: '#3B82F6'
    },
    {
      title: 'Computer-Based Format',
      description: 'Same digital experience as real test with familiar interface.',
      icon: 'computer',
      color: '#10B981'
    },
    {
      title: 'Fast Results',
      description: 'Get your scores within 4-8 days after test completion.',
      icon: 'flash_on',
      color: '#6A3D9A'
    },
    {
      title: 'Real Academic English',
      description: 'Focuses on university-level English proficiency and skills.',
      icon: 'school',
      color: '#F59E0B'
    },
    {
      title: 'DRAMSVE Mentorship',
      description: 'Expert trainers, free trial, and personalized guidance.',
      icon: 'support_agent',
      color: '#EF4444'
    },
    {
      title: 'Flexible Testing',
      description: 'Available at test centers or take TOEFL Home Edition.',
      icon: 'home',
      color: '#8B5CF6'
    }
  ];

  const courseStructure = [
    {
      week: 1,
      module: 'Orientation',
      focus: 'Test overview, scoring, goals',
      activities: 'Diagnostic test & overview session'
    },
    {
      week: 2,
      module: 'Reading',
      focus: 'Comprehension and vocabulary',
      activities: 'Timed reading tasks & analysis'
    },
    {
      week: 3,
      module: 'Listening',
      focus: 'Identifying ideas & note-taking',
      activities: 'Audio drills & summaries'
    },
    {
      week: 4,
      module: 'Speaking',
      focus: 'Fluency, pronunciation, structure',
      activities: 'Recorded responses & feedback'
    },
    {
      week: 5,
      module: 'Writing',
      focus: 'Academic essays & coherence',
      activities: 'Essay writing + mentor evaluation'
    },
    {
      week: 6,
      module: 'Mock Tests',
      focus: 'Full-length practice tests',
      activities: 'Feedback & strategy improvement'
    }
  ];

  const whyChooseDramsve = [
    'Certified TOEFL Trainers with 10+ years experience',
    'Real exam interface and mock test simulation',
    'Personalized mentorship and performance tracking',
    'Free 3-day trial with access to live classes',
    'Flexible study modes — online, offline, hybrid',
    'Visa and career support for overseas education'
  ];

  const interestingFacts = [
    {
      fact: 'First introduced in 1964 by ETS',
      icon: 'history'
    },
    {
      fact: 'Over 35 million people have taken TOEFL worldwide',
      icon: 'groups'
    },
    {
      fact: 'Most accepted test in USA and Canada',
      icon: 'flag'
    },
    {
      fact: 'Can be taken at home with TOEFL Home Edition',
      icon: 'home'
    },
    {
      fact: 'Top universities prefer TOEFL due to academic focus',
      icon: 'star'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
                <motion.div 
                  className="flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.span 
                    className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                  >
                    INTERNET-BASED TEST
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 rounded-full text-sm font-bold" 
                    style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    ETS Official
                  </motion.span>
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4" 
                  style={{color: '#FFFFFF'}}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  TOEFL iBT
                </motion.h1>
                <motion.p 
                  className="text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  World's Most Widely Accepted English Language Proficiency Test
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-6 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.span 
                      className="material-symbols-outlined" 
                      style={{color: '#FBB03B'}}
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      schedule
                    </motion.span>
                    <span>116 Minutes Test</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.span 
                      className="material-symbols-outlined" 
                      style={{color: '#FBB03B'}}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    >
                      public
                    </motion.span>
                    <span>12,000+ Universities</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.span 
                      className="material-symbols-outlined" 
                      style={{color: '#FBB03B'}}
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      flash_on
                    </motion.span>
                    <span>Results in 4-8 Days</span>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <motion.button 
                    className="px-8 py-3 font-bold rounded-lg transition-all"
                    style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: '#6C9E24', 
                      color: '#FFFFFF',
                      boxShadow: '0 10px 25px rgba(108, 158, 36, 0.3)'
                    }}
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

        {/* Benefits */}
        <section className="py-16" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="rounded-2xl p-8" style={{background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.05) 0%, rgba(108, 158, 36, 0.05) 100%)'}}>
              <motion.h2 
                className="text-3xl font-bold text-center mb-8"
                style={{color: '#6A3D9A'}}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Benefits of Taking TOEFL Course
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {keyBenefits.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg"
                    variants={cardVariants}
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      boxShadow: `0 15px 30px ${item.color}20`
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{backgroundColor: `${item.color}15`}}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          backgroundColor: `${item.color}25`
                        }}
                      >
                        <motion.span 
                          className="material-symbols-outlined text-xl"
                          style={{color: item.color}}
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            repeatDelay: 2,
                            delay: index * 0.2
                          }}
                        >
                          {item.icon}
                        </motion.span>
                      </motion.div>
                      <h3 className="font-bold" style={{color: '#333333'}}>{item.title}</h3>
                    </div>
                    <p style={{color: '#666666'}}>{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Test Format */}
        <section className="py-16" ref={formatRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={formatInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              TOEFL iBT Test Content and Format
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                animate={formatInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 20px 40px rgba(106, 61, 154, 0.15)',
                  scale: 1.02
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{color: '#6A3D9A'}}>Test Sections</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Reading (20 Questions)</span>
                    <span style={{color: '#6A3D9A'}}>35 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Listening (28 Questions)</span>
                    <span style={{color: '#6A3D9A'}}>36 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Speaking (4 Tasks)</span>
                    <span style={{color: '#6A3D9A'}}>16 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Writing (2 Tasks)</span>
                    <span style={{color: '#6A3D9A'}}>29 minutes</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, x: 50, rotateY: 15 }}
                animate={formatInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 20px 40px rgba(106, 61, 154, 0.15)',
                  scale: 1.02
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{color: '#6A3D9A'}}>Scoring System</h3>
                <div className="space-y-4">
                  <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#6A3D9A', color: 'white'}}>
                    <div className="text-2xl font-bold">0-120</div>
                    <div className="text-sm">Total Score Range</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg" style={{backgroundColor: '#6C9E24', color: 'white'}}>
                      <div className="font-bold">100+</div>
                      <div className="text-xs">Excellent</div>
                    </div>
                    <div className="text-center p-3 rounded-lg" style={{backgroundColor: '#8B5CF6', color: 'white'}}>
                      <div className="font-bold">80+</div>
                      <div className="text-xs">Good</div>
                    </div>
                  </div>
                  <div className="text-center text-sm" style={{color: '#666666'}}>
                    Valid for 2 years
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="py-16" ref={courseRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={courseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              DRAMSVE TOEFL Course Structure
            </motion.h2>
            
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={courseInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <h4 className="font-bold" style={{color: '#6A3D9A'}}>Duration</h4>
                    <p style={{color: '#666666'}}>6-8 Weeks</p>
                  </div>
                  <div>
                    <h4 className="font-bold" style={{color: '#6A3D9A'}}>Mode</h4>
                    <p style={{color: '#666666'}}>Online / Offline / Hybrid</p>
                  </div>
                  <div>
                    <h4 className="font-bold" style={{color: '#6A3D9A'}}>Trial</h4>
                    <p style={{color: '#666666'}}>Free 3-Day Trial Included</p>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseStructure.map((week, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={courseInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      boxShadow: '0 15px 30px rgba(106, 61, 154, 0.15)'
                    }}
                  >
                    <div className="text-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{backgroundColor: '#6A3D9A', color: 'white'}}
                      >
                        <span className="font-bold">{week.week}</span>
                      </div>
                      <h3 className="text-lg font-bold" style={{color: '#6A3D9A'}}>{week.module}</h3>
                    </div>
                    <div className="space-y-2 text-center">
                      <p className="text-base font-medium" style={{color: '#333333'}}>{week.focus}</p>
                      <p className="text-base" style={{color: '#666666'}}>{week.activities}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose DRAMSVE & Interesting Facts */}
        <section className="py-16" ref={benefitsRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Why Choose DRAMSVE */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>
                  Why Choose DRAMSVE for TOEFL?
                </h2>
                <div className="space-y-4">
                  {whyChooseDramsve.map((reason, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4"
                      initial={{ opacity: 0, x: -30 }}
                      animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 10px 20px rgba(108, 158, 36, 0.15)'
                      }}
                    >
                      <motion.span 
                        className="material-symbols-outlined text-2xl"
                        style={{color: '#6C9E24'}}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        check_circle
                      </motion.span>
                      <span className="font-medium" style={{color: '#333333'}}>{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Interesting Facts */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>
                  Interesting Facts About TOEFL
                </h2>
                <div className="space-y-4">
                  {interestingFacts.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4"
                      initial={{ opacity: 0, x: 30 }}
                      animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 10px 20px rgba(139, 92, 246, 0.15)'
                      }}
                    >
                      <motion.span 
                        className="material-symbols-outlined text-2xl"
                        style={{color: '#8B5CF6'}}
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="font-medium" style={{color: '#333333'}}>{item.fact}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" ref={ctaRef}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="rounded-2xl p-8 md:p-12 text-center text-white"
              style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={ctaInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(106, 61, 154, 0.3)'
              }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Ace Your TOEFL iBT?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of students who achieved their dream scores with our expert TOEFL preparation program.</p>
              <motion.div 
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button 
                  className="px-8 py-3 font-bold rounded-lg transition-all"
                  style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                  whileHover={{ 
                    scale: 1.08, 
                    backgroundColor: '#6C9E24', 
                    color: '#FFFFFF',
                    boxShadow: '0 10px 30px rgba(108, 158, 36, 0.4)',
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openContact}
                >
                  Know More
                </motion.button>
                
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToeflIbt;