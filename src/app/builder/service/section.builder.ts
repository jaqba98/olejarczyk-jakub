// import { sectionDomainConst } from '../../domain/const/section-domain.const';
// import { SectionKindDomainType } from '../../domain/type/kind/section-kind-domain.type';
// import { SectionBuilderModel, SectionsBuilderModel } from '../model/builder/section-builder.model';

// export class SectionBuilder {
//   static buildDataForKind(kind: SectionKindDomainType): SectionBuilderModel {
//     if (kind in sectionDomainConst) {
//       const section = sectionDomainConst[kind];
//       return { ...section, extend: {} };
//     }
//     throw new Error(`The ${kind} does not exist in the sectionDomainConst!`);
//   }

//   static buildDataForRoutableSections(): SectionsBuilderModel {
//     return Object.values(sectionDomainConst)
//       .filter((sectionDomain) => sectionDomain.metadata.routable)
//       .sort((prev, next) => prev.metadata.order - next.metadata.order)
//       .map((sectionDomain) => ({ ...sectionDomain, extend: {} }));
//   }

//   static buildDataForAllSections(): SectionsBuilderModel {
//     return Object.values(sectionDomainConst)
//       .sort((prev, next) => prev.metadata.order - next.metadata.order)
//       .map((sectionDomain) => ({ ...sectionDomain, extend: {} }));
//   }
// }
