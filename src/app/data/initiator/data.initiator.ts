import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { of, switchMap, take } from 'rxjs';

import { CopyrightDataBuilder } from '../builder/copyright-data.builder';
import { MapperState } from '../../state/mapper.state';
import { DataStateInitAction } from '../../action/state-init.action';
import { SectionDataBuilder } from '../builder/section-data.builder';

@Injectable({ providedIn: 'root' })
export class DataInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightDataBuilder,
    private readonly section: SectionDataBuilder,
  ) {}

  init() {
    return of(true).pipe(
      switchMap(() => this.store.select(MapperState.getState)),
      switchMap((state) => {
        return this.store.dispatch(
          new DataStateInitAction({
            copyright: this.copyright.build(state),
            section: this.section.build(state),
          }),
        );
      }),
      take(1),
    );
  }
}
