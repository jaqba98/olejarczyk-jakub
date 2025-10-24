import { TechnologyCategoryIdDataType } from '../type/id/technology-category-id-data.type';
import { BaseDataModel } from './base-data.model';

interface TechnologyCategoryModel extends BaseDataModel<TechnologyCategoryIdDataType> {}

export type TechnologyCategoryDateModel = Record<
  TechnologyCategoryIdDataType,
  TechnologyCategoryModel
>;
