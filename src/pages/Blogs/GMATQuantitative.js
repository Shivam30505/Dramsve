import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const GMATQuantitative = () => {
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
                <span className="text-sm font-bold">🎯 Test Prep</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-black mb-6"
                style={{color: '#6A3D9A'}}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                GMAT Quantitative Section: Smart Tips for Advanced Problem-Solving
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-relaxed mb-8"
                style={{color: '#666666'}}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                The GMAT Quantitative section can look scary at first glance. It's not just about solving math problems; it's about thinking fast, staying calm, and finding the smartest way to reach the answer.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* What Section Tests */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#6A3D9A'}}>
                    <span className="material-symbols-outlined text-white text-2xl">quiz</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>What the Quantitative Section Tests</h2>
                </div>
                <p className="text-lg leading-relaxed mb-6" style={{color: '#333333'}}>
                  The Quantitative Reasoning part of the GMAT tests your ability to analyze data, reason logically, and apply basic math concepts.
                </p>
                <p className="text-lg leading-relaxed mb-4 font-semibold" style={{color: '#6A3D9A'}}>
                  It includes two question types:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl" style={{backgroundColor: 'rgba(106, 61, 154, 0.1)'}}>
                    <span className="material-symbols-outlined text-2xl mt-1" style={{color: '#6A3D9A'}}>calculate</span>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{color: '#6A3D9A'}}>Problem Solving</h3>
                      <p className="text-base" style={{color: '#333333'}}>
                        Traditional math questions testing algebra, geometry, and arithmetic.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl" style={{backgroundColor: 'rgba(108, 158, 36, 0.1)'}}>
                    <span className="material-symbols-outlined text-2xl mt-1" style={{color: '#6C9E24'}}>data_usage</span>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{color: '#6C9E24'}}>Data Sufficiency</h3>
                      <p className="text-base" style={{color: '#333333'}}>
                        You decide whether the given information is enough to solve the problem — no full solving needed, just reasoning.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* What Makes It Advanced */}
              <motion.div 
                className="rounded-2xl p-8 shadow-lg mb-8"
                style={{background: 'linear-gradient(135deg, rgba(251, 176, 59, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#FBB03B'}}>
                    <span className="material-symbols-outlined text-white text-2xl">trending_up</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>What Makes It "Advanced"</h2>
                </div>
                <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                  Advanced GMAT problems often combine multiple topics in one question, like algebra mixed with ratios or geometry. They test how well you can spot patterns, make logical shortcuts, and avoid falling for traps. The challenge isn't the math itself — it's the time pressure and strategic thinking.
                </p>
              </motion.div>

              {/* Smart Strategies */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>Smart Strategies to Tackle Advanced Questions</h2>
                
                {/* Strategy 1 */}
                <div className="mb-6 p-6 rounded-xl border-l-4" style={{backgroundColor: '#F7F7F7', borderColor: '#6A3D9A'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#6A3D9A', color: 'white'}}>
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3" style={{color: '#6A3D9A'}}>Focus on Logic First</h3>
                      <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                        Don't rush into calculations. Take a second to understand what the question is really asking. Many "hard" problems become easier once you simplify them.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Strategy 2 */}
                <div className="mb-6 p-6 rounded-xl border-l-4" style={{backgroundColor: '#F7F7F7', borderColor: '#10B981'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#10B981', color: 'white'}}>
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3" style={{color: '#10B981'}}>Estimate and Eliminate</h3>
                      <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                        You don't always need exact numbers. Learn to approximate and rule out wrong options — it saves time and boosts accuracy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Strategy 3 */}
                <div className="mb-6 p-6 rounded-xl border-l-4" style={{backgroundColor: '#F7F7F7', borderColor: '#F59E0B'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#F59E0B', color: 'white'}}>
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3" style={{color: '#F59E0B'}}>Practice Time Discipline</h3>
                      <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                        You get roughly 2 minutes per question. If you're stuck, guess strategically and move on. The GMAT is adaptive, so pacing matters as much as accuracy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Strategy 4 */}
                <div className="p-6 rounded-xl border-l-4" style={{backgroundColor: '#F7F7F7', borderColor: '#8B5CF6'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#8B5CF6', color: 'white'}}>
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3" style={{color: '#8B5CF6'}}>Learn From Every Mistake</h3>
                      <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                        After each mock test, review not just what you got wrong, but why. Was it a concept issue or a timing slip? Fixing these patterns improves your score faster than more practice alone.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Conclusion */}
              <motion.div 
                className="rounded-2xl p-8 shadow-lg text-center"
                style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">In A Nutshell</h2>
                <p className="text-lg leading-relaxed text-white mb-4">
                  The GMAT Quantitative section isn't just about math — it's about thinking clearly, reasoning smartly, and managing your time wisely.
                </p>
                <p className="text-lg leading-relaxed text-white">
                  With the right strategies, practice, and mindset, even the toughest problems become manageable. <strong>Stay focused, trust your approach, and watch your score improve.</strong> 🚀
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

export default GMATQuantitative;
