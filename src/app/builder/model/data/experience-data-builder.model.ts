import { CompanyDomain } from '../../../domain/model/company-domain.model';
import { ExperienceDomain } from '../../../domain/model/experience-domain.model';
import { TechnologyDomain } from '../../../domain/model/technology-domain.model';

interface ExperienceDataModel {
  experience: ExperienceDomain.Model;
  technologies: TechnologyDomain.Data[];
  company: CompanyDomain.Data;
}

export type ExperienceDataBuilderModel = ExperienceDataModel[];
