import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { CopyrightAppearanceBuilder } from '../builder/copyright-appearance.builder';
import { SectionAppearanceBuilder } from '../builder/section-appearance.builder';
import { AppearanceInitAction } from '../../../action/init.action';
import { DescriptionAppearanceBuilder } from '../builder/description-appearance.builder';
import { TechnologyAppearanceBuilder } from '../builder/technology-appearance.builder';

@Injectable({ providedIn: 'root' })
export class AppearanceInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightAppearanceBuilder,
    private readonly description: DescriptionAppearanceBuilder,
    private readonly section: SectionAppearanceBuilder,
    private readonly technology: TechnologyAppearanceBuilder,
  ) {}

  init() {
    return this.store.dispatch(
      new AppearanceInitAction({
        copyright: this.copyright.build(),
        description: this.description.build(),
        section: this.section.build(),
        technology: this.technology.build(),
      }),
    );
  }
}
