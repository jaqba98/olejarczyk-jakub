import { SectionKindBareType } from '../type/kind/section-kind-bare.type';

interface SectionModel {
  id: string;
  label: string;
  href: string;
}

export type SectionBareModel = Record<SectionKindBareType, SectionModel>;
