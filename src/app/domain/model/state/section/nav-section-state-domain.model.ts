import { SectionHrefDomainType } from '../../../type/href/section-href-domain.type';
import { SectionIdDomainType } from '../../../type/id/section-id-domain.type';
import { SectionTitleDomainType } from '../../../type/title/section-title-domain.type';

export interface MainNavOptionModel {
  label: SectionTitleDomainType;
  href: SectionHrefDomainType;
}

export interface NavSectionStateDomainModel {
  // TODO: I am here
  options: Record<SectionIdDomainType, MainNavOptionModel>;
}
