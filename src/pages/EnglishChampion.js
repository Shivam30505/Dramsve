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
        {Math.floor(count)}{metric.suffix}
      </div>
      <p style={{color: '#666666'}}>{metric.label}</p>
    </motion.div>
  );
};

const EnglishChampion = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [batchRef, batchInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
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

  const batchOptions = [
    {
      title: 'Weekday Batch',
      duration: '2 Months',
      timing: 'Mon-Fri 7-9 PM',
      size: '15-20 Students',
      fee: '₹12,000',
      icon: 'work',
      color: '#6A3D9A'
    },
    {
      title: 'Weekend Batch',
      duration: '3 Months',
      timing: 'Sat-Sun 10 AM-1 PM',
      size: '15-20 Students',
      fee: '₹14,000',
      icon: 'weekend',
      color: '#6C9E24'
    },
    {
      title: 'Fast Track',
      duration: '1 Month',
      timing: 'Mon-Fri 6-8 PM',
      size: '10-15 Students',
      fee: '₹10,000',
      icon: 'flash_on',
      color: '#8B5CF6'
    }
  ];

  const premiumFeatures = [
    {
      title: 'Advanced Vocabulary & Idioms',
      description: 'Sophisticated language training for professional communication',
      icon: 'library_books',
      color: '#3B82F6'
    },
    {
      title: 'Accent Neutralization',
      description: 'Pronunciation enhancement techniques with native speaker guidance',
      icon: 'record_voice_over',
      color: '#10B981'
    },
    {
      title: 'Professional Communication',
      description: 'Presentation, debate, and group discussion practice sessions',
      icon: 'business_center',
      color: '#6A3D9A'
    },
    {
      title: 'Interview Preparation',
      description: 'Job interview and professional setting training modules',
      icon: 'quiz',
      color: '#F59E0B'
    },
    {
      title: 'Native Speaker Interaction',
      description: 'Live sessions with native English speakers for authentic practice',
      icon: 'groups',
      color: '#EF4444'
    },
    {
      title: 'Confidence Building',
      description: 'Personalized coaching to boost speaking confidence and fluency',
      icon: 'psychology',
      color: '#8B5CF6'
    }
  ];

  const learningOutcomes = [
    'Confident English speaking in daily and professional contexts',
    'Improved grammar and vocabulary usage accuracy',
    'Enhanced accent and speech clarity',
    'Interview techniques and presentation skills',
    'Boosted self-assurance in social interactions',
    'Professional communication mastery'
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
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">PREMIUM COURSE</span>
                  <span className="px-3 py-1 rounded-full text-sm font-bold" style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}>Advanced Fluency</span>
                </motion.div>
                
                <motion.h1
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 font-display"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  ENGLISH CHAMPION
                </motion.h1>
                
                <motion.p
                  className="text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Advanced English Communication & Professional Skills Development
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-6 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>schedule</span>
                    <span>10 Weeks Program</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>calendar_clock</span>
                    <span>180 Days Validity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>star</span>
                    <span>4.9 Rating (1500+ Students)</span>
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

        {/* Batch Options */}
        <section className="py-16" ref={batchRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={batchInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-display" style={{color: '#6A3D9A'}}>
                Choose Your Batch Option
              </h2>
              <p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
                Flexible scheduling options with small batch sizes for personalized attention
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={batchInView ? "visible" : "hidden"}
            >
              {batchOptions.map((batch, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg text-center"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: `0 10px 25px ${batch.color}25`
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: `${batch.color}20`}}
                  >
                    <span className="material-symbols-outlined text-2xl" style={{color: batch.color}}>
                      {batch.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: batch.color}}>{batch.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center p-2 rounded" style={{backgroundColor: '#F7F7F7'}}>
                      <span className="text-sm font-medium">Duration:</span>
                      <span className="text-sm" style={{color: batch.color}}>{batch.duration}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded" style={{backgroundColor: '#F7F7F7'}}>
                      <span className="text-sm font-medium">Timing:</span>
                      <span className="text-sm" style={{color: batch.color}}>{batch.timing}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded" style={{backgroundColor: '#F7F7F7'}}>
                      <span className="text-sm font-medium">Batch Size:</span>
                      <span className="text-sm" style={{color: batch.color}}>{batch.size}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-4" style={{color: batch.color}}>{batch.fee}</div>
                  <motion.button 
                    className="w-full py-3 rounded-lg font-bold text-white transition-all"
                    style={{backgroundColor: batch.color}}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 8px 25px ${batch.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Select Batch
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Premium Features */}
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
                Premium Course Features
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
              >
                {premiumFeatures.map((feature, index) => (
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
                      style={{backgroundColor: `${feature.color}15`}}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: `${feature.color}25`
                      }}
                    >
                      <span className="material-symbols-outlined text-2xl" style={{color: feature.color}}>
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
                Your 10-Week Success Journey
              </h2>
              <p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
                Structured progression from assessment to advanced communication mastery
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{backgroundColor: '#6A3D9A'}}></div>
                
                <div className="space-y-8">
                  {[
                    {
                      number: '1-2',
                      title: 'Assessment & Foundation',
                      description: 'Language proficiency test, level categorization, personalized learning path setup'
                    },
                    {
                      number: '3-4',
                      title: 'Interactive Learning Sessions',
                      description: 'Live classes, conversation practice, role-plays, and situational exercises'
                    },
                    {
                      number: '5-6',
                      title: 'Advanced Skills Development',
                      description: 'Vocabulary enhancement, accent neutralization, professional communication training'
                    },
                    {
                      number: '7-8',
                      title: 'Specialized Training',
                      description: 'Interview preparation, presentation skills, native speaker interaction sessions'
                    },
                    {
                      number: '9-10',
                      title: 'Mastery & Certification',
                      description: 'Final assessments, progress evaluation, certification, and continued support setup'
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

        {/* Learning Outcomes */}
        <section className="py-16" ref={benefitsRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>
                  Learning Outcomes
                </h2>
                <div className="space-y-4">
                  {learningOutcomes.map((outcome, index) => (
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
                      <span className="font-medium" style={{color: '#333333'}}>{outcome}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>
                  Target Audience
                </h2>
                <div className="space-y-4">
                  {[
                    { type: 'Students', desc: 'Pursuing higher education abroad', icon: 'school' },
                    { type: 'Professionals', desc: 'Seeking career growth and promotions', icon: 'business_center' },
                    { type: 'Job Aspirants', desc: 'Preparing for interviews and group discussions', icon: 'quiz' },
                    { type: 'Exam Preparers', desc: 'IELTS, TOEFL, PTE candidates', icon: 'assignment' }
                  ].map((audience, index) => (
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
                      <p style={{color: '#666666'}}>{audience.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
                { value: 1500, suffix: '+', label: 'Students Mentored' },
                { value: 95, suffix: '%', label: 'Fluency Achievement Rate' },
                { value: 180, suffix: ' Days', label: 'Extended Validity' },
                { value: 24, suffix: '/7', label: 'Mentor Support' }
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to Master English Communication?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join our premium English Champion program and unlock your potential for professional and personal success
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
                {['180 Days Access', 'Certificate of Completion', 'Lifetime Resources'].map((feature, index) => (
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

export default EnglishChampion;