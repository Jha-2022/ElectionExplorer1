import Icon from './Icon';

export default function Card({ hue, icon, title, text, wide, delay, isVisible }) {
  return (
    <div 
      className={`card${wide ? ' card--wide' : ''}${isVisible ? ' visible' : ''}`} 
      style={{ 
        '--card-hue': hue,
        transitionDelay: `${delay * 120}ms`
      }}
    >
      <div className="card-icon-wrap" style={{ '--card-hue': hue }}>
        <Icon name={icon} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text" dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
}
