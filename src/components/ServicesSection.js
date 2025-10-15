import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      icon: '🌍',
      title: 'Study Abroad Guidance & Application Support',
      description: 'Comprehensive counseling and visa support to help you achieve your international education goals.'
    },
    {
      icon: '🏢',
      title: 'Corporate Training Programs',
      description: 'Specialized sessions to enhance workplace capabilities and efficiency.'
    },
    {
      icon: '🎓',
      title: 'Trial Classes Available',
      description: 'Experience learning with us by a 3-day free demo session. Learn without limits, no commitment required.'
    },
    {
      icon: '💰',
      title: 'Education Loan',
      description: 'Flexible education loan solutions designed to fund your academic journey with ease.'
    },
    {
      icon: '📋',
      title: 'Visa Application',
      description: 'Assistance in obtaining visas with document preparation and interview coaching.'
    },
    {
      icon: '🎯',
      title: 'Study Abroad Admissions',
      description: 'Get expert guidance and complete support for securing admission to top universities across various countries.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section 
      className="w-full py-16 sm:py-24"
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
            className="text-3xl sm:text-4xl font-bold tracking-wide mb-4"
            style={{color: '#6A3D9A', letterSpacing: '0.5px'}}
          >
            Our Core Services
          </h2>
          <p 
            className="max-w-2xl mx-auto text-lg font-display"
            style={{color: '#6C9E24', fontWeight: 300, letterSpacing: '0.3px', lineHeight: '1.6'}}
          >
           Guided programs crafted to unlock your true abilities.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden flex flex-col group h-full"
              style={{
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.08)',
                borderRadius: '20px',
                minHeight: '320px'
              }}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 12px 25px rgba(106, 61, 154, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-8 flex flex-col items-center text-center h-full justify-between">
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="p-4 rounded-full mb-6"
                    style={{backgroundColor: 'rgba(106, 61, 154, 0.1)'}}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(108, 158, 36, 0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-4xl">{service.icon}</span>
                  </motion.div>
                  
                  <h3 
                    className="text-xl font-bold mb-4 min-h-[3.5rem] flex items-center"
                    style={{color: '#333333'}}
                  >
                    {service.title}
                  </h3>
                </div>
                <p 
                  className="text-base flex-1 flex items-center"
                  style={{color: '#666666'}}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;