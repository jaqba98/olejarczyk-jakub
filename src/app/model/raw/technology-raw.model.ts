import { TechnologyKindType } from '../../type/kind/technology-kind.type';
import { TechnologyLevelType } from '../../type/level/technology-level.type';
import { SvgModel } from '../svg/svg.model';

export interface TechnologyRawItemModel {
  label: string;
  level: TechnologyLevelType;
  icon: SvgModel;
}

export type TechnologyRawModel = Record<TechnologyKindType, TechnologyRawItemModel>;
