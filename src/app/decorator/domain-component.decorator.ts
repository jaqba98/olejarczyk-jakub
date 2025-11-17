import { DomainKindType } from '../type/kind/domain-kind.type';
import { ComponentType } from '../old/type2/component-type';

const store = new Map<DomainKindType, ComponentType>();

export const DomainComponentDecorator = (kind: DomainKindType) => {
  return (component: ComponentType) => {
    store.set(kind, component);
  };
};

export const getDomainComponent = (type: DomainKindType): ComponentType => {
  const component = store.get(type);
  if (component === undefined) {
    throw new Error(`The ${type} does not exist in the domain component store!`);
  }
  return component;
};
