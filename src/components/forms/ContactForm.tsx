import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { EnquirySubmission } from '../../types/cms';
import { PrimaryButton } from '../common/PrimaryButton';

interface ContactFormProps {
  initialCategory?: string;
  initialProgramTitle?: string;
  onSuccessSubmit?: (data: EnquirySubmission) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialCategory = 'Institution',
  initialProgramTitle = '',
  onSuccessSubmit,
}) => {
  const [formData, setFormData] = useState<EnquirySubmission>({
    name: '',
    organisation: '',
    role: '',
    email: '',
    phone: '',
    category: (initialCategory as any) || 'Institution',
    track: 'Pilot',
    learnerStage: 'Grades 9–12',
    location: '',
    message: initialProgramTitle
      ? `We are interested in exploring "${initialProgramTitle}" for our cohort.`
      : '',
    programOfInterest: initialProgramTitle,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;

    const formDataPayload = new FormData(form);
    formDataPayload.set('access_key', '8fb272e4-37c4-4adc-8611-da05c7dd2b2d');

    const originalText = submitBtn ? submitBtn.textContent || 'Submit Partnership Enquiry' : 'Submit Partnership Enquiry';

    if (submitBtn) {
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataPayload,
      });

      const data = await response.json();

      if (response.ok) {
        alert('Success! Your message has been sent.');
        form.reset();
        setFormData({
          name: '',
          organisation: '',
          role: '',
          email: '',
          phone: '',
          category: (initialCategory as any) || 'Institution',
          track: 'Pilot',
          learnerStage: 'Grades 9–12',
          location: '',
          message: '',
        });
        if (onSuccessSubmit) {
          onSuccessSubmit(formData);
        }
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      if (submitBtn) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    }
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(1.75rem, 4vw, 3rem)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <input type="hidden" name="subject" value={`xplorED Partnership Enquiry: ${formData.category} - ${formData.organisation || 'New'}`} />
      <input type="hidden" name="from_name" value="xplorED Platform" />
      <input type="hidden" name="category" value={formData.category} />

      {/* Category Selection Tabs */}
      <div style={{ marginBottom: '2rem' }}>
        <label className="form-label" style={{ marginBottom: '0.75rem' }}>
          I am reaching out as a / an:
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {[
            { id: 'Institution', label: 'School / University' },
            { id: 'Partner', label: 'Industry / Lab Partner' },
            { id: 'Educator', label: 'Educator / Faculty' },
            { id: 'Parent', label: 'Parent / Guardian' },
            { id: 'Learner', label: 'Learner / Fellow' },
          ].map((cat) => {
            const isSelected = formData.category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFormData({ ...formData, category: cat.id as any })}
                style={{
                  padding: '0.6rem 1.1rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  border: isSelected ? '2px solid var(--navy)' : '1px solid var(--border-strong)',
                  backgroundColor: isSelected ? 'var(--navy)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2-Col Grid: Name & Organisation */}
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">
            Your Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            className="form-input"
            placeholder="e.g. Dr. Priya Nair"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            Organisation / School / Lab <span className="required">*</span>
          </label>
          <input
            type="text"
            name="organisation"
            required
            className="form-input"
            placeholder="e.g. Greenwood High / AeroTech Labs"
            value={formData.organisation}
            onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
          />
        </div>
      </div>

      {/* 2-Col Grid: Email & Role */}
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">
            Work Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="form-input"
            placeholder="e.g. priya@institution.org"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Role / Designation</label>
          <input
            type="text"
            name="role"
            className="form-input"
            placeholder="e.g. Principal / Dean / Research Lead"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
        </div>
      </div>

      {/* 2-Col Grid: Learner Group & Location */}
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">Target Learner Stage</label>
          <select
            className="form-select"
            name="learnerStage"
            value={formData.learnerStage}
            onChange={(e) => setFormData({ ...formData, learnerStage: e.target.value })}
          >
            <option value="Grades 6–8 (Middle School)">Grades 6–8 (Middle School)</option>
            <option value="Grades 9–10 (Secondary)">Grades 9–10 (Secondary)</option>
            <option value="Grades 11–12 (Senior Secondary)">Grades 11–12 (Senior Secondary)</option>
            <option value="Undergraduate / University">Undergraduate / University</option>
            <option value="Educator / Faculty Development">Educator / Faculty Development</option>
            <option value="Corporate / L&D Cohort">Corporate / L&D Cohort</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Phone / WhatsApp (Optional)</label>
          <input
            type="tel"
            name="phone"
            className="form-input"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      {/* Message */}
      <div className="form-group">
        <label className="form-label">
          How can we collaborate? / What are you looking to build?
        </label>
        <textarea
          className="form-textarea"
          name="message"
          rows={4}
          placeholder="Tell us about your learning objectives, desired real-world theme, cohort size, or partnership ideas..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {/* Submit Button */}
      <PrimaryButton
        type="submit"
        size="lg"
        fullWidth
        icon={<ArrowRight size={18} />}
      >
        Submit Partnership Enquiry
      </PrimaryButton>

      <p className="text-small" style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)' }}>
        We respect your privacy. No spam. Direct response from our core ecosystem team.
      </p>
    </form>
  );
};
