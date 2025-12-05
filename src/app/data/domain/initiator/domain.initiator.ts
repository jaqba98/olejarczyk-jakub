import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CopyrightDomainBuilder } from '../builder/copyright-domain.builder';
import { SectionDomainBuilder } from '../builder/section-domain.builder';
import { DomainInitAction } from '../../../action/init.action';
import { AppearanceState } from '../../../state/appearance.state';
import { DataState } from '../../../state/data.state';
import { MetadataState } from '../../../state/metadata.state';
import { DescriptionDomainBuilder } from '../builder/description-domain.builder';
import { TechnologyDomainBuilder } from '../builder/technology-domain.builder';

@Injectable({ providedIn: 'root' })
export class DomainInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightDomainBuilder,
    private readonly section: SectionDomainBuilder,
    private readonly description: DescriptionDomainBuilder,
    private readonly technology: TechnologyDomainBuilder,
  ) {}

  init() {
    return combineLatest([
      this.store.selectOnce(DataState.getState),
      this.store.selectOnce(MetadataState.getState),
      this.store.selectOnce(AppearanceState.getState),
    ]).pipe(
      switchMap(([dataState, metadataState, appearanceState]) => {
        return this.store.dispatch(
          new DomainInitAction({
            copyright: this.copyright.build(dataState, metadataState, appearanceState),
            section: this.section.build(dataState, metadataState, appearanceState),
            description: this.description.build(dataState, metadataState, appearanceState),
            technology: this.technology.build(dataState, metadataState, appearanceState),
          }),
        );
      }),
    );
  }
}
