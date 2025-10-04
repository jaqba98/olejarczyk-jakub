import { TechnologyCategoryType } from './technology-category.type';

export interface TechnologyCategoryModel {
  name: string;
}

export type TechnologyCategoryStateModel = Record<TechnologyCategoryType, TechnologyCategoryModel>;
