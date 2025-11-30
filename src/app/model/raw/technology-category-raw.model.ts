import { TechnologyCategoryKindType } from '../../type/kind/technology-category-kind.type';

export interface TechnologyCategoryRawItemModel {
  label: string;
}

export type TechnologyCategoryRawModel = Record<
  TechnologyCategoryKindType,
  TechnologyCategoryRawItemModel
>;
