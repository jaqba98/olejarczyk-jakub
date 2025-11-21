import { SectionKindType } from '../../type/kind/section-kind.type';
import { SectionAppearanceItemModel } from '../appearance/section-appearance.model';
import { SectionDataItemModel } from '../data/section-data.model';
import { SectionMetadataItemModel } from '../metadata/section-metadata.model';

export interface SectionDomainItemModel {
  data: SectionDataItemModel;
  metadata: SectionMetadataItemModel;
  appearance: SectionAppearanceItemModel;
}

export type SectionDomainModel = Record<SectionKindType, SectionDomainItemModel>;
