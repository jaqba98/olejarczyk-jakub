import { HomeStateDomainModel } from '../../model/state/home-state-domain.model';
import { homeDataDomainConst } from './greeting-data-domain.const';

describe('Home Data Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: HomeStateDomainModel = {
      greeting: 'Hello',
    };
    expect(homeDataDomainConst).toEqual(correctResult);
  });
});
