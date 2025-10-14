import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('All');


  const filters = ['All', 'Study Abroad', 'Language Training', 'Skill Development', 'Career Tips'];

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Universities in Canada for International Students",
      description: "Discover the best Canadian universities offering world-class education, research opportunities, and excellent career prospects for international students.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500&h=300&fit=crop",
      category: "Study Abroad",
      date: "Dec 15, 2024",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "IELTS vs TOEFL: Which English Test Should You Choose?",
      description: "A comprehensive comparison of IELTS and TOEFL exams to help you decide which English proficiency test is right for your study abroad goals.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      category: "Language Training",
      date: "Dec 12, 2024",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Essential Digital Skills for 2025: Stay Ahead in Your Career",
      description: "Learn about the most in-demand digital skills that will boost your career prospects and help you thrive in the modern workplace.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      category: "Skill Development",
      date: "Dec 10, 2024",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "How to Write a Winning Statement of Purpose (SOP)",
      description: "Master the art of writing compelling SOPs that will make your university application stand out from thousands of other applicants.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=300&fit=crop",
      category: "Study Abroad",
      date: "Dec 8, 2024",
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Networking Tips for International Students",
      description: "Build meaningful professional connections and expand your network while studying abroad with these proven networking strategies.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop",
      category: "Career Tips",
      date: "Dec 5, 2024",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "German Language Learning: From Beginner to B2 Level",
      description: "A complete roadmap to master German language skills, including study tips, resources, and timeline to reach B2 proficiency level.",
      image: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?w=500&h=300&fit=crop",
      category: "Language Training",
      date: "Dec 3, 2024",
      readTime: "9 min read"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    return activeFilter === 'All' || post.category === activeFilter;
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlz2GdF_-Hsy3B7HdShG5DTQZNqzCqeUu8uVkc57wWT9tE9MFgeijxw0YYL9Wz1aZoYp143MEMsh0m0-XxNMiY_mj5AS1Re7KluRJK7sirZVLMNFG8R5Rv_ePZY2n2HVleVDxyOmQd0U70iYoO96vgt9i_3hqAE9sAVupCwkAkl2znK6r2vrnncKumxdgpj0_M1f9n6VdBPvcPFqDm7yXywR7JPQ2U406frj12zbLuig_bb3eOFHB5uk-q7wYkGM_HbB4At5BDOl9Y")'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/50 to-transparent"></div>
          </div>
          
          <motion.div 
            className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bold text-4xl md:text-6xl max-w-4xl mx-auto">
              Your Daily Dose of Learning, Growth & Global Inspiration
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Read expert advice, study hacks, and global education insights crafted by professionals.
            </p>
            

          </motion.div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeFilter === filter
                      ? 'text-white bg-blue-600 shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{filter}</span>
                  {activeFilter === filter && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                      style={{ boxShadow: '0 0 8px #FBBF24' }}
                      layoutId="activeFilter"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Content Section - Placeholder */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {activeFilter === 'All' ? 'Latest Articles' : `${activeFilter} Articles`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4 text-gray-500">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;