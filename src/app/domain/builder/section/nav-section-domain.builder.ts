import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { NavSectionViewDomainModel } from '../../model/view/section/nav-section-view-domain.model';
import { NavSectionDomainState } from '../../state/section/nav-section-domain.state';
import { PersonalDataDomainState } from '../../state/data/personal-data-domain.state';

@Injectable()
export class NavSectionDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<NavSectionViewDomainModel> {
    return this.store.selectOnce(NavSectionDomainState.getState).pipe(
      switchMap((prevState) => {
        return from(this.store.selectOnce(PersonalDataDomainState.getState)).pipe(
          map((state) => ({
            navSection: prevState,
            personalData: state,
          })),
        );
      }),
    );
  }
}
