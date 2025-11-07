import { BaseDomain } from './base-domain.model';

export interface BaseComboModel<TField extends string> {
  data: BaseDomain.Data<TField>;
  metadata: BaseDomain.Metadata;
  layout: BaseDomain.Layout;
}
