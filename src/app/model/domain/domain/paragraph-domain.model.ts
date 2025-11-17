import { ParagraphAppearanceModel } from '../../appearance/paragraph-appearance.model';
import { ParagraphDataModel } from '../../data/paragraph-data.model';
import { ParagraphMetadataModel } from '../../metadata/paragraph-metadata.model';
import { BaseDomainModel } from '../base/base-domain.model';

export interface ParagraphDomainModel extends BaseDomainModel<'paragraph'> {
  data: ParagraphDataModel;
  metadata: ParagraphMetadataModel;
  appearance: ParagraphAppearanceModel;
}
