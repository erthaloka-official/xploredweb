import React from 'react';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Program } from '../../types/cms';

interface ExperienceCardProps {
  program: Program;
  onViewDetails: (program: Program) => void;
  onEnquire: (program: Program) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  program,
  onViewDetails,
  onEnquire,
}) => {
  return (
    <article className="exp-card">
      <div className="exp-card-media">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
        />
        <div className="exp-card-badges">
          <span className="badge badge-blue">
            {program.format}
          </span>
          <span className="badge badge-navy" style={{ backgroundColor: 'rgba(255,255,255,0.92)' }}>
            {program.theme.split('&')[0]}
          </span>
        </div>
      </div>

      <div className="exp-card-body">
        {/* Meta Bar */}
        <div className="exp-card-meta">
          <div className="exp-card-meta-item">
            <MapPin size={13} color="var(--blue)" />
            <span>{program.location}</span>
          </div>
          <div className="exp-card-meta-item">
            <Clock size={13} color="var(--text-muted)" />
            <span>{program.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="exp-card-title"
          onClick={() => onViewDetails(program)}
          style={{ cursor: 'pointer' }}
        >
          {program.title}
        </h3>

        {/* Tagline / Subtitle */}
        <p className="exp-card-tagline">{program.tagline}</p>

        {/* Outcome Box */}
        <div className="exp-card-outcome">
          <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '0.2rem' }}>
            Tangible Outcome:
          </strong>
          {program.outcomeStatement}
        </div>

        {/* Footer */}
        <div className="exp-card-footer">
          <div className="exp-card-provider">
            <span>Provider: </span>
            <strong>{program.provider}</strong>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => onViewDetails(program)}
              className="btn btn-secondary btn-sm"
              aria-label={`View details for ${program.title}`}
            >
              <span>View Details</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
