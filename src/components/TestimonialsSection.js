import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const testimonials = [
    {
      name: 'Sarah Chen',
      university: 'Stanford University',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: '"I got into my dream university thanks to DRAMSVE\'s guidance! Their personalized approach made all the difference."'
    },
    {
      name: 'David Rodriguez',
      university: 'MIT Graduate',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 4,
      text: '"The communication skills course was a game-changer for my career. Highly professional training."'
    },
    {
      name: 'Emily Carter',
      university: 'Oxford University',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 5,
      text: '"The visa application support was invaluable. They guided me through every step seamlessly."'
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
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.span
        key={index}
        className="material-symbols-outlined text-lg star"
        style={{color: index < rating ? '#FBB03B' : '#E5E7EB'}}
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ 
          delay: index * 0.1,
          type: "spring",
          stiffness: 500
        }}
        whileHover={{ 
          scale: 1.3,
          rotate: 360,
          color: "#FBB03B"
        }}
      >
        {index < rating ? 'star' : 'star_border'}
      </motion.span>
    ));
  };

  return (
    <section className="py-20 sm:py-24" style={{background: 'linear-gradient(135deg, #F7F7F7 0%, #FFF9F3 100%)'}}>
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="font-display text-center text-4xl font-bold tracking-wide mb-4"
            style={{color: '#6A3D9A', letterSpacing: '0.5px'}}
          >
            What Our Students Say
          </h2>
          <p 
            className="text-center text-lg max-w-2xl mx-auto mb-16 font-display"
            style={{color: '#6C9E24', fontWeight: 300, letterSpacing: '0.3px', lineHeight: '1.6'}}
          >
            Real success stories from students who achieved their dreams with our guidance
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="relative bg-white rounded-xl p-8 group overflow-hidden"
              style={{
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.08)',
                borderRadius: '20px'
              }}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: "0 12px 25px rgba(106, 61, 154, 0.15)",
                rotateX: 2
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Gradient border */}

              
              {/* Floating orbs */}

              
              <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-6">
                <motion.img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-3 shadow-lg"
                  style={{borderColor: '#6A3D9A'}}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    borderColor: "#FBB03B"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                <div>
                  <motion.h3 
                    className="text-xl font-bold mb-1"
                    style={{color: '#333333'}}
                    whileHover={{ scale: 1.05 }}
                  >
                    {testimonial.name}
                  </motion.h3>
                  <p 
                    className="text-sm font-semibold"
                    style={{color: '#6C9E24'}}
                  >
                    {testimonial.university}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <motion.blockquote 
                className="text-base leading-relaxed relative z-10"
                style={{color: '#666666'}}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                {testimonial.text}
              </motion.blockquote>

              {/* Animated quote mark */}
              <motion.div
                className="absolute top-4 right-4 text-6xl font-bold leading-none"
                style={{color: 'rgba(106, 61, 154, 0.2)'}}
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.2 + 0.8, type: "spring" }}
              >
                "
              </motion.div>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 rounded-xl -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Particle effect */}
              <motion.div
                className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                style={{backgroundColor: '#FBB03B'}}
                animate={{
                  y: [-10, -20, -10],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;