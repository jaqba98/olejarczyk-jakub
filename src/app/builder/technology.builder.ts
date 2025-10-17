import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';

import { TechnologyState } from '../state/technology/technology.state';
import { TechnologyModel, TechnologyStateModel } from '../state/technology/technology-state.model';
import { TechnologyDomainType } from '../domain/type/technology-domain.type';
import { TechnologyCategoryState } from '../state/technology-category/technology-category.state';
import { TechnologyCategoryDomainType } from '../domain/type/technology-category-domain.type';
import { TechnologyCategoryModel } from '../state/technology-category/technology-category-state.model';
import { TechnologyGroupState } from '../state/technology-group/technology-group.state';
import { TechnologyGroupDomainType } from '../domain/type/technology-group-domain.type';
import { TechnologyGroupModel } from '../state/technology-group/technology-group-state.model';

@Injectable()
export class TechnologyBuilder {
  constructor(private readonly store: Store) {}

  build() {
    return this.store.selectOnce(TechnologyState.getState).pipe(
      map((state) => this.buildTechnology(state)),
      switchMap((state) => this.buildCategory(state)),
      switchMap((state) => this.buildGroup(state)),
      map((state) => this.modelCleanUp(state)),
    );
  }

  private buildTechnology(state: TechnologyStateModel) {
    return Object.entries(state)
      .map((array) => ({
        technologyType: array[0] as TechnologyDomainType,
        technologyModel: array[1],
      }))
      .sort((prev, next) => prev.technologyModel.order - next.technologyModel.order);
  }

  private buildCategory(
    rootState: {
      technologyType: TechnologyDomainType;
      technologyModel: TechnologyModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyCategoryState.getState)).pipe(
      map((state) => {
        return Object.entries(state)
          .map((array) => ({
            categoryType: array[0] as TechnologyCategoryDomainType,
            categoryModel: array[1],
          }))
          .map((category) => ({ ...category, technologies: rootState }))
          .sort((prev, next) => prev.categoryModel.order - next.categoryModel.order);
      }),
    );
  }

  private buildGroup(
    rootState: {
      technologies: {
        technologyType: TechnologyDomainType;
        technologyModel: TechnologyModel;
      }[];
      categoryType: TechnologyCategoryDomainType;
      categoryModel: TechnologyCategoryModel;
    }[],
  ) {
    return from(this.store.selectOnce(TechnologyGroupState.getState)).pipe(
      map((state) => {
        return Object.entries(state)
          .map((array) => ({
            groupType: array[0] as TechnologyGroupDomainType,
            groupModel: array[1],
          }))
          .map((group) => ({ ...group, categories: rootState }))
          .sort((prev, next) => prev.groupModel.order - next.groupModel.order);
      }),
    );
  }

  private modelCleanUp(
    rootState: {
      categories: {
        technologies: {
          technologyType: TechnologyDomainType;
          technologyModel: TechnologyModel;
        }[];
        categoryType: TechnologyCategoryDomainType;
        categoryModel: TechnologyCategoryModel;
      }[];
      groupType: TechnologyGroupDomainType;
      groupModel: TechnologyGroupModel;
    }[],
  ) {
    return rootState
      .map((group) => ({
        ...group,
        categories: group.categories
          .map((category) => ({
            ...category,
            technologies: category.technologies
              .map((technology) => ({ ...technology }))
              .filter((technology) => technology.technologyModel.category === category.categoryType)
              .filter((technology) => technology.technologyModel.group === group.groupType),
          }))
          .filter((category) => category.technologies.length > 0),
      }))
      .filter((group) => group.categories.length > 0);
  }
}
