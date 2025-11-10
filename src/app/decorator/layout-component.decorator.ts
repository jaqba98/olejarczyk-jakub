import { KindLayoutEnum } from '../layout/enum/kind-layout.enum';
import { ComponentType } from '../type/component-type';

const store = new Map<KindLayoutEnum, ComponentType>();

export const LayoutComponentDecorator = (kind: KindLayoutEnum) => {
  return (component: ComponentType) => {
    store.set(kind, component);
  };
};

export const getLayoutComponent = (type: KindLayoutEnum): ComponentType => {
  const layoutComponent = store.get(type);
  if (layoutComponent === undefined) {
    throw new Error(`The ${type} does not exist in the layout component store!`);
  }
  return layoutComponent;
};
