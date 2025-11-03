import { projectDomainConst } from '../../domain/const/project-domain.const';
import { technologyDomainConst } from '../../domain/const/technology-domain.const';
import { ProjectDataBuilderModel } from '../model/data/project-data-builder.model';
import { ProjectDataBuilder } from './project-data.builder';

describe('Project Data Builder', () => {
  it('Should return the correct data', () => {
    const correctData: ProjectDataBuilderModel = [
      {
        project: projectDomainConst.project1.data,
        technologies: [
          technologyDomainConst.html.data,
          technologyDomainConst.css.data,
          technologyDomainConst.javascript.data,
        ],
      },
      {
        project: projectDomainConst.project2.data,
        technologies: [
          technologyDomainConst.git.data,
          technologyDomainConst.github.data,
          technologyDomainConst.gitlab.data,
        ],
      },
    ];
    expect(ProjectDataBuilder.buildData()).toEqual(correctData);
  });
});
