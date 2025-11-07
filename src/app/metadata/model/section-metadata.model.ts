import { SectionKindType } from '../../type/kind/section-kind.type';

export namespace SectionMetadata {
  export interface Model {
    routable: boolean;
    order: number;
  }

  export type Type = Record<SectionKindType, Model>;
}
