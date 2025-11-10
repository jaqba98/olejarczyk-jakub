import { KindDataEnum } from '../data/enum/kind-data.enum';
import { ComponentType } from '../type/component-type';

const store = new Map<KindDataEnum, ComponentType>();

export const DataComponentDecorator = (kind: KindDataEnum) => {
  return (component: ComponentType) => {
    store.set(kind, component);
  };
};

export const getDataComponent = (type: KindDataEnum): ComponentType => {
  const dataComponent = store.get(type);
  if (dataComponent === undefined) {
    throw new Error(`The ${type} does not exist in the data component store!`);
  }
  return dataComponent;
};
