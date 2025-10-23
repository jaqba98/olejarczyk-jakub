import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { HomeSectionViewDomainModel } from '../../model/view/section/home-section-view-domain.model';
import { HomeSectionDomainState } from '../../state/section/home-section-domain.state';
import { PersonalDataDomainState } from '../../state/data/personal-data-domain.state';
import { SectionDataDomainState } from '../../state/data/section-data-domain.state';

@Injectable()
export class HomeSectionDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<HomeSectionViewDomainModel> {
    return this.store.selectOnce(HomeSectionDomainState.getState).pipe(
      switchMap((prevState) => {
        return from(this.store.selectOnce(PersonalDataDomainState.getState)).pipe(
          map((state) => ({
            homeSection: prevState,
            personalData: state,
          })),
        );
      }),
      switchMap((prevState) => {
        return from(this.store.selectOnce(SectionDataDomainState.getState)).pipe(
          map((state) => ({
            ...prevState,
            sectionData: state.home,
          })),
        );
      }),
    );
  }
}
