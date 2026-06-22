import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MenuSection from './components/Menu/MenuSection';
import BakingStages from './components/Process/BakingStages';
import QueueStatus from './components/Queue/QueueStatus';
import AboutSection from './components/About/AboutSection';
import Footer from './components/Footer/Footer';
import MenuPage from './pages/MenuPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import { useReducedMotion } from './hooks/useReducedMotion';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HomePage() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      {!prefersReduced && (
        <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A853] via-[#D4A853] to-[#5c8554] origin-left z-[100]" style={{ scaleX }} aria-hidden="true" />
      )}
      <main>
        <Hero />
        <MenuSection />
        <BakingStages />
        <QueueStatus />
        <AboutSection />
      </main>
      <Footer />
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#D4A853] text-[#0f1411] rounded-full shadow-[0_4px_20px_rgba(212,168,83,0.3)] flex items-center justify-center hover:bg-[#e0c878] transition-colors" aria-label="Başa dön">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
      </motion.button>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  );
}
