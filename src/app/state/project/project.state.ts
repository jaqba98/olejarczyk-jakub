import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ProjectStateModel } from './project-state.model';
import { TechnologyDomainEnum } from '../../domain/enum/technology-domain.enum';
import { StatusDomainEnum } from '../../domain/enum/status-domain.enum';
import { AssetImageDomainEnum } from '../../domain/enum/asset-image-domain.enum';

@State<ProjectStateModel>({
  name: 'project',
  defaults: {
    project1: {
      name: 'Project 1',
      createDate: new Date(2025, 1, 1),
      status: StatusDomainEnum.notStarted,
      banner: AssetImageDomainEnum.image1,
      description: 'Project 1 description',
      technologies: [
        TechnologyDomainEnum.technology1,
        TechnologyDomainEnum.technology2,
        TechnologyDomainEnum.technology3,
      ],
      link: 'link2',
      order: 0,
    },
    project2: {
      name: 'Project 2',
      createDate: new Date(2025, 1, 1),
      status: StatusDomainEnum.inProgress,
      banner: AssetImageDomainEnum.image1,
      description: 'Project 2 description',
      technologies: [TechnologyDomainEnum.technology1],
      link: 'link2',
      order: 1,
    },
    project3: {
      name: 'Project 3',
      createDate: new Date(2025, 1, 1),
      status: StatusDomainEnum.completed,
      banner: AssetImageDomainEnum.image1,
      description: 'Project 3 description',
      technologies: [TechnologyDomainEnum.technology2, TechnologyDomainEnum.technology3],
      link: 'link3',
      order: 2,
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
