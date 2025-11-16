import { SectionKindType } from '../../type/kind/section-kind.type';

interface SectionModel {
  id: string;
  label: string;
  href: string;
}

export type SectionRawModel = Record<SectionKindType, SectionModel>;
