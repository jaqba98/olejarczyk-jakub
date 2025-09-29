import { CompanyKindEnum } from '../../enum/kind/company-kind.enum';

interface CompanyModel {
  label: string;
}

export type CompanyStateModel = Record<CompanyKindEnum, CompanyModel>;
