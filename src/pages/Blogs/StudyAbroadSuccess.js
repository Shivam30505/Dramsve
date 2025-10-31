import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const StudyAbroadSuccess = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)'}}>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16" ref={heroRef}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block px-4 py-2 rounded-full mb-6"
                style={{backgroundColor: '#6C9E24', color: 'white'}}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm font-bold">✈️ Study Abroad</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-black mb-6"
                style={{color: '#6A3D9A'}}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Study Abroad Success: Essential Tips for Students to Thrive Internationally
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-relaxed mb-8"
                style={{color: '#666666'}}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Imagine you're walking across a beautiful university campus halfway around the world, meeting people from every culture, and studying what you love. That's the dream, right? But between applications, visas, and adjusting to a whole new life, studying abroad can feel overwhelming.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Tip 1 */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#6A3D9A'}}>
                    <span className="material-symbols-outlined text-white text-2xl">map</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>1. Start With the Right Plan</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4" style={{color: '#333333'}}>
                  Every successful study abroad journey begins with a solid plan. Research is your best friend here.
                </p>
                <p className="text-lg leading-relaxed mb-4 font-semibold" style={{color: '#6A3D9A'}}>
                  Ask yourself:
                </p>
                <ul className="space-y-3 ml-4">
                  {[
                    'What do I want to study and why?',
                    'Which country and university align with my goals?',
                    'What\'s my budget and scholarship plan?'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-xl mt-1" style={{color: '#6C9E24'}}>check_circle</span>
                      <span className="text-lg" style={{color: '#333333'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Tip 2 */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#10B981'}}>
                    <span className="material-symbols-outlined text-white text-2xl">school</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>2. Build a Strong Academic Profile</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4" style={{color: '#333333'}}>
                  Top universities look beyond grades — they value curiosity, leadership, and community involvement. If your dream course requires tests like SAT, GRE, GMAT, or IELTS, start preparing early. A well-balanced profile shows you're ready for the global stage.
                </p>
                <div className="p-6 rounded-xl" style={{backgroundColor: 'rgba(16, 185, 129, 0.1)'}}>
                  <p className="text-base font-semibold mb-3" style={{color: '#10B981'}}>Focus on:</p>
                  <ul className="space-y-2">
                    {[
                      'Good academic consistency',
                      'Strong communication skills',
                      'Meaningful extracurricular activities'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-base mt-0.5" style={{color: '#10B981'}}>arrow_right</span>
                        <span className="text-base" style={{color: '#333333'}}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Tip 3 */}
              <motion.div 
                className="rounded-2xl p-8 shadow-lg mb-8"
                style={{background: 'linear-gradient(135deg, rgba(251, 176, 59, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#FBB03B'}}>
                    <span className="material-symbols-outlined text-white text-2xl">description</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>3. Polish Your Application</h2>
                </div>
                <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                  Your Statement of Purpose (SOP), resume, and letters of recommendation are your story — make them count. Write honestly about your goals, passions, and what makes you unique. Avoid clichés, and let your genuine enthusiasm show.
                </p>
              </motion.div>

              {/* Tip 4 */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#8B5CF6'}}>
                    <span className="material-symbols-outlined text-white text-2xl">explore</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>4. Adaptability Is Key</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4" style={{color: '#333333'}}>
                  Studying abroad means stepping out of your comfort zone — new culture, new education system, sometimes even a new language.
                </p>
                <div className="p-6 rounded-xl" style={{backgroundColor: 'rgba(139, 92, 246, 0.1)'}}>
                  <p className="text-base font-semibold mb-3" style={{color: '#8B5CF6'}}>It helps to:</p>
                  <ul className="space-y-2">
                    {[
                      'Be open-minded and curious',
                      'Ask questions instead of assuming',
                      'Join student communities and local events'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-base mt-0.5" style={{color: '#8B5CF6'}}>arrow_right</span>
                        <span className="text-base" style={{color: '#333333'}}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Tip 5 */}
              <motion.div 
                className="rounded-2xl p-8 shadow-lg mb-8"
                style={{background: 'linear-gradient(135deg, rgba(108, 158, 36, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#6C9E24'}}>
                    <span className="material-symbols-outlined text-white text-2xl">balance</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>5. Stay Balanced and Positive</h2>
                </div>
                <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                  The first few months abroad can be exciting and overwhelming. Homesickness, culture shock, or self-doubt — it's all normal. Stay in touch with family, find a good routine, and remember why you started this journey. Every challenge teaches you something valuable about yourself.
                </p>
              </motion.div>

              {/* Conclusion */}
              <motion.div 
                className="rounded-2xl p-8 shadow-lg text-center"
                style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">In A Nutshell</h2>
                <p className="text-lg leading-relaxed text-white mb-4">
                  Success in studying abroad isn't measured just by grades — it's measured by growth. It's about becoming independent, confident, and globally aware. You grow as a person, embracing new cultures, and discovering your potential.
                </p>
                <p className="text-lg leading-relaxed text-white">
                  With careful planning, preparation, and an open mindset, you can turn your dream into a successful, life-changing experience. 🌍✨
                </p>
              </motion.div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudyAbroadSuccess;
