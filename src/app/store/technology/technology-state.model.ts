import { CompanyType } from '../company/company.type';
import { TechnologyCategoryType } from '../technology-category/technology-category.type';
import { TechnologyGroupType } from '../technology-group/technology-group.type';

type TechnologyLevelType = 'beginner' | 'intermediate' | 'advanced';

type TechnologyCompaniesType = Record<CompanyType, TechnologyGroupType[]>;

interface TechnologyModel {
  name: string;
  level: TechnologyLevelType;
  defaultGroup: TechnologyGroupType;
  className: string;
  companies: TechnologyCompaniesType;
}

type TechnologyType = Record<string, TechnologyModel>;

export type TechnologyStateModel = Record<TechnologyCategoryType, TechnologyType>;
