import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { of, switchMap, take } from 'rxjs';

import { CopyrightAppearanceBuilder } from '../builder/copyright-appearance.builder';
import { SectionAppearanceBuilder } from '../builder/section-appearance.builder';
import { AppearanceStateInitAction } from '../../../action/state-init.action';
import { TechnologiesAppearanceBuilder } from '../builder/technologies-appearance.builder';

@Injectable({ providedIn: 'root' })
export class AppearanceInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightAppearanceBuilder,
    private readonly section: SectionAppearanceBuilder,
    private readonly technologies: TechnologiesAppearanceBuilder,
  ) {}

  init() {
    return of(true).pipe(
      switchMap(() => {
        return this.store.dispatch(
          new AppearanceStateInitAction({
            copyright: this.copyright.build(),
            section: this.section.build(),
            technologies: this.technologies.build(),
          }),
        );
      }),
      take(1),
    );
  }
}
