import { CategoryKindEnum } from '../../enum/kind/category-kind.enum';
import { CompanyKindEnum } from '../../enum/kind/company-kind.enum';
import { DomainKindEnum } from '../../enum/kind/domain-kind.enum';
import { LevelTypeEnum } from '../../enum/type/level-type.enum';

interface TechnologyModel {
  label: string;
  level: LevelTypeEnum;
  defaultDomain: DomainKindEnum;
  companies: Record<CompanyKindEnum, DomainKindEnum[]>;
}

export type TechnologyStateModel = Record<CategoryKindEnum, Record<string, TechnologyModel>>;
