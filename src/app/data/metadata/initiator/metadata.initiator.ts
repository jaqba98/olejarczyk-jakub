import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { of, switchMap, take } from 'rxjs';

import { CopyrightMetadataBuilder } from '../builder/copyright-metadata.builder';
import { SectionMetadataBuilder } from '../builder/section-metadata.builder';
import { MetadataStateInitAction } from '../../../action/state-init.action';

@Injectable({ providedIn: 'root' })
export class MetadataInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightMetadataBuilder,
    private readonly section: SectionMetadataBuilder,
  ) {}

  init() {
    return of(true).pipe(
      switchMap(() => {
        return this.store.dispatch(
          new MetadataStateInitAction({
            copyright: this.copyright.build(),
            section: this.section.build(),
          }),
        );
      }),
      take(1),
    );
  }
}
