import { CompanyStateType } from './company-state.type';

export interface CompanyModel {
  name: string;
  city: string;
  country: string;
}

export type CompanyStateModel = Record<CompanyStateType, CompanyModel>;
