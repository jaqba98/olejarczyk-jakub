import { SectionIdDataType } from '../type/id/section-id-data.type';

export namespace SectionData {
  export interface Model {
    id: string;
    label: string;
  }

  export type Type = Record<SectionIdDataType, Model>;
}
