import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { CompanyState } from '../../store/company/company.state';
import { CompanyModel } from '../../store/company/company.state.model';
import { CompanyType } from '../../store/company/company.type';
import { ExperienceState } from '../../store/experience/experience.state';
import {
  ExperienceModel,
  ExperienceStateModel,
} from '../../store/experience/experience.state.model';
import { TechnologyCategoryState } from '../../store/technology-category/technology-category.state';
import { TechnologyCategoryModel } from '../../store/technology-category/technology-category.state.model';
import { TechnologyCategoryType } from '../../store/technology-category/technology-category.type';
import { TechnologyGroupState } from '../../store/technology-group/technology-group.state';
import { TechnologyGroupModel } from '../../store/technology-group/technology-group.state.model';
import { TechnologyGroupType } from '../../store/technology-group/technology-group.type';
import { TechnologyState } from '../../store/technology/technology.state';

@Injectable()
export class ExperienceService {
  constructor(private readonly store: Store) {}

  getExperiences() {
    return this.store.selectOnce(ExperienceState.getExperience).pipe(
      map((experienceState) => this.buildExperiences(experienceState)),
      switchMap((experiences) => this.addCompanies(experiences)),
      switchMap((experiences) => this.addGroups(experiences)),
      switchMap((experiences) => this.addCategories(experiences)),
      switchMap((experiences) => this.addTechnologies(experiences)),
    );
  }

  private buildExperiences(experienceState: ExperienceStateModel) {
    return Object.entries(experienceState)
      .map((experienceStateItem) => ({
        companyType: experienceStateItem[0] as CompanyType,
        experiences: experienceStateItem[1],
      }))
      .map((experienceStateItem) => {
        return experienceStateItem.experiences.map((experience) => ({
          companyType: experienceStateItem.companyType,
          experience,
        }));
      })
      .flat();
  }

  private addCompanies(
    experiences: {
      companyType: CompanyType;
      experience: ExperienceModel;
    }[],
  ) {
    return from(
      this.store.selectOnce(CompanyState.getCompanies).pipe(
        map((companies) => {
          return experiences.map((experience) => ({
            ...experience,
            company: companies[experience.companyType],
          }));
        }),
      ),
    );
  }

  private addGroups(
    experiences: {
      company: CompanyModel;
      companyType: CompanyType;
      experience: ExperienceModel;
    }[],
  ) {
    return from(
      this.store.selectOnce(TechnologyGroupState.getTechnologyGroups).pipe(
        map((groups) => {
          return experiences.map((experience) => ({
            ...experience,
            groups: Object.entries(groups).map((group) => ({
              groupType: group[0] as TechnologyGroupType,
              groupData: group[1],
            })),
          }));
        }),
      ),
    );
  }

  private addCategories(
    experiences: {
      groups: {
        groupType: TechnologyGroupType;
        groupData: TechnologyGroupModel;
      }[];
      company: CompanyModel;
      companyType: CompanyType;
      experience: ExperienceModel;
    }[],
  ) {
    return from(
      this.store.selectOnce(TechnologyCategoryState.getTechnologyCategories).pipe(
        map((categories) => {
          return experiences.map((experience) => ({
            ...experience,
            groups: experience.groups.map((group) => ({
              ...group,
              categories: Object.entries(categories).map((category) => ({
                categoryType: category[0] as TechnologyCategoryType,
                categoryData: category[1],
              })),
            })),
          }));
        }),
      ),
    );
  }

  private addTechnologies(
    experiences: {
      groups: {
        categories: {
          categoryType: TechnologyCategoryType;
          categoryData: TechnologyCategoryModel;
        }[];
        groupType: TechnologyGroupType;
        groupData: TechnologyGroupModel;
      }[];
      company: CompanyModel;
      companyType: CompanyType;
      experience: ExperienceModel;
    }[],
  ) {
    return from(
      this.store.selectOnce(TechnologyState.getTechnologies).pipe(
        map((technologies) => {
          return experiences.map((experience) => ({
            ...experience,
            groups: experience.groups
              .map((group) => ({
                ...group,
                categories: group.categories
                  .map((category) => ({
                    ...category,
                    technologies: Object.entries(technologies)
                      .map((technology) => ({
                        categoryType: technology[0] as TechnologyCategoryType,
                        technologies: technology[1],
                      }))
                      .filter((technology) => technology.categoryType == category.categoryType)
                      .map((technology) => {
                        return Object.entries(technology.technologies).map((technology) => ({
                          technologyType: technology[0],
                          technologyData: technology[1],
                        }));
                      })
                      .flat()
                      .filter((technology) =>
                        technology.technologyData.companies[experience.companyType].includes(
                          group.groupType,
                        ),
                      ),
                  }))
                  .filter((category) => category.technologies.length > 0),
              }))
              .filter((group) => group.categories.length > 0),
          }));
        }),
      ),
    );
  }
}
