import { SectionIdDomainType } from '../../../type/id/section-id-domain.type';

export interface SectionDataStateModel {
  id: SectionIdDomainType;
  label: string;
  href: string;
}

export type SectionDataStateDomainModel = Record<SectionIdDomainType, SectionDataStateModel>;
