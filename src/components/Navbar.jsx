import { useState, useEffect } from 'react';
import { STEPS } from '../data/steps';

export default function Navbar({ activeStep }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (index) => {
    document.getElementById(`step-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav id="main-nav" className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Step navigation">
      <div className="nav-inner">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="logo-icon">🗳️</span>
          <span className="logo-text">VoterFlow</span>
        </a>
        <div className="nav-steps">
          {STEPS.map((_, i) => (
            <button
              key={i}
              className={`nav-dot${activeStep === i ? ' active' : ''}`}
              aria-label={`${STEPS[i].badge}: ${STEPS[i].title}`}
              onClick={() => handleClick(i)}
            >
              <span>{i + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
