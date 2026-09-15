import React from 'react';
import { ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { Person } from '../../types/cms';

interface PersonCardProps {
  person: Person;
  onSelect?: (person: Person) => void;
}

export const PersonCard: React.FC<PersonCardProps> = ({ person, onSelect }) => {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 0.85', overflow: 'hidden' }}>
        <img
          src={person.image}
          alt={person.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
          <span className="badge badge-navy" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
            {person.type}
          </span>
        </div>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)' }}>
            {person.name}
          </h3>
          {person.verification && (
            <span title="Verified Practitioner" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <ShieldCheck size={16} color="var(--blue)" />
            </span>
          )}
        </div>

        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--blue)', marginBottom: '0.35rem' }}>
          {person.role}
        </div>

        <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
          {person.organisation}
        </div>

        <p className="text-small" style={{ marginBottom: '1.25rem', flex: 1, color: 'var(--text-secondary)' }}>
          {person.bio}
        </p>

        {person.quote && (
          <div
            style={{
              padding: '0.75rem',
              backgroundColor: 'var(--bg-soft)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8125rem',
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              borderLeft: '2px solid var(--blue)',
              marginBottom: '1rem',
            }}
          >
            "{person.quote}"
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
          {person.expertise.map((exp, i) => (
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
              {exp}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
