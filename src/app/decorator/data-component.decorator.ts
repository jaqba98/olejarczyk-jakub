import { KindDataType } from '../data/type/kind-data.type';
import { ComponentType } from '../type/component-type';

const store = new Map<KindDataType, ComponentType>();

export const DataComponentDecorator = (kind: KindDataType) => {
  return (component: ComponentType) => {
    store.set(kind, component);
  };
};

export const getDataComponent = (type: KindDataType): ComponentType => {
  const dataComponent = store.get(type);
  if (dataComponent === undefined) {
    throw new Error(`The ${type} does not exist in the data component store!`);
  }
  return dataComponent;
};
