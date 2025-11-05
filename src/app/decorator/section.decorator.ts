import { SectionKindDomainType } from '../domain/type/kind/section-kind-domain.type';

const sectionMap = new Map<SectionKindDomainType, any>();

export const SectionDecorator = (kind: SectionKindDomainType) => {
  return (component: any) => {
    sectionMap.set(kind, component);
  };
};

export const getSection = (kind: SectionKindDomainType) => {
  const section = sectionMap.get(kind);
  if (section) return section;
  throw new Error(`The ${kind} does not exist!`);
};
