import { BaseDomain } from '../model/base-domain.model';
import { CompanyDomain } from '../model/company-domain.model';
import { CompanyKindDomainType } from '../type/kind/company-kind-domain.type';
import { companyDomainConst } from './company-domain.const';

describe('Company Domain Const', () => {
  it('Should return the correct data', () => {
    const correctData: BaseDomain.Type<
      CompanyKindDomainType,
      CompanyDomain.Data,
      CompanyDomain.Metadata
    > = {
      aprSystem: {
        data: {
          name: 'APR System',
          city: 'Kielce',
          country: 'Poland',
        },
        metadata: {
          kind: 'aprSystem',
          order: 0,
        },
      },
      primaris: {
        data: {
          name: 'Primaris',
          city: 'Warsaw',
          country: 'Poland',
        },
        metadata: {
          kind: 'primaris',
          order: 1,
        },
      },
    };
    expect(companyDomainConst).toEqual(correctData);
  });
});
