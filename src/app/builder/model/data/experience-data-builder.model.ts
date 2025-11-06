import { CompanyDomain } from '../../../domain/model/domain/company-domain.model';
import { ExperienceDomain } from '../../../domain/model/domain/experience-domain.model';
import { TechnologyDomain } from '../../../domain/model/domain/technology-domain.model';

interface ExperienceDataModel {
  experience: ExperienceDomain.Model;
  technologies: TechnologyDomain.Data[];
  company: CompanyDomain.Data;
}

export type ExperienceDataBuilderModel = ExperienceDataModel[];
