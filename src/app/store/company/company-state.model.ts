import { CompanyKeyEnum } from './company-key.enum';

interface CompanyModel {
  label: string;
}

export interface CompanyStateModel {
  company: Record<CompanyKeyEnum, CompanyModel>;
}
