import { Country } from '../types/cms';

export const countries: Country[] = [
  {
    id: 'ger-01',
    slug: 'germany',
    name: 'Germany',
    themeVerb: 'Build',
    subtitle: 'Engineering • Industry • Sustainability • Applied Learning • Culture',
    focusAreas: [
      'Automotive & Clean Powertrains',
      'Solar Photovoltaics & Smart Grids',
      'Dual Apprenticeship & Precision Tooling',
      'Circular Industrial Ecology',
    ],
    heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    ],
    editorialNarrative: 'Germany’s strength lies in *Technik* — the deep integration of scientific theory with industrial execution. From the precision manufacturing corridors of Stuttgart to the zero-energy solar neighborhoods of Freiburg, learners experience how engineering excellence shapes the future of sustainable living.',
    whyThisMatters: 'Learners understand how engineering rigor, dual-track vocational respect, and ecological stewardship build industrial infrastructure that lasts generations.',
    hubs: [
      {
        name: 'Stuttgart & Baden-Württemberg',
        focus: 'Automotive Prototyping & Mechatronics',
        description: 'Immerse inside advanced robotics assembly testbeds, wind tunnels, and EV battery testing facilities.',
      },
      {
        name: 'Freiburg Green City & Black Forest',
        focus: 'Renewable Smart Grids & Hydropower',
        description: 'Explore the physics of solar photovoltaics with Fraunhofer ISE and inspect alpine hydro-electric dams.',
      },
      {
        name: 'Munich Innovation Ecosystem',
        focus: 'Applied Physics & Deep Tech Venturing',
        description: 'Engage with university spinouts building quantum computing interfaces and aerospace hardware.',
      },
    ],
    featuredExpeditions: ['prog-01', 'prog-05'],
  },
  {
    id: 'jpn-01',
    slug: 'japan',
    name: 'Japan',
    themeVerb: 'Evolve',
    subtitle: 'Technology • Design • Craft • Culture • Innovation',
    focusAreas: [
      'Humanoid Robotics & Kinematics',
      'Master Woodcraft & Spatial Harmony',
      'High-Speed Bullet Train Aerodynamics',
      'Zen Aesthetics & Human-Centered Design',
    ],
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    ],
    editorialNarrative: 'In Japan, innovation is not an abrupt break from the past, but an organic evolution. The same spirit of *Monozukuri* (the craft of making things with heart and mind) that carved 1,000-year-old temples informs modern bipedal robotics, Shinkansen aerodynamics, and world-leading UI design.',
    whyThisMatters: 'Learners discover how profound respect for material, geometry, and human dignity creates technology that feels graceful, intuitive, and enduring.',
    hubs: [
      {
        name: 'Kyoto Artisanal Corridor',
        focus: 'Wood Joinery, Ceramic Chemistry & Zen Architecture',
        description: 'Work alongside Living National Treasure master woodcarvers and ceramicists in ancient temple ateliers.',
      },
      {
        name: 'Tsukuba Science City',
        focus: 'Cybernetics, Space Exploration & Bionics',
        description: 'Visit Japan Aerospace Exploration Agency (JAXA) and prototype compliant robotic gripper arms.',
      },
      {
        name: 'Tokyo Tech & Odaiba District',
        focus: 'Human-Robot Interaction & Future Mobility',
        description: 'Analyze real-time kinematic telemetry in world-class human-centered robotics laboratories.',
      },
    ],
    featuredExpeditions: ['prog-03'],
  },
  {
    id: 'fra-01',
    slug: 'france',
    name: 'France',
    themeVerb: 'Create',
    subtitle: 'Arts • Culture • Science • Language • Creativity',
    focusAreas: [
      'Biomimicry & Sustainable Polymers',
      'Culinary Chemistry & Agronomy',
      'Aero-Space Architecture & Heritage Conservation',
      'Creative Coding & Visual Media',
    ],
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop',
    ],
    editorialNarrative: 'France is where rigorous rational inquiry meets boundless creative imagination. At the intersection of Paris-Saclay’s advanced bio-laboratories and the Loire Valley’s architectural heritage, learners discover that science and art are complementary expressions of human curiosity.',
    whyThisMatters: 'Learners understand that breakthrough innovation requires the courage to imagine new forms, cross disciplinary boundaries, and create with cultural nuance.',
    hubs: [
      {
        name: 'Paris-Saclay Innovation Campus',
        focus: 'Biomimicry & Circular Polymer Design',
        description: 'Synthesize algae biopolymers and mycelium packaging inside Europe’s top scientific cluster.',
      },
      {
        name: 'Toulouse Aerospace Valley',
        focus: 'Aviation Fluid Dynamics & Satellite Telemetry',
        description: 'Explore clean aviation prototypes and satellite earth-observation data streams.',
      },
      {
        name: 'Brittany Marine Biosciences Coast',
        focus: 'Ocean Bio-Acoustics & Algal Ecology',
        description: 'Study coastal ecosystems, marine bio-actives, and ocean energy harvesting test sites.',
      },
    ],
    featuredExpeditions: ['prog-04', 'prog-06'],
  },
];
