import { SectionKindType } from '../../type/kind/section-kind.type';

interface SectionModel {
  showTitle: boolean;
}

export type SectionMetadataModel = Record<SectionKindType, SectionModel>;
