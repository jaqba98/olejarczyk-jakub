import { ParagraphDataModel } from '../data/paragraph-data.model';
import { SectionDataModel } from '../data/section-data.model';
import { TechnologyDataModel } from '../data/technology-data.model';

export interface DataStateModel {
  copyright: ParagraphDataModel;
  description: ParagraphDataModel;
  section: SectionDataModel;
  technology: TechnologyDataModel;
}
