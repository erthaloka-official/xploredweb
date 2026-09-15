import React, { useState } from 'react';
import {
  Users,
  MapPin,
  Building,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  HeartHandshake,
} from 'lucide-react';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { SectionHeader } from '../components/common/SectionHeader';
import { PartnerCard } from '../components/cards/PartnerCard';
import { ContactForm } from '../components/forms/ContactForm';
import { partners } from '../data';
import { PartnerTrack } from '../types/cms';

interface PartnersPageProps {
  onOpenEnquiry: (category?: string) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onOpenEnquiry }) => {
  const [selectedTrack, setSelectedTrack] = useState<PartnerTrack>('People');

  return (
    <div className="fade-in section-padding-sm">
      <div className="container">
        {/* Hero Section */}
        <div className="reveal" style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">PARTNER WITH xplorED</span>
          <h1 className="hero-title">
            Bring what you know and do into learning.
          </h1>
          <p className="text-lead" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            xplorED connects institutions and learners with people, places, programs and partners that create meaningful real-world learning. If you have active mastery or real-world space, build with us.
          </p>
        </div>

        {/* 3 Partner Tracks Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
          }}
        >
          {/* TRACK 1: PEOPLE */}
          <div
            className="card reveal delay-1"
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              border: selectedTrack === 'People' ? '2px solid var(--navy)' : '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--blue-light)',
                color: 'var(--blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <Users size={26} />
            </div>

            <span className="badge badge-blue" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
              Track 01
            </span>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.75rem' }}>
              People Partners
            </h2>

            <p className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
              Share your active craft, research, or engineering expertise. We match you with curated student cohorts for masterclasses, capstone reviews, and lab mentoring.
            </p>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Who Participates:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {['Engineers', 'Scientists', 'Master Artisans', 'Founders', 'Ecologists', 'Designers'].map((t) => (
                  <span key={t} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-pill)', color: 'var(--text-secondary)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <PrimaryButton
              size="md"
              fullWidth
              icon={<ArrowRight size={16} />}
              onClick={() => onOpenEnquiry('Partner')}
            >
              Become a People Partner
            </PrimaryButton>
          </div>

          {/* TRACK 2: PLACES */}
          <div
            className="card reveal delay-2"
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              border: selectedTrack === 'Places' ? '2px solid var(--navy)' : '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--accent-emerald-bg)',
                color: 'var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <MapPin size={26} />
            </div>

            <span className="badge badge-emerald" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
              Track 02
            </span>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.75rem' }}>
              Place Partners
            </h2>

            <p className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
              Open your laboratory, regenerative farm, maker studio, test track, or heritage sanctuary to structured, educator-guided cohorts under comprehensive insurance.
            </p>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Eligible Spaces:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {['Research Labs', 'Agro-Reserves', 'FabLabs', 'Craft Ateliers', 'Testing Tracks', 'Cleanrooms'].map((t) => (
                  <span key={t} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-pill)', color: 'var(--text-secondary)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <PrimaryButton
              size="md"
              fullWidth
              icon={<ArrowRight size={16} />}
              onClick={() => onOpenEnquiry('Partner')}
            >
              Open Your Place to Learning
            </PrimaryButton>
          </div>

          {/* TRACK 3: ORGANISATIONS */}
          <div
            className="card reveal delay-3"
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              border: selectedTrack === 'Organisations' ? '2px solid var(--navy)' : '1px solid var(--border-light)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--accent-gold-bg)',
                color: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <Building size={26} />
            </div>

            <span className="badge badge-gold" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
              Track 03
            </span>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '0.75rem' }}>
              Organisations & Industry
            </h2>

            <p className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
              Partner to co-author real industrial problem challenges, sponsor young talent fellowships, and cultivate a pipeline of curious, hands-on future leaders.
            </p>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Organisation Types:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {['Deep Tech Industry', 'Universities', 'NGOs', 'Cultural Guilds', 'Global Consulates'].map((t) => (
                  <span key={t} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-pill)', color: 'var(--text-secondary)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <PrimaryButton
              size="md"
              fullWidth
              icon={<ArrowRight size={16} />}
              onClick={() => onOpenEnquiry('Partner')}
            >
              Partner as an Organisation
            </PrimaryButton>
          </div>
        </div>

        {/* Founding & Active Partners Spotlight */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="reveal">
            <SectionHeader
              eyebrow="ECOSYSTEM COLLABORATORS"
              title="Trusted by pioneers across industry & science."
              subtitle="Explore how leading institutions, companies, and research foundations build continuous learning with xplorED."
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {partners.map((partner, idx) => (
              <div key={partner.id} className={`reveal delay-${(idx % 3) + 1}`}>
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </section>

        {/* Direct Partner Enquiry Form Section */}
        <section
          className="reveal"
          style={{
            backgroundColor: 'var(--bg-soft)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2rem, 5vw, 4rem)',
            border: '1px solid var(--border-light)',
          }}
        >
          <div style={{ maxWidth: '780px', margin: '0 auto 2.5rem auto', textAlign: 'center' }}>
            <span className="eyebrow">PARTNER ONBOARDING</span>
            <h2 className="section-title">
              Submit a Partnership Enquiry
            </h2>
            <p className="text-lead">
              Tell us about your expertise, facility, or organisation. Our partnerships team will connect to discuss cohort matching, curriculum alignment, and verification.
            </p>
          </div>

          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <ContactForm initialCategory="Partner" />
          </div>
        </section>
      </div>
    </div>
  );
};
