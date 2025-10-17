import { CompanyDomainType } from '../../domain/type/company-domain.type';
import {
  ExperienceEmploymentDomainType,
  ExperienceLocationDomainType,
  ExperienceTitleDomainType,
} from '../../domain/type/experience-domain.type';
import { TechnologyDomainType } from '../../domain/type/technology-domain.type';
import { TechnologyGroupDomainType } from '../../domain/type/technology-group-domain.type';

interface ExperienceTechnologyModel {
  technology: TechnologyDomainType;
  group: TechnologyGroupDomainType[];
}

export interface ExperienceModel {
  company: CompanyDomainType;
  title: ExperienceTitleDomainType;
  employment: ExperienceEmploymentDomainType;
  startDate: Date;
  endDate: Date | null;
  location: ExperienceLocationDomainType;
  description: string[];
  technologies: ExperienceTechnologyModel[];
  order: number;
}

export type ExperienceStateModel = ExperienceModel[];
