import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { CompanyState } from '../../store/company/company.state';
import { CompanyStateModel } from '../../store/company/company.state.model';
import { ExperienceState } from '../../store/experience/experience.state';
import { ExperienceStateModel } from '../../store/experience/experience.state.model';
import { TechnologyCategoryState } from '../../store/technology-category/technology-category.state';
import { TechnologyCategoryStateModel } from '../../store/technology-category/technology-category.state.model';
import { TechnologyGroupState } from '../../store/technology-group/technology-group.state';
import { TechnologyGroupStateModel } from '../../store/technology-group/technology-group.state.model';
import { TechnologyState } from '../../store/technology/technology.state';
import { TechnologyStateModel } from '../../store/technology/technology.state.model';

interface StatesModel {
  company: CompanyStateModel;
  experience: ExperienceStateModel;
  technology: TechnologyStateModel;
  category: TechnologyCategoryStateModel;
  group: TechnologyGroupStateModel;
}

@Injectable()
export class ExperienceService {
  constructor(private readonly store: Store) {}

  getExperiences() {
    return combineLatest([
      this.store.selectOnce(CompanyState.getCompanies),
      this.store.selectOnce(ExperienceState.getExperience),
      this.store.selectOnce(TechnologyState.getTechnologies),
      this.store.selectOnce(TechnologyCategoryState.getTechnologyCategories),
      this.store.selectOnce(TechnologyGroupState.getTechnologyGroups),
    ]).pipe(
      map((states) => this.buildStates(states)),
      map((states) => [states, this.buildExperiences(states.experience)]),
    );
  }

  private buildStates(
    states: [
      CompanyStateModel,
      ExperienceStateModel,
      TechnologyStateModel,
      TechnologyCategoryStateModel,
      TechnologyGroupStateModel,
    ],
  ): StatesModel {
    return {
      company: states[0],
      experience: states[1],
      technology: states[2],
      category: states[3],
      group: states[4],
    };
  }

  private buildExperiences(experience: ExperienceStateModel) {
    return Object.entries(experience)
      .map((item) => ({ companyType: item[0], experiences: item[1] }))
      .map((item) => {
        return item.experiences.map((experience) => ({
          companyType: item.companyType,
          ...experience,
        }));
      })
      .flat();
  }
}
