import { ValueDataType } from '../type/value-data.type';

interface GenericModel<TKind extends ValueDataType, TValue> {
  kind: TKind;
  value: TValue;
}

type SingleModel<TValue> = GenericModel<'single', TValue>;
type ArrayModel<TValue> = GenericModel<'array', TValue[]>;

export type BaseValueDataModel<TValue> = SingleModel<TValue> | ArrayModel<TValue>;
