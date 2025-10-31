import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useContact } from '../contexts/ContactContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FrenchLanguage = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [levelsRef, levelsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const { openContact } = useContact();

  const whyLearnFrench = [
    {
      title: 'Global Reach',
      description: '300+ million speakers worldwide across multiple continents.',
      icon: 'public',
      color: '#3B82F6'
    },
    {
      title: 'Career Benefits',
      description: 'International business, tourism, diplomacy, and education opportunities.',
      icon: 'work',
      color: '#10B981'
    },
    {
      title: 'Study Opportunities',
      description: 'Access to universities in France, Canada, Switzerland, Belgium.',
      icon: 'school',
      color: '#6A3D9A'
    },
    {
      title: 'Cultural Access',
      description: 'Literature, cinema, cuisine, arts, and rich French heritage.',
      icon: 'palette',
      color: '#F59E0B'
    },
    {
      title: 'Cognitive Advantages',
      description: 'Improves memory and problem-solving skills significantly.',
      icon: 'psychology',
      color: '#EF4444'
    },
    {
      title: 'CEFR Standards',
      description: 'Internationally recognized certification and skill levels.',
      icon: 'verified',
      color: '#8B5CF6'
    }
  ];

  const frenchBatches = [
    {
      name: 'French A2',
      duration: '90 Days',
      description: 'Master elementary French for daily communication and basic writing skills',
      features: ['Daily routine communication', 'Basic writing skills', 'Expanded vocabulary', 'Interactive sessions'],
      color: '#10B981',
      hasFreeTrial: true,
      icon: 'auto_stories'
    },
    {
      name: 'French B1',
      duration: '90 Days',
      description: 'Advance to intermediate level with travel and work communication skills',
      features: ['Travel communication', 'Work scenarios', 'Describing experiences', 'Opinion expression'],
      color: '#F59E0B',
      hasFreeTrial: true,
      icon: 'flight_takeoff'
    },
    {
      name: 'French B2',
      duration: '90 Days',
      description: 'Achieve fluency with professional communication and complex discussions',
      features: ['Fluent expression', 'Professional communication', 'Complex discussions', 'Advanced writing'],
      color: '#EF4444',
      hasFreeTrial: true,
      icon: 'workspace_premium'
    },
    {
      name: 'French Basic\nA1-B2',
      duration: '42 Weeks',
      description: 'Complete comprehensive package from beginner to upper-intermediate level',
      features: ['A1 to B2 coverage', 'DELF exam preparation', 'Cultural immersion', 'Progress tracking', 'Certificate upon completion'],
      color: '#8B5CF6',
      hasFreeTrial: true,
      popular: true,
      icon: 'military_tech'
    },
    {
      name: 'French Basic\nA1 & B2',
      duration: '210 Days',
      description: 'Foundation to upper-intermediate with flexible timing options',
      timings: [
        { slot: 'Evening', icon: 'nights_stay' },
        { slot: 'Morning', icon: 'wb_sunny' },
        { slot: 'All Timings', icon: 'schedule' }
      ],
      features: ['Foundation to B2', 'Flexible scheduling', 'Structured progression', 'Recorded sessions', 'Personal mentoring'],
      color: '#6C9E24',
      hasFreeTrial: true,
      icon: 'event_available'
    },
    {
      name: 'French Basic A1',
      duration: '150 Days',
      description: 'Build strong French foundation with multiple learning modes',
      timings: [
        { slot: 'Evening', icon: 'nights_stay' },
        { slot: 'Morning', icon: 'wb_sunny' },
        { slot: 'All Timings', icon: 'schedule' }
      ],
      weekendMode: true,
      features: ['Self-introduction skills', 'Basic phrases mastery', 'Simple conversations', 'Grammar fundamentals', 'Weekend option available'],
      color: '#6A3D9A',
      hasFreeTrial: true,
      icon: 'school'
    }
  ];

  const keyAdvantages = [
    'Certified and native-speaking instructors',
    'Progress tracking with regular assessments',
    'Exam-focused training (DELF/TCF)',
    'Flexible learning options',
    'Global recognition of certifications',
    'Cultural immersion alongside language learning'
  ];

  const targetAudience = [
    {
      type: 'Students',
      description: 'Planning to study in French-speaking countries',
      icon: 'school'
    },
    {
      type: 'Professionals',
      description: 'Seeking international career opportunities',
      icon: 'business_center'
    },
    {
      type: 'Language Enthusiasts',
      description: 'Passionate about learning new languages',
      icon: 'favorite'
    },
    {
      type: 'Exam Candidates',
      description: 'Preparing for DELF/TCF examinations',
      icon: 'quiz'
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
                    CEFR STANDARDS
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 rounded-full text-sm font-bold" 
                    style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    A1-B2 Levels
                  </motion.span>
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4" 
                  style={{color: '#FFFFFF'}}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  FRENCH LANGUAGE
                </motion.h1>
                <motion.p 
                  className="text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Complete French Language Learning from Basic to Intermediate Level
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
                    <span>32 Weeks Complete</span>
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
                      groups
                    </motion.span>
                    <span>300M+ Speakers</span>
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
                      verified
                    </motion.span>
                    <span>DELF Certified</span>
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

        {/* Why Learn French */}
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
                Why Learn French?
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {whyLearnFrench.map((item, index) => (
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

        {/* French Batch Details */}
        <section className="py-16" ref={levelsRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-4"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={levelsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              French Batch Details
            </motion.h2>
            
            <motion.p 
              className="text-center text-lg mb-12 max-w-3xl mx-auto"
              style={{color: '#666666'}}
              initial={{ opacity: 0, y: 20 }}
              animate={levelsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose from our comprehensive French language programs designed for all proficiency levels.
              <span className="block mt-2 font-semibold" style={{color: '#6C9E24'}}>All batches include free trial sessions!</span>
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {frenchBatches.map((batch, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden flex flex-col ${batch.popular ? 'ring-2 ring-offset-2' : ''}`}
                  style={batch.popular ? {ringColor: batch.color} : {}}
                  initial={{ opacity: 0, y: 50 }}
                  animate={levelsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: `0 20px 40px ${batch.color}30`
                  }}
                >
                  {/* Background decoration */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10"
                    style={{backgroundColor: batch.color}}
                  />
                  
                  
                  
                  {/* Free Trial Badge */}
                  {batch.hasFreeTrial && (
                    <motion.div 
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-bold shadow-md"
                      style={{backgroundColor: '#6C9E24'}}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{ 
                        y: [0, -3, 0],
                      }}
                      transition={{
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      🎁 Free Trial
                    </motion.div>
                  )}
                  
                  {/* Header */}
                  <div className="relative z-10 mb-6 pr-20">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                        style={{backgroundColor: batch.color}}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="material-symbols-outlined text-white text-2xl">{batch.icon}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold leading-tight whitespace-pre-line" style={{color: batch.color}}>{batch.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="material-symbols-outlined text-sm" style={{color: '#666666'}}>schedule</span>
                          <span className="text-sm font-semibold" style={{color: '#666666'}}>{batch.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm leading-relaxed" style={{color: '#666666'}}>{batch.description}</p>
                  </div>
                  
                  {/* Timing Options */}
                  <div className="mb-4">
                    {batch.timings ? (
                      <div className="p-3 rounded-xl" style={{backgroundColor: `${batch.color}10`}}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="material-symbols-outlined text-sm" style={{color: batch.color}}>schedule</span>
                          <span className="text-xs font-bold" style={{color: batch.color}}>Available Timings:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {batch.timings.map((timing, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white shadow-sm"
                              whileHover={{ scale: 1.05, backgroundColor: `${batch.color}20` }}
                            >
                              <span className="material-symbols-outlined text-xs" style={{color: batch.color}}>{timing.icon}</span>
                              <span className="text-xs font-medium" style={{color: '#333333'}}>{timing.slot}</span>
                            </motion.div>
                          ))}
                        </div>
                        {batch.weekendMode && (
                          <div className="mt-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs" style={{color: batch.color}}>event</span>
                            <span className="text-xs font-semibold" style={{color: batch.color}}>+ Weekend Mode Available</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={{height: '0px'}}></div>
                    )}
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {batch.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={levelsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        <span className="material-symbols-outlined text-sm mt-0.5" style={{color: '#6C9E24'}}>check_circle</span>
                        <span className="text-sm" style={{color: '#666666'}}>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <motion.button 
                    className="w-full py-3 rounded-xl font-bold text-white transition-all relative overflow-hidden group"
                    style={{backgroundColor: batch.color}}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: `0 10px 30px ${batch.color}50`
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={openContact}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Enroll Now</span>
                      <motion.span 
                        className="material-symbols-outlined text-lg"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        arrow_forward
                      </motion.span>
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Info */}
            <motion.div 
              className="mt-12 text-center p-6 rounded-2xl max-w-4xl mx-auto"
              style={{background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.1) 0%, rgba(108, 158, 36, 0.1) 100%)'}}
              initial={{ opacity: 0, y: 30 }}
              animate={levelsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="material-symbols-outlined text-2xl" style={{color: '#6A3D9A'}}>info</span>
                <h4 className="text-lg font-bold" style={{color: '#6A3D9A'}}>Important Note</h4>
              </div>
              <p className="text-sm leading-relaxed" style={{color: '#666666'}}>
                Free trial sessions are available for all batches to help you experience our teaching methodology before enrolling.
                <span className="block mt-2 font-semibold">Contact us to schedule your free trial session today!</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Advantages & Target Audience */}
        <section className="py-16" ref={benefitsRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Key Advantages */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>
                  Key Advantages
                </h2>
                <div className="space-y-4">
                  {keyAdvantages.map((advantage, index) => (
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
                      <span className="font-medium" style={{color: '#333333'}}>{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Target Audience */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>
                  Target Audience
                </h2>
                <div className="space-y-4">
                  {targetAudience.map((audience, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg"
                      initial={{ opacity: 0, x: 30 }}
                      animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: '0 10px 20px rgba(139, 92, 246, 0.15)'
                      }}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <motion.span 
                          className="material-symbols-outlined text-2xl"
                          style={{color: '#8B5CF6'}}
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {audience.icon}
                        </motion.span>
                        <h3 className="font-bold text-lg" style={{color: '#333333'}}>{audience.type}</h3>
                      </div>
                      <p style={{color: '#666666'}}>{audience.description}</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Master French Language?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Join our comprehensive French program and unlock global opportunities with CEFR-certified training.</p>
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

export default FrenchLanguage;