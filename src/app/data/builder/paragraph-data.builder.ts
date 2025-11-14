import { ParagraphDataModel } from '../model/paragraph-data.model';

export class ParagraphDataBuilder {
  static buildFooter(): ParagraphDataModel {
    return {
      text: 'Lorem ipsum',
    };
  }
}
