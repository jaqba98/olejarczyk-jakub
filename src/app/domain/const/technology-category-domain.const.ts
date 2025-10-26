import { BaseDomain } from '../model/base-domain.model';
import { TechnologyCategoryDomain } from '../model/technology-category-domain.model';
import { TechnologyCategoryKindDomainType } from '../type/kind/technology-category-kind-domain.type';

export const technologyCategoryDomainConst: BaseDomain.Type<
  TechnologyCategoryKindDomainType,
  TechnologyCategoryDomain.Data,
  TechnologyCategoryDomain.Metadata
> = {
  markupLanguage: {
    data: {
      kind: 'markupLanguage',
      name: 'Markup Language',
    },
    metadata: {
      order: 0,
    },
  },
  stylesheetLanguage: {
    data: {
      kind: 'stylesheetLanguage',
      name: 'Stylesheet Language',
    },
    metadata: {
      order: 1,
    },
  },
  programmingLanguage: {
    data: {
      kind: 'programmingLanguage',
      name: 'Programming Language',
    },
    metadata: {
      order: 2,
    },
  },
  framework: {
    data: {
      kind: 'framework',
      name: 'Framework',
    },
    metadata: {
      order: 3,
    },
  },
  library: {
    data: {
      kind: 'library',
      name: 'Library',
    },
    metadata: {
      order: 4,
    },
  },
  test: {
    data: {
      kind: 'test',
      name: 'Test',
    },
    metadata: {
      order: 5,
    },
  },
  codeQuality: {
    data: {
      kind: 'codeQuality',
      name: 'Code Quality',
    },
    metadata: {
      order: 6,
    },
  },
  database: {
    data: {
      kind: 'database',
      name: 'Database',
    },
    metadata: {
      order: 7,
    },
  },
  server: {
    data: {
      kind: 'server',
      name: 'Server',
    },
    metadata: {
      order: 8,
    },
  },
  runtime: {
    data: {
      kind: 'runtime',
      name: 'Runtime',
    },
    metadata: {
      order: 9,
    },
  },
  containerization: {
    data: {
      kind: 'containerization',
      name: 'Containerization',
    },
    metadata: {
      order: 10,
    },
  },
  integrationPlatform: {
    data: {
      kind: 'integrationPlatform',
      name: 'Integration Platform',
    },
    metadata: {
      order: 11,
    },
  },
  api: {
    data: {
      kind: 'api',
      name: 'API',
    },
    metadata: {
      order: 12,
    },
  },
  versionControlSystem: {
    data: {
      kind: 'versionControlSystem',
      name: 'Version Control System',
    },
    metadata: {
      order: 13,
    },
  },
  packageManager: {
    data: {
      kind: 'packageManager',
      name: 'Package Manager',
    },
    metadata: {
      order: 14,
    },
  },
  monorepo: {
    data: {
      kind: 'monorepo',
      name: 'Monorepo',
    },
    metadata: {
      order: 15,
    },
  },
  ide: {
    data: {
      kind: 'ide',
      name: 'IDE',
    },
    metadata: {
      order: 16,
    },
  },
  editor: {
    data: {
      kind: 'editor',
      name: 'Editor',
    },
    metadata: {
      order: 17,
    },
  },
  diagram: {
    data: {
      kind: 'diagram',
      name: 'Diagram',
    },
    metadata: {
      order: 18,
    },
  },
  projectManagement: {
    data: {
      kind: 'projectManagement',
      name: 'Project Management',
    },
    metadata: {
      order: 19,
    },
  },
  operatingSystem: {
    data: {
      kind: 'operatingSystem',
      name: 'Operating System',
    },
    metadata: {
      order: 20,
    },
  },
};
