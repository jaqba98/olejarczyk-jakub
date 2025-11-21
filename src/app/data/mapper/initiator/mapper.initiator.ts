import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { of, switchMap, take } from 'rxjs';

import { CopyrightMapperBuilder } from '../builder/copyright-mapper.builder';
import { SectionMapperBuilder } from '../builder/section-mapper.builder';
import { MapperInitAction } from '../../../action/init.action';
import { RawState } from '../../../state/raw.state';
import { AboutMeMapperBuilder } from '../builder/about-me-mapper.builder';

@Injectable({ providedIn: 'root' })
export class MapperInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightMapperBuilder,
    private readonly section: SectionMapperBuilder,
    private readonly aboutMe: AboutMeMapperBuilder,
  ) {}

  init() {
    return of(true).pipe(
      switchMap(() => this.store.select(RawState.getState)),
      switchMap((state) => {
        return this.store.dispatch(
          new MapperInitAction({
            copyright: this.copyright.build(state),
            section: this.section.build(state),
            aboutMe: this.aboutMe.build(state),
          }),
        );
      }),
      take(1),
    );
  }
}
