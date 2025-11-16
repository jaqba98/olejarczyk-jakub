import { SectionAppearanceModel } from '../../../appearance/model/section-appearance.model';
import { SectionDataModel } from '../../../model/data/section-data.model';
import { SectionMetadataModel } from '../../../metadata/model/section-metadata.model';
import { BaseDomainModel } from '../base/base-domain.model';

export interface SectionDomainModel extends BaseDomainModel<'section'> {
  data: SectionDataModel;
  metadata: SectionMetadataModel;
  appearance: SectionAppearanceModel;
}
