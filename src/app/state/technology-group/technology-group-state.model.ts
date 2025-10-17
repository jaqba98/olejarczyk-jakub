import { TechnologyGroupDomainType } from '../../domain/type/technology-group-domain.type';

export interface TechnologyGroupModel {
  name: string;
  order: number;
}

export type TechnologyGroupStateModel = Record<TechnologyGroupDomainType, TechnologyGroupModel>;
