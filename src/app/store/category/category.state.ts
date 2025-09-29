import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

import { CategoryStateModel } from './category-state.model';

@State<CategoryStateModel>({
  name: 'category',
  defaults: {
    markupLanguage: {
      label: 'Markup Language',
      order: 0,
    },
    styleLanguage: {
      label: 'Style Language',
      order: 1,
    },
    programmingLanguage: {
      label: 'Programming Language',
      order: 2,
    },
    framework: {
      label: 'Framework',
      order: 3,
    },
    library: {
      label: 'Library',
      order: 4,
    },
    test: {
      label: 'Test',
      order: 5,
    },
    database: {
      label: 'Database',
      order: 6,
    },
    server: {
      label: 'Server',
      order: 7,
    },
    runtime: {
      label: 'Runtime',
      order: 8,
    },
    containerization: {
      label: 'Containerization',
      order: 9,
    },
    integration: {
      label: 'Integration',
      order: 10,
    },
    versionControlSystem: {
      label: 'Version Control System',
      order: 11,
    },
    packageManager: {
      label: 'Package Manager',
      order: 12,
    },
    codeQuality: {
      label: 'Code Quality',
      order: 13,
    },
    developerTool: {
      label: 'Developer Tool',
      order: 14,
    },
    operatingSystem: {
      label: 'Operating System',
      order: 15,
    },
  },
})
@Injectable()
export class CategoryState {}
