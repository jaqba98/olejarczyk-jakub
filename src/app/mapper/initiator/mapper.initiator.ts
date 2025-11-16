import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { CopyrightMapperBuilder } from '../builder/copyright-mapper.builder';
import { MapperStateInitAction } from '../../action/state-init.action';

@Injectable({ providedIn: 'root' })
export class MapperInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightMapperBuilder,
  ) {}

  init() {
    return this.store.dispatch(
      new MapperStateInitAction({
        copyright: this.copyright.build(),
      }),
    );
  }
}
