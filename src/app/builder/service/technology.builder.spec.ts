import _ from 'lodash';

import { technologyCategoryDomainConst } from '../../domain/const/technology-category-domain.const';
import { technologyDomainConst } from '../../domain/const/technology-domain.const';
import { TechnologyBuilder } from './technology.builder';
import { TechnologyBuilderModel } from '../model/builder/technology-builder.model';

describe('Technology Builder', () => {
  it('Should return all social medias', () => {
    const input = TechnologyBuilder.buildData();
    const output: TechnologyBuilderModel = [
      {
        ...technologyCategoryDomainConst.markupLanguage,
        extend: {
          technologies: [{ ...technologyDomainConst.html, extend: {} }],
        },
      },
      {
        ...technologyCategoryDomainConst.stylesheetLanguage,
        extend: {
          technologies: [
            { ...technologyDomainConst.css, extend: {} },
            { ...technologyDomainConst.sass, extend: {} },
          ],
        },
      },
      {
        ...technologyCategoryDomainConst.programmingLanguage,
        extend: {
          technologies: [
            { ...technologyDomainConst.javascript, extend: {} },
            { ...technologyDomainConst.typescript, extend: {} },
            { ...technologyDomainConst.python, extend: {} },
          ],
        },
      },
      {
        ...technologyCategoryDomainConst.framework,
        extend: {
          technologies: [{ ...technologyDomainConst.angular, extend: {} }],
        },
      },
      {
        ...technologyCategoryDomainConst.library,
        extend: {
          technologies: [
            { ...technologyDomainConst.rxjs, extend: {} },
            { ...technologyDomainConst.storybook, extend: {} },
            { ...technologyDomainConst.primeng, extend: {} },
            { ...technologyDomainConst.numpy, extend: {} },
          ],
        },
      },
      {
        ...technologyCategoryDomainConst.test,
        extend: {
          technologies: [{ ...technologyDomainConst.jest, extend: {} }],
        },
      },
      {
        ...technologyCategoryDomainConst.codeQuality,
        extend: {
          technologies: [
            { ...technologyDomainConst.eslint, extend: {} },
            { ...technologyDomainConst.prettier, extend: {} },
            { ...technologyDomainConst.stylelint, extend: {} },
          ],
        },
      },
      {
        ...technologyCategoryDomainConst.database,
        extend: {
          technologies: [
            { ...technologyDomainConst.postgresql, extend: {} },
            { ...technologyDomainConst.microsoftSqlServer, extend: {} },
          ],
        },
      },
      {
        ...technologyCategoryDomainConst.server,
        extend: {
          technologies: [{ ...technologyDomainConst.nginx, extend: {} }],
        },
      },
      {
        ...technologyCategoryDomainConst.runtime,
        extend: {
          technologies: [{ ...technologyDomainConst.nodejs, extend: {} }],
        },
      },
      {
        ...technologyCategoryDomainConst.containerization,
        extend: {
          technologies: [{ ...technologyDomainConst.docker, extend: {} }],
        },
      },
      {
        ...technologyCategoryDomainConst.integrationPlatform,
        extend: {
          technologies: [
            { ...technologyDomainConst.snaplogic, extend: {} },
            { ...technologyDomainConst.n8n, extend: {} },
          ],
        },
      },
      {
        ...technologyCategoryDomainConst.api,
        extend: {
          technologies: [{ ...technologyDomainConst.postman, extend: {} }],
        },
      },
      {
        ...technologyCategoryDomainConst.versionControlSystem,
        extend: {
          technologies: [
            { ...technologyDomainConst.git, extend: {} },
            { ...technologyDomainConst.github, extend: {} },
            { ...technologyDomainConst.gitlab, extend: {} },
          ],
        },
      },
      {
        ...technologyCategoryDomainConst.packageManager,
        extend: {
          technologies: [
            { ...technologyDomainConst.npm, extend: {} },
            { ...technologyDomainConst.pnpm, extend: {} },
          ],
        },
      },
      {
        ...technologyCategoryDomainConst.monorepo,
        extend: {
          technologies: [{ ...technologyDomainConst.nx, extend: {} }],
        },
      },
      {
        ...technologyCategoryDomainConst.ide,
        extend: {
          technologies: [
            { ...technologyDomainConst.webstorm, extend: {} },
            { ...technologyDomainConst.eclipse, extend: {} },
          ],
        },
      },
      {
        ...technologyCategoryDomainConst.editor,
        extend: {
          technologies: [{ ...technologyDomainConst.visualStudioCode, extend: {} }],
        },
      },
      {
        ...technologyCategoryDomainConst.diagram,
        extend: {
          technologies: [{ ...technologyDomainConst.visualParadigm, extend: {} }],
        },
      },
      {
        ...technologyCategoryDomainConst.projectManagement,
        extend: {
          technologies: [{ ...technologyDomainConst.jira, extend: {} }],
        },
      },
      {
        ...technologyCategoryDomainConst.operatingSystem,
        extend: {
          technologies: [
            { ...technologyDomainConst.windows, extend: {} },
            { ...technologyDomainConst.linux, extend: {} },
          ],
        },
      },
    ];
    expect(_.isEqual(input, output)).toBeTruthy();
  });
});
