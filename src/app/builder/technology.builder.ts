import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

import { TechnologyCategoryState } from '../state/technology-category/technology-category.state';
import { TechnologyGroupDomainType } from '../domain/type/technology-group-domain.type';
import { TechnologyGroupState } from '../state/technology-group/technology-group.state';
import { TechnologyState } from '../state/technology/technology.state';
import { ObjectUtil } from '../util/object.util';

@Injectable()
export class TechnologyBuilder {
  constructor(
    private readonly store: Store,
    private readonly objectUtil: ObjectUtil,
  ) {}

  build() {
    return this.store.selectOnce(TechnologyGroupState.getState).pipe(
      map((prevState) => this.objectUtil.convertObjectToArray(prevState)),
      switchMap((prevState) => {
        return from(this.store.selectOnce(TechnologyCategoryState.getState)).pipe(
          map((state) => {
            return prevState.map((group) => ({
              ...group,
              categories: this.objectUtil.convertObjectToArray(state),
            }));
          }),
        );
      }),
      switchMap((prevState) => {
        return from(this.store.selectOnce(TechnologyState.getState)).pipe(
          map((state) => {
            return prevState.map((group) => ({
              ...group,
              categories: group.categories.map((category) => ({
                ...category,
                technologies: this.objectUtil.convertObjectToArray(state).map((technology) => ({
                  ...technology,
                  commonGroups: [
                    ...technology.value.ownGroups,
                    ...Object.values(technology.value.groups),
                  ]
                    .flat()
                    .reduce((acc: TechnologyGroupDomainType[], curr: TechnologyGroupDomainType) => {
                      if (!acc.includes(curr)) acc.push(curr);
                      return acc;
                    }, []),
                })),
              })),
            }));
          }),
        );
      }),
      map((prevState) => {
        return prevState
          .map((group) => ({
            ...group,
            categories: group.categories
              .map((category) => ({
                ...category,
                technologies: category.technologies
                  .sort((prev, next) => prev.value.order - next.value.order)
                  .filter((technology) => technology.value.category === category.key)
                  .filter((technology) => technology.commonGroups.includes(group.key)),
              }))
              .sort((prev, next) => prev.value.order - next.value.order)
              .filter((technology) => technology.technologies.length > 0),
          }))
          .sort((prev, next) => prev.value.order - next.value.order)
          .filter((technology) => technology.categories.length > 0);
      }),
    );
  }
}
