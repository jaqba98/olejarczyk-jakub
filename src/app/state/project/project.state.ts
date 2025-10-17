import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ProjectStateModel } from './project-state.model';

@State<ProjectStateModel>({
  name: 'project',
  defaults: {
    project1: {
      banner: 'assetImage1',
      name: 'Project 1',
      creationDate: new Date(2025, 1, 1),
      status: 'notStarted',
      description: 'Project 1 description',
      technologies: ['html', 'css', 'sass'],
      repository: {
        kind: 'github',
        repoUrl: 'https://github.com/jaqba98/api-architectures-benchmark',
      },
      gallery: ['assetImage1', 'assetImage2', 'assetImage3'],
      appUrl: 'https://www.google.com',
    },
    project2: {
      banner: 'assetImage2',
      name: 'Project 2',
      creationDate: new Date(2024, 1, 1),
      status: 'inProgress',
      description: 'Project 2 description',
      technologies: ['html'],
      repository: {
        kind: 'github',
        repoUrl: 'https://github.com/jaqba98/api-architectures-benchmark',
      },
      gallery: ['assetImage1', 'assetImage2', 'assetImage3'],
      appUrl: '',
    },
    project3: {
      banner: 'assetImage3',
      name: 'Project 3',
      creationDate: new Date(2023, 1, 1),
      status: 'completed',
      description: 'Project 3 description',
      technologies: ['css', 'sass'],
      repository: {
        kind: 'none',
      },
      gallery: ['assetImage1', 'assetImage2', 'assetImage3'],
      appUrl: '',
    },
  },
})
@Injectable()
export class ProjectState {
  @Selector()
  static getState(state: ProjectStateModel) {
    return state;
  }
}
