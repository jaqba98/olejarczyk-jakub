import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { TechnologyStoreState } from '../../../store/state/technology-store.state';

@Component({
  selector: 'technology-section',
  templateUrl: './technology-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('technology')
export class TechnologySectionComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(TechnologyStoreState.getState);
  }
}
