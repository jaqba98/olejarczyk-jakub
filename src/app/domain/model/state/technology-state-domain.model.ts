import { TechnologyIconDomainType } from '../../type/icon/technology-icon-domain.type';
import { CompanyIdDomainType } from '../../../data/type/id/company-id-data.type';
import { TechnologyCategoryIdDomainType } from '../../type/id/technology-category-id-domain.type';
import { TechnologyGroupIdDomainType } from '../../type/id/technology-group-id-domain.type';
import { TechnologyIdDomainType } from '../../type/id/technology-id-domain.type';
import { TechnologyLevelDomainType } from '../../type/level/technology-level-domain.type';
import { TechnologyNameDomainType } from '../../type/name/technology-name-domain.type';
import { BaseStateDomainModel } from '../base/base-state-domain.model';

export interface TechnologyStateModel extends BaseStateDomainModel<TechnologyIdDomainType> {
  name: TechnologyNameDomainType;
  level: TechnologyLevelDomainType;
  ownGroups: TechnologyGroupIdDomainType[];
  companyGroups: Record<CompanyIdDomainType, TechnologyGroupIdDomainType[]>;
  icon: TechnologyIconDomainType;
  category: TechnologyCategoryIdDomainType;
}

export type TechnologyStateDomainModel = Record<TechnologyIdDomainType, TechnologyStateModel>;
