type DomainType = 'string' | 'string[]' | 'number' | 'boolean' | 'Date' | 'Record';

interface GenericModel<TType extends DomainType, TValue> {
  type: TType;
  value: TValue;
}

export type StringModel = GenericModel<'string', string>;
export type StringArrayModel = GenericModel<'string[]', string[]>;
export type NumberModel = GenericModel<'number', number>;
export type BooleanModel = GenericModel<'boolean', boolean>;
export type DateModel = GenericModel<'Date', Date>;
export type RecordModel = GenericModel<'Record', DomainModel>;

type ComplexType =
  | StringModel
  | StringArrayModel
  | NumberModel
  | BooleanModel
  | DateModel
  | RecordModel;

export type DomainModel = Record<string, ComplexType>;
