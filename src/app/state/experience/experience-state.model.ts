import { CompanyDomainType } from '../../domain/type/company-domain.type';
import {
  ExperienceEmploymentDomainType,
  ExperienceLocationDomainType,
  ExperienceTitleDomainType,
} from '../../domain/type/experience-domain.type';
import { TechnologyDomainType } from '../../domain/type/technology-domain.type';

export interface ExperienceModel {
  company: CompanyDomainType;
  title: ExperienceTitleDomainType;
  employment: ExperienceEmploymentDomainType;
  startDate: Date;
  endDate: Date | null;
  location: ExperienceLocationDomainType;
  description: string[];
  technologies: TechnologyDomainType[];
  order: number;
}

export type ExperienceStateModel = ExperienceModel[];
