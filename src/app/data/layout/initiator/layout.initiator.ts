import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';

import { SectionLayoutBuilder } from '../builder/section-layout.builder';
import { CopyrightLayoutBuilder } from '../builder/copyright-layout.builder';
import { DescriptionLayoutBuilder } from '../builder/description-layout.builder';
import { DomainState } from '../../../state/domain.state';
import { LayoutInitAction } from '../../../action/init.action';

@Injectable({ providedIn: 'root' })
export class LayoutInitiator {
  constructor(
    private readonly store: Store,
    private readonly section: SectionLayoutBuilder,
    private readonly copyright: CopyrightLayoutBuilder,
    private readonly description: DescriptionLayoutBuilder,
  ) {}

  init() {
    return this.store.selectOnce(DomainState.getState).pipe(
      map((state) => {
        return this.store.dispatch(
          new LayoutInitAction({
            layout: {
              kind: 'group',
              children: [
                this.section.buildNav(state, []),
                this.section.buildHome(state, []),
                this.section.buildAboutMe(state, [this.description.build(state)]),
                this.section.buildTechnology(state, []),
                this.section.buildSkill(state, []),
                this.section.buildExperience(state, []),
                this.section.buildResume(state, []),
                this.section.buildEducation(state, []),
                this.section.buildProject(state, []),
                this.section.buildContact(state, []),
                this.section.buildFooter(state, [this.copyright.build(state)]),
              ],
            },
          }),
        );
      }),
    );
  }
}
