import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { NavSectionViewDomainModel } from '../../model/view/section/nav-section-view-domain.model';
import { NavSectionDomainState } from '../../state/section/nav-section-domain.state';
import { SectionDataDomainState } from '../../state/data/section-data-domain.state';
import { PersonalDataDomainState } from '../../state/data/personal-data-domain.state';

@Injectable()
export class NavSectionDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<NavSectionViewDomainModel> {
    return this.store.selectOnce(NavSectionDomainState.getState).pipe(
      switchMap((prevState) => {
        return from(this.store.selectOnce(SectionDataDomainState.getState)).pipe(
          map((state) => ({
            sectionData: state.nav,
            options: Object.values(prevState.options)
              .filter((option) => option.visible)
              .sort((prev, next) => prev.order - next.order)
              .map((option) => ({ ...option, sectionData: state[option.id] })),
          })),
        );
      }),
      switchMap((prevState) => {
        return from(this.store.selectOnce(PersonalDataDomainState.getState)).pipe(
          map((state) => ({ ...prevState, personalData: state })),
        );
      }),
    );
  }
}
