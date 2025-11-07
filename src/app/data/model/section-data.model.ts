import { SectionKindType } from '../../type/kind/section-kind.type';

interface DataModel {
  id: string;
  label: string;
  href: string;
}

export type SectionDataModel = Record<SectionKindType, DataModel>;
