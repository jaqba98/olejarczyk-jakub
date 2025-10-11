import { CompanyStateType } from '../company/company-state.type';

type ExperienceTitleType = 'Full Stack Developer' | 'Integration Engineer';

type ExperienceEmploymentType = 'Full-time';

type ExperienceLocationType = 'On-site' | 'Remote';

export interface ExperienceModel {
  title: ExperienceTitleType;
  employment: ExperienceEmploymentType;
  startDate: Date;
  endDate: Date | null;
  location: ExperienceLocationType;
  description: string[];
}

export type ExperienceStateModel = Record<CompanyStateType, ExperienceModel[]>;
