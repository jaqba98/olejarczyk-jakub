import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';

import { TechnologyCategoryStateModel } from './technology-category.state.model';

@State<TechnologyCategoryStateModel>({
  name: 'technologyCategory',
  defaults: {
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
    integration: {
      label: 'Integration',
    },
    versionControlSystem: {
      label: 'Version Control System',
    },
    packageManager: {
      label: 'Package Manager',
    },
    codeQuality: {
      label: 'Code Quality',
    },
    developerTool: {
      label: 'Developer Tool',
    },
    operatingSystem: {
      label: 'Operating System',
    },
  },
})
@Injectable()
export class TechnologyCategoryState {
  @Selector()
  static getTechnologyCategories(state: TechnologyCategoryStateModel) {
    return state;
  }
}
