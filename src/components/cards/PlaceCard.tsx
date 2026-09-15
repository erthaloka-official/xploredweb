import React from 'react';
import { MapPin, Building, Users } from 'lucide-react';
import { Place } from '../../types/cms';

interface PlaceCardProps {
  place: Place;
  onSelect?: (place: Place) => void;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place, onSelect }) => {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', overflow: 'hidden' }}>
        <img
          src={place.image}
          alt={place.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
          <span className="badge badge-blue">{place.type}</span>
        </div>
        <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
          <span className="badge badge-navy" style={{ backgroundColor: 'rgba(255,255,255,0.92)' }}>
            {place.accessType}
          </span>
        </div>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
          <MapPin size={13} color="var(--blue)" />
          <span>{place.location}, {place.country}</span>
        </div>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
          {place.name}
        </h3>

        <p className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1 }}>
          {place.description}
        </p>

        <div style={{ backgroundColor: 'var(--bg-soft)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
            Site Highlight
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
            {place.highlight}
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {place.facilities.slice(0, 3).map((f, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.75rem',
                padding: '0.2rem 0.5rem',
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-pill)',
                color: 'var(--text-secondary)',
              }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
