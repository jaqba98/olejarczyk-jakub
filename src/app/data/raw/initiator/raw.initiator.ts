import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { PersonalRawBuilder } from '../builder/personal-raw.builder';
import { SectionRawBuilder } from '../builder/section-raw.builder';
import { WebsiteRawBuilder } from '../builder/website-raw.builder';
import { RawInitAction } from '../../../action/init.action';
import { TechnologyRawBuilder } from '../builder/technology-raw.builder';
import { TechnologyCategoryRawBuilder } from '../builder/technology-category-raw.builder';

@Injectable({ providedIn: 'root' })
export class RawInitiator {
  constructor(
    private readonly store: Store,
    private readonly personal: PersonalRawBuilder,
    private readonly section: SectionRawBuilder,
    private readonly technologyCategory: TechnologyCategoryRawBuilder,
    private readonly technology: TechnologyRawBuilder,
    private readonly website: WebsiteRawBuilder,
  ) {}

  init() {
    return this.store.dispatch(
      new RawInitAction({
        personal: this.personal.build(),
        section: this.section.build(),
        technologyCategory: this.technologyCategory.build(),
        technology: this.technology.build(),
        website: this.website.build(),
      }),
    );
  }
}
