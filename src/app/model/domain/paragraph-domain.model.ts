import { ParagraphAppearanceModel } from '../appearance/paragraph-appearance.model';
import { ParagraphDataModel } from '../data/paragraph-data.model';
import { ParagraphMetadataModel } from '../metadata/paragraph-metadata.model';

export interface ParagraphDomainModel {
  data: ParagraphDataModel;
  metadata: ParagraphMetadataModel;
  appearance: ParagraphAppearanceModel;
}
