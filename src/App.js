import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactProvider, useContact } from './contexts/ContactContext';
import ContactPopup from './components/ContactPopup';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

import Courses from './pages/Courses';
import IeltsAcademicChampion from './pages/IeltsAcademicChampion';
import IeltsAcademicMarathon from './pages/IeltsAcademicMarathon';
import IeltsGeneralChampion from './pages/IeltsGeneralChampion';
import IeltsGeneralMarathon from './pages/IeltsGeneralMarathon';
import IeltsReadingMarathon from './pages/IeltsReadingMarathon';
import PteAcademic from './pages/PteAcademic';
import DuolingoEnglish from './pages/DuolingoEnglish';
import ToeflIbt from './pages/ToeflIbt';
import FrenchLanguage from './pages/FrenchLanguage';
import GermanLanguage from './pages/GermanLanguage';
import CareerMentor from './pages/CareerMentor';
import Celpip from './pages/Celpip';
import DigitalSat from './pages/DigitalSat';
import ShorterGre from './pages/ShorterGre';
import Gmat from './pages/Gmat';
import EnglishChampion from './pages/EnglishChampion';

import './index.css';

function AppContent() {
  const { isContactOpen, closeContact } = useContact();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/ielts-academic-champion" element={<IeltsAcademicChampion />} />
        <Route path="/course/ielts-academic-marathon" element={<IeltsAcademicMarathon />} />
        <Route path="/course/ielts-general-champion" element={<IeltsGeneralChampion />} />
        <Route path="/course/ielts-general-marathon" element={<IeltsGeneralMarathon />} />
        <Route path="/course/pte-academic" element={<PteAcademic />} />
        <Route path="/course/duolingo-english" element={<DuolingoEnglish />} />
        <Route path="/course/toefl" element={<ToeflIbt />} />
        <Route path="/course/french-language" element={<FrenchLanguage />} />
        <Route path="/course/german-language" element={<GermanLanguage />} />
        <Route path="/course/digital-sat" element={<DigitalSat />} />
        <Route path="/course/career-mentor" element={<CareerMentor />} />
        <Route path="/course/celpip" element={<Celpip />} />
        <Route path="/course/shorter-gre" element={<ShorterGre />} />
        <Route path="/course/gmat" element={<Gmat />} />
        <Route path="/course/english-champion" element={<EnglishChampion />} />
      </Routes>
      <ContactPopup isOpen={isContactOpen} onClose={closeContact} />
    </>
  );
}

function App() {
  return (
    <ContactProvider>
      <Router>
        <AppContent />
      </Router>
    </ContactProvider>
  );
}

export default App;