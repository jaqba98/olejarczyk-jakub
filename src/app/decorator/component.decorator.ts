import { ComponentType } from '../type/common/common.type';
import { ComponentKindType } from '../type/kind/component-kind.type';

const store = new Map<ComponentKindType, ComponentType>();

export const ComponentDecorator = (kind: ComponentKindType) => {
  return (component: ComponentType) => {
    store.set(kind, component);
  };
};

export const getComponent = (type: ComponentKindType): ComponentType => {
  const component = store.get(type);
  if (component === undefined) {
    throw new Error(`The ${type} does not exist in the component store!`);
  }
  return component;
};
