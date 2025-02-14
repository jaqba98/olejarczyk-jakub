import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

import { StyleOffDirective } from '../../base/style-off.directive';

@Component({
  selector: 'lib-icon-dumb',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './icon-dumb.component.html',
  styleUrl: './icon-dumb.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class IconDumbComponent {
  @Input({ required: true }) icon!: IconDefinition;
}
