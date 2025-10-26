import { SectionHrefDomainType } from '../../type/href/section-href-domain.type';
import { SectionIdDomainType } from '../../type/id/section-id-domain.type';
import { SectionLabelDomainType } from '../../type/label/section-label-domain.type';

export interface SectionDataDomainModel {
  id: SectionIdDomainType;
  label: SectionLabelDomainType;
  href: SectionHrefDomainType;
}
