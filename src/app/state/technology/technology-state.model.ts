import { TechnologyCategoryDomainType } from '../../domain/type/technology-category-domain.type';
import { TechnologyDomainType } from '../../domain/type/technology-domain.type';
import { TechnologyLevelDomainType } from '../../domain/type/technology-level-domain.type';
import { SvgModel } from '../../model/svg.model';

export interface TechnologyModel {
  name: string;
  level: TechnologyLevelDomainType;
  category: TechnologyCategoryDomainType;
  icon: SvgModel;
  order: number;
}

export type TechnologyStateModel = Record<TechnologyDomainType, TechnologyModel>;
