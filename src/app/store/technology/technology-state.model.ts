import { CompanyType } from '../company/company-state.type';
import { TechnologyCategoryType } from '../technology-category/technology-category.type';
import { TechnologyGroupType } from '../technology-group/technology-group.type';

type TechnologyLevelType = 'beginner' | 'intermediate' | 'advanced';

type TechnologyCompaniesType = Record<CompanyType, TechnologyGroupType[]>;

export interface TechnologyModel {
  name: string;
  level: TechnologyLevelType;
  defaultGroup: TechnologyGroupType;
  svg: string[];
  width: string;
  height: string;
  viewBox: string;
  fill: string;
  stroke: string;
  companies: TechnologyCompaniesType;
}

type TechnologyType = Record<string, TechnologyModel>;

export type TechnologyStateModel = Record<TechnologyCategoryType, TechnologyType>;
