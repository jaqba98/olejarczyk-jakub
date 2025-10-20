import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

import { ExperienceState } from '../state/experience/experience.state';
import { CompanyState } from '../state/company/company.state';
import { ObjectUtil } from '../util/object.util';
import { TechnologyGroupState } from '../state/technology-group/technology-group.state';
import { TechnologyCategoryState } from '../state/technology-category/technology-category.state';
import { TechnologyState } from '../state/technology/technology.state';

@Injectable()
export class ExperienceBuilder {
  constructor(
    private readonly store: Store,
    private readonly objectUtil: ObjectUtil,
  ) {}

  build() {
    return this.store.selectOnce(ExperienceState.getState).pipe(
      switchMap((prevState) => {
        return from(this.store.selectOnce(CompanyState.getState)).pipe(
          map((state) => {
            return prevState.map((experience) => ({
              ...experience,
              companyData: state[experience.company],
            }));
          }),
        );
      }),
      switchMap((prevState) => {
        return from(this.store.selectOnce(TechnologyGroupState.getState)).pipe(
          map((state) => {
            return prevState.map((experience) => ({
              ...experience,
              groups: this.objectUtil.convertObjectToArray(state),
            }));
          }),
        );
      }),
      switchMap((prevState) => {
        return from(this.store.selectOnce(TechnologyCategoryState.getState)).pipe(
          map((state) => {
            return prevState.map((experience) => ({
              ...experience,
              groups: experience.groups.map((group) => ({
                ...group,
                categories: this.objectUtil.convertObjectToArray(state),
              })),
            }));
          }),
        );
      }),
      switchMap((prevState) => {
        return from(this.store.selectOnce(TechnologyState.getState)).pipe(
          map((state) => {
            return prevState.map((experience) => ({
              ...experience,
              groups: experience.groups.map((group) => ({
                ...group,
                categories: group.categories.map((category) => ({
                  ...category,
                  technologies: this.objectUtil.convertObjectToArray(state),
                })),
              })),
            }));
          }),
        );
      }),
      map((prevState) => {
        return prevState
          .map((experience) => ({
            ...experience,
            groups: experience.groups
              .map((group) => ({
                ...group,
                categories: group.categories
                  .map((category) => ({
                    ...category,
                    technologies: category.technologies
                      .filter((technology) => technology.value.category === category.key)
                      .filter((technology) => {
                        return technology.value.groups[experience.company].includes(group.key);
                      })
                      .sort((prev, next) => prev.value.order - next.value.order),
                  }))
                  .filter((technology) => technology.technologies.length > 0)
                  .sort((prev, next) => prev.value.order - next.value.order),
              }))
              .filter((technology) => technology.categories.length > 0)
              .sort((prev, next) => prev.value.order - next.value.order),
          }))
          .sort((prev, next) => {
            const prevStartDate = prev.startDate.getTime();
            const nextStartDate = next.startDate.getTime();
            return nextStartDate - prevStartDate;
          });
      }),
    );
  }
}
