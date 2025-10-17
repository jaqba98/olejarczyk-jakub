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
      technologies: ['technology1', 'technology2', 'technology3'],
      repository: {
        kind: 'github',
        link: 'https://github.com/jaqba98/api-architectures-benchmark',
        fetch: true,
      },
      gallery: ['assetImage1', 'assetImage2', 'assetImage3'],
      appLink: 'https://www.google.com',
    },
    project2: {
      banner: 'assetImage2',
      name: 'Project 2',
      creationDate: new Date(2024, 1, 1),
      status: 'inProgress',
      description: 'Project 2 description',
      technologies: ['technology1'],
      repository: {
        kind: 'github',
        link: 'https://github.com/jaqba98/api-architectures-benchmark',
        fetch: false,
      },
      gallery: ['assetImage1', 'assetImage2', 'assetImage3'],
      appLink: '',
    },
    project3: {
      banner: 'assetImage3',
      name: 'Project 3',
      creationDate: new Date(2023, 1, 1),
      status: 'completed',
      description: 'Project 3 description',
      technologies: ['technology2', 'technology3'],
      repository: {
        kind: 'none',
      },
      gallery: ['assetImage1', 'assetImage2', 'assetImage3'],
      appLink: '',
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
