import { SvgModel } from '../../model/svg.model';
import { TechnologyGroupStateType } from './technology-group-state.type';

export interface TechnologyGroupModel {
  name: string;
  svg: SvgModel;
}

export type TechnologyGroupStateModel = Record<TechnologyGroupStateType, TechnologyGroupModel>;
