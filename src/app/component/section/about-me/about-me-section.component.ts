import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { AboutMeStoreState } from '../../../store/state/about-me-store.state';

@Component({
  selector: 'about-me-section',
  templateUrl: './about-me-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('aboutMe')
export class AboutMeSectionComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(AboutMeStoreState.getState);
  }
}
