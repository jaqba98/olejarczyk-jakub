import { TechnologyCategoryStateModel } from '../state/technology-category-state-domain.model';
import { TechnologyGroupStateModel } from '../state/technology-group-state-domain.model';
import { TechnologyStateModel } from '../../../data/const/model/technology-data.model';

interface TechnologyCategoryViewModel {
  categoryModel: TechnologyCategoryStateModel;
  technologies: TechnologyStateModel[];
}

interface TechnologyGroupViewModel {
  groupModel: TechnologyGroupStateModel;
  categories: TechnologyCategoryViewModel[];
}

export type TechnologyViewDomainModel = TechnologyGroupViewModel[];
