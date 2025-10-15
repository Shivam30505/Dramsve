import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "IELTS & TOEFL Trainer",
      description: "Specializes in advanced English proficiency and test strategies.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwXKQ0jcSUWYXUnHxCUc12zZ-l7oawWSw5wUV_5jId4Hl8irtOkjK-9fJJwYSiV7xr4F32QuT4lxBPtggKZS1FDp4zS4D0RIGXKRHxoSXSZek9S9Z_9vbp92e8bB-xfXijKAS6RGe9vn4coYKSU9m2ZbIK6NIMh7Qgd2jo6KQJvqfKn79eC907jjvxx9adViV_gIFiGwvPeaqlGcBKPSdXpbaz4NtDIR9Dx1lngQd4T4r9fziLEsYJmkYBhLR5-Fwrt5G5g1LFoR1z"
    },
    {
      name: "John Smith",
      role: "Admissions Counselor",
      description: "Expert in university applications and visa guidance for Europe.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmrmd2Uk05636av-YTJo_rHcUussvWtbmrWEgnxPC-SLyAdRni6dZdvBnJK4GZNOqdxEURQVUdIOdQe0XuNfDNdaGOw1xRJZrpLQHnXtcj2g7-Uft-8CC40orhetKMOjySu84I36lJFkb-GHzmLBxmdWgrYZhx31mHbBdTUtHhI1PxY9PrKnckUcpWRoMp2lMrFX2o5rJORf5Lmh3FnrbFJ2wtp5cxwiJklsXOADlBqOaR-XesVm6DhLmQo-BGfPFnba1mM7LXUx8V"
    },
    {
      name: "Emily White",
      role: "Community Engagement Lead",
      description: "Fosters a vibrant student community and organizes events.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRw8BHBdlbcmPVDZUC7fC0Z7Ih5mjpnRQxIi-gTouySjkFpV6FmS2GZj9k6jQhGMg3L_E_vJ5hzDU2gDIQNGvQQl987WDsLXqu1eb-6brF4eKPY_a26DCQWEXjHUdwi8IYrcl2dj6WwqrCyfx2Gkex17jVLS3bX5lyjoMxjiRVeDrLbtPRxTfmtfifQhQImsYSVlzCcDfyzLD7QvBhZSBDUwzPl-ZFvx03SIuFz5Yy4nrnsn-7FTNYrCjjh9R-vHE2eWAi15EScNtS"
    },
    {
      name: "David Lee",
      role: "GMAT & GRE Trainer",
      description: "Focuses on quantitative reasoning and analytical writing for graduate exams.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_5DmmDdhxmtARjOGj3eKII-DOnCb2sMc7IY-ox-s7ru9Lg8mLtGg4zo4Yk7I_ZuB0K8rTqbBsn6cIELyFbXsLaMhDG9-cnKtZVTEUNqrs9N92eH2rZhpxezfJTAlBDfHaR3DvNju5TIO4xRlsSjAvJJqd-3pjEf9yWmirbzpoZj3BsATdAQWlORGguBamnpLljl-QaR0wGSI8Fn__kRqWIxfiDglyypyG95VKAHqy0OiiPZJEs1b0n36rVCSng4BdeFUkzcynC1ct"
    }
  ];

  const features = [
    {
      icon: "school",
      title: "Certified & Experienced Trainers",
      description: "Learn from certified and experienced mentors in international education."
    },
    {
      icon: "groups",
      title: "Small Batch Sizes",
      description: "Exclusive class size for personalized attention."
    },
    {
      icon: "trending_up",
      title: "Regular Mock Tests & Progress Tracking",
      description: "Track your progress with regular mock tests and detailed feedback."
    },
    {
      icon: "schedule",
      title: "Flexible Timings",
      description: "Choose a class schedule that suits your needs the best."
    },
    {
      icon: "work",
      title: "Career Guidance & Admission Counseling",
      description: "Navigate your career and university path with our experts."
    },
    {
      icon: "diversity_3",
      title: "Vibrant Community",
      description: "Join a supportive community of learners and mentors"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold uppercase tracking-widest" style={{color: '#6A3D9A'}}>About Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight" style={{color: '#333'}}>
              This is DRAMSVE - Your Gateway to Global Academic Opportunities
            </h2>
            <p className="text-lg mb-8" style={{color: '#666'}}>
              At DRAMSVE, we are committed to delivering quality education and expert guidance to help students achieve their academic and career aspirations abroad.
            </p>
            <motion.a 
              href="/courses"
              className="inline-block rounded-lg px-8 py-4 text-white text-base font-bold tracking-wide transition-all duration-300 shadow-lg"
              style={{backgroundColor: '#8B5FBF'}}
              whileHover={{ scale: 1.05, y: -2, backgroundColor: '#7FB83D' }}
              whileTap={{ scale: 0.95 }}
              
            >
              Dive Into Our Programs
            </motion.a>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img 
              alt="About DRAMSVE - Your Gateway to Global Education" 
              className="object-cover w-full h-96 cursor-pointer" 
              src={require('../images/about.png')}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, rotateY: 10, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-2xl opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            ></motion.div>
            <motion.div 
              className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-2xl opacity-60"
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            ></motion.div>
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full"
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: 1
              }}
            ></motion.div>
          </motion.div>
        </div>

        {/* Core Principles */}
        <div className="mb-24">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{color: '#333'}}>Our Core Principles</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto" style={{color: '#666'}}>
              The values that define our approach for Academic Excellence and Student Success.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "visibility",
                title: "Our Vision",
                description: "To be a leading global education consultancy, opening doors for students to achieve their international dreams through personalized, technology driven solutions.",
                color: "purple"
              },
              {
                icon: "task_alt",
                title: "Our Mission",
                description: "To be a bridge between students and global learning experience. Providing them empowering, structured and personalized educational services.",
                color: "orange"
              },
              {
                icon: "favorite",
                title: "Our Values",
                description: "We believe in providing holistic, comprehensive and cutting-edge services for our students. Student's needs are of the utmost priority for us.",
                color: "green"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                className="group p-8 rounded-xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-lg mb-6 transition-colors duration-300" style={{
                  backgroundColor: principle.color === 'purple' ? '#F3F0FF' : principle.color === 'orange' ? '#FFF7ED' : '#F0FDF4',
                  color: principle.color === 'purple' ? '#6A3D9A' : principle.color === 'orange' ? '#FBB03B' : '#6C9E24'
                }}>
                  <span className="material-symbols-outlined text-3xl">{principle.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{color: '#333'}}>{principle.title}</h3>
                <p style={{color: '#666'}}>{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why We Stand Out */}
        <div className="mb-24 rounded-2xl p-8 md:p-12" style={{backgroundColor: '#F8F9FA'}}>
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{color: '#333'}}>
              Why We Stand Out?
            </h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto" style={{color: '#666'}}>
              Discover the key advantages that make DRAMSVE the preferred choice for students targeting their academic success abroad.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl border border-transparent hover:shadow-xl transition-all duration-300"
                style={{'--hover-border': '#8B5FBF'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, borderColor: '#8B5FBF' }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-lg mb-6" style={{backgroundColor: '#F3F0FF'}}>
                  <span className="material-symbols-outlined text-3xl" style={{color: '#6A3D9A'}}>{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: '#333'}}>{feature.title}</h3>
                <p style={{color: '#666'}}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutUsSection;