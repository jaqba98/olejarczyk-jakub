import { ParagraphMetadataModel } from '../model/paragraph-metadata.model';

export class ParagraphMetadataBuilder {
  static buildFooter(): ParagraphMetadataModel {
    return {
      test: true,
    };
  }
}
