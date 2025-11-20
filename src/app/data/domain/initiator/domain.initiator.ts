import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { combineLatest, switchMap, take } from 'rxjs';

import { CopyrightDomainBuilder } from '../builder/copyright-domain.builder';
import { SectionDomainBuilder } from '../builder/section-domain.builder';
import { DomainStateInitAction } from '../../../action/state-init.action';
import { AppearanceState } from '../../../state/appearance.state';
import { DataState } from '../../../state/data.state';
import { MetadataState } from '../../../state/metadata.state';
import { TechnologiesDomainBuilder } from '../builder/technologies-domain.builder';

@Injectable({ providedIn: 'root' })
export class DomainInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightDomainBuilder,
    private readonly section: SectionDomainBuilder,
    private readonly technologies: TechnologiesDomainBuilder,
  ) {}

  init() {
    return combineLatest([
      this.store.selectOnce(DataState.getState),
      this.store.selectOnce(MetadataState.getState),
      this.store.selectOnce(AppearanceState.getState),
    ]).pipe(
      switchMap(([dataState, metadataState, appearanceState]) => {
        return this.store.dispatch(
          new DomainStateInitAction({
            copyright: this.copyright.build(dataState, metadataState, appearanceState),
            section: this.section.build(dataState, metadataState, appearanceState),
            technologies: this.technologies.build(dataState, metadataState, appearanceState),
          }),
        );
      }),
      take(1),
    );
  }
}
