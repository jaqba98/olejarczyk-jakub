import { TechnologyCategoryDomain } from '../../../domain/model/technology-category-domain.model';
import { TechnologyDomain } from '../../../domain/model/technology-domain.model';

interface TechnologyDataModel {
  category: TechnologyCategoryDomain.Data;
  technologies: TechnologyDomain.Data[];
}

export type TechnologyDataBuilderModel = TechnologyDataModel[];
