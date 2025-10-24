import { SectionIdDomainType } from '../../../../data/type/id/section-id-data.type';
import { BaseStateDomainModel } from '../../base/base-state-domain.model';

export interface NavSectionStateOptionDomainModel
  extends BaseStateDomainModel<SectionIdDomainType> {
  visible: boolean;
  primary: boolean;
}

export interface NavSectionStateDomainModel {
  options: Record<SectionIdDomainType, NavSectionStateOptionDomainModel>;
}
