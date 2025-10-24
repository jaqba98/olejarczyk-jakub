import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { StoreDomainProvider } from '../provider/store-domain.provider';
import { ProjectDomainBuilder } from './project-domain.builder';
import { ProjectViewDomainModel } from '../model/view/project-view-domain.model';
import { projectDataDomainConst } from '../const/data/project-data-domain.const';
import { technologyGroupDataDomainConst } from '../const/data/technology-group-data-domain.const';
import { technologyCategoryDataDomainConst } from '../const/data/technology-category-data-domain.const';
import { technologyDataDomainConst } from '../../data/const/technology-data.const';

describe('Project Domain Builder', () => {
  let builder: ProjectDomainBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreDomainProvider.getProvide(), ProjectDomainBuilder],
    });
    builder = TestBed.inject(ProjectDomainBuilder);
  });

  it('should return correct data', async () => {
    const correctResult: ProjectViewDomainModel = [
      {
        ...projectDataDomainConst.project1,
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
                technologies: [technologyDataDomainConst.css],
              },
              {
                categoryModel: technologyCategoryDataDomainConst.programmingLanguage,
                technologies: [technologyDataDomainConst.javascript],
              },
            ],
          },
        ],
      },
      {
        ...projectDataDomainConst.project2,
        groups: [
          {
            groupModel: technologyGroupDataDomainConst.common,
            categories: [
              {
                categoryModel: technologyCategoryDataDomainConst.versionControlSystem,
                technologies: [
                  technologyDataDomainConst.git,
                  technologyDataDomainConst.github,
                  technologyDataDomainConst.gitlab,
                ],
              },
            ],
          },
        ],
      },
      {
        ...projectDataDomainConst.project3,
        groups: [
          {
            groupModel: technologyGroupDataDomainConst.integration,
            categories: [
              {
                categoryModel: technologyCategoryDataDomainConst.programmingLanguage,
                technologies: [technologyDataDomainConst.javascript],
              },
              {
                categoryModel: technologyCategoryDataDomainConst.integrationPlatform,
                technologies: [technologyDataDomainConst.snaplogic],
              },
            ],
          },
        ],
      },
    ];
    expect(await firstValueFrom(builder.build())).toEqual(correctResult);
  });
});
