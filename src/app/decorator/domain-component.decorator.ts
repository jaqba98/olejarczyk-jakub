import { KindDomainType } from '../domain/type/kind-domain.type';
import { ComponentType } from '../old/type2/component-type';

const store = new Map<KindDomainType, ComponentType>();

export const DomainComponentDecorator = (kind: KindDomainType) => {
  return (component: ComponentType) => {
    store.set(kind, component);
  };
};

export const getDomainComponent = (type: KindDomainType): ComponentType => {
  const component = store.get(type);
  if (component === undefined) {
    throw new Error(`The ${type} does not exist in the domain component store!`);
  }
  return component;
};
