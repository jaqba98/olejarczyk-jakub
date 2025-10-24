import { CompanyIdDomainType } from '../../../type/id/company-id-domain.type';
import { BaseStateDomainModel } from '../../base/base-state-domain.model';

export interface CompanyDataStateModel extends BaseStateDomainModel<CompanyIdDomainType> {
  name: string;
  city: string;
  country: string;
}

export type CompanyDataStateDomainModel = Record<CompanyIdDomainType, CompanyDataStateModel>;
