import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';

import { CopyrightDataBuilder } from '../builder/copyright-data.builder';
import { SectionDataBuilder } from '../builder/section-data.builder';
import { DataInitAction } from '../../../action/init.action';
import { MapperState } from '../../../state/mapper.state';
import { DescriptionDataBuilder } from '../builder/description-data.builder';
import { DataStateModel } from '../../../model/state/data-state.model';

@Injectable({ providedIn: 'root' })
export class DataInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightDataBuilder,
    private readonly section: SectionDataBuilder,
    private readonly description: DescriptionDataBuilder,
  ) {}

  init() {
    return this.store.selectOnce(MapperState.getState).pipe(
      map((state): DataStateModel => {
        return {
          copyright: this.copyright.build(state),
          description: this.description.build(state),
          section: this.section.build(state),
        };
      }),
      map((state) => this.store.dispatch(new DataInitAction(state))),
    );
  }
}
