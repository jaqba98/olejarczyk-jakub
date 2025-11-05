import { SectionHrefDomainType } from '../type/href/section-href-domain.type';
import { SectionIdDomainType } from '../type/id/section-id-domain.type';
import { SectionKindDomainType } from '../type/kind/section-kind-domain.type';
import { SectionLabelDomainType } from '../type/label/section-label-domain.type';

export namespace SectionDomain {
  export interface Data {
    kind: SectionKindDomainType;
    id: SectionIdDomainType;
    label: SectionLabelDomainType;
    href: SectionHrefDomainType;
  }

  export interface Metadata {
    routable: boolean;
    order: number;
  }
}
