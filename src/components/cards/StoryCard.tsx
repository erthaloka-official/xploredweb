import React from 'react';
import { Quote } from 'lucide-react';
import { Story } from '../../types/cms';

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <article
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden' }}>
        <img
          src={story.image}
          alt={story.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
          <span className="badge badge-navy" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
            {story.category}
          </span>
        </div>
      </div>

      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          {story.date}
        </div>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem', lineHeight: 1.35 }}>
          {story.title}
        </h3>

        <p className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
          {story.summary}
        </p>

        <div
          style={{
            backgroundColor: 'var(--bg-soft)',
            padding: '0.85rem',
            borderRadius: 'var(--radius-md)',
            borderLeft: '2px solid var(--blue)',
            marginBottom: '1.25rem',
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
            Evidence of Learning
          </div>
          <div style={{ fontSize: '0.8125rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            "{story.keyTakeaway}"
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem' }}>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--navy)' }}>
              {story.author.name}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {story.author.role} • {story.author.institution}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
