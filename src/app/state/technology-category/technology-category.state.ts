import { Selector, State } from '@ngxs/store';

import { TechnologyCategoryStateModel } from './technology-category-state.model';
import { Injectable } from '@angular/core';

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
    database: {
      order: 6,
    },
    server: {
      order: 7,
    },
    runtime: {
      order: 8,
    },
    containerization: {
      order: 9,
    },
    integrationPlatform: {
      order: 10,
    },
    versionControlSystem: {
      order: 11,
    },
    packageManager: {
      order: 12,
    },
    codeQuality: {
      order: 13,
    },
    developerTool: {
      order: 14,
    },
    operatingSystem: {
      order: 15,
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
