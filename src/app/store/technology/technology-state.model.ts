import { CategoryKindEnum } from '../category/category.type';
import { DomainKindEnum } from '../../enum/kind/domain-kind.enum';
import { LevelTypeEnum } from '../../enum/type/level-type.enum';
import { CompanyType } from '../company/company.type';

interface TechnologyModel {
  label: string;
  level: LevelTypeEnum;
  defaultDomain: DomainKindEnum;
  companies: Record<CompanyType, DomainKindEnum[]>;
}

export type TechnologyStateModel = Record<CategoryKindEnum, Record<string, TechnologyModel>>;
