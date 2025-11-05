import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { ContactStoreState } from '../../../store/state/contact-store.state';

@Component({
  selector: 'contact-section',
  templateUrl: './contact-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('contact')
export class ContactSectionComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(ContactStoreState.getState);
  }
}
