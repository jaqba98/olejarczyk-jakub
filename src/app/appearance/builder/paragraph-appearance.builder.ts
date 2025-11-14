import { ParagraphAppearanceModel } from '../model/paragraph-appearance.model';

export class ParagraphAppearanceBuilder {
  static buildFooter(): ParagraphAppearanceModel {
    return {
      hello: true,
    };
  }
}
