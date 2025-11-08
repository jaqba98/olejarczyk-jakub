import { SectionDomainType } from '../domain/type/section-domain.type';
import { TComponent } from '../type/component-type';

const sectionStore = new Map<SectionDomainType, TComponent>();

export const SectionDecorator = (type: SectionDomainType) => {
  return (component: TComponent) => {
    sectionStore.set(type, component);
  };
};

export const getSection = (type: SectionDomainType): TComponent => {
  const section = sectionStore.get(type);
  if (section === undefined) {
    throw new Error(`The ${type} does not exist in the section store!`);
  }
  return section;
};
