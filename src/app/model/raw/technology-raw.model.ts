import { TechnologyKindType } from '../../type/kind/technology-kind.type';
import { TechnologyLabelType } from '../../type/label/technology-label.type';
import { TechnologyLevelType } from '../../type/level/technology-level.type';

export interface TechnologyRawValueModel {
  label: TechnologyLabelType;
  level: TechnologyLevelType;
}

export type TechnologyRawModel = Record<TechnologyKindType, TechnologyRawValueModel>;
