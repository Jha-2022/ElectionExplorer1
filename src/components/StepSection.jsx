import { useState, useEffect } from 'react';
import Card from './Card';
import useInView from '../hooks/useInView';

export default function StepSection({ step, index }) {
  const [ref, isVisible] = useInView({ threshold: 0.15 });
  const [counter, setCounter] = useState(0);
  const [widgetRef, widgetVisible] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (widgetVisible && step.hasWidget) {
      const target = 270;
      const duration = 2000;
      const start = performance.now();

      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounter(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [widgetVisible, step.hasWidget]);

  return (
    <section className="step" id={`step-${index}`} data-step={index} ref={ref}>
      <div className="step-bg-number" aria-hidden="true">{step.num}</div>
      <div className="step-container">
        <div className="step-header">
          <div className="step-badge">{step.badge}</div>
          <h2 className="step-title">{step.title}</h2>
          <p className="step-intro">{step.intro}</p>
        </div>
        <div className={`cards-grid${step.two ? ' cards-grid--two' : ''}`}>
          {step.cards.map((card, i) => (
            <Card 
              key={i} 
              {...card} 
              wide={step.two} 
              delay={i} 
              isVisible={isVisible} 
            />
          ))}
        </div>

        {step.hasWidget && (
          <div className={`ec-widget${widgetVisible ? ' visible' : ''}`} ref={widgetRef}>
            <div className="ec-label">Electoral Votes Needed to Win</div>
            <div className="ec-bar-track">
              <div 
                className="ec-bar-fill" 
                style={{ width: `${(counter / 538) * 100}%` }}
              ></div>
              <div className="ec-marker"><span>270</span></div>
            </div>
            <div className="ec-numbers">
              <span>0</span>
              <span className="ec-counter">{counter}</span>
              <span>538</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
