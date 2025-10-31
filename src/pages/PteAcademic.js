import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useContact } from '../contexts/ContactContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PteAcademic = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formatRef, formatInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [packagesRef, packagesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [openFaq, setOpenFaq] = useState(null);
  const { openContact } = useContact();

  const whyChoosePte = [
    {
      title: 'Lightning-Fast Results',
      description: 'Get your scores typically within 48 hours.',
      icon: 'flash_on',
      color: '#3B82F6'
    },
    {
      title: 'Unbiased AI Scoring',
      description: 'Eliminates human examiner bias, ensuring fair and objective results.',
      icon: 'psychology',
      color: '#10B981'
    },
    {
      title: 'Global Acceptance',
      description: 'Widely recognized for study, migration, and professional purposes worldwide.',
      icon: 'public',
      color: '#6A3D9A'
    },
    {
      title: 'High Test Flexibility',
      description: 'Tests are available multiple times a week for your convenience.',
      icon: 'schedule',
      color: '#F59E0B'
    },
    {
      title: 'Integrated Skills Assessment',
      description: 'Evaluates your real-life English communication abilities in academic environment.',
      icon: 'integration_instructions',
      color: '#EF4444'
    },
    {
      title: 'Computer-Based Testing',
      description: 'Fully digital experience with immediate feedback and consistent evaluation.',
      icon: 'computer',
      color: '#8B5CF6'
    }
  ];

  const packages = [
    {
      name: 'PTE Academic - Trial',
      duration: 'Trial',
      validity: '0 Days',
      price: 'Free Trial',
      features: ['Sample test access', 'Basic study materials', 'Limited practice', 'Trial experience'],
      color: '#EF4444',
      popular: false,
      trial: true
    },
    {
      name: 'PTE Core - Champion',
      duration: '6 Weeks',
      validity: '180 Days',
      price: 'Most Popular',
      features: ['Live classes included', 'Personalized feedback', 'Speaking & writing review', 'Extended validity'],
      color: '#6C9E24',
      popular: true
    },
    {
      name: 'PTE Core - Trial',
      duration: 'Trial',
      validity: '0 Days',
      price: 'Free Trial',
      features: ['Core test preview', 'Basic preparation', 'Sample questions', 'Trial access'],
      color: '#8B5CF6',
      popular: false,
      trial: true
    }
  ];

  const faqs = [
    {
      question: 'How long is the PTE Academic score valid?',
      answer: 'PTE scores are valid for 2 years from your test date.'
    },
    {
      question: 'Can I retake the test if I am not satisfied with my score?',
      answer: 'Yes, you can retake the PTE exam as many times as you need. Simply book a new test date.'
    },
    {
      question: 'How is PTE scored?',
      answer: 'The test is scored entirely by artificial intelligence (AI) on a scale of 10 to 90 for each skill, ensuring objectivity.'
    },
    {
      question: 'Is PTE harder than IELTS?',
      answer: 'The difficulty is subjective. PTE is fully computer-based, which can be advantageous for fast typists and those who prefer AI-driven evaluation.'
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
                    COMPUTER-BASED TEST
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 rounded-full text-sm font-bold" 
                    style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    AI Scoring
                  </motion.span>
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4" 
                  style={{color: '#FFFFFF'}}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  PTE ACADEMIC
                </motion.h1>
                <motion.p 
                  className="text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Your Complete Guide to Success with AI-Powered English Assessment
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
                      flash_on
                    </motion.span>
                    <span>Results in 48 Hours</span>
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
                      computer
                    </motion.span>
                    <span>100% Computer-Based</span>
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
                      public
                    </motion.span>
                    <span>Globally Accepted</span>
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
                    animate={{ 
                      boxShadow: ['0 4px 15px rgba(251, 176, 59, 0.2)', '0 8px 25px rgba(251, 176, 59, 0.4)', '0 4px 15px rgba(251, 176, 59, 0.2)'] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    onClick={openContact}
                  >
                    Start Free Trial
                  </motion.button>
                  
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose PTE */}
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
                Why Choose PTE Academic?
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {whyChoosePte.map((item, index) => (
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
              PTE Academic Test Format
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
                <h3 className="text-xl font-bold mb-4" style={{color: '#6A3D9A'}}>Test Structure</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Speaking & Writing</span>
                    <span style={{color: '#6A3D9A'}}>77-93 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Reading</span>
                    <span style={{color: '#6A3D9A'}}>32-41 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Listening</span>
                    <span style={{color: '#6A3D9A'}}>45-57 minutes</span>
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
                <h3 className="text-xl font-bold mb-4" style={{color: '#6A3D9A'}}>Scoring Scale</h3>
                <div className="space-y-4">
                  <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#6A3D9A', color: 'white'}}>
                    <div className="text-2xl font-bold">10-90</div>
                    <div className="text-sm">Overall Score Range</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-lg" style={{backgroundColor: '#6C9E24', color: 'white'}}>
                      <div className="font-bold">79+</div>
                      <div className="text-xs">Proficient</div>
                    </div>
                    <div className="text-center p-3 rounded-lg" style={{backgroundColor: '#8B5CF6', color: 'white'}}>
                      <div className="font-bold">65+</div>
                      <div className="text-xs">Competent</div>
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
              Choose Your PTE Package
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl p-8 shadow-lg relative ${pkg.popular ? 'ring-2' : ''}`}
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
                    <h3 className="text-xl font-bold mb-2" style={{color: pkg.color}}>{pkg.name}</h3>
                    <div className="text-2xl font-bold mb-2" style={{color: '#333333'}}>{pkg.price}</div>
                    <div className="text-sm" style={{color: '#666666'}}>
                      {pkg.duration} • {pkg.validity}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
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

        {/* FAQ */}
        <section className="py-16" ref={faqRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    whileHover={{ 
                      backgroundColor: '#f9fafb',
                      x: 5
                    }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <h3 className="font-bold" style={{color: '#6A3D9A'}}>{faq.question}</h3>
                    <motion.span 
                      className="material-symbols-outlined"
                      style={{color: '#6A3D9A'}}
                      animate={{ 
                        rotate: openFaq === index ? 180 : 0,
                        scale: openFaq === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      keyboard_arrow_down
                    </motion.span>
                  </motion.button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: openFaq === index ? 1 : 0,
                        y: openFaq === index ? 0 : -10
                      }}
                      transition={{ duration: 0.3, delay: openFaq === index ? 0.1 : 0 }}
                      className="px-6 pb-6"
                    >
                      <p style={{color: '#666666'}}>{faq.answer}</p>
                    </motion.div>
                  </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your PTE Journey?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of successful students who achieved their target scores with our expert guidance.</p>
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

export default PteAcademic;