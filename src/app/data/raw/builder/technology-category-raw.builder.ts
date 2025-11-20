import { Injectable } from '@angular/core';

import { TechnologyCategoryRawModel } from '../../../model/raw/technology-category-raw.model';

@Injectable({ providedIn: 'root' })
export class TechnologyCategoryRawBuilder {
  build(): TechnologyCategoryRawModel {
    return {
      markupLanguage: {
        kind: 'markupLanguage',
        label: 'Markup Language',
        order: 0,
      },
      stylesheetLanguage: {
        kind: 'stylesheetLanguage',
        label: 'Stylesheet Language',
        order: 1,
      },
      programmingLanguage: {
        kind: 'programmingLanguage',
        label: 'Programming Language',
        order: 2,
      },
      framework: {
        kind: 'framework',
        label: 'Framework',
        order: 3,
      },
      library: {
        kind: 'library',
        label: 'Library',
        order: 4,
      },
      test: {
        kind: 'test',
        label: 'Test',
        order: 5,
      },
      codeQuality: {
        kind: 'codeQuality',
        label: 'Code Quality',
        order: 6,
      },
      database: {
        kind: 'database',
        label: 'Database',
        order: 7,
      },
      server: {
        kind: 'server',
        label: 'Server',
        order: 8,
      },
      runtime: {
        kind: 'runtime',
        label: 'Runtime',
        order: 9,
      },
      containerization: {
        kind: 'containerization',
        label: 'Containerization',
        order: 10,
      },
      integrationPlatform: {
        kind: 'integrationPlatform',
        label: 'Integration Platform',
        order: 11,
      },
      api: {
        kind: 'api',
        label: 'API',
        order: 12,
      },
      versionControlSystem: {
        kind: 'versionControlSystem',
        label: 'Version Control System',
        order: 13,
      },
      packageManager: {
        kind: 'packageManager',
        label: 'Package Manager',
        order: 14,
      },
      monorepo: {
        kind: 'monorepo',
        label: 'Monorepo',
        order: 15,
      },
      ide: {
        kind: 'ide',
        label: 'IDE',
        order: 16,
      },
      editor: {
        kind: 'editor',
        label: 'Editor',
        order: 17,
      },
      diagram: {
        kind: 'diagram',
        label: 'Diagram',
        order: 18,
      },
      projectManagement: {
        kind: 'projectManagement',
        label: 'Project Management',
        order: 19,
      },
      operatingSystem: {
        kind: 'operatingSystem',
        label: 'Operating System',
        order: 20,
      },
    };
  }
}
