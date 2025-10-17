import { Selector, State } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { ProjectStateModel } from './project-state.model';
import { StateNameDomainEnum } from '../../domain/enum/state-name-domain.enum';
import { AssetImageDomainEnum } from '../../domain/enum/asset-image-domain.enum';
import { StatusDomainEnum } from '../../domain/enum/status-domain.enum';
import { TechnologyDomainEnum } from '../../domain/enum/technology-domain.enum';
import { RepositoryKindDomainEnum } from '../../domain/enum/repository-kind-domain.enum';

@State<ProjectStateModel>({
  name: StateNameDomainEnum.project,
  defaults: {
    project1: {
      banner: AssetImageDomainEnum.assetImage1,
      name: 'Project 1',
      creationDate: new Date(2025, 1, 1),
      status: StatusDomainEnum.notStarted,
      description: 'Project 1 description',
      technologies: [TechnologyDomainEnum.technology1],
      repository: {
        kind: RepositoryKindDomainEnum.github,
        link: 'https://github.com/jaqba98/api-architectures-benchmark',
        fetch: true,
      },
      gallery: [
        AssetImageDomainEnum.assetImage1,
        AssetImageDomainEnum.assetImage2,
        AssetImageDomainEnum.assetImage3,
      ],
      appLink: 'https://www.google.com',
    },
    project2: {
      banner: AssetImageDomainEnum.assetImage2,
      name: 'Project 2',
      creationDate: new Date(2024, 1, 1),
      status: StatusDomainEnum.inProgress,
      description: 'Project 2 description',
      technologies: [TechnologyDomainEnum.technology2],
      repository: {
        kind: RepositoryKindDomainEnum.github,
        link: 'https://github.com/jaqba98/api-architectures-benchmark',
        fetch: false,
      },
      gallery: [
        AssetImageDomainEnum.assetImage1,
        AssetImageDomainEnum.assetImage2,
        AssetImageDomainEnum.assetImage3,
      ],
      appLink: '',
    },
    project3: {
      banner: AssetImageDomainEnum.assetImage3,
      name: 'Project 3',
      creationDate: new Date(2023, 1, 1),
      status: StatusDomainEnum.completed,
      description: 'Project 3 description',
      technologies: [TechnologyDomainEnum.technology3],
      repository: {
        kind: RepositoryKindDomainEnum.none,
      },
      gallery: [
        AssetImageDomainEnum.assetImage1,
        AssetImageDomainEnum.assetImage2,
        AssetImageDomainEnum.assetImage3,
      ],
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
