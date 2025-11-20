import { TechnologyCategoryKindType } from '../../type/kind/technology-category-kind.type';
import { TechnologyKindType } from '../../type/kind/technology-kind.type';

interface TechnologyModel {
  categoryKind: TechnologyCategoryKindType;
  order: number;
}

export type TechnologyMetadataModel = Record<TechnologyKindType, TechnologyModel>;
