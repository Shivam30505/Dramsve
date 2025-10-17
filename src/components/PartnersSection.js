import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PartnersSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const partners = [
    {
      name: 'Harvard University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Harvard_University_coat_of_arms.svg'
    },
    {
      name: 'Stanford University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Seal_of_Leland_Stanford_Junior_University.svg'
    },
    {
      name: 'MIT',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg'
    },
    {
      name: 'Oxford University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Oxford-University-Circlet.svg'
    },
    {
      name: 'Cambridge University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg'
    },
    {
      name: 'Yale University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Yale_University_Shield_1.svg'
    },
    {
      name: 'Princeton University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg'
    },
    {
      name: 'University of Toronto',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Oxford-University-Circlet.svg'
    }
  ];

  // Duplicate the array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    // <section 
    //   className="py-12 sm:py-16 md:py-20" // Reduced padding for mobile
    //   style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)'}}
    // >
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16" // Reduced margin for mobile
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-3 sm:mb-4"
            style={{color: '#6A3D9A', letterSpacing: '0.5px'}}
          >
            Our Partners
          </h2>
          <p 
            className="max-w-2xl mx-auto text-base sm:text-lg font-display px-4"
            style={{color: '#6C9E24', fontWeight: 300, letterSpacing: '0.3px', lineHeight: '1.6'}}
          >
            Trusted by leading universities and institutions worldwide
          </p>
        </motion.div>

        {/* Sliding logos container */}
        <div className="overflow-hidden relative">
          <motion.div 
            className="flex items-center"
            animate={{
              x: [0, -1600]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: '3200px'
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 flex items-center justify-center mx-4 sm:mx-6 md:mx-8" // Reduced margin for mobile
                style={{
                  width: '140px sm:160px md:180px' // Responsive width
                }}
                whileHover={{ 
                  scale: 1.15
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-16 sm:h-18 md:h-20 w-auto max-w-32 object-contain transition-all duration-300" // Responsive height
                  style={{
                    filter: 'grayscale(60%) opacity(0.9)'
                  }}
                  whileHover={{
                    filter: 'grayscale(0%) opacity(1)'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays to hide edges - Mobile responsive */}
          <div 
            className="absolute left-0 top-0 h-full w-8 sm:w-16 md:w-32 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, rgba(247,247,247,1), rgba(247,247,247,0))'
            }}
          />
          <div 
            className="absolute right-0 top-0 h-full w-8 sm:w-16 md:w-32 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to left, rgba(247,247,247,1), rgba(247,247,247,0))'
            }}
          />
        </div>
      </div>
    // </section>
  );
};

export default PartnersSection;