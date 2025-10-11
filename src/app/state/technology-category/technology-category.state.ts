import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyCategoryStateModel } from './technology-category-state.model';

@State<TechnologyCategoryStateModel>({
  name: 'technologyCategory',
  defaults: {
    markupLanguage: {
      name: 'Markup Language',
    },
    stylesheetLanguage: {
      name: 'Stylesheet Language',
    },
    programmingLanguage: {
      name: 'Programming Language',
    },
    framework: {
      name: 'Framework',
    },
    library: {
      name: 'Library',
    },
    test: {
      name: 'Test',
    },
    database: {
      name: 'Database',
    },
    server: {
      name: 'Server',
    },
    runtime: {
      name: 'Runtime',
    },
    containerization: {
      name: 'Containerization',
    },
    integrationPlatform: {
      name: 'Integration Platform',
    },
    versionControlSystem: {
      name: 'Version Control System',
    },
    packageManager: {
      name: 'Package Manager',
    },
    codeQuality: {
      name: 'Code Quality',
    },
    developerTool: {
      name: 'Developer Tool',
    },
    operatingSystem: {
      name: 'Operating System',
    },
  },
})
@Injectable()
export class TechnologyCategoryState {
  @Selector()
  static getState(state: TechnologyCategoryStateModel) {
    return state;
  }
}
