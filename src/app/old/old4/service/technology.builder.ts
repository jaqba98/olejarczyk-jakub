// import { technologyCategoryDomainConst } from '../../domain/const/technology-category-domain.const';
// import { technologyDomainConst } from '../../domain/const/technology-domain.const';
// import { TechnologyBuilderModel } from '../model/builder/technology-builder.model';

// export class TechnologyBuilder {
//   static buildData(): TechnologyBuilderModel {
//     return Object.values(technologyCategoryDomainConst)
//       .sort((prev, next) => prev.metadata.order - next.metadata.order)
//       .map((category) => ({
//         ...category,
//         extend: {
//           technologies: Object.values(technologyDomainConst)
//             .filter((technology) => technology.metadata.categoryKind === category.metadata.kind)
//             .sort((prev, next) => prev.metadata.order - next.metadata.order)
//             .map((technology) => ({ ...technology, extend: {} })),
//         },
//       }));
//   }
// }
