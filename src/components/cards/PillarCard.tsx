import React from 'react';
import { Users, Compass, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { PillarType } from '../../types/cms';

interface PillarCardProps {
  pillar: PillarType;
  tagline: string;
  items: string[];
  description: string;
  onExplore: (pillar: PillarType) => void;
}

export const PillarCard: React.FC<PillarCardProps> = ({
  pillar,
  tagline,
  items,
  description,
  onExplore,
}) => {
  const getIcon = () => {
    switch (pillar) {
      case 'People':
        return <Users size={24} />;
      case 'Places':
        return <MapPin size={24} />;
      case 'Programs':
        return <Compass size={24} />;
      case 'Possibilities':
        return <Sparkles size={24} />;
      default:
        return <Compass size={24} />;
    }
  };

  return (
    <div className="pillar-card">
      <div className="pillar-card-icon">{getIcon()}</div>
      <h3 className="pillar-card-title">{pillar}</h3>
      <p className="pillar-card-tagline">{tagline}</p>
      <p className="text-small" style={{ marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
        {description}
      </p>

      <ul className="pillar-card-list">
        {items.map((item, idx) => (
          <li key={idx} className="pillar-card-item">
            <span className="pillar-card-dot" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onExplore(pillar)}
        className="btn-link"
        style={{ marginTop: '1.75rem', fontSize: '0.875rem' }}
      >
        <span>Discover {pillar}</span>
        <ArrowRight size={14} />
      </button>
    </div>
  );
};
