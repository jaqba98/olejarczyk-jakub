import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TextSmartComponent } from '../../smart/text-smart/text-smart.component';
import { StyleOffDirective } from '../../base/style-off.directive';

@Component({
  selector: 'lib-title-view',
  imports: [CommonModule, TextSmartComponent],
  templateUrl: './title-view.component.html',
  styleUrl: './title-view.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class TitleViewComponent {
  @Input({ required: true }) value!: string;
}
