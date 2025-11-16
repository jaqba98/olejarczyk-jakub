// import { companyDomainConst } from '../../domain/const/company-domain.const';
// import { experienceDomainConst } from '../../domain/const/experience-domain.const';
// import { technologyDomainConst } from '../../domain/const/technology-domain.const';
// import { ExperienceBuilderModel } from '../model/builder/experience-builder.model';

// export class ExperienceBuilder {
//   static buildData(): ExperienceBuilderModel {
//     return Object.values(experienceDomainConst)
//       .sort((prev, next) => prev.metadata.order - next.metadata.order)
//       .map((domain) => {
//         return domain.data.experiences.map((experience) => ({
//           data: experience,
//           metadata: domain.metadata,
//         }));
//       })
//       .flat()
//       .sort((prev, next) => prev.data.order - next.data.order)
//       .sort((prev, next) => {
//         return next.data.startDate.getTime() - prev.data.startDate.getTime();
//       })
//       .map((domain) => ({
//         ...domain,
//         extend: {
//           technologies: Object.values(technologyDomainConst)
//             .filter((technology) => {
//               return domain.data.technologyIds.includes(technology.metadata.kind);
//             })
//             .map((technology) => ({ ...technology, extend: {} })),
//           company: { ...companyDomainConst[domain.metadata.companyKind], extend: {} },
//         },
//       }));
//   }
// }
