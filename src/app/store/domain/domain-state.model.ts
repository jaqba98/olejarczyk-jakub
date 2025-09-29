import { DomainKindEnum } from '../../enum/kind/domain-kind.enum';

interface DomainModel {
  label: string;
  order: number;
}

export type DomainStateModel = Record<DomainKindEnum, DomainModel>;
