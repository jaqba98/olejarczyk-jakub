import { SectionKindType } from '../../type/kind/section-kind.type';

export interface SectionMetadataItemModel {
  showTitle: boolean;
}

export type SectionMetadataModel = Record<SectionKindType, SectionMetadataItemModel>;
