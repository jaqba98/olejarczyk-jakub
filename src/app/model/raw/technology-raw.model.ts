import { TechnologyCategoryKindType } from '../../type/kind/technology-category-kind.type';
import { TechnologyKindType } from '../../type/kind/technology-kind.type';
import { TechnologyLevelType } from '../../type/level/technology-level.type';

export interface TechnologyRawItemModel {
  label: string;
  level: TechnologyLevelType;
  icon: string[];
  categoryKind: TechnologyCategoryKindType;
}

export type TechnologyRawModel = Record<TechnologyKindType, TechnologyRawItemModel>;
