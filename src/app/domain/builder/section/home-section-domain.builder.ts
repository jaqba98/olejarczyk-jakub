import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { HomeSectionViewDomainModel } from '../../model/view/section/home-section-view-domain.model';
import { HomeSectionDomainState } from '../../state/section/home-section-domain.state';

@Injectable()
export class HomeSectionDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<HomeSectionViewDomainModel> {
    return this.store.selectOnce(HomeSectionDomainState.getState);
  }
}
