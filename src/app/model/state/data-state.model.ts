import { ParagraphDataModel } from '../data/paragraph-data.model';
import { SectionDataModel } from '../data/section-data.model';
import { TechnologiesDataModel } from '../data/technologies-data.model';

export interface DataStateModel {
  copyright: ParagraphDataModel;
  section: SectionDataModel;
  technologies: TechnologiesDataModel;
}
