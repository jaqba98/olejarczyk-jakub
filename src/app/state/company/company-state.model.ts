import { CompanyDomainType } from '../../domain/type/company-domain.type';

export interface CompanyModel {
  id: CompanyDomainType;
  name: string;
  city: string;
  country: string;
  order: number;
}

export type CompanyStateModel = Record<CompanyDomainType, CompanyModel>;
