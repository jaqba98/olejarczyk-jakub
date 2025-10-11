import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

import { TechnologyGroupState } from '../store/technology-group/technology-group.state';
import { TechnologyGroupStateType } from '../store/technology-group/technology-group-state.type';
import {
  TechnologyGroupModel,
  TechnologyGroupStateModel,
} from '../store/technology-group/technology-group-state.model';
import { TechnologyCategoryState } from '../store/technology-category/technology-category.state';
import { TechnologyCategoryType } from '../store/technology-category/technology-category.type';
import { TechnologyCategoryModel } from '../store/technology-category/technology-category-state.model';
import { TechnologyState } from '../store/technology/technology.state';

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
    return Object.entries(state).map((group) => ({
      groupType: group[0] as TechnologyGroupStateType,
      groupData: group[1],
    }));
  }

  private addCategory(
    previousState: {
      groupType: TechnologyGroupStateType;
      groupData: TechnologyGroupModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyCategoryState.getState)).pipe(
      map((categoryState) => {
        return previousState.map((previousStateItem) => ({
          ...previousStateItem,
          category: Object.entries(categoryState).map((state) => ({
            categoryType: state[0] as TechnologyCategoryType,
            categoryData: state[1],
          })),
        }));
      }),
    );
  }

  private addTechnology(
    previousState: {
      category: {
        categoryType: TechnologyCategoryType;
        categoryData: TechnologyCategoryModel;
      }[];
      groupType: TechnologyGroupStateType;
      groupData: TechnologyGroupModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyState.getState)).pipe(
      map((technologyState) => {
        return previousState
          .map((previousStateItem) => ({
            ...previousStateItem,
            category: previousStateItem.category
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
                  .map((state) => ({
                    ...state,
                    groups: new Set(...Object.values(state.technologyData.companies)),
                  }))
                  .map((state) => ({
                    ...state,
                    groups:
                      state.groups.size > 0
                        ? state.groups
                        : new Set([state.technologyData.defaultGroup]),
                  }))
                  .filter((state) => state.groups.has(previousStateItem.groupType)),
              }))
              .filter((categoryItem) => categoryItem.technology.length > 0),
          }))
          .filter((previousStateItem) => previousStateItem.category.length > 0);
      }),
    );
  }
}
