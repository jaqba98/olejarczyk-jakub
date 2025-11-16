import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { RawStateInitAction } from '../../action/state-init.action';
import { PersonalRawBuilder } from '../builder/personal-raw.builder';
import { SectionRawBuilder } from '../builder/section-raw.builder';
import { WebsiteRawBuilder } from '../builder/website-raw.builder';

@Injectable({ providedIn: 'root' })
export class RawInit {
  constructor(
    private readonly store: Store,
    private readonly personal: PersonalRawBuilder,
    private readonly section: SectionRawBuilder,
    private readonly website: WebsiteRawBuilder,
  ) {}

  init(): Observable<void> {
    return this.store.dispatch(
      new RawStateInitAction({
        personal: this.personal.build(),
        section: this.section.build(),
        website: this.website.build(),
      }),
    );
  }
}
