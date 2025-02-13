import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { SectionEnum } from '@olejarczyk-jakub/model';
import { StyleOffDirective } from '../../base/style-off.directive';

@Component({
  selector: 'lib-base-view',
  imports: [CommonModule],
  templateUrl: './base-view.component.html',
  styleUrl: './base-view.component.scss',
  hostDirectives: [StyleOffDirective],
})
export class BaseViewComponent {
  @Input() id!: SectionEnum;

  @Input() isCenter = false;

  @Input() isSecondaryColor = false;

  getClassList() {
    return {
      'base-view__center': this.isCenter,
      'base-view__secondary-color': this.isSecondaryColor,
    };
  }
}
