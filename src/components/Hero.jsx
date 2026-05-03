import { useEffect, useRef } from 'react';

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 40; i++) {
      const d = document.createElement('div');
      d.className = 'dot';
      const size = Math.random() * 4 + 2;
      d.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:${Math.random() * 6}s;animation-duration:${4 + Math.random() * 4}s;opacity:${0.1 + Math.random() * 0.2}`;
      if (Math.random() > 0.5) d.style.background = 'var(--accent2)';
      container.appendChild(d);
    }
  }, []);

  return (
    <header id="hero" className="hero">
      <div className="hero-particles" ref={particlesRef}></div>
      <div className="hero-content">
        <p className="hero-tag">Your Interactive Guide</p>
        <h1 className="hero-title">
          The Election<br />
          <span className="hero-highlight">Navigator</span>
        </h1>
        <p className="hero-subtitle">
          Follow the journey from registration to inauguration — every step of the democratic process, simplified.
        </p>
        <a href="#step-0" className="hero-cta" id="hero-cta">
          <span>Begin the Journey</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" /><path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </header>
  );
}
