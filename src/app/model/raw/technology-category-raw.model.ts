import { TechnologyCategoryKindType } from '../../type/kind/technology-category-kind.type';
import { TechnologyCategoryLabelType } from '../../type/label/technology-category-label.type';

export interface TechnologyCategoryRawValueModel {
  label: TechnologyCategoryLabelType;
}

export type TechnologyCategoryRawModel = Record<
  TechnologyCategoryKindType,
  TechnologyCategoryRawValueModel
>;
