import { FieldTypeDataType } from '../../type/type/field-type-data.type';
import { BaseValueDataModel } from './base-value-data.model';

interface GenericBaseFieldDataModel<T extends FieldTypeDataType, TValue> {
  type: T;
  value: BaseValueDataModel<TValue>;
}

type StringBaseFieldDataModel = GenericBaseFieldDataModel<'string', string>;
type NumberBaseFieldDataModel = GenericBaseFieldDataModel<'number', number>;
type BooleanBaseFieldDataModel = GenericBaseFieldDataModel<'boolean', boolean>;
type DateBaseFieldDataModel = GenericBaseFieldDataModel<'date', Date>;

export type BaseFieldDataModel =
  | StringBaseFieldDataModel
  | NumberBaseFieldDataModel
  | BooleanBaseFieldDataModel
  | DateBaseFieldDataModel;
