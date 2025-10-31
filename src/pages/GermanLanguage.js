import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useContact } from '../contexts/ContactContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GermanLanguage = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [levelsRef, levelsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [packagesRef, packagesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const { openContact } = useContact();

  const whyLearnGerman = [
    {
      title: 'Economic Powerhouse',
      description: 'Access to Europe\'s largest economy with 83+ million speakers.',
      icon: 'trending_up',
      color: '#3B82F6'
    },
    {
      title: 'Career Advancement',
      description: 'Advantage in engineering, IT, research, finance, and automotive sectors.',
      icon: 'work',
      color: '#10B981'
    },
    {
      title: 'Educational Excellence',
      description: 'Tuition-free German universities and DAAD scholarship opportunities.',
      icon: 'school',
      color: '#6A3D9A'
    },
    {
      title: 'Cultural Heritage',
      description: 'Rich literature, music, philosophy, and scientific contributions.',
      icon: 'library_books',
      color: '#F59E0B'
    },
    {
      title: 'Cognitive Benefits',
      description: 'Enhanced memory, multitasking, and delays cognitive decline.',
      icon: 'psychology',
      color: '#EF4444'
    },
    {
      title: 'Global Recognition',
      description: 'CEFR standards accepted worldwide for immigration and work.',
      icon: 'verified',
      color: '#8B5CF6'
    }
  ];



  const packageOptions = [
    {
      name: 'German Basic & A1',
      duration: '11 Weeks',
      validity: '150 Days',
      features: ['Basic everyday expressions', 'Self-introduction skills', 'Simple conversations', 'Live online classes'],
      color: '#6A3D9A',
      popular: false,
      trial: true
    },
    {
      name: 'German A2',
      duration: '7 Weeks',
      validity: '180 Days',
      features: ['Routine task communication', 'Familiar topic discussions', 'Simple descriptions', 'Recorded sessions'],
      color: '#10B981',
      popular: false,
      trial: true
    },
    {
      name: 'German A1 & A2',
      duration: '18 Weeks',
      validity: '210 Days',
      features: ['Foundation to pre-intermediate', 'Seamless progression', 'Comprehensive coverage', 'Goethe-Zertifikat prep'],
      color: '#6C9E24',
      popular: true,
      trial: true
    },
    {
      name: 'German B1',
      duration: '10 Weeks',
      validity: '90 Days',
      features: ['Travel situations', 'Work scenarios', 'Opinion explanations', 'Intermediate level mastery'],
      color: '#F59E0B',
      popular: false
    }
  ];

  const certificationExams = [
    {
      name: 'Goethe-Zertifikat A1',
      purpose: 'Family reunification requirements',
      icon: 'family_restroom',
      color: '#6A3D9A'
    },
    {
      name: 'Goethe-Zertifikat B1',
      purpose: 'Permanent residency and naturalization',
      icon: 'home',
      color: '#10B981'
    },
    {
      name: 'Goethe-Zertifikat C1',
      purpose: 'University admission in Germany, Austria, Switzerland',
      icon: 'school',
      color: '#F59E0B'
    },
    {
      name: 'TestDaF (B2-C1)',
      purpose: 'Academic admission and research positions',
      icon: 'science',
      color: '#EF4444'
    }
  ];

  const keyAdvantages = [
    'Certified instructors with ≥ C1 certification',
    'Live online classes with recorded sessions',
    'Official Goethe-Zertifikat and TestDaF preparation',
    'Structured CEFR progression pathway',
    'Interactive speaking and comprehension focus',
    'Career-oriented professional applications'
  ];

  const targetAudience = [
    {
      type: 'Students',
      description: 'Seeking education in German-speaking countries',
      icon: 'school'
    },
    {
      type: 'Professionals',
      description: 'In engineering, IT, research, and finance sectors',
      icon: 'engineering'
    },
    {
      type: 'Immigrants',
      description: 'Pursuing residency or naturalization in Germany',
      icon: 'flight_land'
    },
    {
      type: 'Researchers',
      description: 'Academic researchers and university applicants',
      icon: 'biotech'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)'}}>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="relative rounded-2xl overflow-hidden"
              style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 p-8 md:p-12 text-white">
                <motion.div 
                  className="flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.span 
                    className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                  >
                    CEFR STANDARDS
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 rounded-full text-sm font-bold" 
                    style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    A1-C2 Levels
                  </motion.span>
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4" 
                  style={{color: '#FFFFFF'}}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  GERMAN LANGUAGE
                </motion.h1>
                <motion.p 
                  className="text-xl mb-6 max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Comprehensive German Language Training for Academic, Professional & Immigration Purposes
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-6 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.span 
                      className="material-symbols-outlined" 
                      style={{color: '#FBB03B'}}
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      schedule
                    </motion.span>
                    <span>Complete A1-C2 Pathway</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.span 
                      className="material-symbols-outlined" 
                      style={{color: '#FBB03B'}}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    >
                      public
                    </motion.span>
                    <span>83M+ Native Speakers</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.span 
                      className="material-symbols-outlined" 
                      style={{color: '#FBB03B'}}
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      verified
                    </motion.span>
                    <span>Goethe & TestDaF Certified</span>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <motion.button 
                    className="px-8 py-3 font-bold rounded-lg transition-all"
                    style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: '#6C9E24', 
                      color: '#FFFFFF',
                      boxShadow: '0 10px 25px rgba(108, 158, 36, 0.3)'
                    }}
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

        {/* Why Learn German */}
        <section className="py-16" ref={ref}>
          <div className="container mx-auto px-4">
            <div className="rounded-2xl p-8" style={{background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.05) 0%, rgba(108, 158, 36, 0.05) 100%)'}}>
              <motion.h2 
                className="text-3xl font-bold text-center mb-8"
                style={{color: '#6A3D9A'}}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Key Benefits of Learning German
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {whyLearnGerman.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg"
                    variants={cardVariants}
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      boxShadow: `0 15px 30px ${item.color}20`
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{backgroundColor: `${item.color}15`}}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          backgroundColor: `${item.color}25`
                        }}
                      >
                        <motion.span 
                          className="material-symbols-outlined text-xl"
                          style={{color: item.color}}
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            repeatDelay: 2,
                            delay: index * 0.2
                          }}
                        >
                          {item.icon}
                        </motion.span>
                      </motion.div>
                      <h3 className="font-bold" style={{color: '#333333'}}>{item.title}</h3>
                    </div>
                    <p style={{color: '#666666'}}>{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>


        {/* Course Package Options */}
        <section className="py-16" ref={packagesRef}>
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={packagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Course Package Structure
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packageOptions.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg relative ${pkg.popular ? 'ring-2' : ''}`}
                  style={pkg.popular ? {ringColor: pkg.color} : {}}
                  initial={{ opacity: 0, y: 50 }}
                  animate={packagesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(106, 61, 154, 0.15)'
                  }}
                >
                  {pkg.popular && (
                    <div 
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-bold"
                      style={{backgroundColor: pkg.color}}
                    >
                      Most Popular
                    </div>
                  )}
                  {pkg.trial && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      Trial
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold mb-2" style={{color: pkg.color}}>{pkg.name}</h3>
                    <div className="text-sm mb-2" style={{color: '#666666'}}>
                      {pkg.duration} • {pkg.validity}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
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
                      boxShadow: `0 8px 25px ${pkg.color}40`,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                     onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
                  >
                    Choose Package
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Exam Preparation */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12"
              style={{color: '#6A3D9A'}}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Certification Exam Preparation
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificationExams.map((exam, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    boxShadow: `0 15px 30px ${exam.color}20`
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{backgroundColor: `${exam.color}15`}}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: `${exam.color}25`
                    }}
                  >
                    <span className="material-symbols-outlined text-2xl" style={{color: exam.color}}>
                      {exam.icon}
                    </span>
                  </motion.div>
                  <h3 className="font-bold mb-2" style={{color: exam.color}}>{exam.name}</h3>
                  <p className="text-sm" style={{color: '#666666'}}>{exam.purpose}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Advantages & Target Audience */}
        <section className="py-16" ref={benefitsRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Key Advantages */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>
                  Program Advantages
                </h2>
                <div className="space-y-4">
                  {keyAdvantages.map((advantage, index) => (
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
                      <span className="font-medium" style={{color: '#333333'}}>{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Target Audience */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>
                  Target Audience
                </h2>
                <div className="space-y-4">
                  {targetAudience.map((audience, index) => (
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
                      <p style={{color: '#666666'}}>{audience.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" ref={ctaRef}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="rounded-2xl p-8 md:p-12 text-center text-white"
              style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={ctaInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(106, 61, 154, 0.3)'
              }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Master German Language?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Join our comprehensive German program and unlock opportunities in Europe's largest economy with CEFR-certified training.</p>
              <motion.div 
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button 
                  className="px-8 py-3 font-bold rounded-lg transition-all"
                  style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
                  whileHover={{ 
                    scale: 1.08, 
                    backgroundColor: '#6C9E24', 
                    color: '#FFFFFF',
                    boxShadow: '0 10px 30px rgba(108, 158, 36, 0.4)',
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                   onClick={openContact}
                >
                  Know More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GermanLanguage;