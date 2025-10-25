import { PersonalData } from '../../data/model/personal-data.model';
import { SectionData } from '../../data/model/section-data.model';
import { BaseStateModel } from './base-state.model';

export interface NavStateModel extends BaseStateModel {
  personalData: PersonalData.Model;
  sectionDatas: SectionData.Model[];
}
