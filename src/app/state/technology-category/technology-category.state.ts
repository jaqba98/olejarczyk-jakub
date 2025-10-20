import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { TechnologyCategoryStateModel } from './technology-category-state.model';

@State<TechnologyCategoryStateModel>({
  name: 'technologyCategory',
  defaults: {
    markupLanguage: {
      order: 0,
    },
    stylesheetLanguage: {
      order: 1,
    },
    programmingLanguage: {
      order: 2,
    },
    framework: {
      order: 3,
    },
    library: {
      order: 4,
    },
    test: {
      order: 5,
    },
    codeQuality: {
      order: 6,
    },
    database: {
      order: 7,
    },
    server: {
      order: 8,
    },
    runtime: {
      order: 9,
    },
    containerization: {
      order: 10,
    },
    integrationPlatform: {
      order: 11,
    },
    api: {
      order: 12,
    },
    versionControlSystem: {
      order: 13,
    },
    packageManager: {
      order: 14,
    },
    monorepo: {
      order: 15,
    },
    ide: {
      order: 16,
    },
    editor: {
      order: 17,
    },
    diagram: {
      order: 18,
    },
    projectManagement: {
      order: 19,
    },
    operatingSystem: {
      order: 20,
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
