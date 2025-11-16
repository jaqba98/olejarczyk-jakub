import { SectionKindType } from '../../type/kind/section-kind.type';

interface SectionModel {
  id: string;
  label: string;
}

export type SectionDataModel = Record<SectionKindType, SectionModel>;
