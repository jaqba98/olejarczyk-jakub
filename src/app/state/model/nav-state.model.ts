import { PersonalDataModel } from '../../data/model/personal-data.model';
import { SectionDataModel } from '../../data/model/section-data.model';

export interface NavStateModel {
  personalData: PersonalDataModel;
  navSectionData: SectionDataModel['nav'];
  sectionData: Omit<SectionDataModel, 'nav' | 'footer'>;
}
