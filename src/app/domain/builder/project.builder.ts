// import { Injectable } from '@angular/core';
// import { Store } from '@ngxs/store';
// import { map, switchMap } from 'rxjs/operators';

// import { ProjectState } from '../state/project/project.state';
// import { ObjectUtil } from '../util/object.util';
// import { from } from 'rxjs';
// import { TechnologyCategoryState } from '../state/technology-category/technology-category.state';
// import { TechnologyState } from '../state/technology/technology.state';
// import { TechnologyGroupDomainType } from '../type/id/technology-group-id-domain.type';
// import { BaseBuilder } from './base.builder';

// @Injectable()
// export class ProjectBuilder {
//   constructor(
//     private readonly store: Store,
//     private readonly objectUtil: ObjectUtil,
//     private readonly baseBuilder: BaseBuilder,
//   ) {}

//   build() {
//     return this.store.selectOnce(ProjectState.getState).pipe(
//       map((prevState) => this.objectUtil.convertObjectToArray(prevState)),
//       switchMap((prevState) => this.baseBuilder.buildTechnologyGroupState(prevState)),
//       switchMap((prevState) => {
//         return from(this.store.selectOnce(TechnologyCategoryState.getState)).pipe(
//           map((state) => {
//             return prevState.map((project) => ({
//               ...project,
//               groups: project.groups.map((group) => ({
//                 ...group,
//                 categories: this.objectUtil.convertObjectToArray(state),
//               })),
//             }));
//           }),
//         );
//       }),
//       switchMap((prevState) => {
//         return from(this.store.selectOnce(TechnologyState.getState)).pipe(
//           map((state) => {
//             return prevState.map((proejct) => ({
//               ...proejct,
//               groups: proejct.groups.map((group) => ({
//                 ...group,
//                 categories: group.categories.map((category) => ({
//                   ...category,
//                   technologies: this.objectUtil.convertObjectToArray(state).map((technology) => ({
//                     ...technology,
//                     commonGroups: [
//                       ...technology.value.ownGroups,
//                       ...Object.values(technology.value.groups),
//                     ]
//                       .flat()
//                       .reduce(
//                         (acc: TechnologyGroupDomainType[], curr: TechnologyGroupDomainType) => {
//                           if (!acc.includes(curr)) acc.push(curr);
//                           return acc;
//                         },
//                         [],
//                       ),
//                   })),
//                 })),
//               })),
//             }));
//           }),
//         );
//       }),
//       map((prevState) => {
//         return prevState
//           .map((project) => ({
//             ...project,
//             groups: project.groups
//               .map((group) => ({
//                 ...group,
//                 categories: group.categories
//                   .map((category) => ({
//                     ...category,
//                     technologies: category.technologies
//                       .filter((technology) => technology.value.category === category.key)
//                       .filter((technology) => technology.commonGroups.includes(group.key))
//                       .filter((technology) => project.value.technologies.includes(technology.key))
//                       .sort((prev, next) => prev.value.order - next.value.order),
//                   }))
//                   .filter((technology) => technology.technologies.length > 0)
//                   .sort((prev, next) => prev.value.order - next.value.order),
//               }))
//               .filter((technology) => technology.categories.length > 0)
//               .sort((prev, next) => prev.value.order - next.value.order),
//           }))
//           .sort((prev, next) => {
//             const prevCreationDate = prev.value.creationDate.getTime();
//             const nextCreationDate = next.value.creationDate.getTime();
//             return nextCreationDate - prevCreationDate;
//           });
//       }),
//     );
//   }
// }
