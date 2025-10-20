import { TechnologyCategoryDomainType } from '../../domain/type/technology-category-domain.type';

export interface TechnologyCategoryModel {
  id: TechnologyCategoryDomainType;
  order: number;
}

export type TechnologyCategoryStateModel = Record<
  TechnologyCategoryDomainType,
  TechnologyCategoryModel
>;
