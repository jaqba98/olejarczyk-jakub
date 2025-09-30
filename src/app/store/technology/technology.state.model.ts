import { CompanyType } from '../company/company.type';
import { TechnologyCategoryType } from '../technology-category/technology-category.type';
import { TechnologyGroupType } from '../technology-group/technology-group.type';

type TechnologyCompanyType = Record<CompanyType, TechnologyGroupType[]>;

interface TechnologyModel {
  label: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  defaultGroup: TechnologyGroupType;
  companies: TechnologyCompanyType;
}

type TechnologyType = Record<string, TechnologyModel>;

export type TechnologyStateModel = Record<TechnologyCategoryType, TechnologyType>;
