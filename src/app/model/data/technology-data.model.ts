import { TechnologyCategoryRawItemModel } from '../raw/technology-category-raw.model';
import { TechnologyRawItemModel } from '../raw/technology-raw.model';

export interface TechnologyDataItemModel {
  category: TechnologyCategoryRawItemModel;
  technologies: TechnologyRawItemModel[];
}

export type TechnologyDataModel = TechnologyDataItemModel[];
