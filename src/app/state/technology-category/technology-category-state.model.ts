import { TechnologyCategoryStateType } from './technology-category-state.type';

export interface TechnologyCategoryModel {
  name: string;
}

export type TechnologyCategoryStateModel = Record<
  TechnologyCategoryStateType,
  TechnologyCategoryModel
>;
