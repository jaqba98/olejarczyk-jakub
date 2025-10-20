import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

import { TechnologyModel } from '../state/technology/technology-state.model';
import { TechnologyDomainType } from '../domain/type/technology-domain.type';
import { TechnologyCategoryState } from '../state/technology-category/technology-category.state';
import { TechnologyCategoryDomainType } from '../domain/type/technology-category-domain.type';
import { TechnologyCategoryModel } from '../state/technology-category/technology-category-state.model';
import { TechnologyGroupDomainType } from '../domain/type/technology-group-domain.type';
import { TechnologyGroupState } from '../state/technology-group/technology-group.state';
import {
  TechnologyGroupModel,
  TechnologyGroupStateModel,
} from '../state/technology-group/technology-group-state.model';
import { TechnologyState } from '../state/technology/technology.state';

@Injectable()
export class TechnologyBuilder {
  constructor(private readonly store: Store) {}

  build() {
    return this.store.selectOnce(TechnologyGroupState.getState).pipe(
      map((state) => this.buildGroup(state)),
      switchMap((state) => this.buildCategory(state)),
      switchMap((state) => this.buildTechnology(state)),
      map((state) => this.modelCleanUp(state)),
    );
  }

  private buildGroup(rootState: TechnologyGroupStateModel) {
    return Object.entries(rootState).map((array) => ({
      type: array[0] as TechnologyGroupDomainType,
      model: array[1],
    }));
  }

  private buildCategory(
    rootState: {
      type: TechnologyGroupDomainType;
      model: TechnologyGroupModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyCategoryState.getState)).pipe(
      map((state) => {
        return rootState.map((group) => ({
          ...group,
          categories: Object.entries(state).map((array) => ({
            type: array[0] as TechnologyCategoryDomainType,
            model: array[1],
          })),
        }));
      }),
    );
  }

  private buildTechnology(
    rootState: {
      categories: {
        type: TechnologyCategoryDomainType;
        model: TechnologyCategoryModel;
      }[];
      type: TechnologyGroupDomainType;
      model: TechnologyGroupModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyState.getState)).pipe(
      map((state) => {
        return rootState.map((group) => ({
          ...group,
          categories: group.categories.map((category) => ({
            ...category,
            technologies: Object.entries(state)
              .map((array) => ({
                type: array[0] as TechnologyDomainType,
                model: array[1],
              }))
              .map((technology) => ({
                ...technology,
                commonGroups: [
                  ...technology.model.ownGroups,
                  ...Object.values(technology.model.groups),
                ]
                  .flat()
                  .reduce((acc: TechnologyGroupDomainType[], curr: TechnologyGroupDomainType) => {
                    if (!acc.includes(curr)) {
                      acc.push(curr);
                    }
                    return acc;
                  }, []),
              })),
          })),
        }));
      }),
    );
  }

  private modelCleanUp(
    rootState: {
      categories: {
        technologies: {
          type: TechnologyDomainType;
          model: TechnologyModel;
          commonGroups: TechnologyGroupDomainType[];
        }[];
        type: TechnologyCategoryDomainType;
        model: TechnologyCategoryModel;
      }[];
      type: TechnologyGroupDomainType;
      model: TechnologyGroupModel;
    }[],
  ) {
    return rootState
      .map((group) => ({
        ...group,
        categories: group.categories
          .map((category) => ({
            ...category,
            technologies: category.technologies
              .sort((prev, next) => prev.model.order - next.model.order)
              .filter((technology) => technology.model.category === category.type)
              .filter((technology) => technology.commonGroups.includes(group.type)),
          }))
          .sort((prev, next) => prev.model.order - next.model.order)
          .filter((technology) => technology.technologies.length > 0),
      }))
      .sort((prev, next) => prev.model.order - next.model.order)
      .filter((technology) => technology.categories.length > 0);
  }
}
