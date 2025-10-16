import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ieltsImage from '../images/ielts.jpg';
import digitalSatImage from '../images/digital_sat.jpg';
import frenchImage from '../images/french.jpg';
import germanImage from '../images/german.jpg';
import duolingoImage from '../images/duolingo.jpg';
import careerMentorImage from '../images/career_mentor.jpg';
import greImage from '../images/gre.png';
import celpipImage from '../images/CELPIP.jpg';
import spokenenglishImage from '../images/SpokenEnglish.jpg';
import pteImage from '../images/PTE.png';
import tofelImage from '../images/tofel.jpg';
import gmatImage from '../images/gmat.jpg';

const Courses = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const navigate = useNavigate();
  const [isIELTSModalOpen, setIsIELTSModalOpen] = useState(false);
  const [selectedIELTSProgram, setSelectedIELTSProgram] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  
  // Memoize to prevent recreating on every render
  const prefersReducedMotion = useMemo(() => 
    typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const ieltsPrograms = useMemo(() => [
    {
      id: 'academic-champion',
      title: 'IELTS Academic Champion',
      description: 'Comprehensive IELTS training with expert guidance to achieve your target band score.',
      duration: '8 weeks',
      intensity: 'Standard Pace',
      route: '/course/ielts-academic-champion'
    },
    {
      id: 'academic-marathon',
      title: 'IELTS Academic Marathon',
      description: 'Intensive reading and writing focused IELTS preparation program.',
      duration: '4 weeks',
      intensity: 'Fast Track',
      route: '/course/ielts-academic-marathon'
    },
    {
      id: 'general-champion',
      title: 'IELTS General Champion',
      description: 'Complete IELTS General training for immigration and work purposes.',
      duration: '6 weeks',
      intensity: 'Standard Pace',
      route: '/course/ielts-general-champion'
    },
    {
      id: 'general-marathon',
      title: 'IELTS General Marathon',
      description: 'Focused IELTS General preparation with targeted skill development.',
      duration: '4 weeks',
      intensity: 'Fast Track',
      route: '/course/ielts-general-marathon'
    }
  ], []);

  const courses = useMemo(() => [
    {
      title: 'IELTS Preparation',
      description: 'Comprehensive IELTS training with expert guidance to achieve your target band score for international admissions.',
      duration: 'Flexible',
      validity: 'Custom',
      rating: 4.8,
      category: 'Language Training',
      hasVariants: true,
      image: ieltsImage
    },
    {
      title: 'PTE Academic',
      description: 'Complete PTE Academic preparation with computer-based test practice.',
      duration: '6 weeks',
      validity: '90 days',
      rating: 4.8,
      route: '/course/pte-academic',
      category: 'Language Training',
      image: pteImage
    },
    {
      title: 'TOEFL IBT',
      description: 'Comprehensive TOEFL preparation for university admissions.',
      duration: '12 weeks',
      validity: '180 days',
      rating: 4.8,
      route: '/course/toefl',
      category: 'Language Training',
      image: tofelImage
    },
    {
      title: 'Duolingo English Test',
      description: 'Quick and convenient English proficiency test preparation.',
      duration: '4 weeks',
      validity: '60 days',
      rating: 4.8,
      route: '/course/duolingo-english',
      category: 'Language Training',
      image: duolingoImage
    },
    {
      title: 'French Language (A1-B2)',
      description: 'Complete French language learning from basic to intermediate level.',
      duration: '32 weeks',
      validity: '42 weeks',
      rating: 4.9,
      route: '/course/french-language',
      category: 'Language Training',
      image: frenchImage
    },
    {
      title: 'German Language (A1-B2)',
      description: 'Comprehensive German language training for all levels.',
      duration: '18 weeks',
      validity: '210 days',
      rating: 4.9,
      route: '/course/german-language',
      category: 'Language Training',
      image: germanImage
    },
    {
      title: 'English Champion',
      description: 'Advanced English communication and professional skills development.',
      duration: '10 weeks',
      validity: '180 days',
      rating: 4.9,
      route: '/course/english-champion',
      category: 'Language Training',
      image: spokenenglishImage
    },
    {
      title: 'Digital SAT',
      description: 'Complete Digital SAT preparation for college admissions.',
      duration: '12 weeks',
      validity: '90 days',
      rating: 4.9,
      route: '/course/digital-sat',
      category: 'Test Preparation',
      image: digitalSatImage
    },
    {
      title: 'GMAT',
      description: 'Comprehensive GMAT preparation for business school admissions.',
      duration: '8 weeks',
      validity: '90 days',
      rating: 4.9,
      route: '/course/gmat',
      category: 'Test Preparation',
      image: gmatImage
    },
    {
      title: 'Shorter GRE',
      description: 'Focused GRE preparation for graduate school admissions.',
      duration: '12 weeks',
      validity: '90 days',
      rating: 4.9,
      route: '/course/shorter-gre',
      category: 'Test Preparation',
      image: greImage
    },
    {
      title: 'Career Mentor',
      description: 'Professional career guidance and mentorship program.',
      duration: '6 weeks',
      validity: '45 days',
      rating: 4.8,
      route: '/course/career-mentor',
      category: 'Career Development',
      image: careerMentorImage
    },
    {
      title: 'CELPIP',
      description: 'Canadian English Language Proficiency Index Program preparation.',
      duration: '8 weeks',
      validity: '120 days',
      rating: 4.8,
      route: '/course/celpip',
      category: 'Language Training',
      image: celpipImage
    }
  ], []);

  const handleIELTSCardClick = () => {
    setIsIELTSModalOpen(true);
    setSelectedIELTSProgram(null);
  };

  const handleProgramSelect = (program) => {
    setSelectedIELTSProgram(program);
  };

  const handleContinue = () => {
    if (selectedIELTSProgram) {
      setIsIELTSModalOpen(false);
      navigate(selectedIELTSProgram.route);
      window.scrollTo(0, 0);
    }
  };

  const handleCloseModal = () => {
    setIsIELTSModalOpen(false);
    setSelectedIELTSProgram(null);
  };

  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index) => {
    // Mark as loaded even on error to show the card
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  // Simplified animations for better mobile performance
  const cardVariants = prefersReducedMotion ? {} : {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: fullStars }, (_, index) => (
          <span key={index} className="text-yellow-500 text-base">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-500 text-base">☆</span>}
        <span className="text-sm ml-1" style={{color: '#666666'}}>
          {rating}
        </span>
      </div>
    );
  };

  const getImageUrl = (course) => {
    return course.image || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80";
  };

  return (
    <div className="min-h-screen w-full" style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)'}}>
      <Header />
      
      <main className="pt-16 sm:pt-20 w-full">
        <section className="py-8 sm:py-16 md:py-24 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={ref}>
            <motion.div 
              className="text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
            >
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-4"
                style={{color: '#6A3D9A', letterSpacing: '0.5px'}}
              >
                Our Popular Courses
              </h1>
              <p 
                className="max-w-2xl mx-auto text-base sm:text-lg px-4 sm:px-0"
                style={{color: '#6C9E24', fontWeight: 300, letterSpacing: '0.3px', lineHeight: '1.6'}}
              >
                Join thousands of students and professionals who have transformed their careers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
              {courses.map((course, index) => {
                const isLoaded = imagesLoaded[index];
                
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1, margin: "50px" }}
                    transition={{ delay: Math.min(index * 0.05, 0.3) }}
                    className="bg-white rounded-xl overflow-hidden cursor-pointer w-full flex flex-col"
                    style={{
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                      minHeight: '400px', // Reserve space to prevent layout shift
                      opacity: isLoaded || prefersReducedMotion ? 1 : 0.7,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                    onClick={() => {
                      if (course.hasVariants) {
                        handleIELTSCardClick();
                      } else if (course.route) {
                        navigate(course.route);
                      } else {
                        window.open('https://elearning.dramsve.com/', '_blank');
                      }
                    }}
                    whileHover={isMobile ? {} : { 
                      y: -4, 
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)', 
                      transition: { duration: 0.2 } 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Image Container with fixed aspect ratio */}
                    <div 
                      className="w-full relative bg-gray-200 flex-shrink-0"
                      style={{ 
                        paddingTop: '60%', // 5:3 aspect ratio
                        backgroundColor: '#f3f3f3'
                      }}
                    >
                      <img
                        src={getImageUrl(course)}
                        alt={course.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loading={index < 3 ? "eager" : "lazy"} // Load first 3 images eagerly
                        onLoad={() => handleImageLoad(index)}
                        onError={() => handleImageError(index)}
                        style={{
                          opacity: isLoaded ? 1 : 0,
                          transition: 'opacity 0.3s ease-in-out'
                        }}
                      />
                      {/* Loading skeleton */}
                      {!isLoaded && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                          <div className="text-gray-400 text-sm">Loading...</div>
                        </div>
                      )}
                    </div>

                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <h3 
                        className="text-lg sm:text-xl font-bold mb-2 line-clamp-2"
                        style={{color: '#333333'}}
                      >
                        {course.title}
                      </h3>
                      
                      <p 
                        className="text-sm text-gray-600 mb-3 line-clamp-3 flex-1"
                        style={{lineHeight: '1.5'}}
                      >
                        {course.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm mb-4 gap-2" style={{color: '#666666'}}>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base" style={{fontSize: '18px'}}>schedule</span>
                          <span>{course.duration}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-base" style={{fontSize: '18px'}}>signal_cellular_alt</span>
                          <span>{course.validity}</span>
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto">
                        {renderStars(course.rating)}
                        
                        <button 
                          className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-200 active:scale-95"
                          style={{
                            backgroundColor: '#6A3D9A',
                            minHeight: '40px'
                          }}
                          onMouseEnter={(e) => !isMobile && (e.target.style.backgroundColor = '#7C4BAD')}
                          onMouseLeave={(e) => !isMobile && (e.target.style.backgroundColor = '#6A3D9A')}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (course.hasVariants) {
                              handleIELTSCardClick();
                            } else if (course.route) {
                              navigate(course.route);
                              window.scrollTo(0, 0);
                            } else {
                              window.open('https://elearning.dramsve.com/', '_blank');
                            }
                          }}
                        >
                          {course.hasVariants ? 'Choose Program' : 'View Details'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* IELTS Selection Modal */}
      <AnimatePresence>
        {isIELTSModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden mx-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold" style={{color: '#6A3D9A'}}>
                    Choose Your IELTS Program
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                    aria-label="Close modal"
                  >
                    <span className="material-symbols-outlined text-gray-600">close</span>
                  </button>
                </div>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                  Select the IELTS preparation program that best fits your goals and timeline
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto" style={{maxHeight: 'calc(90vh - 200px)'}}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {ieltsPrograms.map((program) => (
                    <motion.div
                      key={program.id}
                      className={`p-4 sm:p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedIELTSProgram?.id === program.id 
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                      }`}
                      onClick={() => handleProgramSelect(program)}
                      whileHover={{ scale: isMobile ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="font-bold text-base sm:text-lg mb-2" style={{color: '#333333'}}>
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm">
                        <span className="flex items-center gap-1.5 text-gray-600">
                          <span className="material-symbols-outlined text-base">schedule</span>
                          <span>{program.duration}</span>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium w-fit" 
                          style={{
                            backgroundColor: program.intensity === 'Fast Track' ? '#FEF3CD' : '#DCFCE7',
                            color: program.intensity === 'Fast Track' ? '#92400E' : '#166534'
                          }}>
                          {program.intensity}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-center sm:text-left w-full sm:w-auto">
                    {selectedIELTSProgram && (
                      <p className="text-sm text-gray-600">
                        Selected: <span className="font-semibold text-purple-600">{selectedIELTSProgram.title}</span>
                      </p>
                    )}
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={handleCloseModal}
                      className="flex-1 sm:flex-none px-5 sm:px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 active:bg-gray-200 transition-colors text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleContinue}
                      disabled={!selectedIELTSProgram}
                      className={`flex-1 sm:flex-none px-5 sm:px-6 py-2.5 rounded-lg font-bold text-white transition-all duration-200 text-sm sm:text-base ${
                        selectedIELTSProgram 
                          ? 'active:scale-95' 
                          : 'opacity-50 cursor-not-allowed'
                      }`}
                      style={{
                        backgroundColor: selectedIELTSProgram ? '#6A3D9A' : '#9CA3AF'
                      }}
                      onMouseEnter={(e) => selectedIELTSProgram && !isMobile && (e.target.style.backgroundColor = '#7C4BAD')}
                      onMouseLeave={(e) => selectedIELTSProgram && !isMobile && (e.target.style.backgroundColor = '#6A3D9A')}
                    >
                      Select & Continue
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Courses;