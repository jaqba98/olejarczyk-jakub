import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';

import { ExperienceState } from '../store/experience/experience.state';
import { ExperienceStateModel } from '../store/experience/experience-state.model';
import { CompanyType } from '../store/company/company.type';

@Injectable()
export class ExperienceBuilder {
  constructor(private readonly store: Store) {}

  build() {
    return this.store.selectOnce(ExperienceState.getState).pipe(
      map((state) => this.buildExperience(state)),
      //
    );
  }

  private buildExperience(state: ExperienceStateModel) {
    return Object.entries(state)
      .map((state) => ({
        companyType: state[0] as CompanyType,
        experiences: state[1],
      }))
      .map((state) => {
        return state.experiences.map((experience) => ({
          companyType: state.companyType,
          experience,
        }));
      })
      .flat()
      .sort((previous, next) => {
        const previousStartDate = previous.experience.startDate.getTime();
        const nextStartDate = next.experience.startDate.getTime();
        return nextStartDate - previousStartDate;
      });
  }

  // constructor(private readonly store: Store) {}
  // getExperiences() {
  //   return this.store.selectOnce(ExperienceState.getExperience).pipe(
  //     map((experienceState) => this.buildExperiences(experienceState)),
  //     switchMap((experiences) => this.addCompanies(experiences)),
  //     switchMap((experiences) => this.addGroups(experiences)),
  //     switchMap((experiences) => this.addCategories(experiences)),
  //     switchMap((experiences) => this.addTechnologies(experiences)),
  //   );
  // }

  // private addCompanies(
  //   experiences: {
  //     companyType: CompanyType;
  //     experience: ExperienceModel;
  //   }[],
  // ) {
  //   return from(
  //     this.store.selectOnce(CompanyState.getCompanies).pipe(
  //       map((companies) => {
  //         return experiences.map((experience) => ({
  //           ...experience,
  //           company: companies[experience.companyType],
  //         }));
  //       }),
  //     ),
  //   );
  // }
  // private addGroups(
  //   experiences: {
  //     company: CompanyModel;
  //     companyType: CompanyType;
  //     experience: ExperienceModel;
  //   }[],
  // ) {
  //   return from(
  //     this.store.selectOnce(TechnologyGroupState.getTechnologyGroups).pipe(
  //       map((groups) => {
  //         return experiences.map((experience) => ({
  //           ...experience,
  //           groups: Object.entries(groups).map((group) => ({
  //             groupType: group[0] as TechnologyGroupType,
  //             groupData: group[1],
  //           })),
  //         }));
  //       }),
  //     ),
  //   );
  // }
  // private addCategories(
  //   experiences: {
  //     groups: {
  //       groupType: TechnologyGroupType;
  //       groupData: TechnologyGroupModel;
  //     }[];
  //     company: CompanyModel;
  //     companyType: CompanyType;
  //     experience: ExperienceModel;
  //   }[],
  // ) {
  //   return from(
  //     this.store.selectOnce(TechnologyCategoryState.getTechnologyCategories).pipe(
  //       map((categories) => {
  //         return experiences.map((experience) => ({
  //           ...experience,
  //           groups: experience.groups.map((group) => ({
  //             ...group,
  //             categories: Object.entries(categories).map((category) => ({
  //               categoryType: category[0] as TechnologyCategoryType,
  //               categoryData: category[1],
  //             })),
  //           })),
  //         }));
  //       }),
  //     ),
  //   );
  // }
  // private addTechnologies(
  //   experiences: {
  //     groups: {
  //       categories: {
  //         categoryType: TechnologyCategoryType;
  //         categoryData: TechnologyCategoryModel;
  //       }[];
  //       groupType: TechnologyGroupType;
  //       groupData: TechnologyGroupModel;
  //     }[];
  //     company: CompanyModel;
  //     companyType: CompanyType;
  //     experience: ExperienceModel;
  //   }[],
  // ) {
  //   return from(
  //     this.store.selectOnce(TechnologyState.getTechnologies).pipe(
  //       map((technologies) => {
  //         return experiences.map((experience) => ({
  //           ...experience,
  //           groups: experience.groups
  //             .map((group) => ({
  //               ...group,
  //               categories: group.categories
  //                 .map((category) => ({
  //                   ...category,
  //                   technologies: Object.entries(technologies)
  //                     .map((technology) => ({
  //                       categoryType: technology[0] as TechnologyCategoryType,
  //                       technologies: technology[1],
  //                     }))
  //                     .filter((technology) => technology.categoryType == category.categoryType)
  //                     .map((technology) => {
  //                       return Object.entries(technology.technologies).map((technology) => ({
  //                         technologyType: technology[0],
  //                         technologyData: technology[1],
  //                       }));
  //                     })
  //                     .flat()
  //                     .filter((technology) =>
  //                       technology.technologyData.companies[experience.companyType].includes(
  //                         group.groupType,
  //                       ),
  //                     ),
  //                 }))
  //                 .filter((category) => category.technologies.length > 0),
  //             }))
  //             .filter((group) => group.categories.length > 0),
  //         }));
  //       }),
  //     ),
  //   );
  // }
}
