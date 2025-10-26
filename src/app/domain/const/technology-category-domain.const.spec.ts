import { BaseDomain } from '../model/base-domain.model';
import { TechnologyCategoryDomain } from '../model/technology-category-domain.model';
import { TechnologyCategoryKindDomainType } from '../type/kind/technology-category-kind-domain.type';
import { technologyCategoryDomainConst } from './technology-category-domain.const';

describe('Technology Category Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseDomain.Type<
      TechnologyCategoryKindDomainType,
      TechnologyCategoryDomain.Data,
      TechnologyCategoryDomain.Metadata
    > = {
      markupLanguage: {
        data: {
          name: 'Markup Language',
        },
        metadata: {
          kind: 'markupLanguage',
          order: 0,
        },
      },
      stylesheetLanguage: {
        data: {
          name: 'Stylesheet Language',
        },
        metadata: {
          kind: 'stylesheetLanguage',
          order: 1,
        },
      },
      programmingLanguage: {
        data: {
          name: 'Programming Language',
        },
        metadata: {
          kind: 'programmingLanguage',
          order: 2,
        },
      },
      framework: {
        data: {
          name: 'Framework',
        },
        metadata: {
          kind: 'framework',
          order: 3,
        },
      },
      library: {
        data: {
          name: 'Library',
        },
        metadata: {
          kind: 'library',
          order: 4,
        },
      },
      test: {
        data: {
          name: 'Test',
        },
        metadata: {
          kind: 'test',
          order: 5,
        },
      },
      codeQuality: {
        data: {
          name: 'Code Quality',
        },
        metadata: {
          kind: 'codeQuality',
          order: 6,
        },
      },
      database: {
        data: {
          name: 'Database',
        },
        metadata: {
          kind: 'database',
          order: 7,
        },
      },
      server: {
        data: {
          name: 'Server',
        },
        metadata: {
          kind: 'server',
          order: 8,
        },
      },
      runtime: {
        data: {
          name: 'Runtime',
        },
        metadata: {
          kind: 'runtime',
          order: 9,
        },
      },
      containerization: {
        data: {
          name: 'Containerization',
        },
        metadata: {
          kind: 'containerization',
          order: 10,
        },
      },
      integrationPlatform: {
        data: {
          name: 'Integration Platform',
        },
        metadata: {
          kind: 'integrationPlatform',
          order: 11,
        },
      },
      api: {
        data: {
          name: 'API',
        },
        metadata: {
          kind: 'api',
          order: 12,
        },
      },
      versionControlSystem: {
        data: {
          name: 'Version Control System',
        },
        metadata: {
          kind: 'versionControlSystem',
          order: 13,
        },
      },
      packageManager: {
        data: {
          name: 'Package Manager',
        },
        metadata: {
          kind: 'packageManager',
          order: 14,
        },
      },
      monorepo: {
        data: {
          name: 'Monorepo',
        },
        metadata: {
          kind: 'monorepo',
          order: 15,
        },
      },
      ide: {
        data: {
          name: 'IDE',
        },
        metadata: {
          kind: 'ide',
          order: 16,
        },
      },
      editor: {
        data: {
          name: 'Editor',
        },
        metadata: {
          kind: 'editor',
          order: 17,
        },
      },
      diagram: {
        data: {
          name: 'Diagram',
        },
        metadata: {
          kind: 'diagram',
          order: 18,
        },
      },
      projectManagement: {
        data: {
          name: 'Project Management',
        },
        metadata: {
          kind: 'projectManagement',
          order: 19,
        },
      },
      operatingSystem: {
        data: {
          name: 'Operating System',
        },
        metadata: {
          kind: 'operatingSystem',
          order: 20,
        },
      },
    };
    expect(technologyCategoryDomainConst).toEqual(correctData);
  });
});
