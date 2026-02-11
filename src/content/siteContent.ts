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
    subtitle: 'Software Engineer | AI & Full-Stack Developer',
    scrollIndicator: 'Scroll',
  },

  // === ABOUT SECTION ===
  about: {
    sectionNumber: '01',
    sectionLabel: 'About',
    title: 'Bridging the gap between scalable web solutions and artificial intelligence.',
    paragraphs: [
      `I engineer integrated software solutions where modern web frameworks meet data-driven 
      intelligence. My focus lies at the intersection of full-stack development, computer vision, 
      and scalable infrastructure—building applications that integrate complex algorithms 
      into accessible, user-friendly web solutions.`,
      `Every project is a commitment to impact: from designing accessible tools that assist 
      the visually impaired, to deploying microservices that manage dynamic data efficiently. 
      I believe the best technology is human-centric—seamlessly integrated, reliable, 
      and built to solve actual problems.`,
      `Currently exploring the frontiers of Deep Learning and NLP, creating systems that 
      bridge the gap between complex data processing and practical, everyday utility.`,
    ],
    focusAreas: [
      {
        title: 'Computer Vision & AI',
        description: `Implementing neural networks for object detection and NLP tasks. 
        From YOLO models to speech synthesis, building systems that interact with the real world.`,
      },
      {
        title: 'Full-Stack Engineering',
        description: `End-to-end application development: connecting React frontends with 
        Spring Boot backends. Making AI accessible through responsive web interfaces.`,
      },
      {
        title: 'Backend Systems',
        description: `Building scalable, containerized microservices. Clean Java architecture, 
        optimized databases, and infrastructure that ensures reliability and performance.`,
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
    footerNote: 'Continuously expanding expertise across full-stack technologies, cloud services, and AI integration. Always learning, always building.',
  },

  // === CONTACT SECTION ===
  contact: {
    sectionNumber: '04',
    sectionLabel: 'Contact',
    title: "Let's build something remarkable.",
    description: `Open to discussing new projects, creative collaborations, or opportunities 
    to contribute to ambitious AI and engineering initiatives.`,
    ctaButton: 'Start a conversation',
    email: 'emrekucuk2003@gmail.com',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/EmreeKucuk',
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/emrekucuk03',
      },
      {
        label: 'Email',
        href: 'mailto:emrekucuk2003@gmail.com',
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
