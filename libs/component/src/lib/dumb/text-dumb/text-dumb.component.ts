import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'lib-text-dumb',
  imports: [CommonModule],
  templateUrl: './text-dumb.component.html',
  styleUrl: './text-dumb.component.scss',
})
export class TextDumbComponent extends BaseComponent {
  @Input() isUppercase = false;

  @Input() isSecondaryTextColor = false;

  @Input() isAccentTextColor = false;

  @Input() isLatterSpacing = false;

  @Input() isMediumSize = false;

  getClassList() {
    return {
      text__uppercase: this.isUppercase,
      'text__secondary-text-color': this.isSecondaryTextColor,
      'text__accent-text-color': this.isAccentTextColor,
      'text__letter-spacing': this.isLatterSpacing,
      'text__medium-size': this.isMediumSize,
    };
  }
}
