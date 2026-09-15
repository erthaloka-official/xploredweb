import React from 'react';
import {
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Calendar,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { Program } from '../../types/cms';
import { Modal } from '../common/Modal';
import { PrimaryButton } from '../common/PrimaryButton';

interface ExperienceDetailModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (program: Program) => void;
}

export const ExperienceDetailModal: React.FC<ExperienceDetailModalProps> = ({
  program,
  isOpen,
  onClose,
  onEnquire,
}) => {
  if (!program) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="900px">
      {/* Header Media Banner */}
      <div style={{ position: 'relative', width: '100%', height: '280px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '1.75rem' }}>
        <img
          src={program.image}
          alt={program.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,43,111,0.85) 0%, rgba(6,43,111,0.2) 60%, transparent 100%)' }} />
        
        <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', color: '#FFFFFF' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="badge" style={{ backgroundColor: 'var(--blue)', color: '#FFFFFF' }}>
              {program.format}
            </span>
            <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>
              {program.ageGroup}
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
            {program.title}
          </h2>
        </div>
      </div>

      {/* Meta Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1rem',
          padding: '1.25rem',
          backgroundColor: 'var(--bg-soft)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '2rem',
        }}
      >
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Location & Country
          </div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
            <MapPin size={14} color="var(--blue)" />
            <span>{program.location}</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Duration
          </div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
            <Clock size={14} color="var(--blue)" />
            <span>{program.duration}</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Host Provider
          </div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--navy)', marginTop: '0.2rem' }}>
            {program.provider}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Core Theme
          </div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--navy)', marginTop: '0.2rem' }}>
            {program.theme}
          </div>
        </div>
      </div>

      {/* Narrative Description */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem' }}>
          Overview & Experience Narrative
        </h3>
        <p className="text-body" style={{ fontSize: '1.05rem', lineHeight: 1.65 }}>
          {program.description}
        </p>
      </div>

      {/* 2-Column Details: Objectives & What Learners Do */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} color="var(--blue)" />
            <span>Learning Objectives</span>
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {program.learningObjectives.map((obj, i) => (
              <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--blue)', fontWeight: 700 }}>•</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={18} color="var(--blue)" />
            <span>What Learners Do</span>
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {program.whatLearnersDo.map((act, i) => (
              <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--blue)', fontWeight: 700 }}>•</span>
                <span>{act}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Who They Meet & Where It Happens */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={18} color="var(--blue)" />
            <span>Who They Meet</span>
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {program.whoTheyMeet.map((person, i) => (
              <div key={i} style={{ padding: '0.75rem 1rem', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', fontWeight: 500, color: 'var(--navy)' }}>
                {person}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={18} color="var(--blue)" />
            <span>Where It Happens</span>
          </h4>
          <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-soft)', borderRadius: 'var(--radius-md)', fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {program.whereItHappens}
          </div>
        </div>
      </div>

      {/* Schedule Highlights */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={18} color="var(--blue)" />
          <span>Curriculum & Schedule Highlights</span>
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {program.scheduleHighlights.map((sc, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '1rem',
                padding: '0.85rem 1.25rem',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                alignItems: 'center',
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--blue)', fontSize: '0.875rem' }}>
                {sc.dayOrTime}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {sc.activity}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Possibilities / Explore Again */}
      <div
        style={{
          backgroundColor: 'var(--navy)',
          color: '#FFFFFF',
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '2.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Sparkles size={20} color="#FBBF24" />
          <span style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#93C5FD' }}>
            Next Possibilities • Explore Again
          </span>
        </div>
        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>
          Where this experience leads next
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
          {program.nextPossibilities.map((poss, idx) => (
            <div
              key={idx}
              style={{
                padding: '0.85rem 1rem',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                lineHeight: 1.4,
                color: '#E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <ArrowRight size={14} color="#60A5FA" style={{ flexShrink: 0 }} />
              <span>{poss}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-light)',
        }}
      >
        <div>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--navy)' }}>
            Interested in bringing this experience to your learners?
          </div>
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            xplorED coordinates curriculum alignment, mentors, logistics, and verification.
          </div>
        </div>

        <PrimaryButton
          size="md"
          icon={<ArrowRight size={16} />}
          onClick={() => {
            onClose();
            onEnquire(program);
          }}
        >
          Enquire About This Experience
        </PrimaryButton>
      </div>
    </Modal>
  );
};
