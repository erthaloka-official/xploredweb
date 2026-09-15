import React, { useState, useMemo } from 'react';
import {
  Compass,
  Users,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { SearchBar } from '../components/explore/SearchBar';
import { FilterPanel } from '../components/explore/FilterPanel';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { PersonCard } from '../components/cards/PersonCard';
import { PlaceCard } from '../components/cards/PlaceCard';
import { programs, people, places } from '../data';
import { Program, PillarType } from '../types/cms';

interface ExplorePageProps {
  initialPillar?: PillarType | null;
  onViewProgram: (program: Program) => void;
  onEnquireProgram: (program: Program) => void;
  onOpenEnquiry: (category?: string) => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  initialPillar,
  onViewProgram,
  onEnquireProgram,
  onOpenEnquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'All' | PillarType>(
    initialPillar || 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    ageGroup: '',
    theme: '',
    format: '',
    location: '',
  });

  // Extract unique filter options from data
  const ageOptions = useMemo(() => {
    const set = new Set<string>();
    programs.forEach((p) => set.add(p.ageGroup));
    return Array.from(set);
  }, []);

  const themeOptions = useMemo(() => {
    const set = new Set<string>();
    programs.forEach((p) => set.add(p.theme));
    return Array.from(set);
  }, []);

  const formatOptions = useMemo(() => {
    const set = new Set<string>();
    programs.forEach((p) => set.add(p.format));
    return Array.from(set);
  }, []);

  const locationOptions = useMemo(() => {
    const set = new Set<string>();
    programs.forEach((p) => set.add(p.location));
    return Array.from(set);
  }, []);

  // Filter Programs
  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.theme.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.provider.toLowerCase().includes(query) ||
        p.learningThemes.some((t) => t.toLowerCase().includes(query)) ||
        p.skillsGained.some((s) => s.toLowerCase().includes(query));

      const matchAge = !filters.ageGroup || p.ageGroup === filters.ageGroup;
      const matchTheme = !filters.theme || p.theme === filters.theme;
      const matchFormat = !filters.format || p.format === filters.format;
      const matchLoc = !filters.location || p.location === filters.location;

      return matchQuery && matchAge && matchTheme && matchFormat && matchLoc;
    });
  }, [searchQuery, filters]);

  // Filter People
  const filteredPeople = useMemo(() => {
    return people.filter((per) => {
      const query = searchQuery.toLowerCase().trim();
      return (
        !query ||
        per.name.toLowerCase().includes(query) ||
        per.role.toLowerCase().includes(query) ||
        per.organisation.toLowerCase().includes(query) ||
        per.location.toLowerCase().includes(query) ||
        per.expertise.some((e) => e.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  // Filter Places
  const filteredPlaces = useMemo(() => {
    return places.filter((plc) => {
      const query = searchQuery.toLowerCase().trim();
      return (
        !query ||
        plc.name.toLowerCase().includes(query) ||
        plc.location.toLowerCase().includes(query) ||
        plc.type.toLowerCase().includes(query) ||
        plc.themes.some((t) => t.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  const handleResetFilters = () => {
    setFilters({
      ageGroup: '',
      theme: '',
      format: '',
      location: '',
    });
    setSearchQuery('');
  };

  return (
    <div className="fade-in section-padding-sm">
      <div className="container">
        {/* Header Hero */}
        <div style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
          <span className="eyebrow">xplorED DISCOVERY PLATFORM</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', marginBottom: '1rem' }}>
            Discover what can teach you.
          </h1>
          <p className="text-lead" style={{ fontSize: '1.15rem' }}>
            Explore people, places, programs and possibilities that connect learning with the real world.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ marginBottom: '1.5rem' }}>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Multi-Dimensional Filter Panel */}
        <FilterPanel
          filters={filters}
          onFilterChange={setFilters}
          onReset={handleResetFilters}
          ageOptions={ageOptions}
          themeOptions={themeOptions}
          formatOptions={formatOptions}
          locationOptions={locationOptions}
        />

        {/* Category Discovery Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem',
            borderBottom: '1px solid var(--border-light)',
            paddingBottom: '1rem',
          }}
        >
          {[
            { id: 'All', label: 'All Discoveries', count: filteredPrograms.length + filteredPeople.length + filteredPlaces.length },
            { id: 'Programs', label: 'Programs (Experiences)', count: filteredPrograms.length, icon: <Compass size={16} /> },
            { id: 'People', label: 'People (Practitioners)', count: filteredPeople.length, icon: <Users size={16} /> },
            { id: 'Places', label: 'Places (Living Labs)', count: filteredPlaces.length, icon: <MapPin size={16} /> },
            { id: 'Possibilities', label: 'Possibilities (Next Loops)', count: 6, icon: <Sparkles size={16} /> },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.15rem',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  backgroundColor: isSelected ? 'var(--navy)' : 'var(--bg-soft)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid var(--navy)' : '1px solid var(--border-light)',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer',
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.1rem 0.45rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.06)',
                    color: isSelected ? '#FFFFFF' : 'var(--text-muted)',
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Sections */}
        {/* 1. PROGRAMS */}
        {(activeTab === 'All' || activeTab === 'Programs') && (
          <section style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)' }}>
                  Hands-On Real-World Programs ({filteredPrograms.length})
                </h2>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  Experience learning by doing — structured immersions with tangible real-world outcomes.
                </p>
              </div>
            </div>

            {filteredPrograms.length === 0 ? (
              <div className="card-soft" style={{ textAlign: 'center', padding: '3rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1rem' }}>
                  No programs match the selected filters.
                </p>
                <button onClick={handleResetFilters} className="btn btn-secondary btn-sm">
                  Reset Filters
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2rem',
                }}
              >
                {filteredPrograms.map((prog) => (
                  <ExperienceCard
                    key={prog.id}
                    program={prog}
                    onViewDetails={onViewProgram}
                    onEnquire={onEnquireProgram}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* 2. PEOPLE */}
        {(activeTab === 'All' || activeTab === 'People') && (
          <section style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)' }}>
                  People: Meet Those Who Know & Do ({filteredPeople.length})
                </h2>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  Active engineers, scientists, master craftsmen, founders, and creators.
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}
            >
              {filteredPeople.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          </section>
        )}

        {/* 3. PLACES */}
        {(activeTab === 'All' || activeTab === 'Places') && (
          <section style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)' }}>
                  Places: Discover Where Learning Happens ({filteredPlaces.length})
                </h2>
                <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                  High-torque testbeds, regenerative living reserves, traditional ateliers, and solar labs.
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
              }}
            >
              {filteredPlaces.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          </section>
        )}

        {/* 4. POSSIBILITIES */}
        {(activeTab === 'All' || activeTab === 'Possibilities') && (
          <section style={{ marginBottom: '4rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)' }}>
                Possibilities: See What One Experience Leads To
              </h2>
              <p className="text-small" style={{ color: 'var(--text-secondary)' }}>
                Continuous learning means each milestone unlocks an adjacent exploration frontier.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {[
                {
                  from: 'Autonomous Systems Lab',
                  to: 'Deep Drone Telemetry Expedition in Black Forest',
                  why: 'Apply ground obstacle avoidance to 3D aerial navigation.',
                },
                {
                  from: 'Soil Microbiome Project',
                  to: 'Urban Hydroponics & Vertical Farming Sprint',
                  why: 'Scale soil microbiology principles to controlled urban agriculture.',
                },
                {
                  from: 'Heritage Craft in Kyoto',
                  to: 'Bionics & Compliant Actuator Research Track',
                  why: 'Translate hand joinery tolerances into assistive robotic grips.',
                },
                {
                  from: 'Biomimicry in Paris',
                  to: 'Circular Packaging Seed Venture Grants',
                  why: 'Move from lab mycelium samples to commercial zero-waste prototypes.',
                },
                {
                  from: 'Freiburg Smart Grids',
                  to: 'Hydrogen Electrolysis Prototyping Workshop',
                  why: 'Explore chemical storage of intermittent renewable energy.',
                },
                {
                  from: 'Coral Reef Bio-Acoustics',
                  to: 'Global Reef Sound Observatory Student Fellowship',
                  why: 'Publish open ocean acoustic data to international research archives.',
                },
              ].map((pos, idx) => (
                <div
                  key={idx}
                  className="card"
                  style={{
                    padding: '1.75rem',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Path Progression
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                    From: <strong style={{ color: 'var(--navy)' }}>{pos.from}</strong>
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem' }}>
                    To: {pos.to}
                  </div>
                  <p className="text-small" style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
                    {pos.why}
                  </p>
                  <button
                    onClick={() => onOpenEnquiry('Learner')}
                    className="btn-link"
                    style={{ fontSize: '0.8125rem' }}
                  >
                    <span>Enquire About Pathways</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
