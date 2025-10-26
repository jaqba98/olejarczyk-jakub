import { BaseDomain } from '../model/base-domain.model';
import { PersonalDomain } from '../model/personal-domain.model';
import { personalDomainConst } from './personal-domain.const';

describe('Personal Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseDomain.Model<PersonalDomain.Data, PersonalDomain.Metadata> = {
      data: {
        firstName: 'Jakub',
        lastName: 'Olejarczyk',
      },
      metadata: {},
    };
    expect(personalDomainConst).toEqual(correctData);
  });
});
