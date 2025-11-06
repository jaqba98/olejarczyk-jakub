import { TechnologyCategoryDomain } from '../../../domain/model/domain/technology-category-domain.model';
import { TechnologyDomain } from '../../../domain/model/domain/technology-domain.model';

interface TechnologyDataModel {
  category: TechnologyCategoryDomain.Data;
  technologies: TechnologyDomain.Data[];
}

export type TechnologyDataBuilderModel = TechnologyDataModel[];
