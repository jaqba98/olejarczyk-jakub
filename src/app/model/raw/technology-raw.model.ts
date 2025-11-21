import { TechnologyKindType } from '../../old/technology-kind.type';
import { TechnologyLabelType } from '../../old/label/technology-label.type';
import { TechnologyLevelType } from '../../old/level/technology-level.type';

export interface TechnologyRawValueModel {
  label: TechnologyLabelType;
  level: TechnologyLevelType;
}

export type TechnologyRawModel = Record<TechnologyKindType, TechnologyRawValueModel>;
