import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useContact } from '../contexts/ContactContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CareerMentor = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [curriculumRef, curriculumInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [packagesRef, packagesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const { openContact } = useContact();

  const programBenefits = [
    {
      title: 'Career-Focused Learning',
      description: 'Specifically designed for job market readiness and corporate success.',
      icon: 'trending_up',
      color: '#3B82F6'
    },
    {
      title: 'Practical Skills',
      description: 'Immediately applicable workplace skills valued by employers.',
      icon: 'build',
      color: '#10B981'
    },
    {
      title: 'Industry Recognition',
      description: 'Skill Rise Certification valued by professionals and recruiters.',
      icon: 'verified',
      color: '#6A3D9A'
    },
    {
      title: 'Expert Mentorship',
      description: 'Experienced corporate trainers and personalized career guidance.',
      icon: 'person',
      color: '#F59E0B'
    },
    {
      title: 'Flexible Learning',
      description: 'Online format with comprehensive support and resources.',
      icon: 'schedule',
      color: '#EF4444'
    },
    {
      title: 'Proven Impact',
      description: 'Based on current job market demands and recruiter preferences.',
      icon: 'analytics',
      color: '#8B5CF6'
    }
  ];

  const coreCurriculum = [
    {
      module: 'Corporate Communication',
      duration: '2 Weeks',
      skills: ['Effective verbal and written communication', 'Presentation skills and business etiquette', 'Professional email and report writing', 'Interview preparation and networking'],
      color: '#6A3D9A'
    },
    {
      module: 'Google Workspace Productivity',
      duration: '2 Weeks',
      skills: ['Google Docs, Sheets, Slides mastery', 'Task and time management', 'Collaboration tools', 'Workflow automation'],
      color: '#10B981'
    },
    {
      module: 'Career Visibility Essentials',
      duration: '2 Weeks',
      skills: ['Personal brand building', 'LinkedIn profile optimization', 'Resume and cover letter best practices', 'Job search strategies'],
      color: '#F59E0B'
    }
  ];

  const packageOptions = [
    {
      name: 'Basic',
      duration: '1 Month',
      mode: 'Online',
      features: ['Core modules coverage', 'Module-wise assessments', 'Basic certification', 'Email support'],
      color: '#6A3D9A',
      popular: false
    },
    {
      name: 'Advanced',
      duration: '2 Months',
      mode: 'Online/Offline',
      features: ['All modules included', 'Capstone project', 'Personal mentorship', 'Career guidance sessions'],
      color: '#6C9E24',
      popular: true
    },
    {
      name: 'Premium',
      duration: '3 Months',
      mode: 'Online/Offline',
      features: ['Complete program access', 'Capstone project', 'Personal mentorship', 'Career visibility sessions', 'Skill Rise Certification'],
      color: '#8B5CF6',
      popular: false
    }
  ];

  const marketStats = [
    {
      stat: '85%',
      description: 'Recruiters value practical corporate communication skills',
      icon: 'communication'
    },
    {
      stat: '60%',
      description: 'Increase in job interview callbacks with personal branding',
      icon: 'trending_up'
    },
    {
      stat: '100%',
      description: 'Google Workspace essential for modern jobs',
      icon: 'workspace_premium'
    },
    {
      stat: '90%',
      description: 'Employers prefer candidates with real-world project experience',
      icon: 'work'
    }
  ];

  const targetAudience = [
    {
      type: 'College Students',
      description: 'Preparing for corporate careers and job market entry',
      icon: 'school'
    },
    {
      type: 'Fresh Graduates',
      description: 'Aiming to boost employability and corporate readiness',
      icon: 'person_add'
    },
    {
      type: 'Working Professionals',
      description: 'Looking to upgrade skills and advance careers',
      icon: 'business_center'
    },
    {
      type: 'Career Changers',
      description: 'Seeking career-relevant certifications and practical exposure',
      icon: 'change_circle'
    }
  ];

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
                    SKILL RISE CERTIFICATION
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 rounded-full text-sm font-bold" 
                    style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    6 Weeks Program
                  </motion.span>
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4" 
                  style={{color: '#FFFFFF'}}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  MY CAREER MENTOR
                </motion.h1>
                <motion.p 
                  className="text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Skill Rise Certification Program - Career Guidance & Skill Development for Corporate Success
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
                    <span>6 Weeks Intensive</span>
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
                      workspace_premium
                    </motion.span>
                    <span>Industry Certified</span>
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
                      person
                    </motion.span>
                    <span>Expert Mentorship</span>
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
                    Start a Free Trial
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Program Benefits */}
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
                Program Advantages
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
              >
                {programBenefits.map((item, index) => (
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

        {/* Core Curriculum */}
        <section className="py-16" ref={curriculumRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Core Curriculum Components
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreCurriculum.map((module, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
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
                      style={{backgroundColor: module.color, color: 'white'}}
                    >
                      <span className="font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{color: module.color}}>{module.module}</h3>
                    <p className="text-sm" style={{color: '#666666'}}>{module.duration}</p>
                  </div>
                  <ul className="space-y-2">
                    {module.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                        <span className="text-sm" style={{color: '#666666'}}>{skill}</span>
                      </li>
                    ))}
                  </ul>
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
              Program Packages
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                      {pkg.duration} • {pkg.mode}
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

        {/* Market Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Market Relevance & Statistics
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(108, 158, 36, 0.15)'
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#6C9E2415'}}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: '#6C9E2425'
                    }}
                  >
                    <span className="material-symbols-outlined text-2xl" style={{color: '#6C9E24'}}>
                      {stat.icon}
                    </span>
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-2" style={{color: '#6A3D9A'}}>{stat.stat}</h3>
                  <p className="text-sm" style={{color: '#666666'}}>{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-16" ref={benefitsRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Target Audience
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(139, 92, 246, 0.15)'
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: '#8B5CF615'}}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: '#8B5CF625'
                    }}
                  >
                    <span className="material-symbols-outlined text-2xl" style={{color: '#8B5CF6'}}>
                      {audience.icon}
                    </span>
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2" style={{color: '#333333'}}>{audience.type}</h3>
                  <p className="text-sm" style={{color: '#666666'}}>{audience.description}</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Join My Career Mentor's Skill Rise Certification Program and bridge the gap between academic knowledge and corporate success.</p>
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

export default CareerMentor;