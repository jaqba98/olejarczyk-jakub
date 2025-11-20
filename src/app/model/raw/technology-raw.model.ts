import { SvgModel } from '../../old/svg.model';
import { TechnologyKindType } from '../../type/kind/technology-kind.type';
import { TechnologyLabelType } from '../../type/label/technology-label.type';
import { TechnologyLevelType } from '../../type/level/technology-level.type';

interface TechnologyModel {
  label: TechnologyLabelType;
  level: TechnologyLevelType;
  svg: SvgModel;
}

export type TechnologyRawModel = Record<TechnologyKindType, TechnologyModel>;
