import { ParagraphAppearanceBuilder } from '../../appearance/builder/paragraph-appearance.builder';
import { ParagraphDataBuilder } from '../../data/builder/paragraph-data.builder';
import { ParagraphMetadataBuilder } from '../../metadata/builder/paragraph-metadata.builder';
import { ParagraphDomainModel } from '../model/builder/paragraph-domain.model';

export class ParagraphDomainBuilder {
  static buildFooterCopyright(): ParagraphDomainModel {
    return {
      kind: 'paragraph',
      data: ParagraphDataBuilder.buildFooterCopyright(),
      metadata: ParagraphMetadataBuilder.buildFooterCopyright(),
      appearance: ParagraphAppearanceBuilder.buildFooterCopyright(),
    };
  }
}
