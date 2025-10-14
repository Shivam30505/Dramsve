import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
        {metric.value === 1.5 ? count.toFixed(1) : Math.floor(count)}{metric.suffix}
      </div>
      <p style={{color: '#666666'}}>{metric.label}</p>
    </motion.div>
  );
};


const IeltsAcademicChampion = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [batchRef, batchInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [journeyRef, journeyInView] = useInView({ threshold: 0.2, triggerOnce: true });

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
      icon: 'groups',
      title: 'Small Batch Sizes',
      description: '10-20 students per batch for personalized attention and better interaction.',
      color: 'blue'
    },
    {
      icon: 'live_tv',
      title: '60+ Live Hours',
      description: 'Comprehensive live sessions covering all four IELTS modules in depth.',
      color: 'green'
    },
    {
      icon: 'assignment',
      title: 'Mock Tests & Feedback',
      description: 'Full-length simulated tests with detailed personalized feedback sessions.',
      color: 'purple'
    },
    {
      icon: 'school',
      title: 'Expert Faculty',
      description: 'IELTS specialists with 8+ years experience and proven success records.',
      color: 'orange'
    },
    {
      icon: 'download',
      title: 'Study Resources',
      description: 'PDF materials, audio resources, vocabulary lists, and practice exercises.',
      color: 'red'
    },
    {
      icon: 'forum',
      title: 'Doubt Clearing',
      description: 'Dedicated sessions for individual queries and concept clarification.',
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
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">PREMIUM COURSE</span>
                  <span className="px-3 py-1 rounded-full text-sm font-bold" style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}>Top Rated</span>
                </motion.div>
                
                <motion.h1
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 font-display"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  IELTS ACADEMIC CHAMPION
                </motion.h1>
                
                <motion.p
                  className="text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  8-Week Intensive Program for University Admissions Abroad
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-6 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>schedule</span>
                    <span>8 Weeks Program</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>calendar_clock</span>
                    <span>180 Days Validity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined" style={{color: '#FBB03B'}}>star</span>
                    <span>4.8 Rating (950+ Students)</span>
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
                    onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
                  >
                    Enroll Now
                  </motion.button>
                  {/* <motion.button
                    className="px-8 py-3 bg-white/20 text-white font-bold rounded-lg border border-white/30 transition-all"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Free Trial Class
                  </motion.button> */}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Batch Timings */}
        <section className="py-16" ref={batchRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={batchInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-display" style={{color: '#6A3D9A'}}>
                Choose Your Batch Timing
              </h2>
              <p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
                Flexible scheduling to fit your routine. All batches include the same comprehensive curriculum.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={batchInView ? "visible" : "hidden"}
            >
              {[
                { title: 'Morning Batch', time: '8:00 AM - 10:00 AM', desc: 'Perfect for early risers', icon: 'wb_twilight', color: '#3B82F6' },
                { title: 'Afternoon Batch', time: '2:00 PM - 4:00 PM', desc: 'Ideal for post-lunch focus', icon: 'light_mode', color: '#F59E0B' },
                { title: 'Evening Batch', time: '7:00 PM - 9:00 PM', desc: 'For working professionals', icon: 'dark_mode', color: '#8B5CF6' },
                { title: 'All Access', time: 'All Batch Access + Recordings', desc: 'Complete flexibility', icon: 'all_inclusive', color: '#6A3D9A' }
              ].map((batch, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg cursor-pointer"
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
                  <h3 className="text-xl font-bold mb-2" style={{color: '#333333'}}>{batch.title}</h3>
                  <p className="mb-4" style={{color: '#666666'}}>{batch.desc}</p>
                  <div className="rounded-lg p-3" style={{backgroundColor: `${batch.color}10`}}>
                    <p className="font-semibold" style={{color: batch.color}}>{batch.time}</p>
                  </div>
                </motion.div>
              ))}
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
                Why Choose IELTS Academic Champion?
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

        {/* What You'll Learn */}
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
                Structured progression from fundamentals to advanced test strategies
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{backgroundColor: '#6A3D9A'}}></div>
                
                <div className="space-y-8">
                  {[
                    {
                      number: '1-2',
                      title: 'Foundation & Test Format Mastery',
                      description: 'Complete IELTS overview and scoring system, understanding all question types, and time management strategies'
                    },
                    {
                      number: '3-4',
                      title: 'Listening & Reading Intensive',
                      description: 'Advanced listening techniques, skimming and scanning strategies, and vocabulary building exercises'
                    },
                    {
                      number: '5-6',
                      title: 'Writing Mastery',
                      description: 'Task 1 (Graphs/Charts) structure & vocabulary, Task 2 essay planning and development, grammar and coherence improvement'
                    },
                    {
                      number: '7-8',
                      title: 'Speaking Practice & Final Prep',
                      description: 'All three speaking parts mastery, full-length mock tests with feedback, and test-day strategies and confidence building'
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
                { value: 95, suffix: '%', label: 'Admission Success Rate' },
                { value: 1.5, suffix: '+', label: 'Average Band Score Improvement' },
                { value: 1000, suffix: '+', label: 'Students Mentored' },
                { value: 50, suffix: '+', label: 'Expert Trainers' }
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
                  onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
                >
                  Enroll Now - Limited Seats
                </motion.button>
                
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-white/80">
                {['180 Days Access', 'Certificate of Completion', 'Money-Back Guarantee'].map((feature, index) => (
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

export default IeltsAcademicChampion;