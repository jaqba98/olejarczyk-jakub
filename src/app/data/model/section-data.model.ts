import { SectionHrefDataType } from '../type/href/section-href-data.type';
import { SectionIdDataType } from '../type/id/section-id-data.type';
import { SectionKindDataType } from '../type/kind/section-kind-data.type';
import { SectionLabelDataType } from '../type/label/section-label-data.type';

export namespace SectionData {
  export interface Model {
    id: SectionIdDataType;
    label: SectionLabelDataType;
    href: SectionHrefDataType;
    navigable: boolean;
  }

  export type Type = Record<SectionKindDataType, Model>;
}
