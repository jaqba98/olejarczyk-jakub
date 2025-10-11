import { CompanyStateType } from '../company/company-state.type';

type TitleType = 'Full Stack Developer' | 'Integration Engineer';

type EmploymentTypeType = 'Full-time';

type LocationType = 'On-site' | 'Remote';

export interface ExperienceModel {
  title: TitleType;
  employmentType: EmploymentTypeType;
  startDate: Date;
  endDate: Date | null;
  locationType: LocationType;
  description: string[];
}

export type ExperienceStateModel = Record<CompanyStateType, ExperienceModel[]>;
