import { SectionKindType } from '../../type/kind/section-kind.type';

export interface SectionDataValueModel {
  id: string;
  label: string;
}

export type SectionDataModel = Record<SectionKindType, SectionDataValueModel>;
