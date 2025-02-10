import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-contact-item-dumb',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './contact-item-dumb.component.html',
  styleUrl: './contact-item-dumb.component.scss',
})
export class ContactItemDumbComponent extends BaseComponent {
  @Input({ required: true }) icon!: IconDefinition;

  @Input({ required: true }) label!: string;

  @Input({ required: true }) link!: string;
}
