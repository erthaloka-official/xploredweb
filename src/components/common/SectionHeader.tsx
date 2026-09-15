import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className = '',
}) => {
  return (
    <div
      className={`section-header ${align === 'center' ? 'text-center' : ''} ${className}`}
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '760px' : '840px',
        margin: align === 'center' ? '0 auto 3rem auto' : '0 0 2.5rem 0',
      }}
    >
      {eyebrow && (
        <span
          className="eyebrow"
          style={{ color: dark ? '#93C5FD' : 'var(--blue)' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="section-title"
        style={{ color: dark ? '#FFFFFF' : 'var(--navy)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lead"
          style={{ color: dark ? '#CBD5E1' : 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
