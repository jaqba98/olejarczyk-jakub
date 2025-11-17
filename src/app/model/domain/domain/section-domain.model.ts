import { SectionAppearanceModel } from '../../appearance/section-appearance.model';
import { SectionDataModel } from '../../data/section-data.model';
import { SectionMetadataModel } from '../../metadata/section-metadata.model';
import { BaseDomainModel } from '../base/base-domain.model';

export interface SectionDomainModel extends BaseDomainModel<'section'> {
  data: SectionDataModel;
  metadata: SectionMetadataModel;
  appearance: SectionAppearanceModel;
}
