import { SectionDomain } from '../model/section-domain.model';
import { SectionDomainBuilder } from './section-domain.builder';

describe('Domain: Section', () => {
  it('should return valid data', () => {
    const domain: SectionDomain.Type = {
      nav: {
        data: {
          id: 'nav',
          label: 'Nav',
          href: '#nav',
        },
        metadata: {
          type: 'nav',
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
          type: 'home',
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
          type: 'aboutMe',
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
          type: 'technology',
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
          type: 'skill',
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
          type: 'experience',
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
          type: 'resume',
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
          type: 'education',
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
          type: 'project',
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
          type: 'contact',
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
          type: 'footer',
          routable: false,
          order: 10,
        },
      },
    };
    expect(SectionDomainBuilder.build()).toEqual(domain);
  });
});
