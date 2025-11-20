import { SvgModel } from '../../old/svg.model';
import { TechnologyCategoryKindType } from '../../type/kind/technology-category-kind.type';
import { TechnologyKindType } from '../../type/kind/technology-kind.type';
import { TechnologyLabelType } from '../../type/label/technology-label.type';
import { TechnologyLevelType } from '../../type/level/technology-level.type';

interface TechnologyModel {
  kind: TechnologyKindType;
  categoryKind: TechnologyCategoryKindType;
  label: TechnologyLabelType;
  level: TechnologyLevelType;
  svg: SvgModel;
  order: number;
}

export type TechnologyRawModel = Record<string, TechnologyModel>;
