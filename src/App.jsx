import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StepSection from './components/StepSection';
import { STEPS } from './data/steps';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Update overall progress bar
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);
      setShowProgress(scrollY > windowHeight * 0.8);

      // Track active step
      const stepSections = document.querySelectorAll('.step');
      stepSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar activeStep={activeStep} />
      
      <Hero />

      <div className={`progress-track ${showProgress ? 'visible' : ''}`}>
        <div 
          className="progress-fill" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <main id="main-content">
        {STEPS.map((step, index) => (
          <StepSection key={index} step={step} index={index} />
        ))}
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-brand">🗳️ VoterFlow — The Election Navigator</p>
          <p className="footer-note">An educational, non-partisan guide to the U.S. election process.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
