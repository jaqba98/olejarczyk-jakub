import { CompanyDataStateDomainModel } from '../../model/state/data/company-data-state-domain.model';
import { companyDataDomainConst } from './company-data-domain.const';

describe('Company Data Domain Const', () => {
  it('should return correct data', () => {
    const correctResult: CompanyDataStateDomainModel = {
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
    expect(companyDataDomainConst).toEqual(correctResult);
  });
});
