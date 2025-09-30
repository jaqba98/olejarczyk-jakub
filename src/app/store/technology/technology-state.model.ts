import { LevelTypeEnum } from '../../enum/type/level-type.enum';
import { CompanyType } from '../company/company.type';
import { TechnologyCategoryType } from '../technology-category/technology-category.type';
import { TechnologyGroupType } from '../technology-group/technology-group.type';

interface TechnologyModel {
  label: string;
  level: LevelTypeEnum;
  defaultDomain: TechnologyGroupType;
  companies: Record<CompanyType, TechnologyGroupType[]>;
}

export type TechnologyStateModel = Record<TechnologyCategoryType, Record<string, TechnologyModel>>;
