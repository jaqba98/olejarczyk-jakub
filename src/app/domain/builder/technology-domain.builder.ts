import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

import { TechnologyViewDomainModel } from '../model/view/technology-view-domain.model';
import { TechnologyGroupDomainState } from '../state/technology-group-domain.state';
import { TechnologyCategoryDomainState } from '../state/technology-category-domain.state';
import { TechnologyDomainState } from '../state/technology-domain.state';
import { TechnologyGroupIdDomainType } from '../../data/type/id/technology-group-id-data.type';

@Injectable()
export class TechnologyDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<TechnologyViewDomainModel> {
    return this.store.selectOnce(TechnologyGroupDomainState.getState).pipe(
      map((prevState) => {
        return Object.values(prevState)
          .map((prevStateItem) => ({
            groupModel: prevStateItem,
            categories: [],
          }))
          .sort((prev, next) => prev.groupModel.order - next.groupModel.order);
      }),
      switchMap((prevState) => {
        return from(this.store.selectOnce(TechnologyCategoryDomainState.getState)).pipe(
          map((state) => {
            return prevState.map((prevStateItem) => ({
              ...prevStateItem,
              categories: Object.entries(state).map((array) => ({
                categoryModel: array[1],
                technologies: [],
              })),
            }));
          }),
        );
      }),
      switchMap((prevState) => {
        return from(this.store.selectOnce(TechnologyDomainState.getState)).pipe(
          map((state) => {
            return prevState.map((prevStateItem) => ({
              ...prevStateItem,
              categories: prevStateItem.categories.map((category) => ({
                ...category,
                technologies: Object.values(state),
              })),
            }));
          }),
        );
      }),
      map((prevState) => {
        return prevState
          .map((prevStateItem) => ({
            ...prevStateItem,
            categories: prevStateItem.categories
              .map((category) => ({
                ...category,
                technologies: category.technologies
                  .filter((technology) => technology.category === category.categoryModel.id)
                  .filter((technology) =>
                    [technology.ownGroups, Object.values(technology.companyGroups).flat()]
                      .flat()
                      .reduce((acc: TechnologyGroupIdDomainType[], curr) => {
                        if (!acc.includes(curr)) {
                          acc.push(curr);
                        }
                        return acc;
                      }, [])
                      .includes(prevStateItem.groupModel.id),
                  )
                  .sort((prev, next) => prev.order - next.order),
              }))
              .filter((category) => category.technologies.length > 0)
              .sort((prev, next) => prev.categoryModel.order - next.categoryModel.order),
          }))
          .filter((category) => category.categories.length > 0)
          .sort((prev, next) => prev.groupModel.order - next.groupModel.order);
      }),
    );
  }
}
