import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search by keyword, topic, practitioner, location, or skill...',
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '1.25rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <Search size={20} />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '1.1rem 3rem 1.1rem 3.25rem',
          fontSize: '1rem',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: '#FFFFFF',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all var(--transition-fast)',
        }}
      />

      {value && (
        <button
          onClick={() => onChange('')}
          style={{
            position: 'absolute',
            right: '1.25rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            padding: '0.25rem',
          }}
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};
