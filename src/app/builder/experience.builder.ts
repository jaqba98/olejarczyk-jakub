import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

import { ExperienceState } from '../store/experience/experience.state';
import { ExperienceModel, ExperienceStateModel } from '../store/experience/experience-state.model';
import { CompanyType } from '../store/company/company.type';
import { CompanyState } from '../store/company/company.state';
import { CompanyModel } from '../store/company/company-state.model';
import { TechnologyGroupState } from '../store/technology-group/technology-group.state';
import { TechnologyGroupType } from '../store/technology-group/technology-group.type';
import { TechnologyGroupModel } from '../store/technology-group/technology-group-state.model';
import { TechnologyCategoryState } from '../store/technology-category/technology-category.state';
import { TechnologyCategoryType } from '../store/technology-category/technology-category.type';

@Injectable()
export class ExperienceBuilder {
  constructor(private readonly store: Store) {}

  build() {
    return this.store.selectOnce(ExperienceState.getState).pipe(
      map((state) => this.buildExperience(state)),
      switchMap((state) => this.addCompany(state)),
      switchMap((state) => this.addGroup(state)),
      switchMap((state) => this.addCategory(state)),
    );
  }

  private buildExperience(experienceState: ExperienceStateModel) {
    return Object.entries(experienceState)
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

  private addCompany(
    previousState: {
      companyType: CompanyType;
      experience: ExperienceModel;
    }[],
  ) {
    return from(this.store.selectOnce(CompanyState.getState)).pipe(
      map((companyState) => {
        return previousState.map((previousStateItem) => ({
          ...previousStateItem,
          company: companyState[previousStateItem.companyType],
        }));
      }),
    );
  }

  private addGroup(
    previousState: {
      company: CompanyModel;
      companyType: CompanyType;
      experience: ExperienceModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyGroupState.getState)).pipe(
      map((groupState) => {
        return previousState.map((previousStateItem) => ({
          ...previousStateItem,
          group: Object.entries(groupState).map((state) => ({
            groupType: state[0] as TechnologyGroupType,
            groupData: state[1],
          })),
        }));
      }),
    );
  }

  private addCategory(
    previousState: {
      group: {
        groupType: TechnologyGroupType;
        groupData: TechnologyGroupModel;
      }[];
      company: CompanyModel;
      companyType: CompanyType;
      experience: ExperienceModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyCategoryState.getState)).pipe(
      map((categoryState) => {
        return previousState.map((previousStateItem) => ({
          ...previousStateItem,
          group: previousStateItem.group.map((groupItem) => ({
            ...groupItem,
            category: Object.entries(categoryState).map((state) => ({
              categoryType: state[0] as TechnologyCategoryType,
              categoryData: state[1],
            })),
          })),
        }));
      }),
    );
  }

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
