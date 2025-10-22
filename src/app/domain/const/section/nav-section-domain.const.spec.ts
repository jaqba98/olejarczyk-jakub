import { NavSectionStateDomainModel } from '../../model/state/section/nav-section-state-domain.model';
import { navSectionDomainConst } from './nav-section-domain.const';

describe('Nav Section Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: NavSectionStateDomainModel = {
      options: ['home'],
      // TODO: Change to resume in the future
      mainOption: 'home',
    };
    expect(navSectionDomainConst).toEqual(correctResult);
  });
});
