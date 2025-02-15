import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

import { ContactItemDumbComponent } from '../../dumb/contact-item-dumb/contact-item-dumb.component';

@Component({
  selector: 'lib-contact-item-smart',
  imports: [CommonModule, ContactItemDumbComponent],
  templateUrl: './contact-item-smart.component.html',
})
export class ContactItemSmartComponent {
  @Input({ required: true }) icon!: IconDefinition;

  @Input({ required: true }) header!: string;

  @Input({ required: true }) label!: string;

  @Input({ required: true }) link!: string;
}
