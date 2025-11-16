import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { of, switchMap, take } from 'rxjs';

import { CopyrightMapperBuilder } from '../builder/copyright-mapper.builder';
import { MapperStateInitAction } from '../../action/state-init.action';
import { RawState } from '../../state/raw.state';
import { SectionMapperBuilder } from '../builder/section-mapper.builder';

@Injectable({ providedIn: 'root' })
export class MapperInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightMapperBuilder,
    private readonly section: SectionMapperBuilder,
  ) {}

  init() {
    return of(true).pipe(
      switchMap(() => this.store.select(RawState.getState)),
      switchMap((state) => {
        return this.store.dispatch(
          new MapperStateInitAction({
            copyright: this.copyright.build(state),
            section: this.section.build(state),
          }),
        );
      }),
      take(1),
    );
  }
}
