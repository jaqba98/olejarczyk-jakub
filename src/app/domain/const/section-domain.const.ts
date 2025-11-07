import { SectionDomain } from '../model/section-domain.model';

export const sectionDomainConst: SectionDomain.Type = {
  nav: {
    data: {
      id: 'nav',
      label: 'Nav',
      href: '#nav',
    },
    metadata: {
      routable: false,
      order: 0,
    },
  },
  home: {
    data: {
      id: 'home',
      label: 'Home',
      href: '#home',
    },
    metadata: {
      routable: true,
      order: 1,
    },
  },
  aboutMe: {
    data: {
      id: 'about-me',
      label: 'About me',
      href: '#about-me',
    },
    metadata: {
      routable: true,
      order: 2,
    },
  },
  technology: {
    data: {
      id: 'technology',
      label: 'Technology',
      href: '#technology',
    },
    metadata: {
      routable: true,
      order: 3,
    },
  },
  skill: {
    data: {
      id: 'skill',
      label: 'Skill',
      href: '#skill',
    },
    metadata: {
      routable: true,
      order: 4,
    },
  },
  experience: {
    data: {
      id: 'experience',
      label: 'Experience',
      href: '#experience',
    },
    metadata: {
      routable: true,
      order: 5,
    },
  },
  resume: {
    data: {
      id: 'resume',
      label: 'Resume',
      href: '#resume',
    },
    metadata: {
      routable: true,
      order: 6,
    },
  },
  education: {
    data: {
      id: 'education',
      label: 'Education',
      href: '#education',
    },
    metadata: {
      routable: true,
      order: 7,
    },
  },
  project: {
    data: {
      id: 'project',
      label: 'Project',
      href: '#project',
    },
    metadata: {
      routable: true,
      order: 8,
    },
  },
  contact: {
    data: {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
    },
    metadata: {
      routable: true,
      order: 9,
    },
  },
  footer: {
    data: {
      id: 'footer',
      label: 'Footer',
      href: '#footer',
    },
    metadata: {
      routable: false,
      order: 10,
    },
  },
};
