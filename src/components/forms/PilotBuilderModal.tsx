import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ArrowLeft, Building2, Calendar, Target } from 'lucide-react';
import { Modal } from '../common/Modal';
import { PrimaryButton } from '../common/PrimaryButton';
import { SecondaryButton } from '../common/SecondaryButton';

interface PilotBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPilotCreated: (summary: string) => void;
}

export const PilotBuilderModal: React.FC<PilotBuilderModalProps> = ({
  isOpen,
  onClose,
  onPilotCreated,
}) => {
  const [step, setStep] = useState(1);
  const [institutionType, setInstitutionType] = useState('School (Grades 9–12)');
  const [theme, setTheme] = useState('Autonomous Systems & Robotics');
  const [format, setFormat] = useState('5-Day Industrial Lab Immersion');
  const [cohortSize, setCohortSize] = useState('16–24 Learners');
  const [term, setTerm] = useState('Upcoming Term (2–4 Months)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schoolName, setSchoolName] = useState('');

  const themes = [
    { id: 'Autonomous Systems & Robotics', desc: 'Hardware-in-the-loop, embedded C++, and sensor fusion testbeds' },
    { id: 'Regenerative Ecology & Agri-Tech', desc: 'Living soil microbiology, LoRaWAN IoT telemetry, and carbon metrics' },
    { id: 'Heritage Craft to Cybernetics', desc: 'Kyoto Kumiko master joinery meets bipedal robotics' },
    { id: 'Biomimicry & Circular Materials', desc: 'Mycelium growth molds and biodegradable polymer synthesis' },
    { id: 'Clean Microgrids & Energy Systems', desc: 'Solar physics and alpine hydropower grid balancing in Germany' },
    { id: 'Coral Acoustics & Marine AI', desc: 'Hydrophone recordings and bio-acoustic machine learning' },
  ];

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    const summary = `Pilot Request: ${institutionType} | Theme: ${theme} | Format: ${format} | Size: ${cohortSize} | Institution: ${schoolName} (${name} <${email}>)`;
    onPilotCreated(summary);
    onClose();
    setStep(1);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="780px" title="Co-Design an Institutional Pilot">
      <div style={{ marginBottom: '1.5rem' }}>
        {/* Step Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', marginBottom: '2rem' }}>
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, backgroundColor: 'var(--border-light)', zIndex: 1 }} />
          {[
            { num: 1, label: 'Institution' },
            { num: 2, label: 'Experience Theme' },
            { num: 3, label: 'Timeline & Launch' },
          ].map((s) => {
            const isDone = step > s.num;
            const isCurrent = step === s.num;
            return (
              <div
                key={s.num}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  padding: '0 0.5rem',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: isCurrent ? 'var(--navy)' : isDone ? 'var(--accent-emerald)' : 'var(--bg-subtle)',
                    color: isCurrent || isDone ? '#FFFFFF' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    marginBottom: '0.25rem',
                  }}
                >
                  {isDone ? <Check size={16} /> : s.num}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: isCurrent ? 700 : 500, color: isCurrent ? 'var(--navy)' : 'var(--text-muted)' }}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* STEP 1: Institution & Cohort */}
        {step === 1 && (
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
              Step 1: Define Your Institution & Target Cohort
            </h4>
            <p className="text-small" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              xplorED adapts real-world immersions to align with your academic calendar and curriculum benchmarks.
            </p>

            <div className="form-group">
              <label className="form-label">Institution Level</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[
                  'School (Grades 8–10)',
                  'School (Grades 11–12)',
                  'Undergraduate / University',
                  'Faculty / Educator Development',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setInstitutionType(item)}
                    style={{
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: institutionType === item ? '2px solid var(--navy)' : '1px solid var(--border-strong)',
                      backgroundColor: institutionType === item ? 'var(--blue-light)' : '#FFFFFF',
                      color: institutionType === item ? 'var(--navy)' : 'var(--text-primary)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      textAlign: 'left',
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Estimated Cohort Size</label>
              <select
                className="form-select"
                value={cohortSize}
                onChange={(e) => setCohortSize(e.target.value)}
              >
                <option value="12–16 Learners (Intensive Lab Cohort)">12–16 Learners (Intensive Lab Cohort)</option>
                <option value="16–24 Learners (Standard Batch)">16–24 Learners (Standard Batch)</option>
                <option value="25–40 Learners (Dual Stream Cohort)">25–40 Learners (Dual Stream Cohort)</option>
                <option value="40+ Learners (Multi-Phase Program)">40+ Learners (Multi-Phase Program)</option>
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
              <PrimaryButton icon={<ArrowRight size={16} />} onClick={() => setStep(2)}>
                Next: Select Experience Theme
              </PrimaryButton>
            </div>
          </div>
        )}

        {/* STEP 2: Theme Selection */}
        {step === 2 && (
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
              Step 2: Choose Your Domain & Experience Format
            </h4>
            <p className="text-small" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              Select an experiential domain. xplorED bridges the theoretical syllabus to practitioners and site testbeds.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {themes.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: theme === t.id ? '2px solid var(--navy)' : '1px solid var(--border-light)',
                    backgroundColor: theme === t.id ? 'var(--blue-light)' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.9375rem', marginBottom: '0.2rem' }}>
                    {t.id}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    {t.desc}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
              <SecondaryButton icon={<ArrowLeft size={16} />} onClick={() => setStep(1)}>
                Back
              </SecondaryButton>
              <PrimaryButton icon={<ArrowRight size={16} />} onClick={() => setStep(3)}>
                Next: Finalize Timeline
              </PrimaryButton>
            </div>
          </div>
        )}

        {/* STEP 3: Timeline & Contact */}
        {step === 3 && (
          <form onSubmit={handleComplete}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.5rem' }}>
              Step 3: Timeline & Proposal Delivery
            </h4>
            <p className="text-small" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              We will generate a customized pilot blueprint with curriculum links, mentor profiles, and safety specs.
            </p>

            <div className="form-group">
              <label className="form-label">Preferred Launch Timeline</label>
              <select className="form-select" value={term} onChange={(e) => setTerm(e.target.value)}>
                <option value="Upcoming Term (Next 1–3 Months)">Upcoming Term (Next 1–3 Months)</option>
                <option value="Mid-Year Term Break (Summer/Winter)">Mid-Year Term Break (Summer/Winter)</option>
                <option value="Next Academic Year Planning">Next Academic Year Planning</option>
              </select>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label">Your Name <span className="required">*</span></label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Dr. Rajeshwari"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Institution Name <span className="required">*</span></label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Oakridge International"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Official Email <span className="required">*</span></label>
              <input
                type="email"
                required
                className="form-input"
                placeholder="e.g. principal@institution.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
              <SecondaryButton icon={<ArrowLeft size={16} />} onClick={() => setStep(2)}>
                Back
              </SecondaryButton>
              <PrimaryButton type="submit" icon={<Sparkles size={16} />}>
                Generate Pilot Proposal Blueprint
              </PrimaryButton>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
};
