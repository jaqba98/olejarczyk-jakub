import { CompanyKindEnum } from '../../enum/kind/company-kind.enum';

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
