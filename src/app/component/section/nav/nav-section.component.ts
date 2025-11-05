import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { NavStoreState } from '../../../store/state/nav-store.state';

@Component({
  selector: 'nav-section',
  templateUrl: './nav-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('nav')
export class NavSectionComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(NavStoreState.getState);
  }
}
