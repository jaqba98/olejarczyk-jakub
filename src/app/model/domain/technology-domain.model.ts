import { TechnologyAppearanceModel } from '../appearance/technology-appearance.model';
import { TechnologyDataModel } from '../data/technology-data.model';
import { TechnologyMetadataModel } from '../metadata/technology-metadata.model';

export interface TechnologyDomainModel {
  data: TechnologyDataModel;
  metadata: TechnologyMetadataModel;
  appearance: TechnologyAppearanceModel;
}
