import { PersonalDataModel } from '../../finder/model/data/personal-data.model';
import { BaseStoreModel } from './base-store.model';

export interface NavStoreModel extends BaseStoreModel {
  personalData: PersonalDataModel;
}
