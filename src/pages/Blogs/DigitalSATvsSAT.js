import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DigitalSATvsSAT = () => {
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
                <span className="text-sm font-bold">📚 Latest Insights</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-black mb-6"
                style={{color: '#6A3D9A'}}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Digital SAT vs Traditional SAT: Which One's Better for You?
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-relaxed mb-8"
                style={{color: '#666666'}}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Confused about the new Digital SAT? Here's a clear, student-friendly comparison of the Digital vs Traditional SAT - format, timing, difficulty, and tips for success in 2025.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg leading-relaxed mb-4" style={{color: '#333333'}}>
                  If you've been planning to take the SAT soon, you've probably heard about the Digital SAT replacing the old paper version. And honestly, it's a pretty big change! Many students are still trying to figure out what exactly is different, and whether the new version is harder, easier, or just… different.
                </p>
                <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                  So, let's break it down simply, no jargon, no stress — just a clear comparison between the Digital SAT and the Traditional SAT to help you understand what's going on.
                </p>
              </motion.div>

              {/* What Is Digital SAT */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#6A3D9A'}}>
                    <span className="material-symbols-outlined text-white text-2xl">computer</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>What Is the Digital SAT?</h2>
                </div>
                <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                  The Digital SAT is basically the updated version of the SAT we've all known for years — except now, it's on a computer or tablet instead of paper. The idea behind the change is to make the test more modern, flexible, and student-friendly.
                </p>
                <p className="text-lg leading-relaxed mt-4" style={{color: '#333333'}}>
                  You'll still take it at a test center, but everything happens digitally, from reading passages to answering math questions. Plus, you get handy tools like an on-screen calculator, timer, and even an option to flag questions to review later.
                </p>
              </motion.div>

              {/* Comparison Table */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6" style={{color: '#6A3D9A'}}>Digital SAT vs Traditional SAT: The Main Differences</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr style={{backgroundColor: '#6A3D9A'}}>
                        <th className="p-4 text-left text-white font-bold border">Feature</th>
                        <th className="p-4 text-left text-white font-bold border">Traditional SAT</th>
                        <th className="p-4 text-left text-white font-bold border">Digital SAT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Format', 'Pencil & paper', 'Computer/tablet'],
                        ['Time', '3 hours', 'About 2 hours 14 minutes'],
                        ['Sections', 'Reading, Writing, Math', 'Reading & Writing (combined), Math'],
                        ['Passages', 'Long, with multiple questions', 'Short, one question per passage'],
                        ['Calculator', 'Only for one math section', 'Allowed for all math questions'],
                        ['Testing Style', 'Fixed questions', 'Adaptive (changes based on performance)'],
                        ['Score Range', '400–1600', '400–1600 (same scale)']
                      ].map((row, idx) => (
                        <tr key={idx} style={{backgroundColor: idx % 2 === 0 ? '#F7F7F7' : 'white'}}>
                          <td className="p-4 font-semibold border" style={{color: '#6A3D9A'}}>{row[0]}</td>
                          <td className="p-4 border" style={{color: '#333333'}}>{row[1]}</td>
                          <td className="p-4 border" style={{color: '#333333'}}>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Adaptive Testing */}
              <motion.div 
                className="rounded-2xl p-8 shadow-lg mb-8"
                style={{background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.1) 0%, rgba(108, 158, 36, 0.1) 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#FBB03B'}}>
                    <span className="material-symbols-outlined text-white text-2xl">settings</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>What's "Adaptive" Testing Anyway?</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4" style={{color: '#333333'}}>
                  This is one of the biggest updates. The Digital SAT uses an adaptive system, meaning it adjusts the difficulty of questions based on how you're doing.
                </p>
                <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                  For example, if you do well on the first section, the next one will be a bit tougher. If you struggle a bit, the next section will be slightly easier. It's designed to get a more accurate picture of your skill level in less time — which is why the new test is also shorter.
                </p>
              </motion.div>

              {/* Why the Change */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#6C9E24'}}>
                    <span className="material-symbols-outlined text-white text-2xl">lightbulb</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>Why Did They Change It?</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4" style={{color: '#333333'}}>
                  The College Board didn't just switch things up for fun — they wanted to make the SAT less stressful and more relevant. The new digital format:
                </p>
                <ul className="space-y-3">
                  {[
                    'Delivers scores faster (usually within days, not weeks)',
                    'Cuts down testing time',
                    'Is environmentally friendly',
                    "Works better for today's tech-savvy students"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-xl mt-1" style={{color: '#6C9E24'}}>check_circle</span>
                      <span className="text-lg" style={{color: '#333333'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* For Students */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#8B5CF6'}}>
                    <span className="material-symbols-outlined text-white text-2xl">school</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>What This Means for Students</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4" style={{color: '#333333'}}>
                  If you're a student, the main thing to remember is that the content hasn't changed much — it's still testing your reading, writing, and math skills. But the way you take it has.
                </p>
                <p className="text-lg leading-relaxed mb-4" style={{color: '#333333'}}>
                  So apart from regular SAT prep, you'll also want to:
                </p>
                <ul className="space-y-3">
                  {[
                    'Practice using the Bluebook app (the official digital testing platform)',
                    'Get comfortable reading and solving questions on a screen',
                    'Learn to use on-screen tools like the highlighter and calculator efficiently'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-xl mt-1" style={{color: '#FBB03B'}}>arrow_right</span>
                      <span className="text-lg" style={{color: '#333333'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* For Parents */}
              <motion.div 
                className="rounded-2xl p-8 shadow-lg mb-8"
                style={{background: 'linear-gradient(135deg, rgba(108, 158, 36, 0.1) 0%, rgba(251, 176, 59, 0.1) 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#6C9E24'}}>
                    <span className="material-symbols-outlined text-white text-2xl">family_restroom</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>What Parents Should Know</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4" style={{color: '#333333'}}>
                  Parents often worry that the digital shift might make the test harder or unfair — but actually, it's the opposite. The Digital SAT is designed to be more accessible and accurate, without compromising on standards.
                </p>
                <p className="text-lg leading-relaxed mb-4" style={{color: '#333333'}}>
                  Many students find it less tiring since it's shorter and broken into smaller, more focused sections. Plus, the faster results mean families can plan applications sooner and with more clarity.
                </p>
                <p className="text-lg leading-relaxed mb-4 font-semibold" style={{color: '#6A3D9A'}}>
                  If you're a parent, the best way to help your child is to:
                </p>
                <ul className="space-y-3">
                  {[
                    'Encourage early digital practice',
                    'Make sure they use the official tools (not just paper practice tests)',
                    'Help them maintain a calm, confident mindset about the change'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-xl mt-1" style={{color: '#6C9E24'}}>check_circle</span>
                      <span className="text-lg" style={{color: '#333333'}}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Conclusion */}
              <motion.div 
                className="rounded-2xl p-8 shadow-lg text-center"
                style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">In A Nutshell</h2>
                <p className="text-lg leading-relaxed text-white">
                  The Digital SAT vs Traditional SAT debate isn't really about which one's "better" — it's about what's different. The new format is faster, smarter, and designed for how students learn today.
                </p>
                <p className="text-lg leading-relaxed text-white mt-4">
                  At the end of the day, it still measures the same core skills: reading, writing, and math — just with a modern twist. So, if you're preparing for the SAT soon, don't worry about the format too much. Focus on consistent prep, familiarizing yourself with the digital setup, and most importantly, believing in yourself. <strong>You've got this.</strong>
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

export default DigitalSATvsSAT;
