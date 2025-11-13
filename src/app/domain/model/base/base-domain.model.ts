import { KindDomainType } from '../../type/kind-domain.type';

export interface BaseDomainModel<TKind extends KindDomainType> {
  kind: TKind;
}
