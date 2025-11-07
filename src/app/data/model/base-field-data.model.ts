import { FieldDataType } from '../type/field-data.type';
import { BaseDataModel } from './base-data.model';
import { BaseValueDataModel } from './base-value-data.model';

interface GenericModel<TKind extends FieldDataType, TValue> {
  kind: TKind;
  value: BaseValueDataModel<TValue>;
}

type StringModel = GenericModel<'string', string>;
type NumberModel = GenericModel<'number', number>;
type BooleanModel = GenericModel<'boolean', boolean>;
type DateModel = GenericModel<'date', Date>;
type RecordModel = GenericModel<'record', BaseDataModel>;

export type BaseFieldDataModel = StringModel | NumberModel | BooleanModel | DateModel | RecordModel;
