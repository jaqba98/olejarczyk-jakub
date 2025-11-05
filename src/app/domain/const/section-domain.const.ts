import { BaseDomain } from '../model/base-domain.model';
import { SectionDomain } from '../model/section-domain.model';
import { SectionKindDomainType } from '../type/kind/section-kind-domain.type';

export const sectionDomainConst: BaseDomain.Type<
  SectionKindDomainType,
  SectionDomain.Data,
  SectionDomain.Metadata
> = {
  nav: {
    data: {
      kind: 'nav',
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
      kind: 'home',
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
      kind: 'aboutMe',
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
      kind: 'technology',
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
      kind: 'skill',
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
      kind: 'experience',
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
      kind: 'resume',
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
      kind: 'education',
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
      kind: 'project',
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
      kind: 'contact',
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
      kind: 'footer',
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
