import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

import { TechnologyGroupState } from '../state/technology-group/technology-group.state';
import { ObjectUtil } from '../util/object.util';
import { TechnologyGroupDomainType } from '../domain/type/technology-group-domain.type';
import { TechnologyGroupModel } from '../state/technology-group/technology-group-state.model';

type TechnologyGroupStateType<TPrevState> = (TPrevState & {
  groups: {
    key: TechnologyGroupDomainType;
    value: TechnologyGroupModel;
  }[];
})[];

@Injectable({ providedIn: 'root' })
export class BaseBuilder {
  constructor(
    private readonly store: Store,
    private readonly objectUtil: ObjectUtil,
  ) {}

  buildTechnologyGroupState<TPrevState>(
    prevState: TPrevState[],
  ): Observable<TechnologyGroupStateType<TPrevState>> {
    return from(this.store.selectOnce(TechnologyGroupState.getState)).pipe(
      map((state) => {
        return prevState.map((prevStateItem) => ({
          ...prevStateItem,
          groups: this.objectUtil.convertObjectToArray(state),
        }));
      }),
    );
  }
}
