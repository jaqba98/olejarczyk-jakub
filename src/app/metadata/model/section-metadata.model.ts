import { SectionKindType } from '../../type/kind/section-kind.type';

interface MetadataModel {
  routable: boolean;
  order: number;
}

export type SectionMetadataModel = Record<SectionKindType, MetadataModel>;
