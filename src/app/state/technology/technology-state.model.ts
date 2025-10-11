import { SvgModel } from '../../model/svg.model';
import { CompanyStateType } from '../company/company-state.type';
import { TechnologyCategoryStateType } from '../technology-category/technology-category-state.type';
import { TechnologyGroupStateType } from '../technology-group/technology-group-state.type';

type TechnologyLevelType = 'beginner' | 'intermediate' | 'advanced';

type TechnologyCompaniesType = Record<CompanyStateType, TechnologyGroupStateType[]>;

export interface TechnologyModel {
  name: string;
  level: TechnologyLevelType;
  defaultGroup: TechnologyGroupStateType;
  companies: TechnologyCompaniesType;
  svg: SvgModel;
}

type TechnologyType = Record<string, TechnologyModel>;

export type TechnologyStateModel = Record<TechnologyCategoryStateType, TechnologyType>;
