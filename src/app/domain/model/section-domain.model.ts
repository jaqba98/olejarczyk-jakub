import { SectionDomainType } from '../type/section-domain.type';

export namespace SectionDomain {
  interface Data {
    id: string;
    label: string;
    href: string;
  }

  interface Metadata {
    routable: boolean;
    order: number;
  }

  interface Model {
    data: Data;
    metadata: Metadata;
  }

  export type Type = Record<SectionDomainType, Model>;
}
