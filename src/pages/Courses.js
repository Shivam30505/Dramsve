import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileDesktopPrompt from '../components/MobileDesktopPrompt';
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

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const ieltsPrograms = [
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
  ];

  const courses = [
    {
      title: 'IELTS Preparation',
      description: 'Comprehensive IELTS training with expert guidance to achieve your target band score for international admissions.',
      duration: 'Flexible',
      validity: 'Custom',
      rating: 4.8,
      category: 'Language Training',
      hasVariants: true
    },
    {
      title: 'PTE Academic',
      description: 'Complete PTE Academic preparation with computer-based test practice.',
      duration: '6 weeks',
      validity: '90 days',
      rating: 4.8,
      route: '/course/pte-academic',
      category: 'Language Training'
    },
    {
      title: 'TOEFL IBT',
      description: 'Comprehensive TOEFL preparation for university admissions.',
      duration: '12 weeks',
      validity: '180 days',
      rating: 4.8,
      route: '/course/toefl',
      category: 'Language Training'
    },
    {
      title: 'Duolingo English Test',
      description: 'Quick and convenient English proficiency test preparation.',
      duration: '4 weeks',
      validity: '60 days',
      rating: 4.8,
      route: '/course/duolingo-english',
      category: 'Language Training'
    },
    {
      title: 'French Language (A1-B2)',
      description: 'Complete French language learning from basic to intermediate level.',
      duration: '32 weeks',
      validity: '42 weeks',
      rating: 4.9,
      route: '/course/french-language',
      category: 'Language Training'
    },
    {
      title: 'German Language (A1-B2)',
      description: 'Comprehensive German language training for all levels.',
      duration: '18 weeks',
      validity: '210 days',
      rating: 4.9,
      route: '/course/german-language',
      category: 'Language Training'
    },
    {
      title: 'English Champion',
      description: 'Advanced English communication and professional skills development.',
      duration: '10 weeks',
      validity: '180 days',
      rating: 4.9,
      route: '/course/english-champion',
      category: 'Language Training'
    },
    {
      title: 'Digital SAT',
      description: 'Complete Digital SAT preparation for college admissions.',
      duration: '12 weeks',
      validity: '90 days',
      rating: 4.9,
      route: '/course/digital-sat',
      category: 'Test Preparation'
    },
    {
      title: 'GMAT',
      description: 'Comprehensive GMAT preparation for business school admissions.',
      duration: '8 weeks',
      validity: '90 days',
      rating: 4.9,
      route: '/course/gmat',
      category: 'Test Preparation'
    },
    {
      title: 'Shorter GRE',
      description: 'Focused GRE preparation for graduate school admissions.',
      duration: '12 weeks',
      validity: '90 days',
      rating: 4.9,
      route: '/course/shorter-gre',
      category: 'Test Preparation'
    },
    {
      title: 'Career Mentor',
      description: 'Professional career guidance and mentorship program.',
      duration: '6 weeks',
      validity: '45 days',
      rating: 4.8,
      route: '/course/career-mentor',
      category: 'Career Development'
    },
    {
      title: 'CELPIP',
      description: 'Canadian English Language Proficiency Index Program preparation.',
      duration: '8 weeks',
      validity: '120 days',
      rating: 4.8,
      route: '/course/celpip',
      category: 'Language Training'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: fullStars }, (_, index) => (
          <span key={index} className="text-yellow-500">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-500">☆</span>}
        <span className="text-sm ml-1" style={{color: '#666666'}}>
          {rating}
        </span>
      </div>
    );
  };
// hello
  return (
    <div className="min-h-screen w-full" style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)'}}>
      <style>{`
        .course-card {
          opacity: 1 !important;
          visibility: visible !important;
          transform: none !important;
          display: flex !important;
          flex-direction: column !important;
        }
        @media (max-width: 768px) {
          .course-grid {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .course-card {
            min-height: 350px !important;
            margin-bottom: 1rem;
          }
        }
      `}</style>
      <Header />
      
      <main className="pt-16 sm:pt-20 w-full">
        <section className="py-8 sm:py-16 md:py-24 min-h-screen w-full">
          <div className="container mx-auto px-2 sm:px-4 lg:px-8 w-full" ref={ref}>
            <div className="text-center mb-6 sm:mb-8 md:mb-12 px-2">
              <h1 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-3 sm:mb-4"
                style={{color: '#6A3D9A', letterSpacing: '0.5px'}}
              >
                Our Popular Courses
              </h1>
              <p 
                className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 sm:px-4 md:px-0"
                style={{color: '#6C9E24', fontWeight: 300, letterSpacing: '0.3px', lineHeight: '1.6'}}
              >
                Join thousands of students and professionals who have transformed their careers.
              </p>
            </div>

            <div className="course-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="course-card bg-white rounded-xl overflow-hidden cursor-pointer w-full"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    opacity: 1,
                    visibility: 'visible'
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
                >
                  <div 
                    className="w-full h-48 bg-cover bg-center flex-shrink-0"
                    style={{
                      backgroundImage: (() => {
                        if (course.title === 'IELTS Preparation') {
                          return `url(${ieltsImage})`;
                        } else if (course.title === 'Digital SAT') {
                          return `url(${digitalSatImage})`;
                        } else if (course.title === 'French Language (A1-B2)') {
                          return `url(${frenchImage})`;
                        } else if (course.title === 'German Language (A1-B2)') {
                          return `url(${germanImage})`;
                        } else if (course.title === 'Duolingo English Test') {
                          return `url(${duolingoImage})`;
                        } else if (course.title === 'Career Mentor') {
                          return `url(${careerMentorImage})`;
                        } else if (course.title === 'Shorter GRE') {
                          return `url(${greImage})`;}
                        else if (course.title === 'CELPIP') {
                          return `url(${celpipImage})`;
                        } else if (course.title === 'PTE Academic') {
                          return `url(${pteImage})`;
                        }else if (course.title === 'English Champion') {
                          return `url(${spokenenglishImage})`;
                        }else if (course.title === 'TOEFL IBT') {
                          return `url(${tofelImage})`;
                        }else if (course.title === 'GMAT') {
                          return `url(${gmatImage})`;
                        }else {
                          return `url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")`;
                        }
                      })()
                    }}
                  />
                  
                  <div className="p-4 w-full flex-1 flex flex-col">
                    <h3 
                      className="text-base sm:text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors"
                      style={{color: '#333333'}}
                    >
                      {course.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm mb-3" style={{color: '#666666', lineHeight: '1.5'}}>
                      {course.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm mb-4 gap-2 sm:gap-0" style={{color: '#666666'}}>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base">schedule</span>
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base">signal_cellular_alt</span>
                        {course.validity} validity
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mt-auto">
                      {renderStars(course.rating)}
                      
                      <button 
                        className="w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-bold text-white transition-all duration-300 hover:bg-green-600"
                        style={{backgroundColor: '#6A3D9A'}}
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
                        <span className="truncate">
                          {course.hasVariants ? 'Choose Program' : 'View Details'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold" style={{color: '#6A3D9A'}}>
                    Choose Your IELTS Program
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <span className="material-symbols-outlined text-gray-600">close</span>
                  </button>
                </div>
                <p className="text-gray-600 mt-2">
                  Select the IELTS preparation program that best fits your goals and timeline
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ieltsPrograms.map((program, index) => (
                    <motion.div
                      key={program.id}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedIELTSProgram?.id === program.id 
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                      }`}
                      onClick={() => handleProgramSelect(program)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="font-bold text-lg mb-2" style={{color: '#333333'}}>
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-1 text-gray-600">
                          <span className="material-symbols-outlined text-base">schedule</span>
                          {program.duration}
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium" 
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
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    {selectedIELTSProgram && (
                      <p className="text-sm text-gray-600">
                        Selected: <span className="font-semibold text-purple-600">{selectedIELTSProgram.title}</span>
                      </p>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleCloseModal}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleContinue}
                      disabled={!selectedIELTSProgram}
                      className={`px-6 py-2 rounded-lg font-bold text-white transition-all duration-300 ${
                        selectedIELTSProgram 
                          ? 'hover:bg-green-600' 
                          : 'opacity-50 cursor-not-allowed'
                      }`}
                      style={{backgroundColor: '#6A3D9A'}}
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
      <MobileDesktopPrompt />
    </div>
  );
};

export default Courses;