import { Type } from '@angular/core';
import { SectionAbstract } from '../abstract/section.abstract';
import { SectionKindDomainType } from '../old/type/kind/section-kind-domain.type';

const sectionStore = new Map<SectionKindDomainType, Type<SectionAbstract>>();

export const SectionDecorator = (kind: SectionKindDomainType) => {
  return (component: Type<SectionAbstract>) => {
    sectionStore.set(kind, component);
  };
};

export const getSection = (kind: SectionKindDomainType): Type<SectionAbstract> => {
  const section = sectionStore.get(kind);
  if (section) return section;
  throw new Error(`The ${kind} does not exist in the section store!`);
};
