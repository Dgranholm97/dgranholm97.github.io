export const learningIntro = {
  eyebrow: 'Learning log',
  title: 'Robotics concepts becoming working knowledge',
  body: 'Short entries for courses, experiments, simulations, notes, and debugging sessions. This is where progress can be visible before it becomes a polished project.',
} as const;

export const learningEntries = [
  {
    slug: 'robot-fundamentals',
    period: 'Now',
    title: 'Robot fundamentals',
    status: 'Active focus',
    summary:
      'Building a stronger base in kinematics, coordinate frames, sensing, control loops, and the tradeoffs that show up once code meets hardware.',
    details:
      'This is the foundation layer: understanding how a robot represents motion, how errors accumulate, and how small implementation choices show up in real behavior.',
    skills: ['Kinematics', 'Frames', 'Control loops'],
    evidence: ['Derivations and diagrams', 'Small code experiments', 'Bench test notes'],
  },
  {
    slug: 'ros-2-autonomy',
    period: 'Next',
    title: 'ROS 2 and autonomy workflows',
    status: 'Planned',
    summary:
      'Turning small robot behaviors into repeatable systems with nodes, messages, launches, logs, and simulation-first development.',
    details:
      'The goal is to learn the workflow around robotics software, not just individual APIs: how to split responsibilities, inspect behavior, and reproduce a run.',
    skills: ['ROS 2', 'Gazebo', 'Navigation'],
    evidence: ['Launch files', 'Message diagrams', 'Simulation runs'],
  },
  {
    slug: 'build-notes',
    period: 'Always',
    title: 'Build notes and postmortems',
    status: 'Ongoing habit',
    summary:
      'Documenting decisions, false starts, measurements, and fixes so every project leaves behind a useful trail instead of just a final demo.',
    details:
      'The notebook is where the messy parts become useful: what failed, how it was diagnosed, and what changed after testing.',
    skills: ['Documentation', 'Testing', 'Debugging'],
    evidence: ['Decision logs', 'Failure notes', 'Next-iteration lists'],
  },
] as const;
