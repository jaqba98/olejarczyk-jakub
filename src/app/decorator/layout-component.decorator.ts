import { KindLayoutType } from '../layout/type/kind-layout.type';
import { ComponentType } from '../type/component-type';

const store = new Map<KindLayoutType, ComponentType>();

export const LayoutComponentDecorator = (kind: KindLayoutType) => {
  return (component: ComponentType) => {
    store.set(kind, component);
  };
};

export const getLayoutComponent = (type: KindLayoutType): ComponentType => {
  const layoutComponent = store.get(type);
  if (layoutComponent === undefined) {
    throw new Error(`The ${type} does not exist in the layout component store!`);
  }
  return layoutComponent;
};
