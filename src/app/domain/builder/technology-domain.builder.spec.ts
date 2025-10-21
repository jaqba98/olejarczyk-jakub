import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { StoreDomainProvider } from '../provider/store-domain.provider';
import { technologyGroupDataDomainConst } from '../const/data/technology-group-data-domain.const';
import { TechnologyDomainBuilder } from './technology-domain.builder';
import { TechnologyViewDomainModel } from '../model/view/technology-view-domain.model';
import { technologyCategoryDataDomainConst } from '../const/data/technology-category-data-domain.const';
import { technologyDataDomainConst } from '../const/data/technology-data-domain.const';

describe('Technology Domain Builder', () => {
  let builder: TechnologyDomainBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreDomainProvider.getProvide(), TechnologyDomainBuilder],
    });
    builder = TestBed.inject(TechnologyDomainBuilder);
  });

  it('should return correct data', async () => {
    const correctResult: TechnologyViewDomainModel = [
      {
        groupModel: technologyGroupDataDomainConst.frontend,
        categories: [
          {
            categoryModel: technologyCategoryDataDomainConst.markupLanguage,
            technologies: [technologyDataDomainConst.html],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.stylesheetLanguage,
            technologies: [technologyDataDomainConst.css, technologyDataDomainConst.sass],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.programmingLanguage,
            technologies: [
              technologyDataDomainConst.javascript,
              technologyDataDomainConst.typescript,
            ],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.framework,
            technologies: [technologyDataDomainConst.angular],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.library,
            technologies: [
              technologyDataDomainConst.rxjs,
              technologyDataDomainConst.storybook,
              technologyDataDomainConst.primeng,
            ],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.test,
            technologies: [technologyDataDomainConst.jest],
          },
        ],
      },
      {
        groupModel: technologyGroupDataDomainConst.backend,
        categories: [
          {
            categoryModel: technologyCategoryDataDomainConst.programmingLanguage,
            technologies: [
              technologyDataDomainConst.javascript,
              technologyDataDomainConst.typescript,
            ],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.database,
            technologies: [
              technologyDataDomainConst.postgresql,
              technologyDataDomainConst.microsoftSqlServer,
            ],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.runtime,
            technologies: [technologyDataDomainConst.nodejs],
          },
        ],
      },
      {
        groupModel: technologyGroupDataDomainConst.devops,
        categories: [
          {
            categoryModel: technologyCategoryDataDomainConst.server,
            technologies: [technologyDataDomainConst.nginx],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.containerization,
            technologies: [technologyDataDomainConst.docker],
          },
        ],
      },
      {
        groupModel: technologyGroupDataDomainConst.integration,
        categories: [
          {
            categoryModel: technologyCategoryDataDomainConst.programmingLanguage,
            technologies: [technologyDataDomainConst.javascript],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.database,
            technologies: [technologyDataDomainConst.microsoftSqlServer],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.integrationPlatform,
            technologies: [technologyDataDomainConst.snaplogic, technologyDataDomainConst.n8n],
          },
        ],
      },
      {
        groupModel: technologyGroupDataDomainConst.ai,
        categories: [
          {
            categoryModel: technologyCategoryDataDomainConst.programmingLanguage,
            technologies: [technologyDataDomainConst.python],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.library,
            technologies: [technologyDataDomainConst.numpy],
          },
        ],
      },
      {
        groupModel: technologyGroupDataDomainConst.common,
        categories: [
          {
            categoryModel: technologyCategoryDataDomainConst.codeQuality,
            technologies: [
              technologyDataDomainConst.eslint,
              technologyDataDomainConst.prettier,
              technologyDataDomainConst.stylelint,
            ],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.api,
            technologies: [technologyDataDomainConst.postman],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.versionControlSystem,
            technologies: [
              technologyDataDomainConst.git,
              technologyDataDomainConst.github,
              technologyDataDomainConst.gitlab,
            ],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.packageManager,
            technologies: [technologyDataDomainConst.npm, technologyDataDomainConst.pnpm],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.monorepo,
            technologies: [technologyDataDomainConst.nx],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.ide,
            technologies: [technologyDataDomainConst.webstorm, technologyDataDomainConst.eclipse],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.editor,
            technologies: [technologyDataDomainConst.visualStudioCode],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.diagram,
            technologies: [technologyDataDomainConst.visualParadigm],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.projectManagement,
            technologies: [technologyDataDomainConst.jira],
          },
          {
            categoryModel: technologyCategoryDataDomainConst.operatingSystem,
            technologies: [technologyDataDomainConst.windows, technologyDataDomainConst.linux],
          },
        ],
      },
    ];
    expect(await firstValueFrom(builder.build())).toEqual(correctResult);
  });
});
