import { TechnologyGroupIdDataType } from '../../type/id/technology-group-id-data.type';
import { BaseDataModel } from './base-data.model';

export interface TechnologyGroupModel extends BaseDataModel<TechnologyGroupIdDataType> {}

export type TechnologyGroupDataModel = Record<TechnologyGroupIdDataType, TechnologyGroupModel>;
