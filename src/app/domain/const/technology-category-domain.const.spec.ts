import { BaseCompose } from '../model/base/base-compose.model';
import { TechnologyCategoryDomain } from '../model/domain/technology-category-domain.model';
import { TechnologyCategoryKindDomainType } from '../type/kind/technology-category-kind-domain.type';
import { technologyCategoryDomainConst } from './technology-category-domain.const';

describe('Technology Category Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseCompose.Type<
      TechnologyCategoryKindDomainType,
      TechnologyCategoryDomain.Data,
      TechnologyCategoryDomain.Metadata
    > = {
      markupLanguage: {
        data: {
          name: 'Markup Language',
        },
        metadata: {
          test: 'test',
          kind: 'markupLanguage',
          order: 0,
        },
      },
      stylesheetLanguage: {
        data: {
          name: 'Stylesheet Language',
        },
        metadata: {
          test: 'test',
          kind: 'stylesheetLanguage',
          order: 1,
        },
      },
      programmingLanguage: {
        data: {
          name: 'Programming Language',
        },
        metadata: {
          test: 'test',
          kind: 'programmingLanguage',
          order: 2,
        },
      },
      framework: {
        data: {
          name: 'Framework',
        },
        metadata: {
          test: 'test',
          kind: 'framework',
          order: 3,
        },
      },
      library: {
        data: {
          name: 'Library',
        },
        metadata: {
          test: 'test',
          kind: 'library',
          order: 4,
        },
      },
      test: {
        data: {
          name: 'Test',
        },
        metadata: {
          test: 'test',
          kind: 'test',
          order: 5,
        },
      },
      codeQuality: {
        data: {
          name: 'Code Quality',
        },
        metadata: {
          test: 'test',
          kind: 'codeQuality',
          order: 6,
        },
      },
      database: {
        data: {
          name: 'Database',
        },
        metadata: {
          test: 'test',
          kind: 'database',
          order: 7,
        },
      },
      server: {
        data: {
          name: 'Server',
        },
        metadata: {
          test: 'test',
          kind: 'server',
          order: 8,
        },
      },
      runtime: {
        data: {
          name: 'Runtime',
        },
        metadata: {
          test: 'test',
          kind: 'runtime',
          order: 9,
        },
      },
      containerization: {
        data: {
          name: 'Containerization',
        },
        metadata: {
          test: 'test',
          kind: 'containerization',
          order: 10,
        },
      },
      integrationPlatform: {
        data: {
          name: 'Integration Platform',
        },
        metadata: {
          test: 'test',
          kind: 'integrationPlatform',
          order: 11,
        },
      },
      api: {
        data: {
          name: 'API',
        },
        metadata: {
          test: 'test',
          kind: 'api',
          order: 12,
        },
      },
      versionControlSystem: {
        data: {
          name: 'Version Control System',
        },
        metadata: {
          test: 'test',
          kind: 'versionControlSystem',
          order: 13,
        },
      },
      packageManager: {
        data: {
          name: 'Package Manager',
        },
        metadata: {
          test: 'test',
          kind: 'packageManager',
          order: 14,
        },
      },
      monorepo: {
        data: {
          name: 'Monorepo',
        },
        metadata: {
          test: 'test',
          kind: 'monorepo',
          order: 15,
        },
      },
      ide: {
        data: {
          name: 'IDE',
        },
        metadata: {
          test: 'test',
          kind: 'ide',
          order: 16,
        },
      },
      editor: {
        data: {
          name: 'Editor',
        },
        metadata: {
          test: 'test',
          kind: 'editor',
          order: 17,
        },
      },
      diagram: {
        data: {
          name: 'Diagram',
        },
        metadata: {
          test: 'test',
          kind: 'diagram',
          order: 18,
        },
      },
      projectManagement: {
        data: {
          name: 'Project Management',
        },
        metadata: {
          test: 'test',
          kind: 'projectManagement',
          order: 19,
        },
      },
      operatingSystem: {
        data: {
          name: 'Operating System',
        },
        metadata: {
          test: 'test',
          kind: 'operatingSystem',
          order: 20,
        },
      },
    };
    expect(technologyCategoryDomainConst).toEqual(correctData);
  });
});
