// ===========================================
// SITE CONTENT - Tüm yazılar burada düzenlenir
// ===========================================

export const siteContent = {
  tr: {
    // === NAVIGATION ===
    navigation: {
      logo: 'EK',
      items: [
        { label: 'Hakkımda', href: '#about' },
        { label: 'Projeler', href: '#projects' },
        { label: 'Teknolojiler', href: '#stack' },
        { label: 'İletişim', href: '#contact' },
      ],
    },

    // === PRELOADER ===
    preloader: {
      text: 'Yükleniyor',
    },

    // === HERO SECTION ===
    hero: {
      name: 'Emre Küçük',
      subtitle: 'Yazılım Mühendisi | Yapay Zeka & Full-Stack Geliştirici',
      scrollIndicator: 'Kaydır',
    },

    // === ABOUT SECTION ===
    about: {
      sectionNumber: '01',
      sectionLabel: 'Hakkımda',
      title: 'Güçlü backend mimarileri ile yapay zeka çözümleri arasında köprü kuruyorum.',
      paragraphs: [
        `Modern web teknolojilerini yapay zeka ile birleştiren çözümler geliştiriyorum. 
      Odak noktam; güçlü bir backend altyapısı kurmak ve karmaşık yapay zeka algoritmalarını, 
      son kullanıcının rahatça kullanabileceği web arayüzlerine dönüştürmek.`,
        `Geliştirdiğim her projede gerçek bir soruna çözüm üretmeyi hedefliyorum. 
      Görme engelliler için geliştirdiğim sesli asistan uygulamasından, büyük verileri 
      yöneten servislere kadar; amacım her zaman insanların hayatını kolaylaştıran, 
      işlevsel teknolojiler üretmek.`,
        `Şu anda Derin Öğrenme ve Doğal Dil İşleme (NLP) alanlarında kendimi geliştirmeye 
      devam ediyor, öğrendiğim teorik bilgileri pratik ve çalışan uygulamalara dönüştürüyorum.`,
      ],
      focusAreas: [
        {
          title: 'Görüntü İşleme & Yapay Zeka',
          description: `Yapay zeka modellerini gerçek hayata uyarlıyorum. YOLO ile nesne tanıma 
        ve sesli asistanlar gibi teknolojileri projelerime entegre ediyorum.`,
        },
        {
          title: 'Full-Stack Geliştirme',
          description: `React ile modern arayüzler tasarlıyor, bunları Spring Boot altyapısıyla 
        birleştirerek uçtan uca, çalışan sistemler kuruyorum.`,
        },
        {
          title: 'Backend Sistemleri',
          description: `Temiz ve sürdürülebilir kod yazmaya odaklanıyorum. Veritabanı optimizasyonu 
        ve mikroservis mimarileriyle performansı yüksek sistemler kuruyorum.`,
        },
      ],
    },

    // === PROJECTS SECTION ===
    projects: {
      sectionNumber: '02',
      sectionLabel: 'Projeler',
      title: 'Seçili Çalışmalar',
      viewProject: 'Projeyi Görüntüle',
      items: [
        {
          id: 'deep-learning',
          title: 'Derin Öğrenme Araştırması',
          category: 'Sinir Ağları',
          description: 'Son teknoloji mimarileri keşfeden gelişmiş derin öğrenme uygulamaları. Görüntü analizi için evrişimli ağlardan dizi işleme için tekrarlayan modellere.',
        },
        {
          id: 'image-recognition',
          title: 'Erişilebilirlik için Görü',
          category: 'Bilgisayarlı Görü',
          description: 'Görme engelli kullanıcılara yardımcı olmak için tasarlanmış görüntü tanıma sistemi. Görsel dünyayı tanımlamak için son teknoloji nesne tespiti ve sahne anlama.',
        },
        {
          id: 'speech-recognition',
          title: 'Konuşma Tanıma Motoru',
          category: 'Doğal Dil İşleme',
          description: 'Doğal dil anlama özellikli gerçek zamanlı konuşmadan metne sistemi. Ses sinyallerini işleme ve yüksek doğrulukla eyleme dönüştürülebilir metne dönüştürme.',
        },
        {
          id: 'snake-ai',
          title: 'AI Oyun Arenası',
          category: 'Pekiştirmeli Öğrenme',
          description: 'Klasik oyun ortamlarında yarışan yapay zeka ajanları. Kendi kendine oynama ve keşif yoluyla optimal stratejiler öğrenen pekiştirmeli öğrenme algoritmaları.',
        },
      ],
    },

    // === TECH STACK SECTION ===
    techStack: {
      sectionNumber: '03',
      sectionLabel: 'Teknik Donanım',
      title: 'Kullandığım Araçlar',
      legend: {
        expert: 'Uzman',
        advanced: 'İleri',
        proficient: 'Yetkin',
      },
      categories: [
        {
          name: 'Diller',
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
          name: 'Web & Framework',
          items: [
            { name: 'React', level: 'advanced' as const },
            { name: 'Next.js', level: 'advanced' as const },
            { name: 'Node.js', level: 'proficient' as const },
            { name: 'FastAPI', level: 'advanced' as const },
            { name: 'Flask', level: 'proficient' as const },
          ],
        },
        {
          name: 'Araçlar & Altyapı',
          items: [
            { name: 'Git', level: 'expert' as const },
            { name: 'Docker', level: 'advanced' as const },
            { name: 'Jupyter', level: 'expert' as const },
            { name: 'Linux', level: 'advanced' as const },
            { name: 'VS Code', level: 'expert' as const },
          ],
        },
      ],
      footerNote: 'Full-Stack, bulut teknolojileri ve yapay zeka alanlarında sürekli yeni şeyler öğreniyor ve üretiyorum.',
    },

    // === CONTACT SECTION ===
    contact: {
      sectionNumber: '04',
      sectionLabel: 'İletişim',
      title: "Birlikte harika bir şey inşa edelim.",
      description: `Yeni projeler, yaratıcı işbirlikleri veya iddialı yapay zeka ve 
      mühendislik girişimlerine katkıda bulunma fırsatlarını görüşmeye açığım.`,
      ctaButton: 'Sohbete Başla',
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
        label: 'Konum',
        value: 'İstanbul, Türkiye',
      },
      localTime: {
        label: 'Yerel Saat',
        timezone: 'Europe/Istanbul',
        suffix: 'TRT',
      },
      footer: {
        copyright: 'Emre Küçük. Özenle tasarlandı.',
        builtWith: 'Next.js + GSAP ile geliştirildi',
      },
    },
  },

  en: {
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

    // === PROJECTS SECTION ===
    projects: {
      sectionNumber: '02',
      sectionLabel: 'Projects',
      title: 'Selected Work',
      viewProject: 'View Project',
      items: [
        {
          id: 'deep-learning',
          title: 'Deep Learning Research',
          category: 'Neural Networks',
          description: 'Advanced deep learning implementations exploring cutting-edge architectures. From convolutional networks for image analysis to recurrent models for sequence processing.',
        },
        {
          id: 'image-recognition',
          title: 'Vision for Accessibility',
          category: 'Computer Vision',
          description: 'Image recognition system designed to assist visually impaired users. Leveraging state-of-the-art object detection and scene understanding to describe the visual world.',
        },
        {
          id: 'speech-recognition',
          title: 'Speech Recognition Engine',
          category: 'Natural Language Processing',
          description: 'Real-time speech-to-text system with natural language understanding. Processing audio signals and converting them into actionable text with high accuracy.',
        },
        {
          id: 'snake-ai',
          title: 'AI Game Arena',
          category: 'Reinforcement Learning',
          description: 'AI agents competing in classic game environments. Implementing reinforcement learning algorithms that learn optimal strategies through self-play and exploration.',
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
  },
}

// Helper function to get content based on language
export function getContent(language: 'tr' | 'en') {
  return siteContent[language]
}

// Type exports for better TypeScript support
export type SiteContent = typeof siteContent.en
export type TechLevel = 'expert' | 'advanced' | 'proficient'
export type TechItem = { name: string; level: TechLevel }
export type TechCategory = { name: string; items: TechItem[] }
