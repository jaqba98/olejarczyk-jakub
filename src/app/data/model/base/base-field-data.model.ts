import { FieldTypeDataType } from '../../type/type/field-type-data.type';

interface BaseGenericFieldDataModel<TKind extends FieldTypeDataType, TValue> {
  kind: TKind;
  value: TValue;
}

type BaseStringFieldDataModel = BaseGenericFieldDataModel<'string', string>;
type BaseNumberFieldDataModel = BaseGenericFieldDataModel<'number', number>;
type BaseBooleanFieldDataModel = BaseGenericFieldDataModel<'boolean', boolean>;
type BaseDateFieldDataModel = BaseGenericFieldDataModel<'date', Date>;
type BaseStringArrayFieldDataModel = BaseGenericFieldDataModel<'string[]', string[]>;
type BaseNumberArrayFieldDataModel = BaseGenericFieldDataModel<'number[]', number[]>;
type BaseBooleanArrayFieldDataModel = BaseGenericFieldDataModel<'boolean[]', boolean[]>;
type BaseDateArrayFieldDataModel = BaseGenericFieldDataModel<'date[]', Date[]>;

export type BaseFieldDataModel =
  | BaseStringFieldDataModel
  | BaseNumberFieldDataModel
  | BaseBooleanFieldDataModel
  | BaseDateFieldDataModel
  | BaseStringArrayFieldDataModel
  | BaseNumberArrayFieldDataModel
  | BaseBooleanArrayFieldDataModel
  | BaseDateArrayFieldDataModel;
