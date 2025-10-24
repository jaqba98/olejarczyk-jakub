import { ProjectStateModel } from '../state/project-state-domain.model';
import { TechnologyCategoryStateModel } from '../state/technology-category-state-domain.model';
import { TechnologyGroupStateModel } from '../state/technology-group-state-domain.model';
import { TechnologyStateModel } from '../../../data/model/technology-data.model';

interface ProjectCategoryViewModel {
  categoryModel: TechnologyCategoryStateModel;
  technologies: TechnologyStateModel[];
}

interface ProjectGroupViewModel {
  groupModel: TechnologyGroupStateModel;
  categories: ProjectCategoryViewModel[];
}

interface ProjectViewModel extends ProjectStateModel {
  groups: ProjectGroupViewModel[];
}

export type ProjectViewDomainModel = ProjectViewModel[];
