import { TechnologyCategoryKindType } from '../../type/kind/technology-category-kind.type';
import { TechnologyCategoryLabelType } from '../../type/label/technology-category-label.type';

interface TechnologyCategoryModel {
  label: TechnologyCategoryLabelType;
  kind: TechnologyCategoryKindType;
  order: number;
}

export type TechnologyCategoryRawModel = Record<
  TechnologyCategoryKindType,
  TechnologyCategoryModel
>;
