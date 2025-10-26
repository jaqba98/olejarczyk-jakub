import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

import { ProjectDomainState } from '../state/project-domain.state';
import { ProjectViewDomainModel } from '../model/view/project-view-domain.model';
import { TechnologyGroupDomainState } from '../state/technology-group-domain.state';
import { TechnologyCategoryDomainState } from '../state/technology-category-domain.state';
import { TechnologyDomainState } from '../state/technology-domain.state';

@Injectable()
export class ProjectDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<ProjectViewDomainModel> {
    return this.store.selectOnce(ProjectDomainState.getState).pipe(
      map((prevState) => Object.values(prevState)),
      switchMap((prevState) => {
        return from(this.store.selectOnce(TechnologyGroupDomainState.getState)).pipe(
          map((state) => {
            return prevState.map((prevStateItem) => ({
              ...prevStateItem,
              groups: Object.entries(state).map((array) => ({
                groupModel: array[1],
                categories: [],
              })),
            }));
          }),
        );
      }),
      switchMap((prevState) => {
        return from(this.store.selectOnce(TechnologyCategoryDomainState.getState)).pipe(
          map((state) => {
            return prevState.map((prevStateItem) => ({
              ...prevStateItem,
              groups: prevStateItem.groups.map((group) => ({
                ...group,
                categories: Object.entries(state).map((array) => ({
                  categoryModel: array[1],
                  technologies: [],
                })),
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
              groups: prevStateItem.groups.map((group) => ({
                ...group,
                categories: group.categories.map((category) => ({
                  ...category,
                  technologies: Object.values(state),
                })),
              })),
            }));
          }),
        );
      }),
      map((prevState) => {
        return prevState
          .map((prevStateItem) => ({
            ...prevStateItem,
            groups: prevStateItem.groups
              .map((group) => ({
                ...group,
                categories: group.categories
                  .map((category) => ({
                    ...category,
                    technologies: category.technologies
                      .filter((technology) => technology.category === category.categoryModel.id)
                      .filter((technology) =>
                        prevStateItem.technologies.some((i) => i.technologyId === technology.id),
                      )
                      .filter((technology) =>
                        prevStateItem.technologies.some((i) =>
                          i.groupIds.includes(group.groupModel.id),
                        ),
                      )
                      .sort((prev, next) => prev.order - next.order),
                  }))
                  .filter((category) => category.technologies.length > 0)
                  .sort((prev, next) => prev.categoryModel.order - next.categoryModel.order),
              }))
              .filter((group) => group.categories.length > 0)
              .sort((prev, next) => prev.groupModel.order - next.groupModel.order),
          }))
          .sort((prev, next) => {
            const prevStartDate = prev.creationDate.getTime();
            const nextStartDate = next.creationDate.getTime();
            return nextStartDate - prevStartDate;
          });
      }),
    );
  }
}
