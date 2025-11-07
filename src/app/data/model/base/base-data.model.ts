import { BaseFieldDataModel } from './base-field-data.model';

export interface BaseDataModel<T extends string> {
  field: Record<T, BaseFieldDataModel>;
}
