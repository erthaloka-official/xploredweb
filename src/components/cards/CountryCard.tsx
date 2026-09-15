import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { Country } from '../../types/cms';

interface CountryCardProps {
  country: Country;
  onExploreExpeditions: (country: Country) => void;
}

export const CountryCard: React.FC<CountryCardProps> = ({ country, onExploreExpeditions }) => {
  return (
    <article
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', overflow: 'hidden' }}>
        <img
          src={country.heroImage}
          alt={`xplorED World - ${country.name}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
          <span
            className="badge"
            style={{
              backgroundColor: 'var(--navy)',
              color: '#FFFFFF',
              fontSize: '0.8125rem',
              padding: '0.35rem 0.85rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {country.name} • {country.themeVerb}
          </span>
        </div>
      </div>

      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          {country.subtitle}
        </div>

        <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
          {country.editorialNarrative}
        </p>

        {/* Why this matters */}
        <div
          style={{
            backgroundColor: 'var(--bg-soft)',
            padding: '1rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            borderLeft: '3px solid var(--navy)',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            Curriculum & Real-World Connection
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
            {country.whyThisMatters}
          </div>
        </div>

        {/* Key Hubs */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Featured Learning Hubs
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {country.hubs.map((hub, idx) => (
              <div key={idx} style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--navy)' }}>{hub.name}:</strong> {hub.focus}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => onExploreExpeditions(country)}
          className="btn btn-secondary btn-sm"
          style={{ width: '100%', justifyContent: 'space-between', marginTop: 'auto' }}
        >
          <span>Explore {country.name} Learning Expeditions</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </article>
  );
};
