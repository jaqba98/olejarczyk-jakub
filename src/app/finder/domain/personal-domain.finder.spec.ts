import { personalDomainConst } from '../../domain/const/personal-domain.const';
import { PersonalDomain } from '../../domain/model/personal-domain.model';
import { PersonalDomainFinder } from './personal-domain.finder';

describe('Personal Domain Finder', () => {
  it('Should return the correct data', () => {
    const correctData: PersonalDomain.Data = personalDomainConst.data;
    expect(PersonalDomainFinder.findData()).toEqual(correctData);
  });
});
