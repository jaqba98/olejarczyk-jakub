import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { of, switchMap, take } from 'rxjs';

import { CopyrightMetadataBuilder } from '../builder/copyright-metadata.builder';
import { SectionMetadataBuilder } from '../builder/section-metadata.builder';
import { MetadataInitAction } from '../../../action/init.action';
import { TechnologiesMetadataBuilder } from '../builder/technologies-metadata.builder';
import { AboutMeMetadataBuilder } from '../builder/about-me-metadata.builder';

@Injectable({ providedIn: 'root' })
export class MetadataInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightMetadataBuilder,
    private readonly section: SectionMetadataBuilder,
    private readonly technologies: TechnologiesMetadataBuilder,
    private readonly aboutMe: AboutMeMetadataBuilder,
  ) {}

  init() {
    return of(true).pipe(
      switchMap(() => {
        return this.store.dispatch(
          new MetadataInitAction({
            copyright: this.copyright.build(),
            section: this.section.build(),
            technologies: this.technologies.build(),
            aboutMe: this.aboutMe.build(),
          }),
        );
      }),
      take(1),
    );
  }
}
