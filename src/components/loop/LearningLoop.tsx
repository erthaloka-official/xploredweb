import React, { useState } from 'react';
import { Compass, Hammer, Sparkles, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LoopStep {
  number: string;
  title: string;
  shortDesc: string;
  deepDive: string;
  activities: string[];
  evidence: string;
  icon: React.ReactNode;
}

export const LearningLoop: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: LoopStep[] = [
    {
      number: '01',
      title: 'EXPLORE',
      shortDesc: 'Discover people, places, programs and possibilities.',
      deepDive: 'Learners and institutions look beyond standardized curricula to identify real practitioners, cutting-edge laboratories, and real-world problems that ignite genuine curiosity.',
      activities: [
        'Surveying emerging technology & research frontiers',
        'Discovering industry practitioners and artisanal masters',
        'Framing inquiry questions grounded in real-world contexts',
      ],
      evidence: 'Curiosity map & defined inquiry questions before entering the site.',
      icon: <Compass size={24} />,
    },
    {
      number: '02',
      title: 'EXPERIENCE',
      shortDesc: 'Learn through doing, meeting, making and solving.',
      deepDive: 'Step directly onto active testing tracks, biological farms, and craft studios. Learners code real microcontrollers, extract living soil cultures, and receive direct critique from practitioners.',
      activities: [
        'Hands-on sensor assembly and hardware testing',
        'Direct dialogue with researchers and founders',
        'Iterative problem solving under real constraints',
      ],
      evidence: 'Working prototypes, sensor telemetry logs, and field artifacts.',
      icon: <Hammer size={24} />,
    },
    {
      number: '03',
      title: 'EVOLVE',
      shortDesc: 'Build skills, capability, perspective and confidence.',
      deepDive: 'Synthesizing the experience through structured reflection, peer reviews, and capstone presentations that articulate what was learned, what failed, and why it matters.',
      activities: [
        'Rigorous technical and reflective peer reviews',
        'Bridging textbook physics/biology with physical telemetry',
        'Developing intellectual self-reliance and grit',
      ],
      evidence: 'Documented project portfolio, verified micro-credential, and reflective journal.',
      icon: <Sparkles size={24} />,
    },
    {
      number: '04',
      title: 'EXPLORE AGAIN',
      shortDesc: 'Use what you learned to discover what comes next.',
      deepDive: 'Every completed experience unlocks adjacent pathways — advanced international expeditions, university research mentorships, or student-led community pilots.',
      activities: [
        'Connecting to advanced research fellows and labs',
        'Launching follow-up challenges and field experiments',
        'Transitioning from learner to student-mentor',
      ],
      evidence: 'Next possibility roadmap & subsequent learning expedition enrollment.',
      icon: <RefreshCw size={24} />,
    },
  ];

  return (
    <div style={{ marginTop: '2rem' }}>
      {/* 4 Steps Grid */}
      <div className="loop-container">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <div
              key={idx}
              className={`loop-step-card ${isActive ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
              style={{
                cursor: 'pointer',
                borderColor: isActive ? 'var(--navy)' : 'var(--border-light)',
                backgroundColor: isActive ? '#FFFFFF' : '#FAFCFE',
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveStep(idx);
                }
              }}
              aria-label={`Select stage ${step.number}: ${step.title}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="loop-step-number">{step.number}</span>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isActive ? 'var(--blue-light)' : 'var(--bg-subtle)',
                    color: isActive ? 'var(--blue)' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {step.icon}
                </div>
              </div>

              <h3 className="loop-step-title">{step.title}</h3>
              <p className="loop-step-desc">{step.shortDesc}</p>

              <div
                style={{
                  marginTop: '1.25rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--blue)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span>{isActive ? 'Active Stage' : 'Click to inspect'}</span>
                <ArrowRight size={13} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Interactive Focus Banner */}
      <div
        className="card"
        style={{
          marginTop: '2rem',
          padding: '2.25rem',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              className="badge"
              style={{
                backgroundColor: 'var(--navy)',
                color: '#FFFFFF',
                fontSize: '0.8125rem',
                padding: '0.35rem 0.75rem',
              }}
            >
              Stage {steps[activeStep].number} In Detail
            </span>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)' }}>
              {steps[activeStep].title}
            </h4>
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            "Every experience opens the next possibility."
          </div>
        </div>

        <p className="text-body" style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.0625rem' }}>
          {steps[activeStep].deepDive}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              What Happens in This Stage
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {steps[activeStep].activities.map((act, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} color="var(--blue)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ backgroundColor: 'var(--bg-soft)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              Tangible Evidence Created
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              {steps[activeStep].evidence}
            </p>
            <div style={{ marginTop: '1rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Learning doesn't end with an experience. It creates the next one.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
