export const siteNav = [
  {
    href: '/learning/',
    label: 'Learning',
  },
  {
    href: '/projects/',
    label: 'Projects',
  },
  {
    href: '/about/',
    label: 'About',
  },
  {
    href: 'https://github.com/dgranholm97',
    label: 'GitHub',
  },
] as const;

export const hero = {
  eyebrow: 'Robotics learning lab',
  title: 'Dylan Granholm',
  body: 'Learning robotics in public through build notes, experiments, simulations, and project case studies.',
  actions: [
    {
      href: '/learning/',
      label: 'Learning log',
      variant: 'primary',
    },
    {
      href: '/projects/',
      label: 'Projects',
      variant: 'secondary',
    },
  ],
  focusAreas: [
    'Robotics systems',
    'Controls and autonomy',
    'Hardware-minded software',
  ],
} as const;

export const homePaths = [
  {
    eyebrow: 'Learning',
    title: 'Follow the progress',
    body: 'Notes, experiments, concepts, and debugging sessions that show how the robotics foundation is developing over time.',
    href: '/learning/',
    cta: 'Open learning log',
  },
  {
    eyebrow: 'Projects',
    title: 'Explore the builds',
    body: 'Case-study pages for robotics projects, including goals, stack, evidence, lessons, and next steps.',
    href: '/projects/',
    cta: 'View projects',
  },
] as const;

export const about = {
  eyebrow: 'About',
  title: 'Learning robotics by building, measuring, and explaining',
  body: 'This portfolio is a place to collect the path from curiosity to capability: what I am studying, what I am building, what broke, and what I learned by making it better.',
  principles: [
    'Make progress visible before it is polished.',
    'Treat failures, measurements, and repairs as portfolio material.',
    'Connect theory to hardware, simulation, and repeatable tests.',
  ],
} as const;
