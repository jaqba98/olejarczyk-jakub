import { BaseFieldDataModel } from './base-field-data.model';

export interface BaseDataModel {
  field: Record<string, BaseFieldDataModel>;
}
