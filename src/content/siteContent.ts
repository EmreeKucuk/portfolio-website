// ===========================================
// SITE CONTENT - Tüm yazılar burada düzenlenir
// ===========================================

export const siteContent = {
  // === NAVIGATION ===
  navigation: {
    logo: 'EK',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#projects' },
      { label: 'Stack', href: '#stack' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  // === PRELOADER ===
  preloader: {
    text: 'Loading Experience',
  },

  // === HERO SECTION ===
  hero: {
    name: 'Emre Küçük',
    subtitle: 'Engineering Intelligent Systems',
    scrollIndicator: 'Scroll',
  },

  // === ABOUT SECTION ===
  about: {
    sectionNumber: '01',
    sectionLabel: 'About',
    title: 'Building systems that think, learn, and scale.',
    paragraphs: [
      `I architect intelligent systems where machine learning meets production-grade engineering. 
      My focus lies at the intersection of deep learning, natural language processing, and 
      scalable infrastructure—building AI that doesn't just work in notebooks, but thrives 
      in the real world.`,
      `Every project is an exercise in precision: from designing neural architectures that 
      capture semantic meaning, to deploying models that serve millions of predictions 
      with sub-second latency. I believe the best AI systems are invisible—seamlessly 
      integrated, rigorously tested, and built to evolve.`,
      `Currently exploring the frontiers of computer vision, speech recognition, and 
      multimodal AI systems that bridge the gap between human intuition and machine intelligence.`,
    ],
    focusAreas: [
      {
        title: 'Deep Learning',
        description: `Designing and training neural networks for computer vision, NLP, and multimodal applications. 
        From CNNs to Transformers, building models that understand.`,
      },
      {
        title: 'AI Engineering',
        description: `End-to-end machine learning pipelines: data processing, model training, optimization, 
        and deployment. Making AI production-ready.`,
      },
      {
        title: 'System Architecture',
        description: `Building scalable, maintainable software systems. Clean code, robust APIs, 
        and infrastructure that grows with demand.`,
      },
    ],
  },

  // === TECH STACK SECTION ===
  techStack: {
    sectionNumber: '03',
    sectionLabel: 'Technical Arsenal',
    title: 'Tools of the craft',
    legend: {
      expert: 'Expert',
      advanced: 'Advanced',
      proficient: 'Proficient',
    },
    categories: [
      {
        name: 'Languages',
        items: [
          { name: 'Python', level: 'expert' as const },
          { name: 'TypeScript', level: 'advanced' as const },
          { name: 'JavaScript', level: 'advanced' as const },
          { name: 'Java', level: 'advanced' as const },
          { name: 'C++', level: 'proficient' as const },
        ],
      },
      {
        name: 'ML & AI',
        items: [
          { name: 'TensorFlow', level: 'expert' as const },
          { name: 'PyTorch', level: 'advanced' as const },
          { name: 'Scikit-learn', level: 'expert' as const },
          { name: 'OpenCV', level: 'advanced' as const },
          { name: 'Keras', level: 'advanced' as const },
        ],
      },
      {
        name: 'Web & Frameworks',
        items: [
          { name: 'React', level: 'advanced' as const },
          { name: 'Next.js', level: 'advanced' as const },
          { name: 'Node.js', level: 'proficient' as const },
          { name: 'FastAPI', level: 'advanced' as const },
          { name: 'Flask', level: 'proficient' as const },
        ],
      },
      {
        name: 'Tools & Infrastructure',
        items: [
          { name: 'Git', level: 'expert' as const },
          { name: 'Docker', level: 'advanced' as const },
          { name: 'Jupyter', level: 'expert' as const },
          { name: 'Linux', level: 'advanced' as const },
          { name: 'VS Code', level: 'expert' as const },
        ],
      },
    ],
    footerNote: `Continuously expanding expertise across emerging technologies in machine learning, 
    cloud infrastructure, and software architecture. Always learning, always building.`,
  },

  // === CONTACT SECTION ===
  contact: {
    sectionNumber: '04',
    sectionLabel: 'Contact',
    title: "Let's build something remarkable.",
    description: `Open to discussing new projects, creative collaborations, or opportunities 
    to contribute to ambitious AI and engineering initiatives.`,
    ctaButton: 'Start a conversation',
    email: 'contact@emrekucuk.dev',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/EmreeKucuk',
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/emrekucuk',
      },
      {
        label: 'Email',
        href: 'mailto:contact@emrekucuk.dev',
      },
    ],
    location: {
      label: 'Location',
      value: 'Istanbul, Turkey',
    },
    localTime: {
      label: 'Local Time',
      timezone: 'Europe/Istanbul',
      suffix: 'TRT',
    },
    footer: {
      copyright: 'Emre Küçük. Engineered with precision.',
      builtWith: 'Built with Next.js + GSAP',
    },
  },
}

// Type exports for better TypeScript support
export type SiteContent = typeof siteContent
export type TechLevel = 'expert' | 'advanced' | 'proficient'
export type TechItem = { name: string; level: TechLevel }
export type TechCategory = { name: string; items: TechItem[] }
