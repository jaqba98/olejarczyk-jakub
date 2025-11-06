import { PersonalDomain } from '../../../domain/model/domain/personal-domain.model';

export interface PersonalDataBuilderModel extends PersonalDomain.Data {
  initials: string;
}
