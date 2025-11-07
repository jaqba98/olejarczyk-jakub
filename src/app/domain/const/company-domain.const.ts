import { BaseCompose } from '../model/base/base-combo.model';
import { CompanyDomain } from '../model/domain/company-domain.model';
import { CompanyKindDomainType } from '../type/kind/company-kind-domain.type';

export const companyDomainConst: BaseCompose.Type<
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
      test: 'test',
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
      test: 'test',
      kind: 'primaris',
      order: 1,
    },
  },
};
