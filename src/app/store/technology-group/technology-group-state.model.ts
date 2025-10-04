import { TechnologyGroupType } from './technology-group.type';

export interface TechnologyGroupModel {
  name: string;
}

export type TechnologyGroupStateModel = Record<TechnologyGroupType, TechnologyGroupModel>;
