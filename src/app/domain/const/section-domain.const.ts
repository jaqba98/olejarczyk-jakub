import { BaseDomainModel } from '../model/base/base-domain.model';
import { SectionDataDomainModel } from '../model/data/section-data-domain.model';
import { SectionMetadataDomainModel } from '../model/metadata/section-metadata-domain.model';
import { SectionKindDomainType } from '../type/kind/section-kind-domain.type';

export const sectionDomainConst: BaseDomainModel<
  SectionKindDomainType,
  SectionDataDomainModel,
  SectionMetadataDomainModel
> = {
  nav: {
    data: {
      id: 'nav',
      label: 'Nav',
      href: '#nav',
    },
    metadata: {
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
      routable: false,
    },
  },
};
