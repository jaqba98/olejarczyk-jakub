import { ProjectStateDomainModel } from '../../model/state/project-state-domain.model';
import { projectDataDomainConst } from './project-data-domain.const';

describe('Project Data Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: ProjectStateDomainModel = {
      project1: {
        id: 'project1',
        order: 0,
        banner: 'assetImage1',
        name: 'Project 1',
        creationDate: new Date(2025, 1, 1),
        status: 'inProgress',
        description: 'Project 1 lorem ipsum',
        technologyIds: ['html', 'css', 'javascript'],
        repository: {
          type: 'github',
          url: 'https://github.com/username/project1',
        },
        application: {
          type: 'githubPage',
          url: 'https://username.github.io/project1',
        },
        gallery: ['assetImage1', 'assetImage2', 'assetImage3'],
      },
      project2: {
        id: 'project2',
        order: 1,
        banner: 'assetImage2',
        name: 'Project 2',
        creationDate: new Date(2024, 1, 1),
        status: 'completed',
        description: 'Project 2 lorem ipsum',
        technologyIds: ['git', 'github', 'gitlab'],
        repository: {
          type: 'github',
          url: 'https://github.com/username/project2',
        },
        application: {
          type: 'none',
        },
        gallery: ['assetImage1', 'assetImage2', 'assetImage3'],
      },
      project3: {
        id: 'project3',
        order: 2,
        banner: 'assetImage3',
        name: 'Project 3',
        creationDate: new Date(2023, 1, 1),
        status: 'completed',
        description: 'Project 3 lorem ipsum',
        technologyIds: ['snaplogic', 'javascript'],
        repository: {
          type: 'none',
        },
        application: {
          type: 'none',
        },
        gallery: ['assetImage1', 'assetImage2', 'assetImage3'],
      },
    };
    expect(projectDataDomainConst).toEqual(correctResult);
  });
});
