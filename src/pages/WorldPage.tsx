import React, { useState } from 'react';
import {
  Globe,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { countries, programs } from '../data';
import { Program } from '../types/cms';

interface WorldPageProps {
  onViewProgram: (program: Program) => void;
  onEnquireProgram: (program: Program) => void;
  onOpenEnquiry: (category?: string) => void;
}

export const WorldPage: React.FC<WorldPageProps> = ({
  onViewProgram,
  onEnquireProgram,
  onOpenEnquiry,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('germany');

  const activeCountry = countries.find((c) => c.slug === selectedCountry) || countries[0];

  const relatedExpeditions = programs.filter((p) =>
    activeCountry.featuredExpeditions.includes(p.id)
  );

  return (
    <div className="fade-in section-padding-sm">
      <div className="container">
        {/* Hero Section */}
        <div className="reveal" style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">GLOBAL REAL-WORLD LEARNING</span>
          <h1 className="hero-title">
            Learning has no borders.
          </h1>
          <p className="text-lead" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            Connect learners in India with the people, places, cultures, and possibilities of the world. xplorED World is an editorial learning gateway — not tourism, but deep cultural and technical immersion.
          </p>
        </div>

        {/* Country Selector Tabs */}
        <div
          className="reveal delay-1"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '3rem',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '1.25rem',
          }}
        >
          {countries.map((c) => {
            const isSelected = selectedCountry === c.slug;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCountry(c.slug)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.9rem 1.6rem',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  backgroundColor: isSelected ? 'var(--navy)' : 'var(--bg-soft)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--navy)' : '1px solid var(--border-light)',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer',
                }}
              >
                <span>{c.name}</span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.06)',
                    color: isSelected ? '#FFFFFF' : 'var(--navy)',
                  }}
                >
                  {c.themeVerb}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Country Spotlight Section */}
        <div
          className="card reveal"
          style={{
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            backgroundColor: '#FFFFFF',
            border: '2px solid var(--navy)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '4.5rem',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {/* Header Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              marginBottom: '3rem',
            }}
          >
            <div className="reveal-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Globe size={18} color="var(--blue)" />
                <span className="eyebrow" style={{ marginBottom: 0 }}>
                  {activeCountry.name} • {activeCountry.themeVerb}
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.75rem' }}>
                {activeCountry.name}: The Spirit of "{activeCountry.themeVerb}"
              </h2>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--blue)', marginBottom: '1.25rem' }}>
                {activeCountry.subtitle}
              </div>
              <p className="text-body" style={{ fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {activeCountry.editorialNarrative}
              </p>

              <div
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-soft)',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '3px solid var(--navy)',
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Educational Significance
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {activeCountry.whyThisMatters}
                </p>
              </div>
            </div>

            {/* Media composition */}
            <div className="reveal-right" style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '16 / 11', boxShadow: 'var(--shadow-lg)' }}>
                <img
                  src={activeCountry.heroImage}
                  alt={activeCountry.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Regional Learning Hubs */}
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2.5rem', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1.5rem' }}>
              Curated Regional Learning Hubs in {activeCountry.name}
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {activeCountry.hubs.map((hub, idx) => (
                <div
                  key={idx}
                  className={`reveal delay-${idx + 1}`}
                  style={{
                    backgroundColor: 'var(--bg-soft)',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--blue)', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    <MapPin size={14} />
                    <span>{hub.name}</span>
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                    {hub.focus}
                  </div>
                  <p className="text-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {hub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Expeditions in this Country */}
          {relatedExpeditions.length > 0 && (
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1.5rem' }}>
                Featured Expeditions in {activeCountry.name}
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2rem',
                }}
              >
                {relatedExpeditions.map((prog, idx) => (
                  <div key={prog.id} className={`reveal delay-${idx + 1}`}>
                    <ExperienceCard
                      program={prog}
                      onViewDetails={onViewProgram}
                      onEnquire={onEnquireProgram}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Global Philosophy Banner */}
        <div
          className="card-navy reveal-scale"
          style={{
            textAlign: 'center',
            padding: '4rem 2rem',
          }}
        >
          <span className="badge badge-navy" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#93C5FD', marginBottom: '1rem' }}>
            CROSS-CULTURAL HORIZONS
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#FFFFFF', marginBottom: '1rem', fontWeight: 800 }}>
            Connect Your Students with Global Frontiers
          </h2>
          <p className="text-lead" style={{ color: '#CBD5E1', maxWidth: '640px', margin: '0 auto 2rem auto' }}>
            We work with international consortia, research institutes, and cultural foundations to ensure transformative student immersion.
          </p>
          <PrimaryButton
            variant="white"
            size="lg"
            icon={<ArrowRight size={18} />}
            onClick={() => onOpenEnquiry('Expedition')}
          >
            Enquire About Global Expeditions
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
