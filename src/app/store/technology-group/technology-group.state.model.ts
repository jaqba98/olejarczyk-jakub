import { TechnologyGroupType } from './technology-group.type';

interface TechnologyGroupModel {
  label: string;
}

export type TechnologyGroupStateModel = Record<TechnologyGroupType, TechnologyGroupModel>;
