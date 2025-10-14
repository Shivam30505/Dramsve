import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import Footer from '../components/Footer';

const packageOptions = [
	{
		name: 'Digital SAT - Live Class',
		duration: '12 Weeks',
		validity: '90 Days',
		features: ['Instructor-led live classes', 'Adaptive test simulation', 'Expert guidance', 'Interactive sessions'],
		color: '#6A3D9A',
		popular: false
	},
	{
		name: 'Digital SAT - Self Prep',
		duration: 'Self-paced',
		validity: '180 Days',
		features: ['Self-study materials', 'Practice resources', 'Flexible learning', 'Progress tracking'],
		color: '#FBB03B',
		popular: false
	},
	{
		name: 'Digital SAT - Champion',
		duration: '12 Weeks',
		validity: '180 Days',
		features: ['Comprehensive training', 'Extended access', 'Scholarship guidance', 'All features included'],
		color: '#6C9E24',
		popular: true
	}
];

const testStructure = [
	{
		section: 'Reading & Writing',
		questions: 54,
		time: '64 minutes',
		focus: 'Reading comprehension, grammar, vocabulary, passage analysis'
	},
	{
		section: 'Math (No Calculator)',
		questions: 22,
		time: '35 minutes',
		focus: 'Problem-solving, algebra, data analysis (without calculator)'
	},
	{
		section: 'Math (Calculator Allowed)',
		questions: 30,
		time: '55 minutes',
		focus: 'Advanced algebra, geometry, real-world problems (with calculator)'
	}
];

const keyFeatures = [
	{
		title: 'Adaptive Format',
		description: 'Questions adjust difficulty based on student performance',
		icon: 'psychology',
		color: '#3B82F6'
	},
	{
		title: 'Digital Tools',
		description: 'Highlighting, flagging, and note-taking capabilities',
		icon: 'edit_note',
		color: '#10B981'
	},
	{
		title: 'Faster Results',
		description: 'Quick score processing compared to paper-based tests',
		icon: 'speed',
		color: '#F59E0B'
	},
	{
		title: 'Flexible Testing',
		description: 'Modern testing experience with shorter sections',
		icon: 'devices',
		color: '#6A3D9A'
	}
];

const advantages = [
	'12-week structured program for thorough preparation',
	'Covers all test sections: Reading & Writing, Math (with and without calculator)',
	'Adaptive test simulation for real exam experience',
	'Flexible learning options to suit different study preferences',
	'Scholarship guidance and qualification strategies',
	'College admission readiness support',
	'Digital test familiarity and navigation practice',
	'Time management and test-taking strategies'
];

const DigitalSat = () => {
	const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
	const [structureRef, structureInView] = useInView({ threshold: 0.2, triggerOnce: true });
	const [packagesRef, packagesInView] = useInView({ threshold: 0.2, triggerOnce: true });
	const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
	const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" }
		}
	};
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 }
		}
	};

	return (
		<div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F7F7 100%)'}}>
			<Header />
			<main className="pt-20">
				{/* Hero Section */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<motion.div 
							className="relative rounded-2xl overflow-hidden"
							style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
						>
							<div className="absolute inset-0 bg-black/20"></div>
							<div className="relative z-10 p-8 md:p-12 text-white">
								<div className="flex items-center gap-2 mb-4">
									<span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">ADAPTIVE DIGITAL TEST</span>
									<span className="px-3 py-1 rounded-full text-sm font-bold" style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}>Scholarship Ready</span>
								</div>
								<h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4" style={{color: '#FFFFFF'}}>
									DIGITAL SAT
								</h1>
								<p className="text-xl mb-6 max-w-2xl">Complete Digital SAT Preparation for College Admissions & Scholarships</p>
								<div className="flex flex-wrap gap-6 mb-6">
									<div className="flex items-center gap-2">
										<span className="material-symbols-outlined" style={{color: '#FBB03B'}}>psychology</span>
										<span>Adaptive Format</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="material-symbols-outlined" style={{color: '#FBB03B'}}>devices</span>
										<span>Fully Digital</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="material-symbols-outlined" style={{color: '#FBB03B'}}>speed</span>
										<span>Faster Results</span>
									</div>
								</div>
								<div className="flex flex-wrap gap-4">
									<motion.button 
										className="px-8 py-3 font-bold rounded-lg transition-all"
										style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
										whileHover={{ scale: 1.05, backgroundColor: '#6C9E24', color: '#FFFFFF' }}
										whileTap={{ scale: 0.95 }}
										 onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
									>
										Start SAT Journey
									</motion.button>
									
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Key Features */}
				<section className="py-16" ref={featuresRef}>
					<div className="container mx-auto px-4">
						<div className="rounded-2xl p-8" style={{background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.05) 0%, rgba(108, 158, 36, 0.05) 100%)'}}>
							<motion.h2 
								className="text-3xl font-bold text-center mb-8"
								style={{color: '#6A3D9A'}}
								initial={{ opacity: 0, y: 30 }}
								animate={featuresInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6 }}
							>
								Why Choose Digital SAT?
							</motion.h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
								{keyFeatures.map((feature, index) => (
									<motion.div 
										key={index}
										className="bg-white rounded-xl p-6 shadow-md cursor-pointer"
										variants={cardVariants}
										initial="hidden"
										animate={featuresInView ? "visible" : "hidden"}
										transition={{ delay: index * 0.1 }}
										whileHover={{ y: -3, scale: 1.02 }}
									>
										<div 
											className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
											style={{backgroundColor: `${feature.color}20`}}
										>
											<span className="material-symbols-outlined text-2xl" style={{color: feature.color}}>
												{feature.icon}
											</span>
										</div>
										<h3 className="text-xl font-bold mb-2" style={{color: '#333333'}}>
											{feature.title}
										</h3>
										<p style={{color: '#666666'}}>
											{feature.description}
										</p>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Test Structure */}
				<section className="py-16" ref={structureRef}>
					<div className="container mx-auto px-4">
						<motion.div
							className="text-center mb-12"
							initial={{ opacity: 0, y: 30 }}
							animate={structureInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6 }}
						>
							<h2 className="text-3xl font-bold mb-4" style={{color: '#6A3D9A'}}>
								Digital SAT Test Structure
							</h2>
							<p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
								Fully computer-based, adaptive, and modern test for college admissions
							</p>
						</motion.div>
						<div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
							<div className="overflow-x-auto">
								<table className="w-full">
									<thead style={{backgroundColor: '#6A3D9A'}}>
										<tr className="text-white">
											<th className="px-6 py-4 text-left font-bold">Section</th>
											<th className="px-6 py-4 text-left font-bold">Questions</th>
											<th className="px-6 py-4 text-left font-bold">Time</th>
											<th className="px-6 py-4 text-left font-bold">Content Focus</th>
										</tr>
									</thead>
									<tbody>
										{testStructure.map((row, index) => (
											<motion.tr
												key={index}
												className="border-b border-gray-200 hover:bg-gray-50"
												initial={{ opacity: 0, x: -20 }}
												animate={structureInView ? { opacity: 1, x: 0 } : {}}
												transition={{ delay: index * 0.1, duration: 0.6 }}
											>
												<td className="px-6 py-4 font-semibold" style={{color: '#6A3D9A'}}>{row.section}</td>
												<td className="px-6 py-4" style={{color: '#333333'}}>{row.questions}</td>
												<td className="px-6 py-4" style={{color: '#666666'}}>{row.time}</td>
												<td className="px-6 py-4" style={{color: '#666666'}}>{row.focus}</td>
											</motion.tr>
										))}
										<tr className="bg-gray-50 font-bold">
											<td className="px-6 py-4" style={{color: '#6A3D9A'}}>Total</td>
											<td className="px-6 py-4" style={{color: '#333333'}}>106</td>
											<td className="px-6 py-4" style={{color: '#666666'}}>154 minutes (~2 hours 34 minutes)</td>
											<td className="px-6 py-4" style={{color: '#666666'}}>All sections</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>

				{/* Course Packages */}
				<section className="py-16" ref={packagesRef}>
					<div className="container mx-auto px-4">
						<motion.div
							className="text-center mb-12"
							initial={{ opacity: 0, y: 30 }}
							animate={packagesInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6 }}
						>
							<h2 className="text-3xl font-bold mb-4" style={{color: '#6A3D9A'}}>
								Digital SAT Course Packages
							</h2>
							<p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
								Choose the best package for your preparation needs
							</p>
						</motion.div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{packageOptions.map((pkg, index) => (
								<motion.div
									key={index}
									className={`bg-white rounded-xl p-6 shadow-lg relative ${pkg.popular ? 'ring-2' : ''}`}
									style={{borderColor: pkg.popular ? pkg.color : 'transparent'}}
									variants={cardVariants}
									initial="hidden"
									animate={packagesInView ? "visible" : "hidden"}
									transition={{ delay: index * 0.1 }}
									whileHover={{ y: -5, scale: 1.02 }}
								>
									{pkg.popular && (
										<div 
											className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-bold"
											style={{backgroundColor: pkg.color}}
										>
											Most Popular
										</div>
									)}
									<div className="text-center mb-6">
										<h3 className="text-2xl font-bold mb-2" style={{color: '#333333'}}>{pkg.name}</h3>
										<p className="text-lg font-semibold" style={{color: pkg.color}}>{pkg.duration}</p>
									</div>
									<div className="space-y-3 mb-6">
										<div className="flex justify-between">
											<span style={{color: '#666666'}}>Duration</span>
											<span className="font-semibold" style={{color: pkg.color}}>{pkg.duration}</span>
										</div>
										<div className="flex justify-between">
											<span style={{color: '#666666'}}>Validity</span>
											<span className="font-semibold" style={{color: pkg.color}}>{pkg.validity}</span>
										</div>
									</div>
									<div className="space-y-3 mb-6">
										{pkg.features.map((feature, featureIndex) => (
											<div key={featureIndex} className="flex items-center gap-2">
												<span className="material-symbols-outlined text-sm" style={{color: pkg.color}}>check_circle</span>
												<span className="text-sm" style={{color: '#666666'}}>{feature}</span>
											</div>
										))}
									</div>
									<motion.button
										className="w-full py-3 text-white font-bold rounded-lg"
										style={{backgroundColor: pkg.color}}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										 onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
									>
										Choose {pkg.name}
									</motion.button>
								</motion.div>
							))}
						</div>
					</div>
				</section>

        {/* Advantages & Benefits */}
        <section className="py-16" ref={ref}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4" style={{color: '#6A3D9A'}}>
                Why Digital SAT Matters
              </h2>
              <p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
                Unlock global opportunities with proven academic excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6" style={{color: '#6A3D9A'}}>Global Recognition</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <span className="material-symbols-outlined mt-1" style={{color: '#FBB03B'}}>school</span>
                    <p style={{color: '#666666'}}>Accepted by colleges and universities in USA and worldwide</p>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <span className="material-symbols-outlined mt-1" style={{color: '#6C9E24'}}>verified</span>
                    <p style={{color: '#666666'}}>Demonstrates academic readiness in Math and Evidence-Based Reading & Writing</p>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <span className="material-symbols-outlined mt-1" style={{color: '#6A3D9A'}}>public</span>
                    <p style={{color: '#666666'}}>Supports undergraduate program applications abroad</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-6" style={{color: '#6A3D9A'}}>Scholarship Benefits</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <span className="material-symbols-outlined mt-1" style={{color: '#F59E0B'}}>workspace_premium</span>
                    <p style={{color: '#666666'}}>Merit-based scholarship qualification and automatic consideration</p>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <span className="material-symbols-outlined mt-1" style={{color: '#EF4444'}}>flight_takeoff</span>
                    <p style={{color: '#666666'}}>Full or partial scholarships for international students</p>
                  </motion.div>
                  <motion.div
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <span className="material-symbols-outlined mt-1" style={{color: '#3B82F6'}}>trending_up</span>
                    <p style={{color: '#666666'}}>Combined GPA + SAT score scholarship opportunities</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8" style={{background: 'linear-gradient(135deg, rgba(106, 61, 154, 0.05) 0%, rgba(108, 158, 36, 0.05) 100%)'}}>
                <h3 className="text-2xl font-bold mb-6" style={{color: '#6A3D9A'}}>Program Advantages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {advantages.slice(0, Math.ceil(advantages.length/2)).map((adv, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <span className="material-symbols-outlined mt-1" style={{color: '#6A3D9A'}}>diamond</span>
                      <p style={{color: '#666666'}}>{adv}</p>
                    </motion.div>
                  ))}
                  {advantages.slice(Math.ceil(advantages.length/2)).map((adv, idx) => (
                    <motion.div
                      key={idx + Math.ceil(advantages.length/2)}
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <span className="material-symbols-outlined mt-1" style={{color: '#6C9E24'}}>diamond</span>
                      <p style={{color: '#666666'}}>{adv}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>				{/* CTA Section */}
				<section className="py-16" ref={ctaRef}>
					<div className="container mx-auto px-4">
						<motion.div 
							className="rounded-2xl p-8 md:p-12 text-center text-white"
							style={{background: 'linear-gradient(135deg, #6A3D9A 0%, #8B5FBF 100%)'}}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.8 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Ready to Ace the Digital SAT?
							</h2>
							<p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
								Join students worldwide who are preparing for college admissions and scholarships with our expert Digital SAT program
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<motion.button 
									className="px-8 py-4 font-bold rounded-lg text-lg transition-all"
									style={{backgroundColor: '#FBB03B', color: '#6A3D9A'}}
									whileHover={{ scale: 1.05, backgroundColor: '#6C9E24', color: '#FFFFFF' }}
									whileTap={{ scale: 0.95 }}
									 onClick={() => window.open('https://elearning.dramsve.com/', '_blank')}
								>
									Enroll Now - Limited Seats
								</motion.button>
							</div>
							<div className="mt-6 flex flex-wrap justify-center gap-6 text-white/80">
								<div className="flex items-center gap-2">
									<span className="material-symbols-outlined" style={{color: '#FBB03B'}}>verified</span>
									<span>Adaptive Practice</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="material-symbols-outlined" style={{color: '#FBB03B'}}>verified</span>
									<span>Scholarship Guidance</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="material-symbols-outlined" style={{color: '#FBB03B'}}>verified</span>
									<span>College Admission Support</span>
								</div>
							</div>
						</motion.div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default DigitalSat;
