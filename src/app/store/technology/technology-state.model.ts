import { LevelTypeEnum } from '../../enum/type/level-type.enum';
import { CategoryType } from '../category/category.type';
import { CompanyType } from '../company/company.type';
import { DomainType } from '../technology-group/technology-group.type';

interface TechnologyModel {
  label: string;
  level: LevelTypeEnum;
  defaultDomain: DomainType;
  companies: Record<CompanyType, DomainType[]>;
}

export type TechnologyStateModel = Record<CategoryType, Record<string, TechnologyModel>>;
