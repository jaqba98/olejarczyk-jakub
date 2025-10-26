import { BaseDomain } from '../model/base-domain.model';
import { PersonalDomain } from '../model/personal-domain.model';

export const personalDomainConst: BaseDomain.Model<PersonalDomain.Data, PersonalDomain.Metadata> = {
  data: {
    firstName: 'Jakub',
    lastName: 'Olejarczyk',
    experienceTitles: ['Full Stack Developer', 'Integration Engineer'],
    profileImage: 'personal/profile.jpeg',
  },
  metadata: {},
};
