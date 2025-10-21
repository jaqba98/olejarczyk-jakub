import { CompanyStateDomainModel } from '../../model/state/company-state-domain.model';
import { CompanyDataDomainConst } from './company-data-domain.const';

describe('Company Data Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: CompanyStateDomainModel = {
      aprSystem: {
        id: 'aprSystem',
        order: 0,
        name: 'APR System',
        city: 'Kielce',
        country: 'Poland',
      },
      primaris: {
        id: 'primaris',
        order: 1,
        name: 'Primaris',
        city: 'Warsaw',
        country: 'Poland',
      },
    };
    expect(CompanyDataDomainConst).toEqual(correctResult);
  });
});
