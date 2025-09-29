import { DomainKindEnum } from '../../enum/kind/domain-kind.enum';

interface DomainModel {
  label: string;
}

export type DomainStateModel = Record<DomainKindEnum, DomainModel>;
