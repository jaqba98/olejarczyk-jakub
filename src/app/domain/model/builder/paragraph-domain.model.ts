import { ParagraphAppearanceModel } from '../../../appearance/model/paragraph-appearance.model';
import { ParagraphDataModel } from '../../../model/data/paragraph-data.model';
import { ParagraphMetadataModel } from '../../../metadata/model/paragraph-metadata.model';
import { BaseDomainModel } from '../base/base-domain.model';

export interface ParagraphDomainModel extends BaseDomainModel<'paragraph'> {
  data: ParagraphDataModel;
  metadata: ParagraphMetadataModel;
  appearance: ParagraphAppearanceModel;
}
