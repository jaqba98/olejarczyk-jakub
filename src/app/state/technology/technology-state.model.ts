import { CompanyDomainType } from '../../domain/type/company-domain.type';
import { TechnologyCategoryDomainType } from '../../domain/type/technology-category-domain.type';
import { TechnologyDomainType } from '../../domain/type/technology-domain.type';
import { TechnologyGroupDomainType } from '../../domain/type/technology-group-domain.type';
import { TechnologyLevelDomainType } from '../../domain/type/technology-level-domain.type';
import { SvgModel } from '../../model/svg.model';

export interface TechnologyModel {
  name: string;
  level: TechnologyLevelDomainType;
  ownGroups: TechnologyGroupDomainType[];
  groups: Record<CompanyDomainType, TechnologyGroupDomainType[]>;
  category: TechnologyCategoryDomainType;
  icon: SvgModel;
  order: number;
}

export type TechnologyStateModel = Record<TechnologyDomainType, TechnologyModel>;
