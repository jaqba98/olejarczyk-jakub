import { projectDomainConst } from '../../domain/const/project-domain.const';
import { technologyDomainConst } from '../../domain/const/technology-domain.const';
import { ProjectBuilderModel } from '../model/builder/project-builder.model';
import { ProjectBuilder } from './project.builder';

describe('Project Builder', () => {
  it('Should return the correct data', () => {
    const result: ProjectBuilderModel = [
      {
        ...projectDomainConst.project1,
        extend: {
          technologies: [
            { ...technologyDomainConst.html, extend: {} },
            {
              ...technologyDomainConst.css,
              extend: {},
            },
            { ...technologyDomainConst.javascript, extend: {} },
          ],
        },
      },
      {
        ...projectDomainConst.project2,
        extend: {
          technologies: [
            { ...technologyDomainConst.git, extend: {} },
            { ...technologyDomainConst.github, extend: {} },
            { ...technologyDomainConst.gitlab, extend: {} },
          ],
        },
      },
    ];
    expect(ProjectBuilder.buildData()).toEqual(result);
  });
});
