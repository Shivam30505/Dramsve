import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContact } from '../contexts/ContactContext';
import { universitiesData } from '../data/universities';

// Import university logos
const importUSALogos = () => {
  const logos = {};
  for (let i = 1; i <= 105; i++) {
    const num = i.toString().padStart(3, '0');
    try {
      logos[i] = require(`../images/USA/00000080-UNIVERSITIES OF USA-${num}.png`);
    } catch (e) {
      // Handle missing images
    }
  }
  return logos;
};

const importUKLogos = () => {
  const logos = {};
  for (let i = 1; i <= 17; i++) {
    const num = i.toString().padStart(2, '0');
    try {
      logos[i] = require(`../images/UK/00000097-UK Universities-${num}.png`);
    } catch (e) {
      // Handle missing images
    }
  }
  return logos;
};

const importCanadaLogos = () => {
  const logos = {};
  for (let i = 1; i <= 94; i++) {
    const num = i.toString().padStart(2, '0');
    try {
      logos[i] = require(`../images/Canada/Canada Universities-${num}.png`);
    } catch (e) {
      // Handle missing images
    }
  }
  return logos;
};


const StudyAbroad = ({ isOpen, onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const { openContact } = useContact();
  
  const usaLogos = importUSALogos();
  const ukLogos = importUKLogos();
  const canadaLogos = importCanadaLogos();

  // const countries = [
  //   { name: 'USA', code: 'USA' },
  //   { name: 'UK 🇬🇧', code: 'UK' },
  //   { name: 'Canada 🇨🇦', code: 'Canada' },
  //   //{ name: 'Germany', code: 'Germany' }
  // ];

  const countries = [
  {
    name: 'USA',
    code: 'USA',
    flag: (
      <img
        src="https://flagcdn.com/us.svg"
        alt="USA Flag"
        width="40"
        height="25"
      />
    ),
  },
  {
    name: 'UK',
    code: 'UK',
    flag: (
      <img
        src="https://flagcdn.com/gb.svg"
        alt="UK Flag"
        width="40"
        height="25"
      />
    ),
  },
  {
    name: 'Canada',
    code: 'Canada',
    flag: (
      <img
        src="https://flagcdn.com/ca.svg"
        alt="Canada Flag"
        width="40"
        height="25"
      />
    ),
  },
];

  const universities = {
    USA: universitiesData.USA.slice(0, -8).map((name, i) => ({
      id: `usa-${i + 1}`,
      name: name,
      logo: usaLogos[i + 1]
    })),
    
    UK: universitiesData.UK.map((name, i) => ({
      id: `uk-${i + 1}`,
      name: name,
      logo: ukLogos[i + 1]
    })),
    
    Canada: universitiesData.Canada.map((name, i) => ({
      id: `canada-${i + 1}`,
      name: name,
      logo: canadaLogos[i + 1]
    })),
    
    // Germany: universitiesData.Germany.map((name, i) => ({
    //   id: `germany-${i + 1}`,
    //   name: name,
    //   logo: null
    // }))
  };

  const handleUniversityClick = () => {
    openContact();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 study-abroad-modal"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-green-500 text-white p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold">Study Abroad Universities</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-full max-h-[calc(90vh-120px)]">
            {/* Countries Sidebar - Fixed on Mobile */}
            <div className="countries-sidebar w-full md:w-1/4 bg-gray-50 border-r md:border-r border-b md:border-b-0 border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 hidden md:block">Countries</h3>
              <div className="countries-container">
                {countries.map((country) => (
                  <motion.button
                    key={country.code}
                    onClick={() => setSelectedCountry(country.code)}
                    className={`country-button ${
                      selectedCountry === country.code
                        ? 'active text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-purple-100'
                    } w-full md:w-full text-center md:text-left p-3 rounded-lg`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-2">
                      <span>{country.name}</span>
                      {country.flag}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Universities Grid - Scrollable on Mobile */}
            <div className="universities-grid flex-1">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
                Universities in {selectedCountry}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                {universities[selectedCountry]?.map((university) => (
                  <motion.div
                    key={university.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm university-card cursor-pointer"
                    onClick={handleUniversityClick}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      {university.logo ? (
                        <img
                          src={university.logo}
                          alt={university.name}
                          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain mb-2 md:mb-3 rounded-lg"
                        />
                      ) : (
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-100 to-green-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                          <span className="text-purple-600 text-xs font-semibold">🎓</span>
                        </div>
                      )}
                      <h4 className="text-xs md:text-sm font-medium text-gray-800 text-center leading-tight line-clamp-3">
                        {university.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>

              {universities[selectedCountry]?.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No universities available for {selectedCountry}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StudyAbroad;