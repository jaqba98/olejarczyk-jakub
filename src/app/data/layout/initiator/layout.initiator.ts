import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { combineLatest, switchMap, take } from 'rxjs';

import { SectionLayoutBuilder } from '../builder/section-layout.builder';
import { CopyrightLayoutBuilder } from '../builder/copyright-layout.builder';
import { LayoutStateInitAction } from '../../../action/state-init.action';
import { DomainState } from '../../../state/domain.state';

@Injectable({ providedIn: 'root' })
export class LayoutInitiator {
  constructor(
    private readonly store: Store,
    private readonly section: SectionLayoutBuilder,
    private readonly copyright: CopyrightLayoutBuilder,
  ) {}

  init() {
    return combineLatest([this.store.selectOnce(DomainState.getState)]).pipe(
      switchMap(([state]) => {
        return this.store.dispatch(
          new LayoutStateInitAction({
            model: {
              kind: 'group',
              children: [
                this.section.build(state, 'nav', []),
                this.section.build(state, 'home', []),
                this.section.build(state, 'aboutMe', []),
                this.section.build(state, 'technology', []),
                this.section.build(state, 'skill', []),
                this.section.build(state, 'experience', []),
                this.section.build(state, 'resume', []),
                this.section.build(state, 'education', []),
                this.section.build(state, 'project', []),
                this.section.build(state, 'contact', []),
                this.section.build(state, 'footer', [this.copyright.build(state)]),
              ],
            },
          }),
        );
      }),
      take(1),
    );
  }
}
