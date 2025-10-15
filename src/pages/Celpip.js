import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useContact } from '../contexts/ContactContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Celpip = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [packagesRef, packagesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [structureRef, structureInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const { openContact } = useContact();

  const keyBenefits = [
    {
      title: 'Fully Computer-Based',
      description: 'Real test environment simulation with authentic interface.',
      icon: 'computer',
      color: '#3B82F6'
    },
    {
      title: 'Canadian Accent Focus',
      description: 'Authentic Canadian English exposure for better integration.',
      icon: 'flag',
      color: '#10B981'
    },
    {
      title: 'Single Sitting Test',
      description: 'All sections completed in one 3-hour session.',
      icon: 'schedule',
      color: '#6A3D9A'
    },
    {
      title: 'Fast Results',
      description: '4-5 business days turnaround for quick processing.',
      icon: 'speed',
      color: '#F59E0B'
    },
    {
      title: 'Practical English',
      description: 'Real-life, workplace English emphasis for daily use.',
      icon: 'work',
      color: '#EF4444'
    },
    {
      title: 'DRAMSVE Support',
      description: 'Personalized mentorship and comprehensive mock tests.',
      icon: 'support_agent',
      color: '#8B5CF6'
    }
  ];

  const testVariants = [
    {
      name: 'CELPIP-General',
      modules: 'Listening, Reading, Writing, Speaking',
      purpose: 'PR, Employment, Professional Use',
      duration: '~3 hours',
      recognition: 'Permanent Residency',
      color: '#6A3D9A'
    },
    {
      name: 'CELPIP-General LS',
      modules: 'Listening, Speaking',
      purpose: 'Canadian Citizenship',
      duration: '~1 hour 10 mins',
      recognition: 'Citizenship',
      color: '#10B981'
    }
  ];

  const courseStructure = [
    {
      week: 'Week 1',
      module: 'Orientation',
      focus: 'Test overview, scoring system',
      activities: 'Diagnostic Test',
      color: '#6A3D9A'
    },
    {
      week: 'Week 2',
      module: 'Listening',
      focus: 'Identify key ideas and tone',
      activities: 'Audio drills',
      color: '#10B981'
    },
    {
      week: 'Week 3',
      module: 'Reading',
      focus: 'Comprehension improvement',
      activities: 'Timed reading exercises',
      color: '#F59E0B'
    },
    {
      week: 'Week 4',
      module: 'Writing',
      focus: 'Email & essay structure',
      activities: 'Writing practice + feedback',
      color: '#EF4444'
    },
    {
      week: 'Week 5',
      module: 'Speaking',
      focus: 'Fluency & pronunciation',
      activities: 'Recording sessions',
      color: '#8B5CF6'
    },
    {
      week: 'Week 6',
      module: 'Mock Tests',
      focus: 'Strategy & time management',
      activities: 'Full-length practice tests',
      color: '#6C9E24'
    }
  ];

  const packageOptions = [
    {
      name: 'CELPIP Self Prep',
      duration: 'Self-paced',
      validity: '180 Days',
      features: ['Practice materials access', 'Self-study resources', 'Online practice tests', 'Progress tracking'],
      color: '#6A3D9A',
      popular: false
    },
    {
      name: 'CELPIP Champion',
      duration: '6 Weeks',
      validity: '180 Days',
      features: ['Comprehensive training', 'Live classes', 'Mock tests', 'Personal mentorship', 'Real exam simulation'],
      color: '#6C9E24',
      popular: true
    }
  ];

  const whyDramsve = [
    'Certified CELPIP trainers with years of experience',
    'Real exam simulation interface',
    'Personalized study plans with progress tracking',
    'Free 3-day trial access',
    'Assistance with PR and study abroad process',
    'Canadian immigration expertise'
  ];

  const targetAudience = [
    {
      type: 'PR Applicants',
      description: 'Individuals applying for Canadian Permanent Residency',
      icon: 'home'
    },
    {
      type: 'Citizenship Seekers',
      description: 'Those applying for Canadian Citizenship (LS version)',
      icon: 'flag'
    },
    {
      type: 'Professionals',
      description: 'Seeking employment or professional licensing in Canada',
      icon: 'business_center'
    },
    {
      type: 'Students',
      description: 'Planning to study and immigrate to Canada',
      icon: 'school'
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
                    IRCC RECOGNIZED
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 rounded-full text-sm font-bold" 
                    style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    Canadian Immigration
                  </motion.span>
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4" 
                  style={{color: '#FFFFFF'}}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  CELPIP
                </motion.h1>
                <motion.p 
                  className="text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Canadian English Language Proficiency Index Program - Your Gateway to Canadian Immigration
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
                      computer
                    </motion.span>
                    <span>Fully Computer-Based</span>
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
                      speed
                    </motion.span>
                    <span>Fast Results (4-5 Days)</span>
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
                    <span>IRCC Approved</span>
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

        {/* Key Benefits */}
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
                Key Benefits of CELPIP
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

        {/* Test Variants */}
        <section className="py-16" ref={benefitsRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              CELPIP Test Variants
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testVariants.map((variant, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(106, 61, 154, 0.15)'
                  }}
                >
                  <div className="text-center mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{backgroundColor: variant.color, color: 'white'}}
                    >
                      <span className="font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{color: variant.color}}>{variant.name}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 rounded" style={{backgroundColor: '#F7F7F7'}}>
                      <span className="text-sm font-medium">Modules:</span>
                      <span className="text-sm" style={{color: variant.color}}>{variant.modules}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded" style={{backgroundColor: '#F7F7F7'}}>
                      <span className="text-sm font-medium">Purpose:</span>
                      <span className="text-sm" style={{color: variant.color}}>{variant.purpose}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded" style={{backgroundColor: '#F7F7F7'}}>
                      <span className="text-sm font-medium">Duration:</span>
                      <span className="text-sm" style={{color: variant.color}}>{variant.duration}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded" style={{backgroundColor: '#F7F7F7'}}>
                      <span className="text-sm font-medium">Recognition:</span>
                      <span className="text-sm" style={{color: variant.color}}>{variant.recognition}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="py-16" ref={structureRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={structureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              DRAMSVE CELPIP Course Structure (6-Week Program)
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseStructure.map((week, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={structureInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(106, 61, 154, 0.15)'
                  }}
                >
                  <div className="text-center mb-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{backgroundColor: week.color, color: 'white'}}
                    >
                      <span className="font-bold text-sm">{week.week.split(' ')[1]}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1" style={{color: week.color}}>{week.week}</h3>
                    <h4 className="font-semibold mb-2" style={{color: '#333333'}}>{week.module}</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm" style={{color: '#666666'}}><strong>Focus:</strong> {week.focus}</p>
                    <p className="text-sm" style={{color: '#666666'}}><strong>Activities:</strong> {week.activities}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Package Options */}
        <section className="py-16" ref={packagesRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={packagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Course Package Options
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {packageOptions.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg relative ${pkg.popular ? 'ring-2' : ''}`}
                  style={pkg.popular ? {ringColor: pkg.color} : {}}
                  initial={{ opacity: 0, y: 50 }}
                  animate={packagesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(106, 61, 154, 0.15)'
                  }}
                >
                  {pkg.popular && (
                    <div 
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-bold"
                      style={{backgroundColor: pkg.color}}
                    >
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2" style={{color: pkg.color}}>{pkg.name}</h3>
                    <div className="text-sm mb-2" style={{color: '#666666'}}>
                      {pkg.duration} • {pkg.validity}
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
                     onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
                  >
                    Choose {pkg.name}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why DRAMSVE & Target Audience */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Why DRAMSVE */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>
                  Why Choose DRAMSVE for CELPIP
                </h2>
                <div className="space-y-4">
                  {whyDramsve.map((reason, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
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

              {/* Target Audience */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
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
                      animate={{ opacity: 1, x: 0 }}
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
              <h2 className="text-3xl font-bold mb-4">Ready to Achieve Your Canadian Dream?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Join DRAMSVE's CELPIP program and take the first step towards Canadian immigration with confidence.</p>
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

export default Celpip;