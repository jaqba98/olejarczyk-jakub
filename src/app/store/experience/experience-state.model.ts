import { CompanyKindEnum } from '../company/company.type';

interface ExperienceModel {
  title: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  location: string;
  locationType: string;
  descriptionList: string[];
}

export type ExperienceStateModel = Record<CompanyKindEnum, ExperienceModel>;
