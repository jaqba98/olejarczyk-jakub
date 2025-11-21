import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { CopyrightMetadataBuilder } from '../builder/copyright-metadata.builder';
import { SectionMetadataBuilder } from '../builder/section-metadata.builder';
import { MetadataInitAction } from '../../../action/init.action';
import { DescriptionMetadataBuilder } from '../builder/description-metadata.builder';

@Injectable({ providedIn: 'root' })
export class MetadataInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightMetadataBuilder,
    private readonly description: DescriptionMetadataBuilder,
    private readonly section: SectionMetadataBuilder,
  ) {}

  init() {
    return this.store.dispatch(
      new MetadataInitAction({
        copyright: this.copyright.build(),
        description: this.description.build(),
        section: this.section.build(),
      }),
    );
  }
}
