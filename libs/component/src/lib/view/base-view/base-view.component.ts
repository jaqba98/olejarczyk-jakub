import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { StyleOffDirective } from '../../base/style-off.directive';

@Component({
  selector: 'lib-base-view',
  imports: [CommonModule],
  templateUrl: './base-view.component.html',
  styleUrl: './base-view.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class BaseViewComponent {
  @Input({ required: true }) title!: string;

  @Input() primaryBackground = false;
}
