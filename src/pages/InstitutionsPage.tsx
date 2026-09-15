import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Building,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { SecondaryButton } from '../components/common/SecondaryButton';
import { SectionHeader } from '../components/common/SectionHeader';

interface InstitutionsPageProps {
  onOpenEnquiry: (category?: string) => void;
  onOpenPilotBuilder: () => void;
}

export const InstitutionsPage: React.FC<InstitutionsPageProps> = ({
  onOpenEnquiry,
  onOpenPilotBuilder,
}) => {
  const [activeAudience, setActiveAudience] = useState<
    'Schools' | 'Higher Education' | 'Skilling' | 'Organisations / L&D'
  >('Schools');

  const audienceData = {
    Schools: {
      headline: 'Connecting K–12 Curriculum to Real-World Discovery',
      description: 'Enrich CBSE, ICSE, Cambridge, and IB curricula by connecting textbook science, geography, design, and environmental concepts to living laboratories and industry practitioners.',
      benefits: [
        'Curriculum-mapped modules (Physics kinematics, ecological biology, circular chemistry)',
        'Comprehensive 100% verified safety compliance, insurance, and student:mentor ratios',
        'Reflective journals & tangible project artifacts for college application portfolios',
        'Educator development & teacher co-facilitation workshops',
      ],
      sampleTopics: [
        'Kinematics & Micro-Robotics Testing',
        'Soil Carbon & Living Microbiology Assay',
        'Passive Solar Architecture & Energy Grids',
      ],
    },
    'Higher Education': {
      headline: 'Translating Academic Theory into Industrial Practice',
      description: 'Provide engineering, design, and science undergrads with direct hardware-in-the-loop lab access, deep-tech research mentorships, and international learning expeditions.',
      benefits: [
        'Direct collaboration with active research scientists (Fraunhofer, JAXA affiliates, Paris-Saclay)',
        'Access to specialized testing bays (LiDAR testbeds, electron microscopes, dynamometers)',
        'Capstone engineering mentorship and peer-reviewed technical evaluation',
        'International exchange tracks across Germany, Japan, and France',
      ],
      sampleTopics: [
        'Autonomous Ground Vehicle Sensor Fusion',
        'Biomimetic Polymer Formulation & Tensile Testing',
        'Compliant Bipedal Robotics & Haptic Telemetry',
      ],
    },
    Skilling: {
      headline: 'Applied Vocational Mastery & Dual Apprenticeship Models',
      description: 'Bridge the gap between theoretical certification and hands-on industrial competency through experiential sprints in precision tooling, renewable telemetry, and IoT installation.',
      benefits: [
        'Dual-track experiential learning modeled on German apprenticeship standards',
        'Direct mastery transmission from generational artisans and technical field leaders',
        'Verified competency assessment portfolios based on real working systems',
        'Fast-track talent pipelines for forward-thinking clean-tech employers',
      ],
      sampleTopics: [
        'LoRaWAN IoT Sensor Deployment & Telemetry',
        'Precision Joinery & Kinematic Tolerances',
        'Decentralized Microgrid Maintenance & Inverter Ops',
      ],
    },
    'Organisations / L&D': {
      headline: 'Experiential Leadership & Innovation Immersions',
      description: 'Move beyond stale boardroom workshops. Take cross-functional leadership, engineering, and product teams into living innovation ecosystems to study sustainability and systemic innovation.',
      benefits: [
        'Immersive offsites situated inside Europe & Asia’s top sustainability clusters',
        'Cross-disciplinary problem framing with master craftsmen and deep-tech founders',
        'Actionable sustainability and circular product blueprints for corporate teams',
        'High-impact team cohesion built through shared physical challenge solving',
      ],
      sampleTopics: [
        'Circular Economy & Industrial Symbiosis in Europe',
        'Monozukuri: Human-Centered Product Craftsmanship in Japan',
        'Regenerative Business Modeling & Living Systems Thinking',
      ],
    },
  };

  return (
    <div className="fade-in section-padding-sm">
      <div className="container">
        {/* Hero Section */}
        <div className="reveal" style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">FOR INSTITUTIONAL LEADERSHIP</span>
          <h1 className="hero-title">
            We don't replace the classroom.
            <br />
            We connect it.
          </h1>
          <p className="text-lead" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            xplorED works with schools, universities, and learning organisations to connect curriculum and learning objectives to real people, places, and experiences.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <PrimaryButton size="lg" icon={<ArrowRight size={18} />} onClick={onOpenPilotBuilder}>
              Build an Institutional Pilot
            </PrimaryButton>
            <SecondaryButton size="lg" onClick={() => onOpenEnquiry('Institution')}>
              Talk to xplorED Partnerships
            </SecondaryButton>
          </div>
        </div>

        {/* Institution Type Selector */}
        <div className="reveal delay-1" style={{ marginBottom: '4rem' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '2rem',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '1rem',
            }}
          >
            {[
              { id: 'Schools', label: 'Schools (K–12)', icon: <BookOpen size={18} /> },
              { id: 'Higher Education', label: 'Higher Education & Universities', icon: <GraduationCap size={18} /> },
              { id: 'Skilling', label: 'Skilling & Vocational', icon: <Building size={18} /> },
              { id: 'Organisations / L&D', label: 'Organisations & L&D', icon: <Briefcase size={18} /> },
            ].map((tab) => {
              const isSelected = activeAudience === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveAudience(tab.id as any)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.85rem 1.4rem',
                    borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    backgroundColor: isSelected ? 'var(--navy)' : 'var(--bg-soft)',
                    color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                    border: isSelected ? '1px solid var(--navy)' : '1px solid var(--border-light)',
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer',
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Audience Display Card */}
          <div
            className="card reveal-scale"
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              backgroundColor: '#FFFFFF',
              border: '2px solid var(--navy)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ maxWidth: '850px', marginBottom: '2.5rem' }}>
              <span className="badge badge-navy" style={{ marginBottom: '0.75rem' }}>
                Tailored for {activeAudience}
              </span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1rem' }}>
                {audienceData[activeAudience].headline}
              </h2>
              <p className="text-body" style={{ fontSize: '1.05rem', lineHeight: 1.65 }}>
                {audienceData[activeAudience].description}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem' }}>
                  Key Capabilities Delivered
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {audienceData[activeAudience].benefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                      <CheckCircle2 size={18} color="var(--blue)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem' }}>
                  Popular Real-World Sprints
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {audienceData[activeAudience].sampleTopics.map((top, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '1rem',
                        backgroundColor: 'var(--bg-soft)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: 'var(--navy)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{top}</span>
                      <Sparkles size={16} color="var(--blue)" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Partnership Journey */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="reveal">
            <SectionHeader
              eyebrow="THE PARTNERSHIP BLUEPRINT"
              title="How we build an experience with your team."
              subtitle="A transparent, collaborative, and rigorous 5-step implementation lifecycle."
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Understand',
                desc: 'We conduct a structured discovery session with your academic deans/coordinators to map curriculum milestones, dates, and learner profile.',
              },
              {
                step: '02',
                title: 'Co-Design',
                desc: 'We tailor the hands-on lab modules, schedule, practitioner mix, and safety protocols to seamlessly fit your institutional goals.',
              },
              {
                step: '03',
                title: 'Experience',
                desc: 'Cohorts enter active testing grounds under 1:4 mentor supervision, exploring real-world hardware, biology, and master craftsmanship.',
              },
              {
                step: '04',
                title: 'Reflect',
                desc: 'Structured synthesis: capstone reviews, faculty feedback, portfolio documentation, and verified competency credentials.',
              },
              {
                step: '05',
                title: 'Evolve',
                desc: 'We integrate learnings into subsequent terms, opening up advanced international tracks and research fellowships.',
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className={`card reveal delay-${idx + 1}`}
                style={{
                  padding: '1.75rem',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--blue)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {st.step}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                  {st.title}
                </h3>
                <p className="text-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety & Compliance Assurance */}
        <section
          className="reveal"
          style={{
            backgroundColor: 'var(--bg-soft)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            border: '1px solid var(--border-light)',
            marginBottom: '5rem',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div className="reveal-left">
              <span className="eyebrow">INSTITUTIONAL TRUST & COMPLIANCE</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>
                Uncompromising safety and academic rigor.
              </h2>
              <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                We understand the legal, safety, and operational responsibilities educational institutions face when leaving campus. Every xplorED partner site adheres to strict vetting standards.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Full risk assessments and emergency action protocols for every facility',
                  'Comprehensive student travel & medical insurance coverage included',
                  'Vetted and certified laboratory docents with background clearances',
                  '1:4 to 1:6 educator-to-student supervision ratios at all times',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--navy)', fontWeight: 600 }}>
                    <ShieldCheck size={18} color="var(--blue)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="card reveal-right"
              style={{
                padding: '2.5rem',
                backgroundColor: '#FFFFFF',
                textAlign: 'center',
              }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.75rem' }}>
                Start with a Focused Pilot
              </h3>
              <p className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                Test an xplorED experiential module with a single cohort of 16–24 students before institutional-wide roll-out.
              </p>
              <PrimaryButton
                fullWidth
                size="lg"
                icon={<ArrowRight size={18} />}
                onClick={onOpenPilotBuilder}
              >
                Launch 3-Step Pilot Builder
              </PrimaryButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
