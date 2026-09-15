// xplorED CMS Schema Definitions

export type AudienceType = 
  | 'Schools'
  | 'Higher Education'
  | 'Skilling'
  | 'Organisations / L&D'
  | 'Educators'
  | 'Learners'
  | 'Parents';

export type PillarType = 'People' | 'Places' | 'Programs' | 'Possibilities';

export type ExperienceFormat = 
  | 'Workshop'
  | 'Project'
  | 'Industry Visit'
  | 'Challenge'
  | 'Learning Expedition'
  | 'Lab Immersion'
  | 'Masterclass'
  | 'Studio Residency';

export type PartnerTrack = 'People' | 'Places' | 'Organisations';

export interface Program {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  type: ExperienceFormat;
  theme: string;
  learningThemes: string[];
  ageGroup: string;
  location: string;
  country: string;
  duration: string;
  format: ExperienceFormat;
  outcomes: string[];
  outcomeStatement: string;
  provider: string;
  providerType: 'Industry' | 'Research Lab' | 'Cultural Space' | 'Practitioner' | 'University';
  image: string;
  gallery?: string[];
  featured?: boolean;
  status: 'active' | 'upcoming' | 'pilot';
  description: string;
  learningObjectives: string[];
  whatLearnersDo: string[];
  whoTheyMeet: string[];
  whereItHappens: string;
  scheduleHighlights: { dayOrTime: string; activity: string }[];
  inclusions: string[];
  safetyCompliance: string[];
  skillsGained: string[];
  reflections?: { quote: string; author: string; role: string }[];
  nextPossibilities: string[];
  relatedPrograms?: string[];
}

export interface Person {
  id: string;
  slug: string;
  name: string;
  role: string;
  type: 'Expert' | 'Practitioner' | 'Mentor' | 'Creator' | 'Founder' | 'Professional';
  organisation: string;
  expertise: string[];
  location: string;
  bio: string;
  image: string;
  verification: boolean;
  availability: string;
  programsContributing: string[];
  quote?: string;
}

export interface Place {
  id: string;
  slug: string;
  name: string;
  type: 'Company' | 'Lab' | 'Farm' | 'Studio' | 'Museum' | 'Cultural Space' | 'Natural Environment';
  location: string;
  country: string;
  themes: string[];
  facilities: string[];
  capacity: string;
  accessType: 'Guided Cohort' | 'Institutional Residency' | 'Field Program';
  image: string;
  description: string;
  programsHosted: string[];
  highlight: string;
}

export interface Partner {
  id: string;
  slug: string;
  organisation: string;
  type: 'Industry' | 'University' | 'Community' | 'Cultural Institution' | 'International Partner';
  geography: string;
  focus: string[];
  description: string;
  logo: string;
  website?: string;
  status: 'Active Partner' | 'Founding Partner';
  collaborationHighlights: string[];
}

export interface Country {
  id: string;
  slug: string;
  name: string;
  themeVerb: string; // "Build", "Evolve", "Create"
  subtitle: string;
  focusAreas: string[];
  heroImage: string;
  gallery: string[];
  editorialNarrative: string;
  whyThisMatters: string;
  hubs: { name: string; focus: string; description: string }[];
  featuredExpeditions: string[];
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  category: 'Learner Story' | 'Institutional Impact' | 'Practitioner Reflection';
  date: string;
  image: string;
  summary: string;
  body: string;
  author: { name: string; role: string; institution: string };
  relatedProgramId?: string;
  keyTakeaway: string;
}

export interface EnquirySubmission {
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone?: string;
  category: 'Institution' | 'Partner' | 'Educator' | 'Parent' | 'Learner' | 'General';
  track?: 'People' | 'Places' | 'Organisations' | 'Pilot' | 'Expedition';
  learnerStage?: string;
  location?: string;
  message: string;
  programOfInterest?: string;
}
