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
      id: 'nav',
      label: 'Nav',
      href: '#nav',
    },
    metadata: {
      kind: 'nav',
      routable: false,
    },
  },
  home: {
    data: {
      id: 'home',
      label: 'Home',
      href: '#home',
    },
    metadata: {
      kind: 'home',
      routable: true,
    },
  },
  aboutMe: {
    data: {
      id: 'about-me',
      label: 'About me',
      href: '#about-me',
    },
    metadata: {
      kind: 'aboutMe',
      routable: true,
    },
  },
  technology: {
    data: {
      id: 'technology',
      label: 'Technology',
      href: '#technology',
    },
    metadata: {
      kind: 'technology',
      routable: true,
    },
  },
  skill: {
    data: {
      id: 'skill',
      label: 'Skill',
      href: '#skill',
    },
    metadata: {
      kind: 'skill',
      routable: true,
    },
  },
  experience: {
    data: {
      id: 'experience',
      label: 'Experience',
      href: '#experience',
    },
    metadata: {
      kind: 'experience',
      routable: true,
    },
  },
  resume: {
    data: {
      id: 'resume',
      label: 'Resume',
      href: '#resume',
    },
    metadata: {
      kind: 'resume',
      routable: true,
    },
  },
  education: {
    data: {
      id: 'education',
      label: 'Education',
      href: '#education',
    },
    metadata: {
      kind: 'education',
      routable: true,
    },
  },
  project: {
    data: {
      id: 'project',
      label: 'Project',
      href: '#project',
    },
    metadata: {
      kind: 'project',
      routable: true,
    },
  },
  blog: {
    data: {
      id: 'blog',
      label: 'Blog',
      href: '#blog',
    },
    metadata: {
      kind: 'blog',
      routable: true,
    },
  },
  contact: {
    data: {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
    },
    metadata: {
      kind: 'contact',
      routable: true,
    },
  },
  footer: {
    data: {
      id: 'footer',
      label: 'Footer',
      href: '#footer',
    },
    metadata: {
      kind: 'footer',
      routable: false,
    },
  },
};
