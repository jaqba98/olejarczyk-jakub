import { TechnologyCategoryKindType } from '../../old/technology-category-kind.type';
import { TechnologyCategoryLabelType } from '../../old/label/technology-category-label.type';

export interface TechnologyCategoryRawValueModel {
  label: TechnologyCategoryLabelType;
}

export type TechnologyCategoryRawModel = Record<
  TechnologyCategoryKindType,
  TechnologyCategoryRawValueModel
>;
