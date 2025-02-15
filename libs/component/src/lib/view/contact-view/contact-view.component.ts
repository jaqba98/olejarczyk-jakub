import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { ContactsModel, SectionEnum } from '@olejarczyk-jakub/model';
import { ContactsState } from '@olejarczyk-jakub/store';
import { BaseViewComponent } from '../base-view/base-view.component';
import { TitleViewComponent } from '../title-view/title-view.component';
import { ContactItemSmartComponent } from '../../smart/contact-item-smart/contact-item-smart.component';
import { BaseComponent } from '../../base/base.component';
import { StyleOffDirective } from '../../base/style-off.directive';

@Component({
  selector: 'lib-contact-view',
  imports: [
    CommonModule,
    BaseViewComponent,
    TitleViewComponent,
    ContactItemSmartComponent,
  ],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class ContactViewComponent extends BaseComponent {
  id = SectionEnum.contact;

  contacts: ContactsModel['contacts'] = [];

  constructor(protected override readonly store: Store) {
    super(store);
    this.addSub(
      this.store
        .select(ContactsState.getContacts)
        .subscribe((contacts) => (this.contacts = contacts))
    );
  }
}
