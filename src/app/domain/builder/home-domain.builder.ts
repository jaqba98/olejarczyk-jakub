import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { HomeViewDomainModel } from '../model/view/home-view-domain.model';
import { HomeDomainState } from '../state/home-domain.state';

@Injectable()
export class HomeDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<HomeViewDomainModel> {
    return this.store.selectOnce(HomeDomainState.getState);
  }
}
