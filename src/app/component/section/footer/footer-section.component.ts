import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { FooterStoreState } from '../../../store/state/footer-store.state';

@Component({
  selector: 'footer-section',
  templateUrl: './footer-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('footer')
export class FooterSectionComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(FooterStoreState.getState);
  }
}
