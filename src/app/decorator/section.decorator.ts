import { SectionDomainType } from '../domain/type/section-domain.type';

const sectionStore = new Map<SectionDomainType, any>();

export const SectionDecorator = (type: SectionDomainType) => {
  return (component: any) => {
    sectionStore.set(type, component);
  };
};

export const getSection = (type: SectionDomainType) => {
  const section = sectionStore.get(type);
  if (section === undefined) {
    throw new Error(`The ${type} does not exist in the section store!`);
  }
  return section;
};
