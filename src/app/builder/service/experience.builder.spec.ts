import _ from 'lodash';

import { companyDomainConst } from '../../domain/const/company-domain.const';
import { experienceDomainConst } from '../../domain/const/experience-domain.const';
import { technologyDomainConst } from '../../domain/const/technology-domain.const';
import { ExperienceBuilder } from './experience.builder';
import { ExperienceBuilderModel } from '../model/builder/experience-builder.model';

describe('Experience Builder', () => {
  it('Should return the correct data', () => {
    const input = ExperienceBuilder.buildData();
    const output: ExperienceBuilderModel = [
      {
        data: experienceDomainConst.primaris.data.experiences[0],
        metadata: experienceDomainConst.primaris.metadata,
        extend: {
          technologies: [
            { ...technologyDomainConst.javascript, extend: {} },
            { ...technologyDomainConst.microsoftSqlServer, extend: {} },
            { ...technologyDomainConst.snaplogic, extend: {} },
            { ...technologyDomainConst.postman, extend: {} },
            { ...technologyDomainConst.github, extend: {} },
            { ...technologyDomainConst.jira, extend: {} },
            { ...technologyDomainConst.windows, extend: {} },
          ],
          company: { ...companyDomainConst.primaris, extend: {} },
        },
      },
      {
        data: experienceDomainConst.aprSystem.data.experiences[0],
        metadata: experienceDomainConst.aprSystem.metadata,
        extend: {
          technologies: [
            { ...technologyDomainConst.html, extend: {} },
            { ...technologyDomainConst.css, extend: {} },
            { ...technologyDomainConst.sass, extend: {} },
            { ...technologyDomainConst.javascript, extend: {} },
            { ...technologyDomainConst.typescript, extend: {} },
            { ...technologyDomainConst.angular, extend: {} },
            { ...technologyDomainConst.rxjs, extend: {} },
            { ...technologyDomainConst.storybook, extend: {} },
            { ...technologyDomainConst.primeng, extend: {} },
            { ...technologyDomainConst.jest, extend: {} },
            { ...technologyDomainConst.eslint, extend: {} },
            { ...technologyDomainConst.prettier, extend: {} },
            { ...technologyDomainConst.stylelint, extend: {} },
            { ...technologyDomainConst.postgresql, extend: {} },
            { ...technologyDomainConst.nodejs, extend: {} },
            { ...technologyDomainConst.docker, extend: {} },
            { ...technologyDomainConst.postman, extend: {} },
            { ...technologyDomainConst.git, extend: {} },
            { ...technologyDomainConst.gitlab, extend: {} },
            { ...technologyDomainConst.npm, extend: {} },
            { ...technologyDomainConst.pnpm, extend: {} },
            { ...technologyDomainConst.nx, extend: {} },
            { ...technologyDomainConst.webstorm, extend: {} },
            { ...technologyDomainConst.visualStudioCode, extend: {} },
            { ...technologyDomainConst.windows, extend: {} },
          ],
          company: { ...companyDomainConst.aprSystem, extend: {} },
        },
      },
    ];
    expect(_.isEqual(input, output)).toBeTruthy();
  });
});
