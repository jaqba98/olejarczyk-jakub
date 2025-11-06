import { BaseCompose } from '../model/base/base-compose.model';
import { PersonalDomain } from '../model/domain/personal-domain.model';
import { personalDomainConst } from './personal-domain.const';

describe('Personal Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseCompose.Model<PersonalDomain.Data, PersonalDomain.Metadata> = {
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
    expect(personalDomainConst).toEqual(correctData);
  });
});
