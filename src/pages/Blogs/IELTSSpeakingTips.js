import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const IELTSSpeakingTips = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const tips = [
    {
      number: 1,
      title: 'Speak Fluently and Naturally',
      content: 'Fluency matters more than perfection. Avoid long pauses, fillers like "um" or "uh," and focus on speaking smoothly. It\'s better to keep talking with minor grammar mistakes than to stop and overthink.',
      color: '#6A3D9A',
      icon: 'record_voice_over'
    },
    {
      number: 2,
      title: 'Expand Your Answers',
      content: 'Don\'t give one-word or very short responses. For example, instead of just saying "Yes, I like reading," explain why, give examples, or share a personal story. This shows depth and coherence.',
      color: '#10B981',
      icon: 'chat'
    },
    {
      number: 3,
      title: 'Use a Range of Vocabulary',
      content: 'Band 8+ requires a variety of words and phrases. Replace "good" with "fantastic," "beneficial," or "valuable." Use idiomatic expressions naturally, but don\'t overdo them.',
      color: '#F59E0B',
      icon: 'auto_stories'
    },
    {
      number: 4,
      title: 'Focus on Pronunciation',
      content: 'Clear pronunciation and correct stress patterns make a big difference. You don\'t need a perfect accent, just speak clearly and confidently. Listening to podcasts or repeating after native speakers helps a lot.',
      color: '#EF4444',
      icon: 'hearing'
    },
    {
      number: 5,
      title: 'Master Grammar Naturally',
      content: 'You don\'t need to use complicated grammar everywhere. But aim for a mix of tenses, complex sentences, and connectors like "however," "moreover," or "on the other hand." It shows language control.',
      color: '#8B5CF6',
      icon: 'spellcheck'
    },
    {
      number: 6,
      title: 'Answer the Question Directly',
      content: 'Always address the question fully. If asked, "Do you enjoy traveling?" answer first, then explain why and add examples. Structure your response clearly: Opinion → Reason → Example.',
      color: '#6C9E24',
      icon: 'question_answer'
    },
    {
      number: 7,
      title: 'Practice Common Topics',
      content: 'IELTS speaking often covers familiar topics: education, hobbies, travel, technology, or culture. Prepare ideas and vocabulary for each topic, but avoid memorized answers — examiners can spot them.',
      color: '#3B82F6',
      icon: 'topic'
    },
    {
      number: 8,
      title: 'Use Cohesive Devices',
      content: 'Link your ideas with words like "firstly," "in addition," "for example," and "finally." This makes your speech flow naturally and improves coherence.',
      color: '#F59E0B',
      icon: 'link'
    },
    {
      number: 9,
      title: 'Think Aloud for Part 2',
      content: 'During the 2-minute long turn, structure your answer: Introduction → Key Points → Personal Experience → Conclusion. Speak confidently and don\'t stop to think — examiners value continuous speech.',
      color: '#EF4444',
      icon: 'timer'
    },
    {
      number: 10,
      title: 'Practice Regularly and Record Yourself',
      content: 'Record your answers, listen critically, and identify weak points in fluency, vocabulary, or pronunciation. Regular self-practice builds confidence and helps you track improvement.',
      color: '#8B5CF6',
      icon: 'mic'
    }
  ];

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
                <span className="text-sm font-bold">🎤 IELTS Prep</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-black mb-6"
                style={{color: '#6A3D9A'}}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Top 10 IELTS Speaking Tips for Band 8+ | Score High in 2025
              </motion.h1>
              
              <motion.p 
                className="text-xl leading-relaxed mb-8"
                style={{color: '#666666'}}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Imagine walking into your IELTS speaking test with confidence, answering fluently, and walking out knowing you nailed it. Sounds amazing, right? Achieving Band 8+ is absolutely possible if you focus on the right strategies.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12" ref={contentRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Tips */}
              {tips.map((tip, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg mb-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={contentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg mb-3"
                        style={{backgroundColor: tip.color}}
                      >
                        <span className="material-symbols-outlined text-white text-3xl">{tip.icon}</span>
                      </div>
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl"
                        style={{backgroundColor: `${tip.color}20`, color: tip.color}}
                      >
                        {tip.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4" style={{color: tip.color}}>
                        {tip.title}
                      </h3>
                      <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                        {tip.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Key Highlight */}
              <motion.div 
                className="rounded-2xl p-8 shadow-lg mb-8 text-center"
                style={{background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.1) 0%, rgba(108, 158, 36, 0.1) 100%)'}}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-4xl" style={{color: '#6A3D9A'}}>lightbulb</span>
                  <h3 className="text-2xl font-bold" style={{color: '#6A3D9A'}}>Pro Tip</h3>
                </div>
                <p className="text-lg leading-relaxed" style={{color: '#333333'}}>
                  The examiner isn't looking for perfection — they're looking for clear, fluent, and confident communication. Practice these tips consistently, and you'll see real improvement in your speaking skills!
                </p>
              </motion.div>

              {/* Conclusion */}
              <motion.div 
                className="rounded-2xl p-8 shadow-lg text-center"
                style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">In A Nutshell</h2>
                <p className="text-lg leading-relaxed text-white mb-4">
                  Scoring Band 8+ in IELTS Speaking is all about confidence, vocabulary, and structured answers. Speak naturally, expand your ideas, and practice consistently, and you'll notice real improvement.
                </p>
                <p className="text-lg leading-relaxed text-white">
                  The examiner isn't looking for perfection — they're looking for clear, fluent, and confident communication. <strong>Trust yourself, stay calm, and let your English shine!</strong> 🌟
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

export default IELTSSpeakingTips;
