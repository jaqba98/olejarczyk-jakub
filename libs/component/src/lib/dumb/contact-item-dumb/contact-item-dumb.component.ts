import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

import { IconDumbComponent } from '../icon-dumb/icon-dumb.component';
import { TextDumbComponent } from '../text-dumb/text-dumb.component';

@Component({
  selector: 'lib-contact-item-dumb',
  imports: [CommonModule, IconDumbComponent, TextDumbComponent],
  templateUrl: './contact-item-dumb.component.html',
  styleUrl: './contact-item-dumb.component.scss',
})
export class ContactItemDumbComponent {
  @Input({ required: true }) icon!: IconDefinition;

  @Input({ required: true }) header!: string;

  @Input({ required: true }) label!: string;

  @Input({ required: true }) link!: string;
}
