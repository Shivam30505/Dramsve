import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const CoursesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const courses = [
    {
      title: 'IELTS Preparation',
      description: 'Comprehensive IELTS training with expert guidance to achieve your target band score for international admissions.',
      duration: '8 weeks',
      level: 'All Levels',
      students: '100+',
      rating: 4.9,
      route: '/course/ielts-academic-champion',
      features: ['Speaking Practice', 'Writing Tasks', 'Mock Tests', 'Personal Feedback']
    },
    {
      title: 'Spoken English',
      description: 'Professional communication training to enhance your speaking, presentation, and interpersonal skills.',
      duration: '10 weeks',
      level: 'Beginner to Advanced',
      students: '100+',
      rating: 4.8,
      route: '/course/english-champion',
      features: ['Public Speaking', 'Business English', 'Presentation Skills', 'Confidence Building']
    },
    {
      title: 'German Basics',
      description: 'Language training to build your German speaking, writing, and cultural understanding skills.',
      duration: '12 weeks',
      level: 'All Levels',
      students: '100+',
      rating: 4.9,
      route: '/course/german-language',
      features: ['Grammar & Vocabulary', 'Speaking & Listening Practice', 'Cultural Orientation', 'Study Abroad Support']
    },
    {
      title: 'PTE',
      description: 'Master the PTE Academic with strategic training, practical exercises, and expert tips to achieve a high score for your study abroad goals.',
      duration: '8 weeks',
      level: 'All Levels',
      students: '100+',
      rating: 4.8,
      route: '/course/pte-academic',
      features: ['Speaking & Writing Modules', 'Reading & Listening Strategies', 'Time Management Techniques', 'Realistic Mock Tests']
    },
    {
      title: 'TOEFL',
      description: 'Comprehensive TOEFL iBT preparation focusing on all four sections to help you excel and meet university English language requirements.',
      duration: '9 weeks',
      level: 'Intermediate to Advanced',
      students: '100+',
      rating: 4.7,
      route: '/course/toefl',
      features: ['Integrated Reading & Listening', 'Structured Speaking Responses', 'Academic Writing Tasks', 'Full-Length Practice Tests']
    },
    {
      title: 'French',
      description: 'Engaging French language classes to build a strong foundation in communication, grammar, and cultural appreciation.',
      duration: '14 weeks',
      level: 'Beginner to Intermediate',
      students: '100+',
      rating: 4.9,
      route: '/course/french-language',
      features: ['Essential Vocabulary & Grammar', 'Conversational French Skills', 'Reading Comprehension & Writing', 'Cultural Insights & Etiquette']
    },
    {
      title: 'Digital SAT',
      description: 'Ace the new Digital SAT with adaptive practice tests, concept reviews, and test-taking strategies tailored for the computer-based format.',
      duration: '10 weeks',
      level: 'High School',
      students: '100+',
      rating: 4.8,
      route: '/course/digital-sat',
      features: ['Math & Evidence-Based Reading', 'Adaptive Test Strategy', 'Time-Saving Problem Solving', 'Official Digital Practice Tests']
    },
    {
      title: 'GMAT',
      description: 'Advanced GMAT training to conquer the quantitative, verbal, and integrated reasoning sections for top business school admissions.',
      duration: '12 weeks',
      level: 'Intermediate to Advanced',
      students: '100+',
      rating: 4.7,
      route: '/course/gmat',
      features: ['Quantitative & Verbal Reasoning', 'Data Insights & Integrated Reasoning', 'Analytical Writing Assessment', 'Advanced Problem-Solving Techniques']
    },
    {
      title: 'GRE',
      description: 'In-depth GRE preparation to master verbal reasoning, quantitative analysis, and analytical writing for graduate program success.',
      duration: '11 weeks',
      level: 'All Levels',
      students: '100+',
      rating: 4.8,
      route: '/course/shorter-gre',
      features: ['Advanced Vocabulary & Math', 'Analytical Writing Skills', 'Test-Taking Strategies & Pacing', 'Comprehensive Practice Exams']
    },
    {
      title: 'CELPIP',
      description: 'Targeted CELPIP training to achieve the scores you need for Canadian permanent residency and citizenship applications.',
      duration: '7 weeks',
      level: 'All Levels',
      students: '100+',
      rating: 4.9,
      route: '/course/celpip',
      features: ['Listening & Speaking Tasks', 'Reading & Writing Components', 'Canadian Context & Accents', 'Practical Test Simulations']
    },
    {
      title: 'Duolingo English Test',
      description: 'Efficient and focused preparation for the Duolingo English Test to achieve your target score for university applications quickly and confidently.',
      duration: '6 weeks',
      level: 'All Levels',
      students: '100+',
      rating: 4.8,
      route: '/course/duolingo-english',
      features: ['Adaptive Test Question Strategies', 'Speaking, Reading, & Listening Practice', 'Interactive Writing & Sample Responses', 'Full-Length Mock Tests with Feedback']
    }
  ];

  // Duplicate courses for seamless loop
  const duplicatedCourses = [...courses, ...courses];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: fullStars }, (_, index) => (
          <motion.span
            key={index}
            className="material-symbols-outlined text-sm"
            style={{color: '#FBB03B'}}
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: index * 0.1, type: "spring" }}
          >
            star
          </motion.span>
        ))}
        {hasHalfStar && (
          <motion.span
            className="material-symbols-outlined text-sm"
            style={{color: '#FBB03B'}}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: fullStars * 0.1, type: "spring" }}
          >
            star_half
          </motion.span>
        )}
        <span className="text-sm ml-1" style={{color: '#666666'}}>
          ({rating})
        </span>
      </div>
    );
  };

  return (
    <section 
      className="py-20 sm:py-24"
      style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)'}}
    >
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-4"
            style={{color: '#6A3D9A', letterSpacing: '0.5px'}}
          >
            Our Courses
          </h2>
          <p 
            className="max-w-2xl mx-auto text-lg font-display"
            style={{color: '#6C9E24', fontWeight: 300, letterSpacing: '0.3px', lineHeight: '1.6'}}
          >
            Transform your future with our expertly designed courses
          </p>
        </motion.div>

        {/* Continuous Rolling Slideshow */}
        <div className="overflow-hidden relative mb-12 course-slideshow">
          <motion.div 
            className="flex items-center gap-6 md:gap-8"
            animate={isPaused ? {} : {
              x: [0, -4400]
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: '8800px'
            }}
          >
            {duplicatedCourses.map((course, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 relative bg-white rounded-xl overflow-hidden group cursor-pointer course-card-mobile"
                style={{
                  width: '380px',
                  minWidth: '380px',
                  height: '520px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '24px'
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(106, 61, 154, 0.2)",
                  rotateY: 5
                }}
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(course.route);
                  window.scrollTo(0, 0);
                }}
              >
                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.05) 0%, rgba(108, 158, 36, 0.05) 100%)'
                  }}
                />

                <div className="p-6 relative z-10 flex flex-col h-full">
                  {/* Course header */}
                  <div className="mb-6">
                    <h3 
                      className="text-xl font-bold mb-3 line-clamp-2"
                      style={{color: '#333333', minHeight: '3.5rem'}}
                    >
                      {course.title}
                    </h3>
                    
                    <p 
                      className="text-sm leading-relaxed mb-4 line-clamp-3"
                      style={{color: '#666666', minHeight: '4.5rem'}}
                    >
                      {course.description}
                    </p>
                    
                    {renderStars(course.rating)}
                  </div>

                  {/* Course stats */}
                  <div 
                    className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-lg"
                    style={{backgroundColor: 'rgba(106, 61, 154, 0.05)'}}
                  >
                    <div className="text-center">
                      <p className="text-xs font-semibold" style={{color: '#6A3D9A'}}>DURATION</p>
                      <p className="text-sm font-bold" style={{color: '#333333'}}>{course.duration}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-semibold" style={{color: '#6A3D9A'}}>LEVEL</p>
                      <p className="text-sm font-bold" style={{color: '#333333'}}>{course.level}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-semibold" style={{color: '#6A3D9A'}}>STUDENTS</p>
                      <p className="text-sm font-bold" style={{color: '#333333'}}>{course.students}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <p className="text-sm font-semibold mb-3" style={{color: '#6A3D9A'}}>What You'll Learn:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {course.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <span 
                            className="material-symbols-outlined text-sm"
                            style={{color: '#FBB03B'}}
                          >
                            check_circle
                          </span>
                          <span className="text-xs" style={{color: '#666666'}}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enroll button */}
                  <motion.button
                    className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 mt-auto"
                    style={{backgroundColor: '#8B5FBF'}}
                    whileHover={{ 
                      backgroundColor: '#7FB83D',
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(course.route);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Enroll Now
                  </motion.button>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(106, 61, 154, 0.1), transparent)',
                    backgroundSize: '200% 200%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays to hide edges */}
          <div 
            className="absolute left-0 top-0 h-full w-16 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, rgba(247,247,247,1), rgba(247,247,247,0))'
            }}
          />
          <div 
            className="absolute right-0 top-0 h-full w-16 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to left, rgba(247,247,247,1), rgba(247,247,247,0))'
            }}
          />
        </div>

        {/* Explore More Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 shadow-lg"
            style={{backgroundColor: '#6A3D9A'}}
            whileHover={{ 
              backgroundColor: '#6C9E24',
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(106, 61, 154, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate('/courses');
              window.scrollTo(0, 0);
            }}
          >
            <span className="flex items-center gap-2">
              Explore More Courses
              <motion.span 
                className="material-symbols-outlined"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                arrow_forward
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;