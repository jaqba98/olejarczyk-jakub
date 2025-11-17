import { SectionKindType } from '../../../type/kind/section-kind.type';
import { SectionAppearanceValueModel } from '../../appearance/section-appearance.model';
import { SectionDataValueModel } from '../../data/section-data.model';
import { SectionMetadataValueModel } from '../../metadata/section-metadata.model';

export interface SectionDomainValueModel {
  data: SectionDataValueModel;
  metadata: SectionMetadataValueModel;
  appearance: SectionAppearanceValueModel;
}

export type SectionDomainModel = Record<SectionKindType, SectionDomainValueModel>;
