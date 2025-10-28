import _ from 'lodash';

import { TechnologyDataBuilder } from './technology-data.builder';
import { TechnologyDataBuilderModel } from '../model/data/technology-data-builder.model';
import { technologyCategoryDomainConst } from '../../domain/const/technology-category-domain.const';
import { technologyDomainConst } from '../../domain/const/technology-domain.const';

describe('Technology Data Builder', () => {
  it('Should return all social medias', () => {
    const inputTechnology = TechnologyDataBuilder.buildData();
    const resultSocialMedias: TechnologyDataBuilderModel = [
      {
        category: technologyCategoryDomainConst.markupLanguage.data,
        technologies: [technologyDomainConst.html.data],
      },
      {
        category: technologyCategoryDomainConst.stylesheetLanguage.data,
        technologies: [technologyDomainConst.css.data, technologyDomainConst.sass.data],
      },
      {
        category: technologyCategoryDomainConst.programmingLanguage.data,
        technologies: [
          technologyDomainConst.javascript.data,
          technologyDomainConst.typescript.data,
          technologyDomainConst.python.data,
        ],
      },
      {
        category: technologyCategoryDomainConst.framework.data,
        technologies: [technologyDomainConst.angular.data],
      },
      {
        category: technologyCategoryDomainConst.library.data,
        technologies: [
          technologyDomainConst.rxjs.data,
          technologyDomainConst.storybook.data,
          technologyDomainConst.primeng.data,
          technologyDomainConst.numpy.data,
        ],
      },
      {
        category: technologyCategoryDomainConst.test.data,
        technologies: [technologyDomainConst.jest.data],
      },
      {
        category: technologyCategoryDomainConst.codeQuality.data,
        technologies: [
          technologyDomainConst.eslint.data,
          technologyDomainConst.prettier.data,
          technologyDomainConst.stylelint.data,
        ],
      },
      {
        category: technologyCategoryDomainConst.database.data,
        technologies: [
          technologyDomainConst.postgresql.data,
          technologyDomainConst.microsoftSqlServer.data,
        ],
      },
      {
        category: technologyCategoryDomainConst.server.data,
        technologies: [technologyDomainConst.nginx.data],
      },
      {
        category: technologyCategoryDomainConst.runtime.data,
        technologies: [technologyDomainConst.nodejs.data],
      },
      {
        category: technologyCategoryDomainConst.containerization.data,
        technologies: [technologyDomainConst.docker.data],
      },
      {
        category: technologyCategoryDomainConst.integrationPlatform.data,
        technologies: [technologyDomainConst.snaplogic.data, technologyDomainConst.n8n.data],
      },
      {
        category: technologyCategoryDomainConst.api.data,
        technologies: [technologyDomainConst.postman.data],
      },
      {
        category: technologyCategoryDomainConst.versionControlSystem.data,
        technologies: [
          technologyDomainConst.git.data,
          technologyDomainConst.github.data,
          technologyDomainConst.gitlab.data,
        ],
      },
      {
        category: technologyCategoryDomainConst.packageManager.data,
        technologies: [technologyDomainConst.npm.data, technologyDomainConst.pnpm.data],
      },
      {
        category: technologyCategoryDomainConst.monorepo.data,
        technologies: [technologyDomainConst.nx.data],
      },
      {
        category: technologyCategoryDomainConst.ide.data,
        technologies: [technologyDomainConst.webstorm.data, technologyDomainConst.eclipse.data],
      },
      {
        category: technologyCategoryDomainConst.editor.data,
        technologies: [technologyDomainConst.visualStudioCode.data],
      },
      {
        category: technologyCategoryDomainConst.diagram.data,
        technologies: [technologyDomainConst.visualParadigm.data],
      },
      {
        category: technologyCategoryDomainConst.projectManagement.data,
        technologies: [technologyDomainConst.jira.data],
      },
      {
        category: technologyCategoryDomainConst.operatingSystem.data,
        technologies: [technologyDomainConst.windows.data, technologyDomainConst.linux.data],
      },
    ];
    expect(_.isEqual(inputTechnology, resultSocialMedias)).toBeTruthy();
  });
});
