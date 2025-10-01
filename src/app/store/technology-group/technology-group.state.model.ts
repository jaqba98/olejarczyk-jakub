import { TechnologyGroupType } from './technology-group.type';

export interface TechnologyGroupModel {
  label: string;
}

export type TechnologyGroupStateModel = Record<TechnologyGroupType, TechnologyGroupModel>;
