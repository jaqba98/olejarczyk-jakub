import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { of, switchMap, take } from 'rxjs';

import { CopyrightMetadataBuilder } from '../builder/copyright-metadata.builder';
import { SectionMetadataBuilder } from '../builder/section-metadata.builder';
import { MetadataStateInitAction } from '../../../action/state-init.action';
import { TechnologyCategoryMetadataBuilder } from '../builder/technology-category-metadata.builder';
import { TechnologyMetadataBuilder } from '../builder/technology-metadata.builder';
import { TechnologiesMetadataBuilder } from '../builder/technologies-metadata.builder';

@Injectable({ providedIn: 'root' })
export class MetadataInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightMetadataBuilder,
    private readonly section: SectionMetadataBuilder,
    private readonly technologyCategory: TechnologyCategoryMetadataBuilder,
    private readonly technology: TechnologyMetadataBuilder,
    private readonly technologies: TechnologiesMetadataBuilder,
  ) {}

  init() {
    return of(true).pipe(
      switchMap(() => {
        return this.store.dispatch(
          new MetadataStateInitAction({
            copyright: this.copyright.build(),
            section: this.section.build(),
            technologyCategory: this.technologyCategory.build(),
            technology: this.technology.build(),
            technologies: this.technologies.build(),
          }),
        );
      }),
      take(1),
    );
  }
}
