import { BaseCompose } from '../model/base/base-combo.model';
import { PersonalDomain } from '../model/domain/personal-domain.model';

export const personalDomainConst: BaseCompose.Model<PersonalDomain.Data, PersonalDomain.Metadata> =
  {
    data: {
      firstName: 'Jakub',
      lastName: 'Olejarczyk',
      experienceTitles: ['Full Stack Developer', 'Integration Engineer'],
      profileImage: 'asset/image/personal/profile.jpeg',
      email: 'jakubolejarczyk98@gmail.com',
      city: 'Kielce',
      country: 'Poland',
      phoneNumber: '501007197',
    },
    metadata: {
      test: 'test',
    },
  };
