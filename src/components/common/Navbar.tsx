import React, { useState } from 'react';
import { Menu, X, ArrowRight, Compass } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenEnquiry: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Explore', path: '/explore' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'For Institutions', path: '/institutions' },
    { label: 'For Partners', path: '/partners' },
    { label: 'xplorED World', path: '/world' },
    { label: 'About', path: '/about' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="global-header">
        <div className="container header-inner">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            className="brand-logo"
            aria-label="xplorED Home"
          >
            <Compass size={24} color="var(--navy)" strokeWidth={2.5} />
            <span>
              xplor<span className="dot">ED</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.path);
                  }}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="header-actions">
            <PrimaryButton
              size="sm"
              icon={<ArrowRight size={16} />}
              onClick={() => onOpenEnquiry('Institution')}
            >
              Partner With xplorED
            </PrimaryButton>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="brand-logo">
            <Compass size={22} color="var(--navy)" strokeWidth={2.5} />
            <span>
              xplor<span className="dot">ED</span>
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              padding: '0.5rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            className={`mobile-nav-link ${currentPath === '/' ? 'active' : ''}`}
          >
            <span>Home</span>
            <ArrowRight size={16} color="var(--text-muted)" />
          </a>

          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.path);
                }}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                <ArrowRight size={16} color="var(--text-muted)" />
              </a>
            );
          })}
        </div>

        <div className="mobile-drawer-footer">
          <PrimaryButton
            fullWidth
            size="md"
            icon={<ArrowRight size={18} />}
            onClick={() => {
              setMobileOpen(false);
              onOpenEnquiry('Institution');
            }}
          >
            Partner With xplorED
          </PrimaryButton>
        </div>
      </aside>
    </>
  );
};
