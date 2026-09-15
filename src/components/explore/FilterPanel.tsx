import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

interface FilterState {
  ageGroup: string;
  theme: string;
  format: string;
  location: string;
}

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
  ageOptions: string[];
  themeOptions: string[];
  formatOptions: string[];
  locationOptions: string[];
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  onReset,
  ageOptions,
  themeOptions,
  formatOptions,
  locationOptions,
}) => {
  const hasActiveFilters =
    filters.ageGroup !== '' ||
    filters.theme !== '' ||
    filters.format !== '' ||
    filters.location !== '';

  const handleChange = (key: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div
      className="card-soft"
      style={{
        padding: '1.5rem',
        marginBottom: '2rem',
        backgroundColor: 'var(--bg-soft)',
        border: '1px solid var(--border-light)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={18} color="var(--navy)" />
          <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--navy)' }}>
            Filter Real-World Experiences
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="btn-link"
            style={{ fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
          >
            <RotateCcw size={13} />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {/* Learner Stage */}
        <div>
          <label className="form-label" style={{ fontSize: '0.8125rem' }}>
            Learner Stage / Age
          </label>
          <select
            className="form-select"
            value={filters.ageGroup}
            onChange={(e) => handleChange('ageGroup', e.target.value)}
            style={{ padding: '0.65rem 0.85rem', fontSize: '0.875rem' }}
          >
            <option value="">All Learner Stages</option>
            {ageOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Theme / Subject */}
        <div>
          <label className="form-label" style={{ fontSize: '0.8125rem' }}>
            Subject / Domain Theme
          </label>
          <select
            className="form-select"
            value={filters.theme}
            onChange={(e) => handleChange('theme', e.target.value)}
            style={{ padding: '0.65rem 0.85rem', fontSize: '0.875rem' }}
          >
            <option value="">All Domain Themes</option>
            {themeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Format */}
        <div>
          <label className="form-label" style={{ fontSize: '0.8125rem' }}>
            Experience Format
          </label>
          <select
            className="form-select"
            value={filters.format}
            onChange={(e) => handleChange('format', e.target.value)}
            style={{ padding: '0.65rem 0.85rem', fontSize: '0.875rem' }}
          >
            <option value="">All Formats</option>
            {formatOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Location / Geography */}
        <div>
          <label className="form-label" style={{ fontSize: '0.8125rem' }}>
            Location / Geography
          </label>
          <select
            className="form-select"
            value={filters.location}
            onChange={(e) => handleChange('location', e.target.value)}
            style={{ padding: '0.65rem 0.85rem', fontSize: '0.875rem' }}
          >
            <option value="">All Locations</option>
            {locationOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
