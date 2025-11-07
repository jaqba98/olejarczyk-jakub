import { FieldDataType } from '../type/field-data.type';
import { BaseDataModel } from './base-data.model';

interface GenericModel<TKind extends FieldDataType, TValue> {
  kind: TKind;
  value: TValue;
}

type StringModel = GenericModel<'string', string>;
type NumberModel = GenericModel<'number', number>;
type BooleanModel = GenericModel<'boolean', boolean>;
type DateModel = GenericModel<'date', Date>;
type RecordModel = GenericModel<'record', BaseDataModel>;
type StringArrayModel = GenericModel<'string[]', string[]>;
type NumberArrayModel = GenericModel<'number[]', number[]>;
type BooleanArrayModel = GenericModel<'boolean[]', boolean[]>;
type DateArrayModel = GenericModel<'date[]', Date[]>;
type RecordArrayModel = GenericModel<'record[]', BaseDataModel[]>;

export type BaseFieldDataModel =
  | StringModel
  | NumberModel
  | BooleanModel
  | DateModel
  | RecordModel
  | StringArrayModel
  | NumberArrayModel
  | BooleanArrayModel
  | DateArrayModel
  | RecordArrayModel;
