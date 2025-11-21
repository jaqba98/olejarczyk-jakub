import { TechnologyCategoryKindType } from './technology-category-kind.type';
import { TechnologyCategoryLabelType } from './label/technology-category-label.type';

export interface TechnologyCategoryRawValueModel {
  label: TechnologyCategoryLabelType;
}

export type TechnologyCategoryRawModel = Record<
  TechnologyCategoryKindType,
  TechnologyCategoryRawValueModel
>;
