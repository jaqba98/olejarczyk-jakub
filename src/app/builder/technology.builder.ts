import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

import { TechnologyGroupState } from '../state/technology-group/technology-group.state';
import {
  TechnologyGroupModel,
  TechnologyGroupStateModel,
} from '../state/technology-group/technology-group-state.model';
import { TechnologyGroupStateType } from '../domain/type/technology-group-domain.type';
import { TechnologyCategoryState } from '../state/technology-category/technology-category.state';
import { TechnologyCategoryStateType } from '../domain/type/technology-category-domain.type';
import { TechnologyCategoryModel } from '../state/technology-category/technology-category-state.model';
import { TechnologyState } from '../state/technology/technology.state';

@Injectable()
export class TechnologyBuilder {
  constructor(private readonly store: Store) {}

  build() {
    return this.store.selectOnce(TechnologyGroupState.getState).pipe(
      map((state) => this.buildGroup(state)),
      switchMap((state) => this.addCategory(state)),
      switchMap((state) => this.addTechnology(state)),
    );
  }

  private buildGroup(state: TechnologyGroupStateModel) {
    return Object.entries(state).map((array) => ({
      groupType: array[0] as TechnologyGroupStateType,
      groupModel: array[1],
    }));
  }

  private addCategory(
    rootState: {
      groupType: TechnologyGroupStateType;
      groupModel: TechnologyGroupModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyCategoryState.getState)).pipe(
      map((state) => {
        return rootState.map((rootStateItem) => ({
          ...rootStateItem,
          category: Object.entries(state).map((array) => ({
            categoryType: array[0] as TechnologyCategoryStateType,
            categoryModel: array[1],
          })),
        }));
      }),
    );
  }

  private addTechnology(
    rootState: {
      category: {
        categoryType: TechnologyCategoryStateType;
        categoryModel: TechnologyCategoryModel;
      }[];
      groupType: TechnologyGroupStateType;
      groupModel: TechnologyGroupModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyState.getState)).pipe(
      map((state) => {
        return rootState
          .map((rootStateItem) => ({
            ...rootStateItem,
            category: rootStateItem.category
              .map((categoryItem) => ({
                ...categoryItem,
                technology: Object.entries(state)
                  .map((array) => ({
                    categoryType: array[0] as TechnologyCategoryStateType,
                    technology: Object.entries(array[1]).map((array) => ({
                      technologyType: array[0],
                      technologyModel: array[1],
                    })),
                  }))
                  .filter((technology) => technology.categoryType === categoryItem.categoryType)
                  .map((technology) => technology.technology)
                  .flat()
                  .map((technology) => ({
                    ...technology,
                    groups: Object.values(technology.technologyModel.companies)
                      .flat()
                      .reduce((acc: TechnologyGroupStateType[], curr) => {
                        if (!acc.includes(curr)) {
                          acc.push(curr);
                        }
                        return acc;
                      }, []),
                  }))
                  .map((technology) => ({
                    ...technology,
                    groups:
                      technology.groups.length > 0
                        ? technology.groups
                        : [technology.technologyModel.defaultGroup],
                  }))
                  .filter((technology) => technology.groups.includes(rootStateItem.groupType)),
              }))
              .filter((categoryItem) => categoryItem.technology.length > 0),
          }))
          .filter((rootStateItem) => rootStateItem.category.length > 0);
      }),
    );
  }
}
