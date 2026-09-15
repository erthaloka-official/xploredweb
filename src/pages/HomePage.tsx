import React from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe,
  Users,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { SecondaryButton } from '../components/common/SecondaryButton';
import { SectionHeader } from '../components/common/SectionHeader';
import { PillarCard } from '../components/cards/PillarCard';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { CountryCard } from '../components/cards/CountryCard';
import { LearningLoop } from '../components/loop/LearningLoop';
import { programs, countries } from '../data';
import { Program, Country, PillarType } from '../types/cms';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onViewProgram: (program: Program) => void;
  onEnquireProgram: (program: Program) => void;
  onOpenEnquiry: (category?: string) => void;
  onOpenPilotBuilder: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onViewProgram,
  onEnquireProgram,
  onOpenEnquiry,
  onOpenPilotBuilder,
}) => {
  const featuredPrograms = programs.slice(0, 3);

  const handlePillarExplore = (pillar: PillarType) => {
    onNavigate(`/explore?pillar=${pillar}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCountryExplore = (country: Country) => {
    onNavigate(`/world`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fade-in">
      {/* ====================================================================
          SECTION 01: HERO
          ==================================================================== */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(3rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 8vw, 6.5rem)',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div className="reveal-left" style={{ maxWidth: '620px' }}>
              <span className="eyebrow">
                EXPLORE | EXPERIENCE | EVOLVE
              </span>

              <h1 className="hero-title">
                Connecting Learning to the Real World.
              </h1>

              <p
                className="text-lead"
                style={{
                  color: 'var(--navy)',
                  fontWeight: 600,
                  marginBottom: '0.85rem',
                  fontSize: '1.25rem',
                }}
              >
                Enabling continuous learning through People, Places, Programs & Partners.
              </p>

              <p
                className="text-body"
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '2rem',
                  fontSize: '1.0625rem',
                }}
              >
                Making learning hands-on, practical & fun. Moving beyond traditional textbooks into active testing bays, regenerative farms, master craft studios, and real-world innovation ecosystems.
              </p>

              {/* CTAs */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '2.5rem',
                }}
              >
                <PrimaryButton
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  onClick={() => onNavigate('/explore')}
                >
                  Explore Experiences
                </PrimaryButton>

                <SecondaryButton
                  size="lg"
                  onClick={() => onOpenEnquiry('Institution')}
                >
                  Partner With xplorED
                </SecondaryButton>
              </div>

              {/* Trust & Network Indicators */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border-light)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  <ShieldCheck size={16} color="var(--blue)" />
                  <span>Curriculum-Connected</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  <Users size={16} color="var(--blue)" />
                  <span>Verified Master Practitioners</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--blue)' }}>
                  <Globe size={16} color="var(--blue)" />
                  <span>India • Germany • Japan • France</span>
                </div>
              </div>
            </div>

            {/* Right Hero Cinematic Image */}
            <div className="reveal-right" style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-xl)',
                  aspectRatio: '4 / 3.2',
                  backgroundColor: 'var(--bg-subtle)',
                  position: 'relative',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                  alt="Learners working on robotics prototypes in an industrial engineering lab"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6,43,111,0.7) 0%, transparent 50%)',
                  }}
                />

                {/* Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem',
                    right: '1.5rem',
                    color: '#FFFFFF',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#93C5FD' }}>
                    Active Real-World Lab Immersion
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.2rem' }}>
                    Hardware-in-the-Loop Autonomous Systems & Clean Mobility
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill */}
              <div
                className="floating-element"
                style={{
                  position: 'absolute',
                  top: '-1rem',
                  right: '-1rem',
                  backgroundColor: '#FFFFFF',
                  padding: '0.85rem 1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    backgroundColor: 'var(--blue-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                  }}
                >
                  <Sparkles size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Learning Format</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--navy)' }}>Real-World Ecosystem</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 02: THE IDEA (Transition from Education to Real-World Learning)
          ==================================================================== */}
      <section
        className="section-padding"
        style={{
          backgroundColor: 'var(--bg-soft)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="container-narrow text-center" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <span className="eyebrow">THE xplorED IDEA</span>
            <h2
              className="section-title"
              style={{ maxWidth: '780px', margin: '0 auto 1.5rem auto' }}
            >
              Learning happens everywhere.
              <br />
              It should connect everywhere.
            </h2>

            <p
              className="text-lead"
              style={{
                maxWidth: '720px',
                margin: '0 auto 2.5rem auto',
                lineHeight: 1.6,
              }}
            >
              Learning continues through people we meet, places we discover, problems we solve and experiences we remember.
              <br /><br />
              <strong>xplorED connects those moments into a continuous learning journey.</strong>
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              textAlign: 'left',
              marginTop: '2rem',
            }}
          >
            {[
              { label: 'People we meet', desc: 'Practitioners, researchers & master artisans' },
              { label: 'Places we discover', desc: 'Living labs, cleanrooms, farms & studios' },
              { label: 'Problems we solve', desc: 'Real engineering, climate & social challenges' },
              { label: 'Experiences we remember', desc: 'Hands-on tangible outcomes with peers' },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`reveal delay-${idx + 1}`}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                }}
              >
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 03: THE NETWORK (Four Discovery Pillars)
          ==================================================================== */}
      <section className="section-padding">
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow="THE DISCOVERY PILLARS"
              title="A connected learning ecosystem."
              subtitle="Explore knowledge through the four interconnected dimensions of the xplorED network."
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem',
            }}
          >
            <div className="reveal delay-1">
              <PillarCard
                pillar="People"
                tagline="Meet those who know and do."
                description="Learn directly from scientists, master craftsmen, engineers, founders, and creators working at the frontier."
                items={['Industry Experts', 'Field Practitioners', 'Research Mentors', 'Founders & Makers']}
                onExplore={handlePillarExplore}
              />
            </div>

            <div className="reveal delay-2">
              <PillarCard
                pillar="Places"
                tagline="Discover where learning happens."
                description="Step into authentic spaces that provide physical context — from high-torque testbeds to UNESCO biodiversity reserves."
                items={['Automotive & Tech Labs', 'Regenerative Bio-Farms', 'Heritage Craft Ateliers', 'Ocean Coastal Stations']}
                onExplore={handlePillarExplore}
              />
            </div>

            <div className="reveal delay-3">
              <PillarCard
                pillar="Programs"
                tagline="Experience learning by doing."
                description="Structured experiential sprints, challenges, lab immersions, and learning expeditions with clear outcomes."
                items={['Lab Immersions', 'Engineering Challenges', 'Studio Residencies', 'Learning Expeditions']}
                onExplore={handlePillarExplore}
              />
            </div>

            <div className="reveal delay-4">
              <PillarCard
                pillar="Possibilities"
                tagline="See what one experience leads to."
                description="Every completed experience creates verified evidence, portfolio depth, and unlocks adjacent learning pathways."
                items={['Subsequent Expeditions', 'Research Fellowships', 'Capstone Ventures', 'Lifelong Discovery']}
                onExplore={handlePillarExplore}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 04: THE LEARNING LOOP (Explore -> Experience -> Evolve)
          ==================================================================== */}
      <section
        className="section-padding"
        style={{
          backgroundColor: 'var(--bg-soft)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow="CONTINUOUS LEARNING MODEL"
              title="Explore. Experience. Evolve."
              subtitle="The objective is never a one-off field excursion. It is a continuous loop where every experience unlocks the next possibility."
            />
          </div>

          <div className="reveal delay-2">
            <LearningLoop />
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 05: EXPERIENCE DISCOVERY PREVIEW
          ==================================================================== */}
      <section className="section-padding">
        <div className="container">
          <div
            className="reveal"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '3rem',
              gap: '1rem',
            }}
          >
            <div>
              <span className="eyebrow">DISCOVER EXPERIENCES</span>
              <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
                Discover what can teach you.
              </h2>
              <p className="text-lead" style={{ maxWidth: '640px' }}>
                Explore people, places, programs and possibilities that connect learning with the real world.
              </p>
            </div>

            <PrimaryButton
              icon={<ArrowRight size={16} />}
              onClick={() => onNavigate('/explore')}
            >
              Browse All Experiences
            </PrimaryButton>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {featuredPrograms.map((program, idx) => (
              <div key={program.id} className={`reveal delay-${idx + 1}`}>
                <ExperienceCard
                  program={program}
                  onViewDetails={onViewProgram}
                  onEnquire={onEnquireProgram}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 06: FOR INSTITUTIONS
          ==================================================================== */}
      <section
        className="section-padding"
        style={{
          backgroundColor: 'var(--navy)',
          color: '#FFFFFF',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <div className="reveal-left">
              <span className="eyebrow" style={{ color: '#93C5FD' }}>
                FOR SCHOOLS, UNIVERSITIES & L&D
              </span>
              <h2
                className="section-title"
                style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}
              >
                We don't replace the classroom.
                <br />
                We connect it.
              </h2>
              <p
                className="text-lead"
                style={{ color: '#CBD5E1', marginBottom: '2rem' }}
              >
                xplorED works with educational leadership to connect curriculum and learning objectives to real people, places, and experiences.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                {[
                  'Design curriculum-connected real-world immersions',
                  'Integrate certified practitioners & scientists directly into course units',
                  'Access curated industry testbeds, high-altitude labs & bio-farms',
                  'Capture verified learner reflections and portfolio evidence',
                ].map((cap, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={18} color="#60A5FA" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <PrimaryButton
                  variant="white"
                  icon={<ArrowRight size={16} />}
                  onClick={onOpenPilotBuilder}
                >
                  Build an Institutional Pilot
                </PrimaryButton>

                <button
                  onClick={() => onNavigate('/institutions')}
                  style={{
                    color: '#FFFFFF',
                    border: '1px solid rgba(255,255,255,0.3)',
                    padding: '0.75rem 1.35rem',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    cursor: 'pointer',
                  }}
                >
                  Explore Institutional Pathways
                </button>
              </div>
            </div>

            {/* Institutional Process Graphic */}
            <div
              className="reveal-right"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 'var(--radius-xl)',
                padding: '2.5rem',
              }}
            >
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#93C5FD', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Institutional Partnership Process
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { step: '01', name: 'Understand', desc: 'Map curriculum objectives, learner stage, and assessment goals.' },
                  { step: '02', name: 'Co-Design', desc: 'Craft bespoke hands-on modules with vetted practitioners and labs.' },
                  { step: '03', name: 'Experience', desc: 'Deploy learners onto active testbeds under rigorous safety protocols.' },
                  { step: '04', name: 'Reflect', desc: 'Facilitate peer reviews, faculty assessments, and documentation.' },
                  { step: '05', name: 'Evolve', desc: 'Unlock continuous advanced modules and capstone opportunities.' },
                ].map((p, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '48px 1fr',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.875rem',
                        color: '#60A5FA',
                      }}
                    >
                      {p.step}
                    </div>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>{p.name}</div>
                      <div style={{ fontSize: '0.8125rem', color: '#94A3B8', marginTop: '0.15rem' }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 07: xplorED WORLD (Germany, Japan, France)
          ==================================================================== */}
      <section className="section-padding">
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow="GLOBAL LEARNING EXPEDITIONS"
              title="Learning has no borders."
              subtitle="Connect learners in India with the people, places, cultures and possibilities of the world. Not tourism — genuine immersive real-world learning."
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {countries.map((c, idx) => (
              <div key={c.id} className={`reveal delay-${idx + 1}`}>
                <CountryCard
                  country={c}
                  onExploreExpeditions={handleCountryExplore}
                />
              </div>
            ))}
          </div>

          <div className="reveal delay-2" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <PrimaryButton
              size="lg"
              icon={<ArrowRight size={18} />}
              onClick={() => onNavigate('/world')}
            >
              Explore All xplorED World Destinations
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 08: PARTNER ECOSYSTEM CTA
          ==================================================================== */}
      <section
        className="section-padding"
        style={{
          backgroundColor: 'var(--bg-soft)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <span className="eyebrow">PARTNER WITH xplorED</span>
            <h2
              className="section-title"
              style={{ maxWidth: '800px', margin: '0 auto 1.25rem auto' }}
            >
              Bring what you know and do into learning.
            </h2>
            <p
              className="text-lead"
              style={{ maxWidth: '680px', margin: '0 auto 2.5rem auto' }}
            >
              Schools. Universities. Experts. Companies. Communities. Cultural institutions. Places. Programs. If you believe learning can happen anywhere, build with xplorED.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              textAlign: 'left',
              maxWidth: '1000px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            <div className="card reveal delay-1" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                People Partners
              </div>
              <p className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Share your active mastery with passionate learners as an expert, mentor, or craftsperson.
              </p>
              <button
                onClick={() => onOpenEnquiry('Partner')}
                className="btn-link"
                style={{ fontSize: '0.875rem' }}
              >
                <span>Become a People Partner</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="card reveal delay-2" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                Place Partners
              </div>
              <p className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Open your lab, farm, testing track, or studio to curated, safe, educator-led cohorts.
              </p>
              <button
                onClick={() => onOpenEnquiry('Partner')}
                className="btn-link"
                style={{ fontSize: '0.875rem' }}
              >
                <span>Open Your Place to Learning</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="card reveal delay-3" style={{ padding: '1.75rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
                Organisations & Industry
              </div>
              <p className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Co-design real-world challenges, sponsor student fellowships, and discover future talent.
              </p>
              <button
                onClick={() => onOpenEnquiry('Partner')}
                className="btn-link"
                style={{ fontSize: '0.875rem' }}
              >
                <span>Partner as an Organisation</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 09: FINAL CTA
          ==================================================================== */}
      <section className="section-padding">
        <div className="container">
          <div
            className="card-navy reveal-scale"
            style={{
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span
              className="badge badge-navy"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                color: '#93C5FD',
                marginBottom: '1rem',
              }}
            >
              BUILD WITH xplorED
            </span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                fontWeight: 800,
              }}
            >
              Let’s create the next learning possibility.
            </h2>

            <p
              className="text-lead"
              style={{
                color: '#CBD5E1',
                maxWidth: '680px',
                margin: '0 auto 2.5rem auto',
                fontSize: '1.15rem',
              }}
            >
              Connect your institution, expertise, place, program or organisation to meaningful real-world learning.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <PrimaryButton
                size="lg"
                variant="white"
                icon={<ArrowRight size={18} />}
                onClick={() => onOpenEnquiry('Institution')}
              >
                Partner With xplorED
              </PrimaryButton>

              <SecondaryButton
                size="lg"
                style={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255,255,255,0.4)',
                }}
                onClick={() => onNavigate('/explore')}
              >
                Explore Experiences
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
