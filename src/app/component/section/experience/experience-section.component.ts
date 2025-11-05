import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { ExperienceStoreState } from '../../../store/state/experience-store.state';

@Component({
  selector: 'experience-section',
  templateUrl: './experience-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('experience')
export class ExperienceSectionComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(ExperienceStoreState.getState);
  }
}
