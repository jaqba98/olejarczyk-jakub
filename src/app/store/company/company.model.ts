import { CompanyKindEnum, CompanyLabelEnum } from './company.enum';

export interface CompanyModel {
  label: CompanyLabelEnum;
}

export type CompanyStateModel = Record<CompanyKindEnum, CompanyModel>;
