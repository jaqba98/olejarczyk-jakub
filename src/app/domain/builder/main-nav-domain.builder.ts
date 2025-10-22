import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { MainNavViewDomainModel } from '../model/view/main-nav-view-domain.model';
import { MainNavDomainState } from '../state/main-nav-domain.state';

@Injectable()
export class MainNavDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<MainNavViewDomainModel> {
    return this.store.selectOnce(MainNavDomainState.getState);
  }
}
