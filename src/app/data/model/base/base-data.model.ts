import { BaseFieldDataModel } from './base-field-data.model';

export interface BaseDataModel<TField extends string> {
  field: Record<TField, BaseFieldDataModel>;
}
