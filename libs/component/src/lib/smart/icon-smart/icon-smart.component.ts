import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

import { StyleOffDirective } from '../../base/style-off.directive';
import { IconDumbComponent } from '../../dumb/icon-dumb/icon-dumb.component';

@Component({
  selector: 'lib-icon-smart',
  imports: [CommonModule, IconDumbComponent],
  templateUrl: './icon-smart.component.html',
  hostDirectives: [StyleOffDirective],
})
export class IconSmartComponent {
  @Input({ required: true }) icon!: IconDefinition;

  @Input() isMediumSize = false;
}
