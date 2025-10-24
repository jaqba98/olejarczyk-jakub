import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { ExperienceDomainBuilder } from './experience-domain.builder';
import { StoreDomainProvider } from '../provider/store-domain.provider';
import { ExperienceViewDomainModel } from '../model/view/experience-view-domain.model';
import { experienceDataDomainConst } from '../const/data/experience-data-domain.const';
import { companyDataDomainConst } from '../../data/const/company-data.const';
import { technologyGroupDataDomainConst } from '../const/data/technology-group-data-domain.const';
import { technologyCategoryDataDomainConst } from '../const/data/technology-category-data-domain.const';
import { technologyDataDomainConst } from '../../data/const/technology-data.const';

describe('Experience Domain Builder', () => {
  let builder: ExperienceDomainBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreDomainProvider.getProvide(), ExperienceDomainBuilder],
    });
    builder = TestBed.inject(ExperienceDomainBuilder);
  });

  it('should return correct data', async () => {
    const correctResult: ExperienceViewDomainModel = [
      {
        ...experienceDataDomainConst.primaris.experiences[0],
        companyModel: companyDataDomainConst.primaris,
        groups: [
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
                technologies: [technologyDataDomainConst.snaplogic],
              },
            ],
          },
          {
            groupModel: technologyGroupDataDomainConst.common,
            categories: [
              {
                categoryModel: technologyCategoryDataDomainConst.api,
                technologies: [technologyDataDomainConst.postman],
              },
              {
                categoryModel: technologyCategoryDataDomainConst.versionControlSystem,
                technologies: [technologyDataDomainConst.github],
              },
              {
                categoryModel: technologyCategoryDataDomainConst.projectManagement,
                technologies: [technologyDataDomainConst.jira],
              },
              {
                categoryModel: technologyCategoryDataDomainConst.operatingSystem,
                technologies: [technologyDataDomainConst.windows],
              },
            ],
          },
        ],
      },
      {
        ...experienceDataDomainConst.aprSystem.experiences[0],
        companyModel: companyDataDomainConst.aprSystem,
        groups: [
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
                technologies: [technologyDataDomainConst.postgresql],
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
                technologies: [technologyDataDomainConst.git, technologyDataDomainConst.gitlab],
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
                technologies: [technologyDataDomainConst.webstorm],
              },
              {
                categoryModel: technologyCategoryDataDomainConst.editor,
                technologies: [technologyDataDomainConst.visualStudioCode],
              },
              {
                categoryModel: technologyCategoryDataDomainConst.operatingSystem,
                technologies: [technologyDataDomainConst.windows],
              },
            ],
          },
        ],
      },
    ];
    expect(await firstValueFrom(builder.build())).toEqual(correctResult);
  });
});
