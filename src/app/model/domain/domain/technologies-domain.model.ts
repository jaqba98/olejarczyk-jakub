import { TechnologiesAppearanceModel } from '../../appearance/technologies-appearance.model';
import { TechnologiesDataModel } from '../../data/technologies-data.model';
import { TechnologiesMetadataModel } from '../../metadata/description-metadata.model';

export interface TechnologiesDomainModel {
  data: TechnologiesDataModel;
  metadata: TechnologiesMetadataModel;
  appearance: TechnologiesAppearanceModel;
}
