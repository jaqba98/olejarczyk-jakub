import { CompanyType } from './company.type';

export interface CompanyModel {
  name: string;
  city: string;
  country: string;
}

export type CompanyStateModel = Record<CompanyType, CompanyModel>;
