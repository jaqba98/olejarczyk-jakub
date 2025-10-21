import { TechnologyGroupIdDomainType } from '../../type/id/technology-group-id-domain.type';
import { BaseStateDomainModel } from '../base/base-state-domain.model';

export interface TechnologyGroupStateModel
  extends BaseStateDomainModel<TechnologyGroupIdDomainType> {}

export type TechnologyGroupStateDomainModel = Record<
  TechnologyGroupIdDomainType,
  TechnologyGroupStateModel
>;
