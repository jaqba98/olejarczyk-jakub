import { SectionKindType } from '../../type/kind/section-kind.type';

export interface SectionRawItemModel {
  id: string;
  label: string;
  href: string;
}

export type SectionRawModel = Record<SectionKindType, SectionRawItemModel>;
