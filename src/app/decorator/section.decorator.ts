import { SectionDomainType } from '../domain/type/section-domain.type';
import { ComponentType } from '../type/component-type';

const sectionStore = new Map<SectionDomainType, ComponentType>();

export const SectionDecorator = (type: SectionDomainType) => {
  return (component: ComponentType) => {
    sectionStore.set(type, component);
  };
};

export const getSection = (type: SectionDomainType): ComponentType => {
  const section = sectionStore.get(type);
  if (section === undefined) {
    throw new Error(`The ${type} does not exist in the section store!`);
  }
  return section;
};
