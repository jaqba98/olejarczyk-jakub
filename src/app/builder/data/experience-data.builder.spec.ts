import _ from 'lodash';

import { ExperienceDataBuilder } from './experience-data.builder';
import { ExperienceDataBuilderModel } from '../model/data/experience-data-builder.model';
import { companyDomainConst } from '../../domain/const/company-domain.const';
import { experienceDomainConst } from '../../domain/const/experience-domain.const';
import { technologyDomainConst } from '../../domain/const/technology-domain.const';

describe('Experience Data Builder', () => {
  it('Should return the correct data', () => {
    const inputTechnology = ExperienceDataBuilder.buildData();
    const resultTechnology: ExperienceDataBuilderModel = [
      {
        experience: experienceDomainConst.primaris.data.experiences[0],
        technologies: [
          technologyDomainConst.javascript.data,
          technologyDomainConst.microsoftSqlServer.data,
          technologyDomainConst.snaplogic.data,
          technologyDomainConst.postman.data,
          technologyDomainConst.github.data,
          technologyDomainConst.jira.data,
          technologyDomainConst.windows.data,
        ],
        company: companyDomainConst.primaris.data,
      },
      {
        experience: experienceDomainConst.aprSystem.data.experiences[0],
        technologies: [
          technologyDomainConst.html.data,
          technologyDomainConst.css.data,
          technologyDomainConst.sass.data,
          technologyDomainConst.javascript.data,
          technologyDomainConst.typescript.data,
          technologyDomainConst.angular.data,
          technologyDomainConst.rxjs.data,
          technologyDomainConst.storybook.data,
          technologyDomainConst.primeng.data,
          technologyDomainConst.jest.data,
          technologyDomainConst.eslint.data,
          technologyDomainConst.prettier.data,
          technologyDomainConst.stylelint.data,
          technologyDomainConst.postgresql.data,
          technologyDomainConst.nodejs.data,
          technologyDomainConst.docker.data,
          technologyDomainConst.postman.data,
          technologyDomainConst.git.data,
          technologyDomainConst.gitlab.data,
          technologyDomainConst.npm.data,
          technologyDomainConst.pnpm.data,
          technologyDomainConst.nx.data,
          technologyDomainConst.webstorm.data,
          technologyDomainConst.visualStudioCode.data,
          technologyDomainConst.windows.data,
        ],
        company: companyDomainConst.aprSystem.data,
      },
    ];
    expect(_.isEqual(inputTechnology, resultTechnology)).toBeTruthy();
  });
});
