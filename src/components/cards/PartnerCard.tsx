import React from 'react';
import { Globe, CheckCircle } from 'lucide-react';
import { Partner } from '../../types/cms';

interface PartnerCardProps {
  partner: Partner;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <div
      className="card"
      style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--blue-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
          }}
        >
          {partner.logo}
        </div>
        <span className="badge badge-navy" style={{ fontSize: '0.6875rem' }}>
          {partner.type}
        </span>
      </div>

      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.25rem' }}>
        {partner.organisation}
      </h3>
      <div style={{ fontSize: '0.8125rem', color: 'var(--blue)', fontWeight: 600, marginBottom: '0.85rem' }}>
        {partner.geography}
      </div>

      <p className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
        {partner.description}
      </p>

      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginTop: 'auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Real-World Contribution
        </div>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {partner.collaborationHighlights.map((hl, idx) => (
            <li
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.4rem',
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
              }}
            >
              <CheckCircle size={14} color="var(--blue)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
              <span>{hl}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
