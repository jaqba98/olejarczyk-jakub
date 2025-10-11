import { CompanyStateType } from '../company/company-state.type';
import { TechnologyCategoryType } from '../technology-category/technology-category-state.type';
import { TechnologyGroupStateType } from '../technology-group/technology-group-state.type';

type TechnologyLevelType = 'beginner' | 'intermediate' | 'advanced';

type TechnologyCompaniesType = Record<CompanyStateType, TechnologyGroupStateType[]>;

export interface TechnologyModel {
  name: string;
  level: TechnologyLevelType;
  defaultGroup: TechnologyGroupStateType;
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
