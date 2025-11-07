import { SectionKindType } from '../../type/kind/section-kind.type';

export namespace SectionLayout {
  export interface Model {}

  export type Type = Record<SectionKindType, Model>;
}
