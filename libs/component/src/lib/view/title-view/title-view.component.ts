import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { StyleOffDirective } from '../../base/style-off.directive';

@Component({
  selector: 'lib-title-view',
  imports: [CommonModule],
  templateUrl: './title-view.component.html',
  styleUrl: './title-view.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class TitleViewComponent {
  @Input({ required: true }) title!: string;

  @Input() marginAuto = false;

  @Input() textAlign = 'left';
}
