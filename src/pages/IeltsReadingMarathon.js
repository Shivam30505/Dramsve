import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CounterCard = ({ value, label, suffix = '' }) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (inView) {
      const target = parseInt(value);
      const duration = 2000;
      const increment = target / (duration / 50);
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);
  
  return (
    <motion.div 
      ref={ref}
      className="text-center p-6 bg-white rounded-xl"
      style={{ boxShadow: '0 8px 20px rgba(106, 61, 154, 0.1)' }}
      whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(106, 61, 154, 0.15)' }}
    >
      <div className="text-3xl font-bold mb-2" style={{ color: '#6A3D9A' }}>
        {count}{suffix}
      </div>
      <div className="text-sm" style={{ color: '#666666' }}>{label}</div>
    </motion.div>
  );
};

const WeekCard = ({ week, title, items, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl p-6 relative overflow-hidden"
      style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)' }}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(106, 61, 154, 0.15)' }}
    >
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, #6A3D9A, #6C9E24)' }} />
      <div className="flex items-center mb-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4"
          style={{ backgroundColor: '#6A3D9A' }}
        >
          {week}
        </div>
        <h3 className="text-xl font-bold" style={{ color: '#333333' }}>{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-sm mr-2 mt-1" style={{ color: '#6C9E24' }}>•</span>
            <span className="text-sm" style={{ color: '#666666' }}>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 text-center"
      style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)' }}
      whileHover={{ y: -8, boxShadow: '0 15px 35px rgba(106, 61, 154, 0.15)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <span className="text-2xl" style={{ color: '#6A3D9A' }}>{icon}</span>
      </div>
      <h3 className="text-lg font-bold mb-2" style={{ color: '#333333' }}>{title}</h3>
      <p className="text-sm" style={{ color: '#666666' }}>{description}</p>
    </motion.div>
  );
};

const IeltsReadingMarathon = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [metricsRef, metricsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const weeklyBreakdown = [
    {
      week: 1,
      title: "Foundation & Strategy",
      items: [
        "Skimming & Scanning Techniques",
        "Understanding Question Types", 
        "Time Management Basics"
      ]
    },
    {
      week: 2,
      title: "Passage Analysis",
      items: [
        "Academic Text Structures",
        "Vocabulary in Context",
        "Inference Skills"
      ]
    },
    {
      week: 3,
      title: "Advanced Techniques", 
      items: [
        "Dealing with Complex Passages",
        "True/False/Not Given Mastery",
        "Matching Headings & Information"
      ]
    },
    {
      week: 4,
      title: "Speed & Accuracy",
      items: [
        "Timed Practice Sessions",
        "Full-length Reading Tests",
        "Error Analysis & Improvement"
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: "📚",
      title: "20+ Hours Training",
      description: "Focused reading training with expert guidance"
    },
    {
      icon: "❓",
      title: "500+ Practice Questions",
      description: "Comprehensive question bank for all types"
    },
    {
      icon: "📖",
      title: "Vocabulary Building",
      description: "Academic vocabulary enhancement exercises"
    },
    {
      icon: "⚡",
      title: "Speed Reading",
      description: "Advanced techniques for faster comprehension"
    },
    {
      icon: "✅",
      title: "Answer Justification",
      description: "Learn to justify every answer choice"
    },
    {
      icon: "🎯",
      title: "95% Comprehension",
      description: "Read faster with maximum understanding"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16" ref={heroRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: '#6A3D9A' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Master IELTS Reading in 4 Weeks
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              style={{ color: '#6C9E24' }}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Advanced Strategies for 8.0+ Bands
            </motion.p>
            
            <motion.p 
              className="text-lg mb-12 max-w-2xl mx-auto"
              style={{ color: '#666666' }}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Focus on speed, accuracy, and comprehension with our intensive 4-week reading marathon program
            </motion.p>

            {/* Course Info Cards */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { label: 'Duration', value: '4 weeks intensive' },
                { label: 'Validity', value: '45 days access' },
                { label: 'Format', value: 'Daily live sessions' },
                { label: 'Batch Size', value: '15-20 students' }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)' }}>
                  <div className="text-sm mb-1" style={{ color: '#666666' }}>{item.label}</div>
                  <div className="font-bold text-sm" style={{ color: '#6A3D9A' }}>{item.value}</div>
                </div>
              ))}
            </motion.div>

            <motion.button
              className="px-8 py-4 rounded-xl text-white font-bold text-lg"
              style={{ backgroundColor: '#6A3D9A' }}
              whileHover={{ backgroundColor: '#6C9E24', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
            >
              Enroll Now - Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-16" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#6A3D9A' }}>
              Struggling with IELTS Reading? Here's the Solution
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333' }}>Common Challenges:</h3>
              <ul className="space-y-4">
                {[
                  'Running out of time with 40 questions in 60 minutes',
                  'Difficulty understanding complex academic passages',
                  'Confusion between True/False/Not Given questions',
                  'Poor vocabulary affecting comprehension',
                  'Inability to locate specific information quickly'
                ].map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span style={{ color: '#666666' }}>{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#6C9E24' }}>Our Marathon Solution:</h3>
              <ul className="space-y-4">
                {[
                  'Master all 14 question types with proven strategies',
                  'Time management for 40 questions in 60 minutes',
                  'Read faster with 95% comprehension accuracy',
                  'Academic vocabulary building exercises',
                  'Skimming and scanning technique mastery'
                ].map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1" style={{ color: '#6C9E24' }}>✓</span>
                    <span style={{ color: '#666666' }}>{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Weekly Breakdown */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#6A3D9A' }}>
              4-Week Intensive Journey
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Structured learning path designed to transform your reading skills progressively
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {weeklyBreakdown.map((week, index) => (
              <WeekCard 
                key={index}
                week={week.week}
                title={week.title}
                items={week.items}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#6A3D9A' }}>
              Daily Practice Structure
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-xl p-8"
                style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)' }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#6A3D9A' }}
                  >
                    <span className="text-white text-2xl">📅</span>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#333333' }}>Tuesday Sessions</h3>
                  <p className="text-lg font-bold" style={{ color: '#6C9E24' }}>6-8 PM Reading Intensive</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2" style={{ color: '#6C9E24' }}>•</span>
                    <span className="text-sm" style={{ color: '#666666' }}>Live instruction sessions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2" style={{ color: '#6C9E24' }}>•</span>
                    <span className="text-sm" style={{ color: '#666666' }}>Guided practice exercises</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2" style={{ color: '#6C9E24' }}>•</span>
                    <span className="text-sm" style={{ color: '#666666' }}>Strategy implementation</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-8"
                style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)' }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#6C9E24' }}
                  >
                    <span className="text-white text-2xl">📝</span>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#333333' }}>Friday Sessions</h3>
                  <p className="text-lg font-bold" style={{ color: '#6A3D9A' }}>Mock Tests & Feedback</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2" style={{ color: '#6A3D9A' }}>•</span>
                    <span className="text-sm" style={{ color: '#666666' }}>Full-length practice tests</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2" style={{ color: '#6A3D9A' }}>•</span>
                    <span className="text-sm" style={{ color: '#666666' }}>Individual feedback sessions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2" style={{ color: '#6A3D9A' }}>•</span>
                    <span className="text-sm" style={{ color: '#666666' }}>Progress tracking</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#6A3D9A' }}>
              What Makes Our Marathon Special
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Comprehensive features designed for maximum reading improvement
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={featuresInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {keyFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16" style={{ backgroundColor: '#F7F7F7' }} ref={metricsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#6A3D9A' }}>
              Proven Track Record
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Our students consistently achieve remarkable improvements in their reading scores
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterCard value="95" label="Average Score Improvement" suffix="%" />
            <CounterCard value="500" label="Practice Questions" suffix="+" />
            <CounterCard value="20" label="Training Hours" suffix="+" />
            <CounterCard value="14" label="Question Types Mastered" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#6A3D9A' }}>
              Ready to Master IELTS Reading?
            </h2>
            <p className="text-lg mb-8" style={{ color: '#666666' }}>
              Join our intensive 4-week reading marathon and achieve your target band score with proven strategies and expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 rounded-xl text-white font-bold text-lg"
                style={{ backgroundColor: '#6A3D9A' }}
                whileHover={{ backgroundColor: '#6C9E24', scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
              >
                Enroll Now - Limited Seats
              </motion.button>
              
              <motion.button
                className="px-8 py-4 rounded-xl font-bold text-lg border-2"
                style={{ 
                  color: '#6A3D9A', 
                  borderColor: '#6A3D9A',
                  backgroundColor: 'transparent'
                }}
                whileHover={{ 
                  backgroundColor: '#6A3D9A',
                  color: 'white',
                  scale: 1.05 
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IeltsReadingMarathon;