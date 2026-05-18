export const projectsIntro = {
  eyebrow: 'Projects',
  title: 'Robotics case studies and build threads',
  body: 'Each project is structured around goals, stack, implementation notes, evidence, lessons learned, and the next iteration.',
} as const;

export const projects = [
  {
    slug: 'mobile-robot-base',
    title: 'Mobile robot base',
    stage: 'Planning',
    summary:
      'A compact differential-drive platform for learning motor control, odometry, sensor integration, and closed-loop behavior.',
    problem:
      'Use a small physical robot as a repeatable platform for learning how software decisions interact with motors, sensors, power, and mechanical constraints.',
    approach:
      'Start with a minimal differential-drive base, then add feedback one layer at a time: motor commands, wheel encoders, odometry estimates, and correction loops.',
    stack: ['Differential drive', 'Motor control', 'Encoders', 'Embedded software'],
    tags: ['Controls', 'Odometry', 'Embedded'],
    evidence: ['Design checklist', 'Component tradeoff notes', 'Planned test matrix'],
    lessons: ['Keep hardware loops simple first.', 'Measure before tuning.', 'Make each subsystem testable alone.'],
    nextSteps: ['Select motor and encoder pair', 'Define odometry tests', 'Document wiring and power budget'],
  },
  {
    slug: 'simulation-sandbox',
    title: 'Simulation sandbox',
    stage: 'In progress',
    summary:
      'A repeatable environment for testing robot behaviors before hardware is ready, with notes on what transfers and what does not.',
    problem:
      'Robotics development needs a place to test behavior safely before hardware is available or before a hardware run would be too slow to repeat.',
    approach:
      'Use simulation as a first-pass test environment, while documenting the assumptions that might break when moving from simulated sensors to physical hardware.',
    stack: ['ROS 2', 'Gazebo', 'Launch files', 'Logging'],
    tags: ['Simulation', 'ROS 2', 'Testing'],
    evidence: ['World setup notes', 'Behavior test cases', 'Simulation-to-hardware risk list'],
    lessons: ['Simulation is a test tool, not a guarantee.', 'Logs are part of the interface.', 'Repeatability beats one-off demos.'],
    nextSteps: ['Create baseline world', 'Add simple robot model', 'Record first repeatable behavior test'],
  },
  {
    slug: 'robotics-notebook',
    title: 'Robotics notebook',
    stage: 'Ongoing',
    summary:
      'Short technical writeups that explain concepts by rebuilding them from first principles and connecting them to real project decisions.',
    problem:
      'Robotics concepts are easier to remember when they are tied to a physical behavior, a diagram, or a bug that had to be fixed.',
    approach:
      'Write compact notes that start from a concrete question, explain the concept, and end with how it changes a build decision.',
    stack: ['Technical writing', 'Diagrams', 'Experiments', 'Postmortems'],
    tags: ['Writing', 'Learning', 'Systems'],
    evidence: ['Concept notes', 'Debug writeups', 'Reading summaries'],
    lessons: ['Explaining exposes gaps.', 'Small notes compound.', 'A good diagram is often a test of understanding.'],
    nextSteps: ['Add first note on coordinate frames', 'Create note template', 'Link notes to project pages'],
  },
] as const;

export type Project = (typeof projects)[number];
