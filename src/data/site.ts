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
  body: 'A portfolio for learning robotics in public: the experiments, build notes, failures, repairs, and projects that turn theory into working machines.',
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

export const homeIntro = {
  eyebrow: 'Portfolio structure',
  title: 'Built around evidence, not just finished demos',
  body: 'The site separates learning notes from project case studies so it can show both the finished artifacts and the thinking that produced them.',
} as const;

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
