import { personalDomainConst } from '../../domain/const/personal-domain.const';
import { PersonalDataModel } from '../model/data/personal-data.model';
import { PersonalDomainFinder } from './personal-domain.finder';

describe('Personal Domain Finder', () => {
  it('Should return the correct data', () => {
    const correctData: PersonalDataModel = {
      ...personalDomainConst.data,
      initials: 'J.O.',
    };
    expect(PersonalDomainFinder.findData()).toEqual(correctData);
  });
});
