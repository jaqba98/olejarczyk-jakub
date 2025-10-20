import { TechnologyGroupDomainType } from '../../domain/type/technology-group-domain.type';

export interface TechnologyGroupModel {
  id: TechnologyGroupDomainType;
  order: number;
}

export type TechnologyGroupStateModel = Record<TechnologyGroupDomainType, TechnologyGroupModel>;
