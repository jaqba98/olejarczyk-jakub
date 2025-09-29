import { CompanyType } from './company.type';

interface CompanyModel {
  label: string;
}

export type CompanyStateModel = Record<CompanyType, CompanyModel>;
