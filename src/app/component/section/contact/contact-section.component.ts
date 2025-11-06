import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { ContactStoreState } from '../../../store/state/contact-store.state';
import { ContactStoreModel } from '../../../store/model/store/contact-store.model';

@Component({
  selector: 'contact-section',
  templateUrl: './contact-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('contact')
export class ContactSectionComponent {
  state$: Observable<ContactStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(ContactStoreState.getState);
  }
}
