// import { Injectable } from '@angular/core';
// import { Store } from '@ngxs/store';
// import { map, switchMap } from 'rxjs/operators';
// import { from } from 'rxjs';

// import { ExperienceState } from '../state/experience/experience.state';
// import { CompanyState } from '../state/company/company.state';
// import { TechnologyCategoryState } from '../state/technology-category/technology-category.state';
// import { TechnologyState } from '../state/technology/technology.state';
// import { TechnologyGroupState } from '../state/technology-group/technology-group.state';
// import { TechnologyGroupDomainType } from '../type/id/technology-group-id-domain.type';
// import { TechnologyCategoryDomainType } from '../type/id/technology-category-id-domain.type';
// import { TechnologyDomainType } from '../type/id/technology-id-domain.type';

// @Injectable()
// export class ExperienceBuilder {
//   constructor(private readonly store: Store) {}

//   build() {
//     return this.store.selectOnce(ExperienceState.getState).pipe(
//       switchMap((prevState) => {
//         return from(this.store.selectOnce(CompanyState.getState)).pipe(
//           map((state) => {
//             return prevState.map((experience) => ({
//               ...experience,
//               companyData: state[experience.company],
//             }));
//           }),
//         );
//       }),
//       switchMap((prevState) => {
//         return from(this.store.selectOnce(TechnologyGroupState.getState)).pipe(
//           map((state) => {
//             return prevState.map((prevStateItem) => ({
//               ...prevStateItem,
//               groups: Object.entries(state).map((array) => ({
//                 key: array[0] as TechnologyGroupDomainType,
//                 value: array[1],
//               })),
//             }));
//           }),
//         );
//       }),
//       switchMap((prevState) => {
//         return from(this.store.selectOnce(TechnologyCategoryState.getState)).pipe(
//           map((state) => {
//             return prevState.map((experience) => ({
//               ...experience,
//               groups: experience.groups.map((group) => ({
//                 ...group,
//                 categories: Object.entries(state).map((array) => ({
//                   key: array[0] as TechnologyCategoryDomainType,
//                   value: array[1],
//                 })),
//               })),
//             }));
//           }),
//         );
//       }),
//       switchMap((prevState) => {
//         return from(this.store.selectOnce(TechnologyState.getState)).pipe(
//           map((state) => {
//             return prevState.map((experience) => ({
//               ...experience,
//               groups: experience.groups.map((group) => ({
//                 ...group,
//                 categories: group.categories.map((category) => ({
//                   ...category,
//                   technologies: Object.entries(state).map((array) => ({
//                     key: array[0] as TechnologyDomainType,
//                     value: array[1],
//                   })),
//                 })),
//               })),
//             }));
//           }),
//         );
//       }),
//       map((prevState) => {
//         return prevState
//           .map((experience) => ({
//             ...experience,
//             groups: experience.groups
//               .map((group) => ({
//                 ...group,
//                 categories: group.categories
//                   .map((category) => ({
//                     ...category,
//                     technologies: category.technologies
//                       .filter((technology) => technology.value.category === category.key)
//                       .filter((technology) => {
//                         return technology.value.groups[experience.company].includes(group.key);
//                       })
//                       .sort((prev, next) => prev.value.order - next.value.order),
//                   }))
//                   .filter((technology) => technology.technologies.length > 0)
//                   .sort((prev, next) => prev.value.order - next.value.order),
//               }))
//               .filter((technology) => technology.categories.length > 0)
//               .sort((prev, next) => prev.value.order - next.value.order),
//           }))
//           .sort((prev, next) => {
//             const prevStartDate = prev.startDate.getTime();
//             const nextStartDate = next.startDate.getTime();
//             return nextStartDate - prevStartDate;
//           });
//       }),
//     );
//   }
// }
