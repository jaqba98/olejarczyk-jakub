import { TechnologyCategoryDomainType } from '../../domain/type/technology-category-domain.type';

export interface TechnologyCategoryModel {
  order: number;
}

export type TechnologyCategoryStateModel = Record<
  TechnologyCategoryDomainType,
  TechnologyCategoryModel
>;
