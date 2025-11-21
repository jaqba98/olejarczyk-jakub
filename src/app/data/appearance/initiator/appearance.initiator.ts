import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { of, switchMap, take } from 'rxjs';

import { CopyrightAppearanceBuilder } from '../builder/copyright-appearance.builder';
import { SectionAppearanceBuilder } from '../builder/section-appearance.builder';
import { AppearanceInitAction } from '../../../action/init.action';
import { TechnologiesAppearanceBuilder } from '../builder/technologies-appearance.builder';
import { AboutMeAppearanceBuilder } from '../builder/about-me-appearance.builder';

@Injectable({ providedIn: 'root' })
export class AppearanceInitiator {
  constructor(
    private readonly store: Store,
    private readonly copyright: CopyrightAppearanceBuilder,
    private readonly section: SectionAppearanceBuilder,
    private readonly technologies: TechnologiesAppearanceBuilder,
    private readonly aboutMe: AboutMeAppearanceBuilder,
  ) {}

  init() {
    return of(true).pipe(
      switchMap(() => {
        return this.store.dispatch(
          new AppearanceInitAction({
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
