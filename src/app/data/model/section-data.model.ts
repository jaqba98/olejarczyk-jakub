import { SectionKindType } from '../../type/kind/section-kind.type';

export namespace SectionData {
  export interface Model {
    id: string;
    label: string;
    href: string;
  }

  export type Type = Record<SectionKindType, Model>;
}
