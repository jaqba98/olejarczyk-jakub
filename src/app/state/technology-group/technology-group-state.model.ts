import { SvgModel } from '../../model/svg.model';
import { TechnologyGroupStateType } from '../../domain/type/technology-group-domain.type';

export interface TechnologyGroupModel {
  name: string;
}

export type TechnologyGroupStateModel = Record<TechnologyGroupStateType, TechnologyGroupModel>;
