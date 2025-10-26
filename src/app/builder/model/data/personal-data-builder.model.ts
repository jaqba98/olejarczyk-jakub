import { PersonalDomain } from '../../../domain/model/personal-domain.model';

export interface PersonalDataBuilderModel extends PersonalDomain.Data {
  initials: string;
}
