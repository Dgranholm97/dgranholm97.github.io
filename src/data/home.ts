export const hero = {
  eyebrow: 'Robotics portfolio',
  title: 'Dylan Granholm',
  body: 'Static Astro site ready for GitHub Pages. Use this first screen as the launch point for projects, experiments, writing, and ways to get in touch.',
  actions: [
    {
      href: 'mailto:dgranholm97@gmail.com',
      label: 'Contact',
      variant: 'primary',
    },
    {
      href: 'https://github.com/dgranholm97',
      label: 'GitHub',
      variant: 'secondary',
    },
  ],
  focusAreas: [
    'Robotics systems',
    'Controls and autonomy',
    'Hardware-minded software',
  ],
} as const;
