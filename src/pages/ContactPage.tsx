import React from 'react';
import { Mail, Clock, ShieldCheck } from 'lucide-react';
import { ContactForm } from '../components/forms/ContactForm';

interface ContactPageProps {
  initialCategory?: string;
  initialProgramTitle?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialCategory,
  initialProgramTitle,
}) => {
  return (
    <div className="fade-in section-padding-sm">
      <div className="container">
        {/* Header Hero */}
        <div className="reveal" style={{ maxWidth: '820px', marginBottom: '3rem' }}>
          <span className="eyebrow">CONTACT & PARTNERSHIPS</span>
          <h1 className="hero-title">
            Let’s create the next learning possibility.
          </h1>
          <p className="text-lead" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            Whether you are a school leader seeking curriculum-connected immersions, a researcher wanting to mentor curious students, or an organisation with a challenge to solve, we’d love to connect.
          </p>
        </div>

        {/* 2-Col Layout: Direct Details & Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'flex-start',
          }}
        >
          {/* Left: Contact Info & Hubs */}
          <div className="reveal-left">
            <div
              className="card"
              style={{
                padding: '2.5rem',
                backgroundColor: 'var(--navy)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                marginBottom: '2rem',
              }}
            >
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                Direct Partnership Channels
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#93C5FD',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>General & Institutional Enquiries</div>
                    <a href="mailto:connect@xplored.in" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                      connect@xplored.in
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#93C5FD',
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>Response Time</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#CBD5E1' }}>Within 24 business hours</div>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#93C5FD', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                  Active Regional Hubs
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#E2E8F0' }}>
                  <div>🇮🇳 <strong>India:</strong> Bengaluru & Western Ghats</div>
                  <div>🇩🇪 <strong>Germany:</strong> Freiburg & Stuttgart</div>
                  <div>🇯🇵 <strong>Japan:</strong> Kyoto & Tokyo</div>
                  <div>🇫🇷 <strong>France:</strong> Paris-Saclay</div>
                </div>
              </div>
            </div>

            {/* Institutional Trust Card */}
            <div className="card-soft" style={{ padding: '1.75rem', backgroundColor: 'var(--bg-soft)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <ShieldCheck size={20} color="var(--blue)" />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)' }}>
                  Institutional Security & Integrity
                </h3>
              </div>
              <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                All institutional conversations and co-designed pilot data are kept strictly confidential under institutional non-disclosure and child-safety protocols.
              </p>
            </div>
          </div>

          {/* Right: The Interactive Form */}
          <div className="reveal-right">
            <ContactForm
              initialCategory={initialCategory}
              initialProgramTitle={initialProgramTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
