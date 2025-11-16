import { ParagraphDataModel } from '../data/paragraph-data.model';
import { SectionDataModel } from '../data/section-data.model';

export interface DataStateModel {
  copyright: ParagraphDataModel;
  section: SectionDataModel;
}
