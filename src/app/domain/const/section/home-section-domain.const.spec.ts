import { HomeSectionStateDomainModel } from '../../model/state/section/home-section-state-domain.model';
import { homeSectionDataDomainConst } from './home-section-domain.const';

describe('Home Section Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: HomeSectionStateDomainModel = {
      greeting: 'Hello',
    };
    expect(homeSectionDataDomainConst).toEqual(correctResult);
  });
});
