import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { StoreUtil } from '../util/store.util';
import { ExperienceBuilder } from './experience.builder';
import { CompanyConst } from '../state/company/company.const';
import { ExperienceConst } from '../state/experience/experience.const';
import { TechnologyGroupConst } from '../state/technology-group/technology-group.const';
import { TechnologyCategoryConst } from '../state/technology-category/technology-category.const';
import { TechnologyModel } from '../state/technology/technology-state.model';
import { TechnologyCategoryModel } from '../state/technology-category/technology-category-state.model';
import { TechnologyCategoryDomainType } from '../domain/type/technology-category-domain.type';
import { TechnologyDomainType } from '../domain/type/technology-domain.type';
import { TechnologyConst } from '../state/technology/technology.const';
import { TechnologyGroupDomainType } from '../domain/type/technology-group-domain.type';

const buildGroup = (
  type: TechnologyGroupDomainType,
  categories: {
    key: TechnologyCategoryDomainType;
    value: TechnologyCategoryModel;
    technologies: {
      key: TechnologyDomainType;
      value: TechnologyModel;
    }[];
  }[],
) => {
  return { key: type, value: TechnologyGroupConst[type], categories };
};

const buildCategory = (
  type: TechnologyCategoryDomainType,
  technologies: TechnologyDomainType[],
) => {
  const category = TechnologyCategoryConst[type];
  return {
    key: category.id,
    value: category,
    technologies: buildTechnologies(technologies),
  };
};

const buildTechnologies = (types: TechnologyDomainType[]) => {
  return types
    .map((type) => TechnologyConst[type])
    .map((technology) => ({ key: technology.id, value: technology }));
};

const getExperienceByOrder = (order: number) => {
  return ExperienceConst.find((experience) => experience.order === order);
};

describe('Experience builder', () => {
  let service: ExperienceBuilder;

  beforeAll(() => {
    TestBed.configureTestingModule({
      providers: [StoreUtil.getProvide(), ExperienceBuilder],
    });
    service = TestBed.inject(ExperienceBuilder);
  });

  it('Should return correct experience data', async () => {
    expect(await firstValueFrom(service.build())).toStrictEqual([
      {
        ...getExperienceByOrder(0),
        companyData: CompanyConst.primaris,
        groups: [
          buildGroup('integration', [
            buildCategory('programmingLanguage', ['javascript']),
            buildCategory('database', ['microsoftSqlServer']),
            buildCategory('integrationPlatform', ['snaplogic']),
          ]),
          buildGroup('common', [
            buildCategory('api', ['postman']),
            buildCategory('versionControlSystem', ['github']),
            buildCategory('projectManagement', ['jira']),
            buildCategory('operatingSystem', ['windows']),
          ]),
        ],
      },
      {
        ...getExperienceByOrder(1),
        companyData: CompanyConst.aprSystem,
        groups: [
          buildGroup('frontend', [
            buildCategory('markupLanguage', ['html']),
            buildCategory('stylesheetLanguage', ['css', 'sass']),
            buildCategory('programmingLanguage', ['javascript', 'typescript']),
            buildCategory('framework', ['angular']),
            buildCategory('library', ['rxjs', 'storybook', 'primeng']),
            buildCategory('test', ['jest']),
          ]),
          buildGroup('backend', [
            buildCategory('programmingLanguage', ['javascript', 'typescript']),
            buildCategory('database', ['postgresql']),
            buildCategory('runtime', ['nodejs']),
          ]),
          buildGroup('devops', [
            buildCategory('server', ['nginx']),
            buildCategory('containerization', ['docker']),
          ]),
          buildGroup('common', [
            buildCategory('codeQuality', ['eslint', 'prettier', 'stylelint']),
            buildCategory('api', ['postman']),
            buildCategory('versionControlSystem', ['git', 'gitlab']),
            buildCategory('packageManager', ['npm', 'pnpm']),
            buildCategory('monorepo', ['nx']),
            buildCategory('ide', ['webstorm']),
            buildCategory('editor', ['visualStudioCode']),
            buildCategory('operatingSystem', ['windows']),
          ]),
        ],
      },
    ]);
  });
});
