import { DomainKindType } from '../../../type/kind/domain-kind.type';

export interface BaseDomainModel<TKind extends DomainKindType> {
  kind: TKind;
}
