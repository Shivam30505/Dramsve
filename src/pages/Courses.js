import React from 'react';
import { motion } from 'framer-motion';
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
// import ChatButton from '../components/ChatButton';

const Courses = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const navigate = useNavigate();

  const courses = [
    {
      title: 'IELTS Academic Champion',
      description: 'Comprehensive IELTS training with expert guidance to achieve your target band score.',
      duration: '8 weeks',
      validity: '180 days',
      rating: 4.8,
      route: '/course/ielts-academic-champion',
      category: 'Language Training'
    },
    {
      title: 'IELTS Academic Marathon',
      description: 'Intensive reading and writing focused IELTS preparation program.',
      duration: '4 weeks',
      validity: '45 days',
      rating: 4.8,
      route: '/course/ielts-academic-marathon',
      category: 'Language Training'
    },
    {
      title: 'IELTS General Champion',
      description: 'Complete IELTS General training for immigration and work purposes.',
      duration: '6 weeks',
      validity: '180 days',
      rating: 4.8,
      route: '/course/ielts-general-champion',
      category: 'Language Training'
    },
    {
      title: 'IELTS General Marathon',
      description: 'Focused IELTS General preparation with targeted skill development.',
      duration: '4 weeks',
      validity: '45 days',
      rating: 4.8,
      route: '/course/ielts-general-marathon',
      category: 'Language Training'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
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

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)'}}>
      <Header />
      
      <main className="pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4" ref={ref}>
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 
                className="text-3xl sm:text-4xl font-bold tracking-wide mb-4"
                style={{color: '#6A3D9A', letterSpacing: '0.5px'}}
              >
                Our Popular Courses
              </h1>
              <p 
                className="max-w-2xl mx-auto text-lg"
                style={{color: '#6C9E24', fontWeight: 300, letterSpacing: '0.3px', lineHeight: '1.6'}}
              >
                Join thousands of students and professionals who have transformed their careers.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {courses.map((course, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden group cursor-pointer"
                  style={{
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.08)',
                    borderRadius: '20px'
                  }}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 12px 25px rgba(106, 61, 154, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => {
                    if (course.route) {
                      navigate(course.route);
                    } else {
                      window.open('https://elearning.dramsve.com/', '_blank');
                    }
                  }}
                >
                  <div 
                    className="w-full h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: (() => {
                        if (course.title === 'IELTS Academic Champion' || course.title === 'IELTS Academic Marathon' || course.title === 'IELTS General Champion' || course.title === 'IELTS General Marathon') {
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
                        } else {
                          return `url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")`;
                        }
                      })()
                    }}
                  />
                  
                  <div className="p-6">
                    <h3 
                      className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors"
                      style={{color: '#333333'}}
                    >
                      {course.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm mb-4" style={{color: '#666666'}}>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base">schedule</span>
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base">signal_cellular_alt</span>
                        {course.validity} validity
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {renderStars(course.rating)}
                      
                      <motion.button 
                        className="px-5 py-2 rounded-lg text-sm font-bold text-white transition-all duration-300"
                        style={{backgroundColor: '#6A3D9A'}}
                        whileHover={{ 
                          backgroundColor: '#6C9E24',
                          scale: 1.05
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (index === 0) {
                            navigate('/course/ielts-academic-champion');
                            window.scrollTo(0, 0);
                          } else if (index === 1) {
                            navigate('/course/ielts-academic-marathon');
                            window.scrollTo(0, 0);
                          } else if (index === 2) {
                            navigate('/course/ielts-general-champion');
                            window.scrollTo(0, 0);
                          } else if (index === 3) {
                            navigate('/course/ielts-general-marathon');
                            window.scrollTo(0, 0);
                          } else if (index === 4) {
                            navigate('/course/pte-academic');
                            window.scrollTo(0, 0);
                          } else if (index === 5) {
                            navigate('/course/toefl');
                            window.scrollTo(0, 0);
                          } else if (index === 6) {
                            navigate('/course/duolingo-english');
                            window.scrollTo(0, 0);
                          } else if (index === 7) {
                            navigate('/course/french-language');
                            window.scrollTo(0, 0);
                          } else if (index === 8) {
                            navigate('/course/german-language');
                            window.scrollTo(0, 0);
                          } else if (index === 9) {
                            navigate('/course/english-champion');
                            window.scrollTo(0, 0);
                          } else if (index === 13) {
                            navigate('/course/career-mentor');
                            window.scrollTo(0, 0);
                          } else if (index === 14) {
                            navigate('/course/celpip');
                            window.scrollTo(0, 0);
                          } else if (index === 10) {
                            navigate('/course/digital-sat');
                            window.scrollTo(0, 0);
                          } else if (index === 11) {
                            navigate('/course/gmat');
                            window.scrollTo(0, 0);
                          } else if (index === 12) {
                            navigate('/course/shorter-gre');
                            window.scrollTo(0, 0);
                          } else {
                            window.open('https://elearning.dramsve.com/', '_blank');
                          }
                        }}
                      >
                        <span className="truncate">View Details</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
     
    </div>
  );
};

export default Courses;