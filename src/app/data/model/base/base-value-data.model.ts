import { ValueTypeDataType } from '../../type/type/value-type-data.type';

interface GenericBaseValueDataModel<T extends ValueTypeDataType, TValue> {
  type: T;
  value: TValue;
}

type SingleGenericBaseValueDataModel<TValue> = GenericBaseValueDataModel<'single', TValue>;
type ArrayGenericBaseValueDataModel<TValue> = GenericBaseValueDataModel<'array', TValue[]>;

export type BaseValueDataModel<TValue> =
  | SingleGenericBaseValueDataModel<TValue>
  | ArrayGenericBaseValueDataModel<TValue>;
