import { TechnologyCategoryDomainType } from '../../domain/type/technology-category-domain.type';
import { TechnologyDomainType } from '../../domain/type/technology-domain.type';
import { TechnologyGroupDomainType } from '../../domain/type/technology-group-domain.type';
import { TechnologyLevelDomainType } from '../../domain/type/technology-level-domain.type';
import { SvgModel } from '../../model/svg.model';

interface TechnologyModel {
  name: string;
  level: TechnologyLevelDomainType;
  group: TechnologyGroupDomainType;
  category: TechnologyCategoryDomainType;
  icon: SvgModel;
}

export type TechnologyStateModel = Record<TechnologyDomainType, TechnologyModel>;
