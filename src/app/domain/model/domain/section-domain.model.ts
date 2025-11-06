import { SectionHrefDomainType } from '../../type/href/section-href-domain.type';
import { SectionIdDomainType } from '../../type/id/section-id-domain.type';
import { SectionKindDomainType } from '../../type/kind/section-kind-domain.type';
import { SectionLabelDomainType } from '../../type/label/section-label-domain.type';
import { BaseDomain } from '../base/base-domain.model';

export namespace SectionDomain {
  export interface Data extends BaseDomain.Data {
    kind: SectionKindDomainType;
    id: SectionIdDomainType;
    label: SectionLabelDomainType;
    href: SectionHrefDomainType;
  }

  export interface Metadata extends BaseDomain.Metadata {
    routable: boolean;
    order: number;
  }
}
