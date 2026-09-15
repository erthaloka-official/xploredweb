import React from 'react';
import {
  ArrowRight,
  History,
} from 'lucide-react';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { SecondaryButton } from '../components/common/SecondaryButton';
import { SectionHeader } from '../components/common/SectionHeader';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: (category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="fade-in section-padding-sm">
      <div className="container">
        {/* Hero Section */}
        <div className="reveal" style={{ maxWidth: '840px', marginBottom: '4rem' }}>
          <span className="eyebrow">ABOUT xplorED</span>
          <h1 className="hero-title">
            Learning is continuous.
            <br />
            The journey should be connected.
          </h1>
          <p className="text-lead" style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--navy)', fontWeight: 600, marginBottom: '1rem' }}>
            Learning happens across classrooms, communities, workplaces, cultures, and everyday life. Yet these experiences often remain fragmented. xplorED exists to connect them into a continuous journey.
          </p>
          <p className="text-body" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
            We believe that education must extend beyond artificial silos. When textbook concepts touch living soil, running engines, and master craft studios, abstract theory becomes lifelong human capability.
          </p>
        </div>

        {/* Our Core Belief Banner */}
        <div
          className="card reveal"
          style={{
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            backgroundColor: 'var(--bg-soft)',
            border: '2px solid var(--navy)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '5rem',
          }}
        >
          <span className="eyebrow">OUR CORE BELIEF</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.25rem' }}>
            "Learning becomes more meaningful when knowledge meets experience — and experience opens the next possibility."
          </h2>
          <p className="text-body" style={{ fontSize: '1.1rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
            Knowledge alone without physical context produces rote recall. Experience alone without structured inquiry produces fleeting amusement. xplorED brings together people, places, programs, and partners to turn experiential curiosity into measurable capability.
          </p>
        </div>

        {/* Heritage Section: From Learning Expedition to xplorED */}
        <section style={{ marginBottom: '5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            <div className="reveal-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <History size={18} color="var(--blue)" />
                <span className="eyebrow" style={{ marginBottom: 0 }}>
                  THE xplorED HERITAGE
                </span>
              </div>
              <h2 className="section-title" style={{ fontSize: '2.25rem' }}>
                From Learning Expedition to xplorED.
              </h2>
              <p className="text-body" style={{ fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                <strong>Learning Expedition</strong> started the journey. It proved that students immersed in real industrial, scientific, and cultural environments learn with an intensity and wonder unmatched by conventional classrooms.
              </p>
              <p className="text-body" style={{ fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                <strong>xplorED connects what comes next.</strong>
              </p>
              <p className="text-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Learning Expedition continues as a signature experience format within the larger ecosystem, preserving our deep heritage while xplorED grows into the category-defining platform for continuous real-world learning.
              </p>
            </div>

            <div
              className="reveal-right"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                The Evolution Continuum
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ borderLeft: '3px solid var(--blue)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)' }}>
                    Phase 1: Learning Expedition Heritage
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Curating high-impact international student journeys that transform perspectives.
                  </div>
                </div>

                <div style={{ borderLeft: '3px solid var(--navy)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)' }}>
                    Phase 2: The xplorED Ecosystem Platform
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Uniting People, Places, Programs & Partners into a continuous, verifiable learning loop.
                  </div>
                </div>

                <div style={{ borderLeft: '3px solid var(--accent-emerald)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)' }}>
                    Phase 3: The Open Real-World Learning Graph
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Empowering every school, university, and practitioner to co-create real-world learning.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Core Operating Principles */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="reveal">
            <SectionHeader
              eyebrow="MISSION & VALUES"
              title="Our Mission & Principles"
              subtitle="To make continuous learning more connected, experiential and accessible by bringing people, places, programs and partners together."
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                title: 'Curiosity First',
                desc: 'Learning begins with genuine wonder. We design every experience around authentic inquiry questions rather than standardized test drills.',
              },
              {
                title: 'Material & Human Honesty',
                desc: 'No artificial simulations. Learners touch physical microcontrollers, living soil humus, hand planes, and real testbeds alongside active masters.',
              },
              {
                title: 'Continuous Loops, Not Dead Ends',
                desc: 'Every experience must build reflection, verified capability evidence, and open a clear door to what the learner can explore next.',
              },
              {
                title: 'Rigorous Institutional Trust',
                desc: 'We operate with uncompromising safety, transparent risk mitigation, and deep alignment with institutional learning benchmarks.',
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className={`card reveal delay-${idx + 1}`}
                style={{
                  padding: '2rem',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <div
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--navy)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {val.title}
                </div>
                <p className="text-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="card-navy reveal-scale" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#FFFFFF', marginBottom: '1rem', fontWeight: 800 }}>
            Join the Connected Learning Movement
          </h2>
          <p className="text-lead" style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto 2rem auto' }}>
            Whether you lead an institution, direct a laboratory, or practice a craft, build the future of experiential learning with xplorED.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <PrimaryButton variant="white" size="lg" icon={<ArrowRight size={18} />} onClick={() => onOpenEnquiry('Institution')}>
              Partner With xplorED
            </PrimaryButton>
            <SecondaryButton style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)' }} onClick={() => onNavigate('/contact')}>
              Get in Touch
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};
