import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { StyleOffDirective } from '../../base/style-off.directive';
import { SectionEnum } from '@olejarczyk-jakub/model';

@Component({
  selector: 'lib-base-view',
  imports: [CommonModule],
  templateUrl: './base-view.component.html',
  styleUrl: './base-view.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class BaseViewComponent {
  @Input() secondary = false;

  @Input() id!: SectionEnum;
}
