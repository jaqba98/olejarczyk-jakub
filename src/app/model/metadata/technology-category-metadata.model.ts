import { TechnologyCategoryKindType } from '../../type/kind/technology-category-kind.type';

interface TechnologyCategoryModel {
  order: number;
}

export type TechnologyCategoryMetadataModel = Record<
  TechnologyCategoryKindType,
  TechnologyCategoryModel
>;
