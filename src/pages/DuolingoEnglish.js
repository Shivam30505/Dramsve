import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useContact } from '../contexts/ContactContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DuolingoEnglish = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formatRef, formatInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [packagesRef, packagesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const { openContact } = useContact();

  const keyFeatures = [
    {
      title: 'Fast & Efficient',
      description: 'Complete in 1 hour from anywhere with instant results within 48 hours.',
      icon: 'flash_on',
      color: '#3B82F6'
    },
    {
      title: 'Cost-Effective',
      description: 'Much cheaper than traditional tests at approximately $49.',
      icon: 'attach_money',
      color: '#10B981'
    },
    {
      title: 'Global Recognition',
      description: 'Accepted by over 4000 universities worldwide including USA, Canada, UK, Australia.',
      icon: 'public',
      color: '#6A3D9A'
    },
    {
      title: 'AI-Based & Secure',
      description: 'Ensures integrity and reliable scoring with advanced AI technology.',
      icon: 'psychology',
      color: '#F59E0B'
    },
    {
      title: 'Remote Testing',
      description: 'Take it online from home with just a computer, camera and microphone.',
      icon: 'home',
      color: '#EF4444'
    },
    {
      title: 'Adaptive Format',
      description: 'Questions get easier or harder based on your previous answers.',
      icon: 'tune',
      color: '#8B5CF6'
    }
  ];

  const packages = [
    {
      name: 'Duolingo English Test - Trial',
      duration: 'Trial',
      mode: 'Online',
      price: 'Free Trial',
      features: ['Practice test access', 'DET strategy lessons', 'Vocabulary exercises', 'Grammar fundamentals'],
      color: '#EF4444',
      popular: false,
      trial: true
    },
    {
      name: 'Duolingo English Test - Champion',
      duration: '4 Weeks',
      mode: 'Live + Recordings',
      price: 'Most Popular',
      features: ['5 full-length practice tests', 'Speaking & writing workshops', 'Error analysis', 'Flexible timings'],
      color: '#6C9E24',
      popular: true,
      validity: '60 Days'
    }
  ];

  const benefits = [
    'Online & Remote: Take from home',
    'Fast Results: Within 48 hours',
    'Affordable: Approximately $49',
    'Global Recognition: 4000+ institutions',
    'Comprehensive: Tests all English skills',
    'Adaptive: Personalized difficulty level'
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
                    ONLINE TEST
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 rounded-full text-sm font-bold" 
                    style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    AI Powered
                  </motion.span>
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4" 
                  style={{color: '#FFFFFF'}}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  DUOLINGO ENGLISH TEST
                </motion.h1>
                <motion.p 
                  className="text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Modern, Online English Proficiency Test for Global Opportunities
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
                    <span>60 Minutes Test</span>
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
                      home
                    </motion.span>
                    <span>Take From Home</span>
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
                      attach_money
                    </motion.span>
                    <span>Only $49</span>
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

        {/* Key Features */}
        <section className="py-16" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="rounded-2xl p-8" style={{background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)'}}>
              <motion.h2 
                className="text-3xl font-bold text-center mb-8"
                style={{color: '#6A3D9A'}}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Why Choose Duolingo English Test?
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {keyFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg"
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      boxShadow: `0 20px 40px ${item.color}30`,
                      rotate: 1
                    }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      boxShadow: [`0 5px 15px ${item.color}10`, `0 8px 20px ${item.color}20`, `0 5px 15px ${item.color}10`]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
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
              Test Structure & Format
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
                    <span className="font-medium">Adaptive Questions</span>
                    <span style={{color: '#6A3D9A'}}>30-40 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Writing Sample</span>
                    <span style={{color: '#6A3D9A'}}>5 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Video Interview</span>
                    <span style={{color: '#6A3D9A'}}>5 minutes</span>
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
                    <div className="text-2xl font-bold">10-160</div>
                    <div className="text-sm">Overall Score Range</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg" style={{backgroundColor: '#10B981', color: 'white'}}>
                      <div className="font-bold">120+</div>
                      <div className="text-xs">Advanced</div>
                    </div>
                    <div className="text-center p-3 rounded-lg" style={{backgroundColor: '#8B5CF6', color: 'white'}}>
                      <div className="font-bold">95+</div>
                      <div className="text-xs">Intermediate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16" ref={packagesRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={packagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Choose Your DET Package
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg relative ${pkg.popular ? 'ring-2' : ''}`}
                  style={pkg.popular ? {ringColor: pkg.color} : {}}
                  initial={{ opacity: 0, y: 50 }}
                  animate={packagesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    rotate: pkg.popular ? 2 : -1
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {pkg.popular && (
                    <div 
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-bold"
                      style={{backgroundColor: pkg.color}}
                    >
                      Most Popular
                    </div>
                  )}
                  {pkg.trial && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      Trial
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold mb-2" style={{color: pkg.color}}>{pkg.name}</h3>
                    <div className="text-xl font-bold mb-2" style={{color: '#333333'}}>{pkg.price}</div>
                    <div className="text-sm" style={{color: '#666666'}}>
                      {pkg.duration} • {pkg.validity || pkg.mode}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                        <span className="text-sm" style={{color: '#666666'}}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className="w-full py-3 rounded-lg font-bold text-white transition-all"
                    style={{backgroundColor: pkg.color}}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 8px 25px ${pkg.color}40`,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [`0 4px 15px ${pkg.color}20`, `0 6px 20px ${pkg.color}30`, `0 4px 15px ${pkg.color}20`]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
                  >
                    Choose Package
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Summary */}
        <section className="py-16" ref={benefitsRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Key Benefits Summary
            </motion.h2>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg flex items-center gap-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(16, 185, 129, 0.15)'
                  }}
                >
                  <motion.span 
                    className="material-symbols-outlined text-2xl"
                    style={{color: '#10B981'}}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    check_circle
                  </motion.span>
                  <span className="font-medium" style={{color: '#333333'}}>{benefit}</span>
                </motion.div>
              ))}
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
              <h2 className="text-3xl font-bold mb-4">Ready to Take the Duolingo English Test?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of students who achieved their dreams with our expert DET preparation.</p>
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
                  animate={{
                    boxShadow: ['0 5px 15px rgba(251, 176, 59, 0.3)', '0 8px 25px rgba(251, 176, 59, 0.5)', '0 5px 15px rgba(251, 176, 59, 0.3)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
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

export default DuolingoEnglish;