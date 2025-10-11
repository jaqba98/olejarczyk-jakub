import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

import { ExperienceState } from '../store/experience/experience.state';
import { ExperienceModel, ExperienceStateModel } from '../store/experience/experience-state.model';
import { CompanyStateType } from '../store/company/company-state.type';
import { CompanyModel } from '../store/company/company-state.model';
import { TechnologyGroupState } from '../store/technology-group/technology-group.state';
import { TechnologyGroupStateType } from '../store/technology-group/technology-group-state.type';
import { TechnologyGroupModel } from '../store/technology-group/technology-group-state.model';
import { TechnologyCategoryState } from '../store/technology-category/technology-category.state';
import { TechnologyCategoryType } from '../store/technology-category/technology-category-state.type';
import { TechnologyCategoryModel } from '../store/technology-category/technology-category-state.model';
import { TechnologyState } from '../store/technology/technology.state';
import { CompanyState } from '../store/company/company.state';

@Injectable()
export class ExperienceBuilder {
  constructor(private readonly store: Store) {}

  build() {
    return this.store.selectOnce(ExperienceState.getState).pipe(
      map((state) => this.buildExperience(state)),
      switchMap((state) => this.addCompany(state)),
      switchMap((state) => this.addGroup(state)),
      switchMap((state) => this.addCategory(state)),
      switchMap((state) => this.addTechnology(state)),
    );
  }

  private buildExperience(experienceState: ExperienceStateModel) {
    return Object.entries(experienceState)
      .map((state) => ({
        companyType: state[0] as CompanyStateType,
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
      companyType: CompanyStateType;
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
      companyType: CompanyStateType;
      experience: ExperienceModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyGroupState.getState)).pipe(
      map((groupState) => {
        return previousState.map((previousStateItem) => ({
          ...previousStateItem,
          group: Object.entries(groupState).map((state) => ({
            groupType: state[0] as TechnologyGroupStateType,
            groupData: state[1],
          })),
        }));
      }),
    );
  }

  private addCategory(
    previousState: {
      group: {
        groupType: TechnologyGroupStateType;
        groupData: TechnologyGroupModel;
      }[];
      company: CompanyModel;
      companyType: CompanyStateType;
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

  private addTechnology(
    previousState: {
      group: {
        category: {
          categoryType: TechnologyCategoryType;
          categoryData: TechnologyCategoryModel;
        }[];
        groupType: TechnologyGroupStateType;
        groupData: TechnologyGroupModel;
      }[];
      company: CompanyModel;
      companyType: CompanyStateType;
      experience: ExperienceModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyState.getState)).pipe(
      map((technologyState) => {
        return previousState.map((previousStateItem) => ({
          ...previousStateItem,
          group: previousStateItem.group
            .map((groupItem) => ({
              ...groupItem,
              category: groupItem.category
                .map((categoryItem) => ({
                  ...categoryItem,
                  technology: Object.entries(technologyState)
                    .map((state) => ({
                      categoryType: state[0] as TechnologyCategoryType,
                      technologyData: Object.entries(state[1]).map((state) => ({
                        technologyType: state[0],
                        technologyData: state[1],
                      })),
                    }))
                    .filter((state) => state.categoryType === categoryItem.categoryType)
                    .map((state) => state.technologyData)
                    .flat()
                    .filter((state) =>
                      state.technologyData.companies[previousStateItem.companyType].includes(
                        groupItem.groupType,
                      ),
                    ),
                }))
                .filter((categoryItem) => categoryItem.technology.length > 0),
            }))
            .filter((groupItem) => groupItem.category.length > 0),
        }));
      }),
    );
  }
}
