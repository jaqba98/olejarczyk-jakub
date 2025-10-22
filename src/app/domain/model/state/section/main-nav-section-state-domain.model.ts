import { SectionHrefDomainType } from '../../../type/href/section-href-domain.type';
import { SectionIdDomainType } from '../../../type/id/section-id-domain.type';
import { SectionTitleDomainType } from '../../../type/title/section-title-domain.type';

export interface MainNavOptionModel {
  label: SectionTitleDomainType;
  href: SectionHrefDomainType;
}

export interface MainNavSectionStateDomainModel {
  // TODO: I am here
  title: string;
  options: Record<SectionIdDomainType, MainNavOptionModel>;
}
