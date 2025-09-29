import { DomainType } from './domain.type';

interface DomainModel {
  label: string;
}

export type DomainStateModel = Record<DomainType, DomainModel>;
