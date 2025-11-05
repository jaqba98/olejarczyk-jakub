import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { SkillStoreState } from '../../../store/state/skill-store.state';

@Component({
  selector: 'skill-section',
  templateUrl: './skill-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('skill')
export class SkillSectionComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(SkillStoreState.getState);
  }
}
