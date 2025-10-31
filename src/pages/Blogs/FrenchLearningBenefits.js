import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FrenchLearningBenefits = () => {
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
                <span className="text-sm font-bold">🇫🇷 Language Learning</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-black mb-6"
                style={{color: '#6A3D9A'}}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Why Learning French Is Important for Students: Benefits, Career Scope & Easy Ways to Start
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-relaxed mb-8"
                style={{color: '#666666'}}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Imagine ordering a croissant in perfect French at a café in Paris — the waiter smiles, you reply confidently, and it just feels right. That little moment of connection, confidence, and culture is exactly what learning French gives you, and honestly, it's way more within reach than most people think.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Why Learn French */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>Why Learn French?</h2>
                
                {/* Reason 1 */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#6A3D9A'}}>
                      <span className="material-symbols-outlined text-white text-xl">public</span>
                    </div>
                    <h3 className="text-2xl font-bold" style={{color: '#6A3D9A'}}>1. It's One of the World's Most Spoken Languages</h3>
                  </div>
                  <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                    French isn't just for France! It's spoken in over 29 countries and by more than 300 million people worldwide — from Europe to Africa to Canada. Learning French instantly connects you to a global community and makes travel, study, and work abroad so much easier.
                  </p>
                </div>

                {/* Reason 2 */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#10B981'}}>
                      <span className="material-symbols-outlined text-white text-xl">work</span>
                    </div>
                    <h3 className="text-2xl font-bold" style={{color: '#6A3D9A'}}>2. It Opens Up Career Opportunities</h3>
                  </div>
                  <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                    French is one of the top languages in international business. Even in India, many schools, universities, and employers value French because it shows adaptability, communication skills, and global awareness. Being bilingual gives you a serious edge.
                  </p>
                </div>

                {/* Reason 3 */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#F59E0B'}}>
                      <span className="material-symbols-outlined text-white text-xl">school</span>
                    </div>
                    <h3 className="text-2xl font-bold" style={{color: '#6A3D9A'}}>3. It Gives You Access to World-Class Education</h3>
                  </div>
                  <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                    France is home to some of the world's best universities, and many offer scholarships or programs where knowing French is a big plus. It's not just France, though — Canada, Belgium, and Switzerland also use French widely in education and professional life. So if studying abroad is on your list, learning French can make that dream smoother.
                  </p>
                </div>

                {/* Reason 4 */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#8B5CF6'}}>
                      <span className="material-symbols-outlined text-white text-xl">psychology</span>
                    </div>
                    <h3 className="text-2xl font-bold" style={{color: '#6A3D9A'}}>4. It Makes You Smarter</h3>
                  </div>
                  <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                    Learning a new language literally trains your brain to think differently. It improves memory, focus, problem-solving, and creativity. And honestly, who doesn't want to impress their friends by casually dropping a "C'est la vie" or "Je ne sais quoi" in conversation?
                  </p>
                </div>
              </motion.div>

              {/* How to Start Learning French */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{color: '#6A3D9A'}}>How to Start Learning French</h2>
                
                {/* Tip 1 */}
                <div className="mb-6 p-6 rounded-xl" style={{backgroundColor: 'rgba(106, 61, 154, 0.1)'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold" style={{color: '#6A3D9A'}}>1</span>
                    <h3 className="text-xl font-bold" style={{color: '#6A3D9A'}}>Begin with the Basics</h3>
                  </div>
                  <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                    Don't overthink it — start with greetings, numbers, and daily words. Free apps like Duolingo, Babbel, or Lingodeer are great for beginners. Just 10 minutes a day is enough to start seeing progress.
                  </p>
                </div>

                {/* Tip 2 */}
                <div className="mb-6 p-6 rounded-xl" style={{backgroundColor: 'rgba(108, 158, 36, 0.1)'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold" style={{color: '#6C9E24'}}>2</span>
                    <h3 className="text-xl font-bold" style={{color: '#6C9E24'}}>Learn Through What You Love</h3>
                  </div>
                  <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                    Learning is easiest when it's fun. Watch French movies or Netflix shows, listen to French music, or follow YouTubers who teach through pop culture. This helps your ear get used to how French sounds and keeps things interesting!
                  </p>
                </div>

                {/* Tip 3 */}
                <div className="mb-6 p-6 rounded-xl" style={{backgroundColor: 'rgba(251, 176, 59, 0.1)'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold" style={{color: '#FBB03B'}}>3</span>
                    <h3 className="text-xl font-bold" style={{color: '#FBB03B'}}>Speak Early</h3>
                  </div>
                  <p className="text-lg leading-relaxed mb-3" style={{color: '#333333'}}>
                    This is the secret most people miss. You don't have to be fluent to start speaking. Use short phrases like <strong>Bonjour</strong> (Hello), <strong>Merci</strong> (Thank you), or <strong>Comment ça va?</strong> (How are you?). The earlier you practice out loud, the faster your confidence grows.
                  </p>
                </div>

                {/* Tip 4 */}
                <div className="mb-6 p-6 rounded-xl" style={{backgroundColor: 'rgba(239, 68, 68, 0.1)'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold" style={{color: '#EF4444'}}>4</span>
                    <h3 className="text-xl font-bold" style={{color: '#EF4444'}}>Stay Consistent</h3>
                  </div>
                  <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                    The golden rule: a little every day beats a lot once a week. Even 15 minutes daily can make a massive difference over time. Set small, realistic goals like learning five new words a day — and celebrate every bit of progress.
                  </p>
                </div>

                {/* Tip 5 */}
                <div className="p-6 rounded-xl" style={{backgroundColor: 'rgba(139, 92, 246, 0.1)'}}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold" style={{color: '#8B5CF6'}}>5</span>
                    <h3 className="text-xl font-bold" style={{color: '#8B5CF6'}}>Dive Into the Culture</h3>
                  </div>
                  <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                    Learning French isn't just about words — it's about experiencing French food, art, music, and lifestyle. When you understand the culture, you connect with the language on a deeper level — and that's when learning really sticks.
                  </p>
                </div>
              </motion.div>

              {/* For Parents */}
              <motion.div 
                className="rounded-2xl p-8 shadow-lg mb-8"
                style={{background: 'linear-gradient(135deg, rgba(108, 158, 36, 0.1) 0%, rgba(251, 176, 59, 0.1) 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#6C9E24'}}>
                    <span className="material-symbols-outlined text-white text-2xl">family_restroom</span>
                  </div>
                  <h2 className="text-3xl font-bold" style={{color: '#6A3D9A'}}>For Parents: Why Encourage French Learning</h2>
                </div>
                <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                  If you're a parent reading this, supporting your child in learning French means giving them a gift that keeps giving. It helps them become more confident, globally aware, and open-minded. And since French learning improves overall communication and thinking skills, it actually boosts performance in other subjects too.
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
                  French is more than just a language — it's a bridge to new cultures, careers, and experiences. Whether it's for school, travel, or just personal growth, learning French can truly transform how you see the world.
                </p>
                <p className="text-lg leading-relaxed text-white">
                  And the best part? You don't need to be perfect — you just need to start. 🌟
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

export default FrenchLearningBenefits;
