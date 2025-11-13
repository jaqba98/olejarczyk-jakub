import { SectionDataModel } from '../../data/model/section-data.model';
import { SectionMetadataModel } from '../../metadata/model/section-metadata.model';

export interface SectionDomainModel {
  data: SectionDataModel;
  metadata: SectionMetadataModel;
}
