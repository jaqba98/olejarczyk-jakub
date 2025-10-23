import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { SectionDataDomainState } from '../../state/data/section-data-domain.state';
import { AboutMeSectionViewDomainModel } from '../../model/view/section/about-me-section-view-domain.model';
import { AboutMeSectionDomainState } from '../../state/section/about-me-section-domain.state';

@Injectable()
export class AboutMeSectionDomainBuilder {
  constructor(private readonly store: Store) {}

  build(): Observable<AboutMeSectionViewDomainModel> {
    return this.store.selectOnce(AboutMeSectionDomainState.getState).pipe(
      switchMap((prevState) => {
        return from(this.store.selectOnce(SectionDataDomainState.getState)).pipe(
          map((state) => ({
            aboutMeSection: prevState,
            sectionData: state.aboutMe,
          })),
        );
      }),
    );
  }
}
