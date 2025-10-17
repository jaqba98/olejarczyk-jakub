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

@Injectable()
export class TechnologyBuilder {
  constructor(private readonly store: Store) {}

  build() {
    return this.store.selectOnce(TechnologyState.getState).pipe(
      map((state) => this.buildTechnology(state)),
      switchMap((state) => this.buildCategory(state)),
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

  private modelCleanUp(
    rootState: {
      technologies: {
        technologyType: TechnologyDomainType;
        technologyModel: TechnologyModel;
      }[];
      categoryType: TechnologyCategoryDomainType;
      categoryModel: TechnologyCategoryModel;
    }[],
  ) {
    return rootState
      .map((category) => ({
        ...category,
        technologies: category.technologies.filter((technology) => {
          return technology.technologyModel.category === category.categoryType;
        }),
      }))
      .filter((category) => category.technologies.length > 0);
  }
}
