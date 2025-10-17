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
      description: 'Comprehensive IELTS training with expert guidance for international admissions.',
      duration: '8 weeks',
      level: 'All Levels',
      route: '/course/ielts-academic-champion',
      features: ['Speaking Practice', 'Writing Tasks', 'Mock Tests', 'Personal Feedback']
    },
    {
      title: 'Spoken English',
      description: 'Professional communication training for speaking and presentation skills.',
      duration: '10 weeks',
      level: 'All Levels',
      route: '/course/english-champion',
      features: ['Public Speaking', 'Business English', 'Presentation Skills', 'Confidence Building']
    },
    {
      title: 'German Basics',
      description: 'Language training for German speaking, writing, and cultural understanding.',
      duration: '12 weeks',
      level: 'All Levels',
      route: '/course/german-language',
      features: ['Grammar & Vocabulary', 'Speaking Practice', 'Cultural Orientation', 'Study Support']
    },
    {
      title: 'PTE',
      description: 'Master PTE Academic with strategic training for study abroad goals.',
      duration: '8 weeks',
      level: 'All Levels',
      route: '/course/pte-academic',
      features: ['Speaking & Writing', 'Reading & Listening', 'Time Management', 'Mock Tests']
    },
    {
      title: 'TOEFL',
      description: 'Comprehensive TOEFL preparation for university language requirements.',
      duration: '9 weeks',
      level: 'All levels',
      route: '/course/toefl',
      features: ['Reading & Listening', 'Speaking Responses', 'Writing Tasks', 'Practice Tests']
    },
    {
      title: 'French',
      description: 'French language classes for communication and cultural appreciation.',
      duration: '14 weeks',
      level: 'All levels',
      route: '/course/french-language',
      features: ['Vocabulary & Grammar', 'Conversational Skills', 'Reading & Writing', 'Cultural Insights']
    },
    {
      title: 'Digital SAT',
      description: 'Ace the Digital SAT with adaptive practice and test strategies.',
      duration: '10 weeks',
      level: 'High School',
      route: '/course/digital-sat',
      features: ['Math & Reading', 'Test Strategy', 'Problem Solving', 'Practice Tests']
    },
    {
      title: 'GMAT',
      description: 'GMAT training for business school admissions preparation.',
      duration: '12 weeks',
      level: 'All levels',
      route: '/course/gmat',
      features: ['Quantitative Reasoning', 'Verbal Reasoning', 'Data Insights', 'Problem Solving']
    },
    {
      title: 'GRE',
      description: 'GRE preparation for graduate program success and admissions.',
      duration: '11 weeks',
      level: 'All Levels',
      route: '/course/shorter-gre',
      features: ['Vocabulary & Math', 'Writing Skills', 'Test Strategies', 'Practice Exams']
    },
    {
      title: 'CELPIP',
      description: 'CELPIP training for Canadian residency and citizenship applications.',
      duration: '7 weeks',
      level: 'All Levels',
      route: '/course/celpip',
      features: ['Listening & Speaking', 'Reading & Writing', 'Canadian Context', 'Test Simulations']
    },
    {
      title: 'Duolingo English',
      description: 'Duolingo English Test preparation for university applications.',
      duration: '6 weeks',
      level: 'All Levels',
      route: '/course/duolingo-english',
      features: ['Test Strategies', 'Speaking Practice', 'Writing Practice', 'Mock Tests']
    }
  ];

  // Duplicate courses for seamless loop
  const duplicatedCourses = [...courses, ...courses];

  return (
    <section 
      className="py-12 sm:py-20"
      style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)'}}
    >
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-wide mb-3 sm:mb-4"
            style={{color: '#6A3D9A', letterSpacing: '0.5px'}}
          >
            Our Courses
          </h2>
          <p 
            className="max-w-2xl mx-auto text-base sm:text-lg font-display px-4"
            style={{color: '#6C9E24', fontWeight: 300, letterSpacing: '0.3px', lineHeight: '1.6'}}
          >
            Transform your future with our expertly designed courses
          </p>
        </motion.div>

        {/* Continuous Rolling Slideshow */}
        <div className="overflow-hidden relative mb-8 sm:mb-12">
          <motion.div 
            className="flex items-center gap-4 sm:gap-6 md:gap-8"
            animate={isPaused ? {} : {
              x: [0, -3600]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: '7200px'
            }}
          >
            {duplicatedCourses.map((course, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 relative bg-white rounded-xl overflow-hidden group cursor-pointer"
                style={{
                  width: '300px',
                  minWidth: '300px',
                  height: '420px',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
                  borderRadius: '20px'
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(106, 61, 154, 0.15)",
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

                <div className="p-4 sm:p-5 relative z-10 flex flex-col h-full">
                  {/* Course header */}
                  <div className="mb-4">
                    <h3 
                      className="text-lg sm:text-xl font-bold mb-2 line-clamp-2"
                      style={{color: '#333333', minHeight: '2.8rem'}}
                    >
                      {course.title}
                    </h3>
                    
                    <p 
                      className="text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2"
                      style={{color: '#666666', minHeight: '2.5rem'}}
                    >
                      {course.description}
                    </p>
                  </div>

                  {/* Course stats - Only Duration and Level */}
                  <div 
                    className="grid grid-cols-2 gap-3 mb-4 p-3 rounded-lg"
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
                  </div>

                  {/* Features */}
                  <div className="mb-4 flex-1">
                    <p className="text-xs sm:text-sm font-semibold mb-2" style={{color: '#6A3D9A'}}>What You'll Learn:</p>
                    <div className="grid grid-cols-2 gap-1 sm:gap-2">
                      {course.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-start gap-1 sm:gap-2"
                        >
                          <span 
                            className="material-symbols-outlined text-xs sm:text-sm flex-shrink-0 mt-0.5"
                            style={{color: '#FBB03B'}}
                          >
                            check_circle
                          </span>
                          <span className="text-xs leading-tight" style={{color: '#666666'}}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enroll button */}
                  <motion.button
                    className="w-full py-2 sm:py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 mt-auto text-sm sm:text-base"
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
            className="absolute left-0 top-0 h-full w-8 sm:w-16 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, rgba(247,247,247,1), rgba(247,247,247,0))'
            }}
          />
          <div 
            className="absolute right-0 top-0 h-full w-8 sm:w-16 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to left, rgba(247,247,247,1), rgba(247,247,247,0))'
            }}
          />
        </div>

        {/* Explore More Button - Always Visible */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-white transition-all duration-300 shadow-lg mx-auto"
            style={{backgroundColor: '#6A3D9A', display: 'block'}}
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
            <span className="flex items-center gap-2 justify-center">
              Explore More Courses
              <motion.span 
                className="material-symbols-outlined text-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                arrow_forward
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

     <style jsx>{`
  @media (max-width: 640px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  
  /* Ensure proper line clamping */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Mobile-specific card adjustments */
  @media (max-width: 768px) {
    .course-card-mobile {
      height: 380px !important;
      min-height: 380px !important;
    }
  }

  /* Prevent content overflow */
  .course-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`}</style>
    </section>
  );
};

export default CoursesSection;