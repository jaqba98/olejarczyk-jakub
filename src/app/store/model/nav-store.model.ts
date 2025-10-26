import { PersonalDomain } from '../../domain/model/personal-domain.model';
import { BaseStoreModel } from './base-store.model';

export interface NavStoreModel extends BaseStoreModel {
  personalData: PersonalDomain.Data;
}
