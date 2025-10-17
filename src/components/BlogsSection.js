import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BlogsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [isPaused, setIsPaused] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "Top 10 IELTS Speaking Tips for Band 8+ Score",
      excerpt: "Master the IELTS speaking test with these proven strategies used by successful candidates worldwide. Learn how to impress examiners and boost your confidence.",
      author: "Dr. Sarah Johnson",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "IELTS",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      tags: ["IELTS", "Speaking", "Test Prep"]
    },
    {
      id: 2,
      title: "Digital SAT vs Traditional SAT: Complete Comparison Guide",
      excerpt: "Everything you need to know about the new Digital SAT format, including key differences, preparation strategies, and what to expect on test day.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "SAT",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      tags: ["SAT", "Digital Test", "College Prep"]
    },
    {
      id: 3,
      title: "French Language Learning: From Beginner to Conversational",
      excerpt: "Discover effective methods to accelerate your French learning journey. From basic grammar to fluent conversation, we cover essential techniques and resources.",
      author: "Marie Dubois",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Languages",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=400&h=250&fit=crop",
      tags: ["French", "Language Learning", "Culture"]
    },
    {
      id: 4,
      title: "GMAT Quantitative Section: Advanced Problem-Solving Strategies",
      excerpt: "Unlock the secrets to mastering GMAT quant with expert techniques for data sufficiency, problem solving, and time management that top scorers use.",
      author: "Prof. David Kumar",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "GMAT",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["GMAT", "Math", "Business School"]
    },
    {
      id: 5,
      title: "Study Abroad Success: Complete Guide to International Education",
      excerpt: "Navigate your study abroad journey with confidence. From university selection to visa applications, cultural adaptation, and academic success strategies.",
      author: "Emma Thompson",
      date: "December 5, 2024",
      readTime: "12 min read",
      category: "Study Abroad",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      tags: ["Study Abroad", "International", "Education"]
    }
  ];

  // Duplicate blogs for seamless loop
  const duplicatedBlogs = [...blogs, ...blogs];

  return (
    <section 
  className="pt-32 sm:pt-40 pb-20 sm:pb-24"
  style={{background: 'linear-gradient(135deg, #F7F7F7 0%, #FFF9F3 100%)'}}
>
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
            Latest Insights
          </h2>
          <p 
            className="max-w-2xl mx-auto text-base sm:text-lg font-display px-4"
            style={{color: '#6C9E24', fontWeight: 300, letterSpacing: '0.3px', lineHeight: '1.6'}}
          >
            Stay updated with expert tips, study guides, and success stories
          </p>
        </motion.div>

        {/* Continuous Rolling Blog Slideshow */}
        <div className="overflow-hidden relative mb-8 sm:mb-12"> {/* Reduced margin */}
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 md:gap-6" // Reduced gap for mobile
            animate={isPaused ? {} : {
              x: [0, -2400]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: '4800px'
            }}
          >
            {duplicatedBlogs.map((blog, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 relative bg-white rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer"
                style={{
                  width: '280px', // Reduced width for mobile
                  minWidth: '280px',
                  height: '420px', // Reduced height for mobile
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(106, 61, 154, 0.15)",
                }}
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Blog Image */}
                <div className="relative h-40 overflow-hidden"> {/* Reduced height */}
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-3 left-3">
                    <span 
                      className="px-2 py-1 rounded-full text-xs font-semibold text-white"
                      style={{backgroundColor: '#8B5FBF'}}
                    >
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-4 flex flex-col justify-between h-80"> {/* Adjusted height */}
                  <div>
                    <h3 
                      className="text-sm sm:text-base font-bold mb-2 line-clamp-2"
                      style={{color: '#333333', minHeight: '2.8rem'}}
                    >
                      {blog.title}
                    </h3>
                    
                    <p 
                      className="text-xs leading-relaxed mb-3 line-clamp-3"
                      style={{color: '#666666', minHeight: '3.5rem'}}
                    >
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 rounded text-xs"
                          style={{backgroundColor: 'rgba(106, 61, 154, 0.1)', color: '#6A3D9A'}}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author & Meta Info */}
                  <div className="border-t pt-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{backgroundColor: '#6A3D9A'}}
                        >
                          {blog.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-xs font-medium" style={{color: '#333333'}}>
                            {blog.author.split(' ')[0]}
                          </p>
                          <p className="text-xs" style={{color: '#666666'}}>
                            {blog.date.split(' ')[1]} {blog.date.split(' ')[2]}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs" style={{color: '#6C9E24'}}>
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.05) 0%, rgba(108, 158, 36, 0.05) 100%)'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays to hide edges - Mobile responsive */}
          <div 
            className="absolute left-0 top-0 h-full w-6 sm:w-8 md:w-16 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, rgba(247,247,247,1), rgba(247,247,247,0))'
            }}
          />
          <div 
            className="absolute right-0 top-0 h-full w-6 sm:w-8 md:w-16 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to left, rgba(247,247,247,1), rgba(247,247,247,0))'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;