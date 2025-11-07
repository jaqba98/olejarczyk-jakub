import { FieldTypeDomainType } from '../../type/type/field-type-domain.type';

export namespace BaseDomain {
  interface BaseFieldModel<TKind extends FieldTypeDomainType, TValue> {
    kind: TKind;
    value: TValue;
  }

  interface FieldStringModel extends BaseFieldModel<'string', string> {}
  interface FieldNumberModel extends BaseFieldModel<'number', number> {}
  interface FieldBooleanModel extends BaseFieldModel<'boolean', boolean> {}
  interface FieldDateModel extends BaseFieldModel<'date', Date> {}
  interface FieldArrayOfStringModel extends BaseFieldModel<'arrayOfString', string[]> {}

  type FieldModel =
    | FieldStringModel
    | FieldNumberModel
    | FieldBooleanModel
    | FieldDateModel
    | FieldArrayOfStringModel;

  export interface Data<TField extends string> {
    field: Record<TField, FieldModel>;
  }

  export interface Metadata {}

  export interface Layout {}
}
