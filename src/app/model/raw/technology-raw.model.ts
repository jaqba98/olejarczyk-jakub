import { TechnologyKindType } from '../../type/kind/technology-kind.type';
import { TechnologyLevelType } from '../../type/level/technology-level.type';

export interface TechnologyRawItemModel {
  label: string;
  level: TechnologyLevelType;
}

export type TechnologyRawModel = Record<TechnologyKindType, TechnologyRawItemModel>;
