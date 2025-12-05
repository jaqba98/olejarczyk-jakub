import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';

import { CopyrightMapperBuilder } from '../builder/copyright-mapper.builder';
import { SectionMapperBuilder } from '../builder/section-mapper.builder';
import { MapperInitAction } from '../../../action/init.action';
import { RawState } from '../../../state/raw.state';
import { DescriptionMapperBuilder } from '../builder/description-mapper.builder';
import { MapperStateModel } from '../../../model/state/mapper-state.model';
import { TechnologyMapperBuilder } from '../builder/technology-mapper.builder';

@Injectable({ providedIn: 'root' })
export class MapperInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightMapperBuilder,
    private readonly description: DescriptionMapperBuilder,
    private readonly section: SectionMapperBuilder,
    private readonly technology: TechnologyMapperBuilder,
  ) {}

  init() {
    return this.store.selectOnce(RawState.getState).pipe(
      map((state): MapperStateModel => {
        return {
          copyright: this.copyright.build(state),
          description: this.description.build(state),
          section: this.section.build(state),
          technology: this.technology.build(state),
        };
      }),
      map((state) => this.store.dispatch(new MapperInitAction(state))),
    );
  }
}
