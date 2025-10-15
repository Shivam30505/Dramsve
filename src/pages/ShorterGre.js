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
        {metric.value === 1200 ? Math.floor(count) : Math.floor(count)}{metric.suffix}
      </div>
      <p style={{color: '#666666'}}>{metric.label}</p>
    </motion.div>
  );
};

const ShorterGre = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [packagesRef, packagesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [formatRef, formatInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [journeyRef, journeyInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2, triggerOnce: true });
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

  const packages = [
    {
      name: 'Live Class',
      duration: '12 Weeks',
      validity: '90 Days',
      features: ['Instructor-led live classes', 'Interactive sessions', 'Real-time doubt clearing', 'Flexible timings'],
      color: '#6A3D9A',
      popular: false
    },
    {
      name: 'Champion',
      duration: '12 Weeks',
      validity: '180 Days',
      features: ['Comprehensive training', 'Extended access', 'Personalized mentoring', 'Performance tracking'],
      color: '#6C9E24',
      popular: true
    },
    {
      name: 'Self Prep',
      duration: 'Self-paced',
      validity: '180 Days',
      features: ['Self-study materials', 'Practice resources', 'Learn at your pace', 'Extended validity'],
      color: '#8B5CF6',
      popular: false
    }
  ];

  const greAdvantages = [
    {
      title: 'Graduate Admissions',
      description: 'Accepted for Master\'s, MBA, and PhD programs globally',
      icon: 'school',
      color: '#3B82F6'
    },
    {
      title: 'Scholarship Opportunities',
      description: 'High scores can lead to merit-based scholarships',
      icon: 'workspace_premium',
      color: '#10B981'
    },
    {
      title: 'Flexible Testing',
      description: 'Available at test centers and from home (GRE at Home)',
      icon: 'home',
      color: '#6A3D9A'
    },
    {
      title: 'Global Recognition',
      description: 'Widely accepted by top universities worldwide',
      icon: 'public',
      color: '#F59E0B'
    },
    {
      title: 'Skill Evaluation',
      description: 'Assesses critical reasoning and problem-solving skills',
      icon: 'psychology',
      color: '#EF4444'
    },
    {
      title: 'Shorter Format',
      description: 'New format takes approximately 1 hour 58 minutes',
      icon: 'schedule',
      color: '#8B5CF6'
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
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">SHORTER FORMAT</span>
                  <span className="px-3 py-1 rounded-full text-sm font-bold" style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}>1 Hour 58 Minutes</span>
                </motion.div>
                
                <motion.h1
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 font-display"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  SHORTER GRE
                </motion.h1>
                
                <motion.p
                  className="text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Complete GRE Preparation for Graduate School Admissions Worldwide
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-6 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>schedule</span>
                    <span>12 Weeks Program</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>calendar_clock</span>
                    <span>180 Days Validity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>star</span>
                    <span>4.9 Rating (1200+ Students)</span>
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

        {/* Course Packages */}
        <section className="py-16" ref={packagesRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={packagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-display" style={{color: '#6A3D9A'}}>
                Choose Your GRE Package
              </h2>
              <p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
                Flexible options to suit different learning styles and schedules
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={packagesInView ? "visible" : "hidden"}
            >
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl p-8 shadow-lg relative ${pkg.popular ? 'ring-2' : ''}`}
                  style={pkg.popular ? {ringColor: pkg.color} : {}}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: `0 10px 25px ${pkg.color}25`
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
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
                      boxShadow: `0 8px 25px ${pkg.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                     onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
                  >
                    Choose Package
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Test Format */}
        <section className="py-16" ref={formatRef}>
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 font-display"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={formatInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              New Shorter GRE Format
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={formatInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 20px 40px rgba(106, 61, 154, 0.15)'
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{color: '#6A3D9A'}}>Test Structure</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Analytical Writing</span>
                    <span style={{color: '#6A3D9A'}}>30 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Verbal Reasoning</span>
                    <span style={{color: '#6A3D9A'}}>41 minutes</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: '#F7F7F7'}}>
                    <span className="font-medium">Quantitative Reasoning</span>
                    <span style={{color: '#6A3D9A'}}>47 minutes</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={formatInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 20px 40px rgba(106, 61, 154, 0.15)'
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{color: '#6A3D9A'}}>Scoring Scale</h3>
                <div className="space-y-4">
                  <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#6A3D9A', color: 'white'}}>
                    <div className="text-2xl font-bold">130-170</div>
                    <div className="text-sm">Verbal & Quantitative</div>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#6C9E24', color: 'white'}}>
                    <div className="text-2xl font-bold">0-6</div>
                    <div className="text-sm">Analytical Writing</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose GRE */}
        <section className="py-16" ref={benefitsRef}>
          <div className="container mx-auto px-4">
            <div className="rounded-2xl p-8" style={{background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.05) 0%, rgba(108, 158, 36, 0.05) 100%)'}}>
              <motion.h2
                className="text-3xl font-bold text-center mb-8 font-display"
                style={{color: '#6A3D9A'}}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Why Choose GRE?
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={benefitsInView ? "visible" : "hidden"}
              >
                {greAdvantages.map((advantage, index) => (
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
                      style={{backgroundColor: `${advantage.color}15`}}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: `${advantage.color}25`
                      }}
                    >
                      <span className="material-symbols-outlined text-2xl" style={{color: advantage.color}}>
                        {advantage.icon}
                      </span>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2" style={{color: '#333333'}}>{advantage.title}</h3>
                    <p style={{color: '#666666'}}>{advantage.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Learning Journey */}
        <section className="py-16" ref={journeyRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={journeyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-display" style={{color: '#6A3D9A'}}>
                Your 8-10 Week Success Journey
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
                      title: 'Orientation & Diagnostic',
                      description: 'GRE format & scoring overview, diagnostic test & strategy session'
                    },
                    {
                      number: '2-3',
                      title: 'Verbal Reasoning Mastery',
                      description: 'Vocabulary building, text completion, reading comprehension strategies'
                    },
                    {
                      number: '4-5',
                      title: 'Quantitative Reasoning',
                      description: 'Math fundamentals, algebra, geometry, data interpretation & advanced problem solving'
                    },
                    {
                      number: '6',
                      title: 'Analytical Writing',
                      description: 'Issue analysis, essay structure, writing reviews & feedback'
                    },
                    {
                      number: '7-8',
                      title: 'Mock Tests & Final Prep',
                      description: 'Full-length tests, time management, mentor feedback & test-day strategies'
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
                      >
                        {item.number}
                      </motion.div>
                      
                      <motion.div
                        className="flex-1 bg-white rounded-lg p-6 shadow-md"
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
                { value: 1200, suffix: '+', label: 'Business Schools Accept GRE' },
                { value: 90, suffix: '+', label: 'Countries Recognize GRE' },
                { value: 1000, suffix: '+', label: 'Students Mentored' },
                { value: 5, suffix: ' Years', label: 'Score Validity' }
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Ace Your GRE Exam?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of successful students who achieved their dream scores with our comprehensive GRE program
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

export default ShorterGre;