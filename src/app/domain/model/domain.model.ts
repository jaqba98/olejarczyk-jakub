type DomainType = 'string' | 'string[]' | 'number' | 'boolean' | 'Date' | 'Record';

interface GenericModel<TType extends DomainType, TValue> {
  type: TType;
  value: TValue;
}

type StringModel = GenericModel<'string', string>;
type StringArrayModel = GenericModel<'string', string[]>;
type NumberModel = GenericModel<'number', number>;
type BooleanModel = GenericModel<'boolean', boolean>;
type DateModel = GenericModel<'Date', Date>;
type RecordModel = GenericModel<'Record', DomainModel>;

type ComplexType =
  | StringModel
  | StringArrayModel
  | NumberModel
  | BooleanModel
  | DateModel
  | RecordModel;

export type DomainModel = Record<string, ComplexType>;
