import { TechnologyKindType } from './technology-kind.type';
import { TechnologyLabelType } from './label/technology-label.type';
import { TechnologyLevelType } from './level/technology-level.type';

export interface TechnologyRawValueModel {
  label: TechnologyLabelType;
  level: TechnologyLevelType;
}

export type TechnologyRawModel = Record<TechnologyKindType, TechnologyRawValueModel>;
