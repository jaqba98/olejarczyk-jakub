import { TechnologyCategoryType } from './technology-category.type';

interface TechnologyCategoryModel {
  label: string;
}

export type TechnologyCategoryStateModel = Record<TechnologyCategoryType, TechnologyCategoryModel>;
