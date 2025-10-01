import { TechnologyCategoryType } from './technology-category.type';

export interface TechnologyCategoryModel {
  label: string;
}

export type TechnologyCategoryStateModel = Record<TechnologyCategoryType, TechnologyCategoryModel>;
