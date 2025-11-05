import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { HomeStoreState } from '../../../store/state/home-store.state';

@Component({
  selector: 'home-section',
  templateUrl: './home-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('home')
export class HomeSectionComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(HomeStoreState.getState);
  }
}
