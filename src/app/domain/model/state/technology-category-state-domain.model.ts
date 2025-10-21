import { TechnologyCategoryIdDomainType } from '../../type/id/technology-category-id-domain.type';
import { BaseStateDomainModel } from '../base/base-state-domain.model';

export interface TechnologyCategoryStateModel
  extends BaseStateDomainModel<TechnologyCategoryIdDomainType> {}

export type TechnologyCategoryStateDomainModel = Record<
  TechnologyCategoryIdDomainType,
  TechnologyCategoryStateModel
>;
