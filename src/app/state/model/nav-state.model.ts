import { PersonalDataModel } from '../../data/const/model/personal-data.model';
import { SectionDataModel } from '../../data/const/model/section-data.model';

export interface NavStateModel {
  personalData: PersonalDataModel;
  sectionData: Omit<SectionDataModel, 'nav' | 'footer'>;
}
