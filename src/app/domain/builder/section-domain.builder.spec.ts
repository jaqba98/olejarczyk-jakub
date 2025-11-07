import { SectionDomain } from '../model/section-domain.model';
import { SectionDomainBuilder } from './section-domain.builder';

describe('Domain: Section', () => {
  it('should return valid data', () => {
    const domain: SectionDomain.Type = {
      nav: {
        data: {
          type: 'nav',
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
          type: 'home',
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
          type: 'aboutMe',
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
          type: 'technology',
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
          type: 'skill',
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
          type: 'experience',
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
          type: 'resume',
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
          type: 'education',
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
          type: 'project',
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
          type: 'contact',
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
          type: 'footer',
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
    expect(SectionDomainBuilder.build()).toEqual(domain);
  });
});
