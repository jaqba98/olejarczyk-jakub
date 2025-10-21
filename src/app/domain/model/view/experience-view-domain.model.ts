import { CompanyStateModel } from '../state/company-state-domain.model';
import { ExperienceStateModel } from '../state/experience-state-domain.model';
import { TechnologyCategoryStateModel } from '../state/technology-category-state-domain.model';
import { TechnologyGroupStateModel } from '../state/technology-group-state-domain.model';
import { TechnologyStateModel } from '../state/technology-state-domain.model';

interface ExperienceCategoryViewModel {
  categoryModel: TechnologyCategoryStateModel;
  technologies: TechnologyStateModel[];
}

interface ExperienceGroupViewModel {
  groupModel: TechnologyGroupStateModel;
  categories: ExperienceCategoryViewModel[];
}

interface ExperienceViewModel extends ExperienceStateModel {
  companyModel: CompanyStateModel;
  groups: ExperienceGroupViewModel[];
}

export type ExperienceViewDomainModel = ExperienceViewModel[];
