import { SvgModel } from '../../../model/svg.model';
import { TechnologyIdDataType } from '../../type/id/technology-id-data.type';
import { TechnologyLevelDataType } from '../../type/level/technology-level-data.type';
import { TechnologyNameDataType } from '../../type/name/technology-name-data.type';
import { BaseDataModel } from './base-data.model';

interface TechnologyModel extends BaseDataModel<TechnologyIdDataType> {
  name: TechnologyNameDataType;
  level: TechnologyLevelDataType;
  svg: SvgModel;
}

export type TechnologyDateModel = Record<TechnologyIdDataType, TechnologyModel>;
