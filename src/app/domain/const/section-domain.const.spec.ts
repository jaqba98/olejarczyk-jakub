import { BaseCompose } from '../../data/model/base/base-combo-data.model';
import { SectionDomain } from '../model/domain/section-domain.model';
import { SectionKindDomainType } from '../type/kind/section-kind-domain.type';
import { sectionDomainConst } from './section-domain.const';

describe('Section Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseCompose.Type<
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
          test: 'test',
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
          kind: 'home',
          test: 'test',
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
          kind: 'aboutMe',
          test: 'test',
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
          kind: 'technology',
          test: 'test',
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
          kind: 'skill',
          test: 'test',
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
          kind: 'experience',
          test: 'test',
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
          kind: 'resume',
          test: 'test',
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
          kind: 'education',
          test: 'test',
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
          kind: 'project',
          test: 'test',
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
          kind: 'contact',
          test: 'test',
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
          kind: 'footer',
          test: 'test',
          routable: false,
          order: 10,
        },
      },
    };
    expect(sectionDomainConst).toEqual(correctData);
  });
});
