import { KindComplexType } from '../layout/type/kind-complex.type';
import { ComponentType } from '../type/component-type';

const store = new Map<KindComplexType, ComponentType>();

export const ComplexComponentDecorator = (kind: KindComplexType) => {
  return (component: ComponentType) => {
    store.set(kind, component);
  };
};

export const getComplexComponent = (type: KindComplexType): ComponentType => {
  const dataComponent = store.get(type);
  if (dataComponent === undefined) {
    throw new Error(`The ${type} does not exist in the complex component store!`);
  }
  return dataComponent;
};
