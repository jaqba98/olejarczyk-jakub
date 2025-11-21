import { Injectable } from '@angular/core';

import { TechnologyCategoryRawModel } from './technology-category-raw.model';

@Injectable({ providedIn: 'root' })
export class TechnologyCategoryRawBuilder {
  build(): TechnologyCategoryRawModel {
    return {
      markupLanguage: {
        label: 'Markup Language',
      },
      stylesheetLanguage: {
        label: 'Stylesheet Language',
      },
      programmingLanguage: {
        label: 'Programming Language',
      },
      framework: {
        label: 'Framework',
      },
      library: {
        label: 'Library',
      },
      test: {
        label: 'Test',
      },
      codeQuality: {
        label: 'Code Quality',
      },
      database: {
        label: 'Database',
      },
      server: {
        label: 'Server',
      },
      runtime: {
        label: 'Runtime',
      },
      containerization: {
        label: 'Containerization',
      },
      integrationPlatform: {
        label: 'Integration Platform',
      },
      api: {
        label: 'API',
      },
      versionControlSystem: {
        label: 'Version Control System',
      },
      packageManager: {
        label: 'Package Manager',
      },
      monorepo: {
        label: 'Monorepo',
      },
      ide: {
        label: 'IDE',
      },
      editor: {
        label: 'Editor',
      },
      diagram: {
        label: 'Diagram',
      },
      projectManagement: {
        label: 'Project Management',
      },
      operatingSystem: {
        label: 'Operating System',
      },
    };
  }
}
