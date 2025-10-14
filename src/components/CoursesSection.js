import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const CoursesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const navigate = useNavigate();

  const courses = [
    {
      title: 'IELTS Preparation',
      description: 'Comprehensive IELTS training with expert guidance to achieve your target band score for international admissions.',
      duration: '8 weeks',
      level: 'All Levels',
      students: '100+',
      rating: 4.9,
      // image: '📚',
      features: ['Speaking Practice', 'Writing Tasks', 'Mock Tests', 'Personal Feedback']
    },
    {
      title: 'Spoken English',
      description: 'Professional communication training to enhance your speaking, presentation, and interpersonal skills.',
      duration: '10 weeks',
      level: 'Beginner to Advanced',
      students: '100+',
      rating: 4.8,
    
      features: ['Public Speaking', 'Business English', 'Presentation Skills', 'Confidence Building']
    },
    {
      title: 'German Basics',
      description: 'Language training to build your German speaking, writing, and cultural understanding skills.',
      duration: '12 weeks',
      level: 'All Levels',
      students: '100+',
      rating: 4.9,
      // image: '🎓',
     features: ['Grammar & Vocabulary ', 'Speaking & Listening Practice', 'Cultural Orientation', 'Study Abroad Support']
    }
  ];

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
            className="font-display text-4xl font-bold tracking-wide mb-4"
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

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              className="relative bg-white rounded-xl overflow-hidden group cursor-pointer"
              style={{
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '24px'
              }}
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(106, 61, 154, 0.2)",
                rotateY: 5
              }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
            >
              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.05) 0%, rgba(108, 158, 36, 0.05) 100%)'
                }}
              />
              
              {/* Floating icon */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{backgroundColor: 'rgba(251, 176, 59, 0.2)'}}
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {course.image}
              </motion.div>

              <div className="p-8 relative z-10">
                {/* Course header */}
                <div className="mb-6">
                  <motion.h3 
                    className="text-2xl font-bold mb-3"
                    style={{color: '#333333'}}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {course.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-base leading-relaxed mb-4"
                    style={{color: '#666666'}}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {course.description}
                  </motion.p>
                  
                  {renderStars(course.rating)}
                </div>

                {/* Course stats */}
                <motion.div 
                  className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-lg"
                  style={{backgroundColor: 'rgba(106, 61, 154, 0.05)'}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.7 }}
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
                </motion.div>

                {/* Features */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.9 }}
                >
                  <p className="text-sm font-semibold mb-3" style={{color: '#6A3D9A'}}>What You'll Learn:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + 1 + featureIndex * 0.1 }}
                      >
                        <span 
                          className="material-symbols-outlined text-sm"
                          style={{color: '#FBB03B'}}
                        >
                          check_circle
                        </span>
                        <span className="text-xs" style={{color: '#666666'}}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Enroll button */}
                <motion.button
                  className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300"
                  style={{backgroundColor: '#8B5FBF'}}
                  whileHover={{ 
                    backgroundColor: '#7FB83D',
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 1.2 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (course.title === 'IELTS Preparation') {
                      navigate('/course/ielts-academic-champion');
                    } else if (course.title === 'Spoken English') {
                      navigate('/course/english-champion');
                    } else if (course.title === 'German Basics') {
                      navigate('/course/german-language');
                    }
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