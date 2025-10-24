import { PersonalDataStateDomainModel } from '../../model/state/data/personal-data-state-domain.model';
import { personalDataDomainConst } from './personal-data-domain.const';

describe('Personal Data Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: PersonalDataStateDomainModel = {
      firstName: 'Jakub',
      lastName: 'Olejarczyk',
      // TODO: Set correct profile image
      profileImage: 'assetImage1',
      experienceTitles: ['Full Stack Developer', 'Integration Engineer'],
    };
    expect(personalDataDomainConst).toEqual(correctResult);
  });
});
