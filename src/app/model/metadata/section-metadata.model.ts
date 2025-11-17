import { SectionKindType } from '../../type/kind/section-kind.type';

export interface SectionMetadataValueModel {
  showTitle: boolean;
}

export type SectionMetadataModel = Record<SectionKindType, SectionMetadataValueModel>;
