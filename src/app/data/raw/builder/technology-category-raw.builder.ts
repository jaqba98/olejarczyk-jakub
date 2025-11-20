import { Injectable } from '@angular/core';

import { TechnologyCategoryRawModel } from '../../../model/raw/technology-category-raw.model';

@Injectable({ providedIn: 'root' })
export class TechnologyCategoryRawBuilder {
  build(): TechnologyCategoryRawModel {
    return {
      markupLanguage: {
        label: 'Markup Language',
        kind: 'markupLanguage',
        order: 0,
      },
      stylesheetLanguage: {
        label: 'Stylesheet Language',
        kind: 'stylesheetLanguage',
        order: 1,
      },
      programmingLanguage: {
        label: 'Programming Language',
        kind: 'programmingLanguage',
        order: 2,
      },
      framework: {
        label: 'Framework',
        kind: 'framework',
        order: 3,
      },
      library: {
        label: 'Library',
        kind: 'library',
        order: 4,
      },
      test: {
        label: 'Test',
        kind: 'test',
        order: 5,
      },
      codeQuality: {
        label: 'Code Quality',
        kind: 'codeQuality',
        order: 6,
      },
      database: {
        label: 'Database',
        kind: 'database',
        order: 7,
      },
      server: {
        label: 'Server',
        kind: 'server',
        order: 8,
      },
      runtime: {
        label: 'Runtime',
        kind: 'runtime',
        order: 9,
      },
      containerization: {
        label: 'Containerization',
        kind: 'containerization',
        order: 10,
      },
      integrationPlatform: {
        label: 'Integration Platform',
        kind: 'integrationPlatform',
        order: 11,
      },
      api: {
        label: 'API',
        kind: 'api',
        order: 12,
      },
      versionControlSystem: {
        label: 'Version Control System',
        kind: 'versionControlSystem',
        order: 13,
      },
      packageManager: {
        label: 'Package Manager',
        kind: 'packageManager',
        order: 14,
      },
      monorepo: {
        label: 'Monorepo',
        kind: 'monorepo',
        order: 15,
      },
      ide: {
        label: 'IDE',
        kind: 'ide',
        order: 16,
      },
      editor: {
        label: 'Editor',
        kind: 'editor',
        order: 17,
      },
      diagram: {
        label: 'Diagram',
        kind: 'diagram',
        order: 18,
      },
      projectManagement: {
        label: 'Project Management',
        kind: 'projectManagement',
        order: 19,
      },
      operatingSystem: {
        label: 'Operating System',
        kind: 'operatingSystem',
        order: 20,
      },
    };
  }
}
