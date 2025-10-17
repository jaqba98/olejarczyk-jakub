import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { ExperienceState } from '../state/experience/experience.state';

@Injectable()
export class ExperienceBuilder {
  constructor(private readonly store: Store) {}

  build() {
    return this.store.selectOnce(ExperienceState.getState);
    //   map((state) => this.buildExperience(state)),
    //   switchMap((state) => this.addCompany(state)),
    //   switchMap((state) => this.addGroup(state)),
    //   switchMap((state) => this.addCategory(state)),
    //   switchMap((state) => this.addTechnology(state)),
  }

  //   private buildExperience(state: ExperienceStateModel) {
  //     return Object.entries(state)
  //       .map((state) => ({
  //         companyType: state[0] as CompanyStateType,
  //         experiences: state[1],
  //       }))
  //       .map((state) => {
  //         return state.experiences.map((experience) => ({
  //           companyType: state.companyType,
  //           experience,
  //         }));
  //       })
  //       .flat()
  //       .sort((previous, next) => {
  //         const previousStartDate = previous.experience.startDate.getTime();
  //         const nextStartDate = next.experience.startDate.getTime();
  //         return nextStartDate - previousStartDate;
  //       });
  //   }

  //   private addCompany(
  //     rootState: {
  //       companyType: CompanyStateType;
  //       experience: ExperienceModel;
  //     }[],
  //   ) {
  //     return from(this.store.selectOnce(CompanyState.getState)).pipe(
  //       map((state) => {
  //         return rootState.map((rootStateItem) => ({
  //           ...rootStateItem,
  //           company: state[rootStateItem.companyType],
  //         }));
  //       }),
  //     );
  //   }

  //   private addGroup(
  //     rootState: {
  //       company: CompanyModel;
  //       companyType: CompanyStateType;
  //       experience: ExperienceModel;
  //     }[],
  //   ) {
  //     return from(this.store.selectOnce(TechnologyGroupState.getState)).pipe(
  //       map((state) => {
  //         return rootState.map((rootStateItem) => ({
  //           ...rootStateItem,
  //           group: Object.entries(state).map((array) => ({
  //             groupType: array[0] as TechnologyGroupStateType,
  //             groupModel: array[1],
  //           })),
  //         }));
  //       }),
  //     );
  //   }

  //   private addCategory(
  //     rootState: {
  //       group: {
  //         groupType: TechnologyGroupStateType;
  //         groupModel: TechnologyGroupModel;
  //       }[];
  //       company: CompanyModel;
  //       companyType: CompanyStateType;
  //       experience: ExperienceModel;
  //     }[],
  //   ) {
  //     return from(this.store.selectOnce(TechnologyCategoryState.getState)).pipe(
  //       map((state) => {
  //         return rootState.map((rootStateItem) => ({
  //           ...rootStateItem,
  //           group: rootStateItem.group.map((groupItem) => ({
  //             ...groupItem,
  //             category: Object.entries(state).map((array) => ({
  //               categoryType: array[0] as TechnologyCategoryStateType,
  //               categoryModel: array[1],
  //             })),
  //           })),
  //         }));
  //       }),
  //     );
  //   }

  //   private addTechnology(
  //     rootState: {
  //       group: {
  //         category: {
  //           categoryType: TechnologyCategoryStateType;
  //           categoryModel: TechnologyCategoryModel;
  //         }[];
  //         groupType: TechnologyGroupStateType;
  //         groupModel: TechnologyGroupModel;
  //       }[];
  //       company: CompanyModel;
  //       companyType: CompanyStateType;
  //       experience: ExperienceModel;
  //     }[],
  //   ) {
  //     return from(this.store.selectOnce(TechnologyState.getState)).pipe(
  //       map((state) => {
  //         return rootState.map((rootStateItem) => ({
  //           ...rootStateItem,
  //           group: rootStateItem.group
  //             .map((groupItem) => ({
  //               ...groupItem,
  //               category: groupItem.category
  //                 .map((categoryItem) => ({
  //                   ...categoryItem,
  //                   technology: Object.entries(state)
  //                     .map((array) => ({
  //                       categoryType: array[0] as TechnologyCategoryStateType,
  //                       technology: Object.entries(array[1]).map((array) => ({
  //                         technologyType: array[0],
  //                         technologyModel: array[1],
  //                       })),
  //                     }))
  //                     .filter((technology) => technology.categoryType === categoryItem.categoryType)
  //                     .map((technology) => technology.technology)
  //                     .flat()
  //                     .filter((technology) =>
  //                       technology.technologyModel.companies[rootStateItem.companyType].includes(
  //                         groupItem.groupType,
  //                       ),
  //                     ),
  //                 }))
  //                 .filter((categoryItem) => categoryItem.technology.length > 0),
  //             }))
  //             .filter((groupItem) => groupItem.category.length > 0),
  //         }));
  //       }),
  //     );
  //   }
}
