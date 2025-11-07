// import { projectDomainConst } from '../../domain/const/project-domain.const';
// import { technologyDomainConst } from '../../domain/const/technology-domain.const';
// import { ProjectBuilderModel } from '../model/builder/project-builder.model';

// export class ProjectBuilder {
//   static buildData(): ProjectBuilderModel {
//     return Object.values(projectDomainConst)
//       .sort((prev, next) => prev.metadata.order - next.metadata.order)
//       .map((project) => ({
//         data: project.data,
//         metadata: project.metadata,
//         extend: {
//           technologies: Object.values(technologyDomainConst)
//             .filter((technology) =>
//               project.metadata.technologyIds.includes(technology.metadata.kind),
//             )
//             .sort((prev, next) => prev.metadata.order - next.metadata.order)
//             .map((technology) => ({ ...technology, extend: {} })),
//         },
//       }));
//   }
// }
