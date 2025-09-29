import { CompanyKindEnum } from '../company/company.type';

interface CompanyModel {
  label: string;
}

export type CompanyStateModel = Record<CompanyKindEnum, CompanyModel>;
