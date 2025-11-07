import {
  BooleanModel,
  DateModel,
  DomainModel,
  NumberModel,
  RecordModel,
  StringArrayModel,
  StringModel,
} from '../model/domain.model';

export const stringDomainBuilder = (value: string): StringModel => {
  return { type: 'string', value };
};

export const stringArrayDomainBuilder = (value: string[]): StringArrayModel => {
  return { type: 'string[]', value };
};

export const numberDomainBuilder = (value: number): NumberModel => {
  return { type: 'number', value };
};

export const booleanDomainBuilder = (value: boolean): BooleanModel => {
  return { type: 'boolean', value };
};

export const dateDomainBuilder = (value: Date): DateModel => {
  return { type: 'Date', value };
};

export const recordDomainBuilder = (value: DomainModel): RecordModel => {
  return { type: 'Record', value };
};

export const domainBuilder = (value: DomainModel): DomainModel => {
  return value;
};
