import React from 'react';
import { Compass, Mail, ArrowUpRight, Linkedin, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: (category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const handleLink = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="global-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Philosophy */}
          <div>
            <div className="footer-brand-title" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <img
                src="/logo-white.png"
                alt="xplorED Logo"
                style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain',
                }}
              />
              <span>xplor<span style={{ color: '#60A5FA' }}>ED</span></span>
            </div>
            <p className="footer-brand-tagline">
              Connecting Learning to the Real World. Enabling continuous learning through People, Places, Programs & Partners.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem' }}>
              <span className="badge badge-navy" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#CBD5E1' }}>
                Explore • Experience • Evolve
              </span>
            </div>
          </div>

          {/* Col 2: Discovery */}
          <div>
            <h3 className="footer-heading">Discovery</h3>
            <ul className="footer-links">
              <li>
                <a href="/explore" onClick={(e) => { e.preventDefault(); handleLink('/explore'); }} className="footer-link">
                  All Experiences
                </a>
              </li>
              <li>
                <a href="/explore?pillar=People" onClick={(e) => { e.preventDefault(); handleLink('/explore'); }} className="footer-link">
                  People (Mentors & Experts)
                </a>
              </li>
              <li>
                <a href="/explore?pillar=Places" onClick={(e) => { e.preventDefault(); handleLink('/explore'); }} className="footer-link">
                  Places & Living Labs
                </a>
              </li>
              <li>
                <a href="/explore?pillar=Programs" onClick={(e) => { e.preventDefault(); handleLink('/explore'); }} className="footer-link">
                  Hands-on Programs
                </a>
              </li>
              <li>
                <a href="/world" onClick={(e) => { e.preventDefault(); handleLink('/world'); }} className="footer-link">
                  xplorED World
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ecosystem */}
          <div>
            <h3 className="footer-heading">Ecosystem</h3>
            <ul className="footer-links">
              <li>
                <a href="/how-it-works" onClick={(e) => { e.preventDefault(); handleLink('/how-it-works'); }} className="footer-link">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/institutions" onClick={(e) => { e.preventDefault(); handleLink('/institutions'); }} className="footer-link">
                  For Institutions
                </a>
              </li>
              <li>
                <a href="/partners" onClick={(e) => { e.preventDefault(); handleLink('/partners'); }} className="footer-link">
                  For Partners
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry('Pilot')}
                  className="footer-link"
                  style={{ textAlign: 'left', background: 'none', border: 'none', padding: 0 }}
                >
                  Build a Pilot
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Organization */}
          <div>
            <h3 className="footer-heading">Organization</h3>
            <ul className="footer-links">
              <li>
                <a href="/about" onClick={(e) => { e.preventDefault(); handleLink('/about'); }} className="footer-link">
                  About xplorED
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => { e.preventDefault(); handleLink('/contact'); }} className="footer-link">
                  Contact & Enquiries
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => { e.preventDefault(); handleLink('/about'); }} className="footer-link">
                  Learning Expedition Heritage
                </a>
              </li>
              <li>
                <span className="footer-link" style={{ cursor: 'default', opacity: 0.7 }}>
                  Privacy & Terms
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div>
            <h3 className="footer-heading">Connect</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a
                href="mailto:connect@xplored.in"
                className="footer-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#93C5FD' }}
              >
                <Mail size={16} />
                <span>connect@xplored.in</span>
              </a>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#CBD5E1',
                    transition: 'all 200ms ease',
                  }}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#CBD5E1',
                    transition: 'all 200ms ease',
                  }}
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#CBD5E1',
                    transition: 'all 200ms ease',
                  }}
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} xplorED Network. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Explore • Experience • Evolve</span>
            <span>Real-World Learning Ecosystem</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
