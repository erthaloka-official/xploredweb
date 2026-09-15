import React from 'react';
import {
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  FileCheck,
  Award,
} from 'lucide-react';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { SecondaryButton } from '../components/common/SecondaryButton';
import { SectionHeader } from '../components/common/SectionHeader';
import { LearningLoop } from '../components/loop/LearningLoop';
import { StoryCard } from '../components/cards/StoryCard';
import { stories } from '../data';

interface HowItWorksPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: (category?: string) => void;
  onOpenPilotBuilder: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigate,
  onOpenEnquiry,
  onOpenPilotBuilder,
}) => {
  return (
    <div className="fade-in section-padding-sm">
      <div className="container">
        {/* Hero Section */}
        <div className="reveal" style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">HOW xplorED WORKS</span>
          <h1 className="hero-title">
            Reconnect the learning journey.
          </h1>
          <p className="text-lead" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            The xplorED model turns real-world experiences into a continuous learning loop. We ensure that learning outside the classroom produces lasting capability, verified artifacts, and an open gateway to what comes next.
          </p>
        </div>

        {/* The 4-Stage Interactive Learning Loop */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="reveal">
            <SectionHeader
              eyebrow="THE CONTINUOUS CYCLE"
              title="Explore → Experience → Evolve → Explore Again"
              subtitle="The objective is never a one-off field trip. Each experience is engineered to produce reflection, tangible evidence, and subsequent possibilities."
            />
          </div>

          <div className="reveal delay-2">
            <LearningLoop />
          </div>
        </div>

        {/* Comparison: One-Off Excursions vs xplorED Ecosystem */}
        <section
          className="section-padding reveal"
          style={{
            backgroundColor: 'var(--bg-soft)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            marginBottom: '5rem',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
            <span className="eyebrow">WHY THE MODEL MATTERS</span>
            <h2 className="section-title">
              Beyond the One-Off Field Trip
            </h2>
            <p className="text-lead">
              Traditional education treats real-world visits as isolated, forgettable excursions. xplorED structures every touchpoint as a continuous learning accelerator.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Traditional Excursions */}
            <div
              className="reveal-left delay-1"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid #FECACA',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <XCircle size={22} color="#DC2626" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#991B1B' }}>
                  Traditional Field Excursion
                </h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Passive sightseeing with no hands-on instrumentation or prototyping',
                  'Disconnected from the core school/university syllabus and assessment benchmarks',
                  'Zero interaction with active researchers, engineers, or master artisans',
                  'No lasting proof of work or portfolio artifacts created',
                  'Ends on the bus ride back — no follow-up learning trajectory or mentor connection',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#DC2626', fontWeight: 700 }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* xplorED Real-World Ecosystem */}
            <div
              className="reveal-right delay-2"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '2px solid var(--navy)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <CheckCircle2 size={22} color="var(--blue)" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)' }}>
                  The xplorED Connected Model
                </h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Active doing: writing code, testing sensor telemetry, bio-culturing, and master craft',
                  'Directly co-designed to bridge theoretical curriculum units with physical application',
                  '1-on-1 critique and peer review alongside vetted industry and academic practitioners',
                  'Tangible capstone repositories, verified digital badges, and reflective journals',
                  'Unlocks clear subsequent pathways: advanced expeditions, fellowships, and research tracks',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                    <CheckCircle2 size={16} color="var(--blue)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3 Pillars of Evidence */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="reveal">
            <SectionHeader
              eyebrow="MEASURABLE IMPACT"
              title="What every experience produces."
              subtitle="How xplorED captures proof of capability and transforms learner perspectives."
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            <div className="card reveal delay-1" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--blue-light)',
                  color: 'var(--blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <FileCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                1. Tangible Evidence of Learning
              </h3>
              <p className="text-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Learners produce real, verifiable artifacts — working hardware codebases, ecological soil health maps, bio-plastic formulations, and acoustic spectrogram tags.
              </p>
            </div>

            <div className="card reveal delay-2" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--accent-emerald-bg)',
                  color: 'var(--accent-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                2. Verified Outcomes & Badges
              </h3>
              <p className="text-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Every program validates specific competencies under partner lab supervision, strengthening student university admissions dossiers and vocational portfolios.
              </p>
            </div>

            <div className="card reveal delay-3" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--accent-gold-bg)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                3. The Next Learning Frontier
              </h3>
              <p className="text-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Experiences do not end at graduation; they connect learners to adjacent research fellowships, international expeditions, and community leadership opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Real Reflections & Stories */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="reveal">
            <SectionHeader
              eyebrow="AUTHENTIC STORIES"
              title="Real transformations in the field."
              subtitle="How students, educators, and master practitioners experience the continuous learning loop."
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {stories.map((s, idx) => (
              <div key={s.id} className={`reveal delay-${idx + 1}`}>
                <StoryCard story={s} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="card-navy reveal-scale" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
            Ready to integrate the xplorED model?
          </h2>
          <p className="text-lead" style={{ color: '#CBD5E1', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Work with us to design a continuous real-world learning pilot for your school, college, or organisation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <PrimaryButton variant="white" size="lg" icon={<ArrowRight size={18} />} onClick={onOpenPilotBuilder}>
              Build a Pilot Experience
            </PrimaryButton>
            <SecondaryButton style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)' }} onClick={() => onNavigate('/explore')}>
              Browse All Experiences
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
