import { CompanyStateModel } from '../state/company-state-domain.model';
import { ExperienceStateModel } from '../state/experience-state-domain.model';
import { TechnologyCategoryStateModel } from '../state/technology-category-state-domain.model';
import { TechnologyGroupStateModel } from '../state/technology-group-state-domain.model';
import { TechnologyStateModel } from '../state/technology-state-domain.model';

interface ExperienceCategoryDomainModel {
  categoryDomain: TechnologyCategoryStateModel;
  technologies: TechnologyStateModel[];
}

interface ExperienceGroupDomainModel {
  groupDomain: TechnologyGroupStateModel;
  categories: ExperienceCategoryDomainModel[];
}

interface ExperienceViewModel extends ExperienceStateModel {
  companyDomain: CompanyStateModel;
  groups: ExperienceGroupDomainModel[];
}

export type ExperienceViewDomainModel = ExperienceViewModel[];
