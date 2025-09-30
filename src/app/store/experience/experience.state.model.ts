import { CompanyType } from '../company/company.type';

interface ExperienceModel {
  title: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  locationType: string;
  descriptionList: string[];
}

export type ExperienceStateModel = Record<CompanyType, ExperienceModel[]>;
