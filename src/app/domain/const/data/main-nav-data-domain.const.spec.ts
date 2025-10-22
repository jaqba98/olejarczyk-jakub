import { MainNavStateDomainModel } from '../../model/state/section/main-nav-section-state-domain.model';
import { mainNavDataDomainConst } from './main-nav-data-domain.const';

describe('Main Nav Data Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: MainNavStateDomainModel = {
      title: 'Olejarczyk Jakub',
      options: {
        home: {
          label: 'Home',
          href: '#home',
        },
      },
    };
    expect(mainNavDataDomainConst).toEqual(correctResult);
  });
});
