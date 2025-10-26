import { PersonalDomain } from '../../../domain/model/personal-domain.model';

export interface PersonalDataModel extends PersonalDomain.Data {
  initials: string;
}
