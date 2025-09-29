import { CompanyKeyEnum } from './company-key.enum';

interface CompanyModel {
  label: string;
}

export type CompanyStateModel = Record<CompanyKeyEnum, CompanyModel>;
