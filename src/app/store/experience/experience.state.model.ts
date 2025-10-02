import { CompanyType } from '../company/company.type';

export interface ExperienceModel {
  title: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  locationType: string;
  descriptionList: string[];
  order: number;
}

export type ExperienceStateModel = Record<CompanyType, ExperienceModel[]>;
