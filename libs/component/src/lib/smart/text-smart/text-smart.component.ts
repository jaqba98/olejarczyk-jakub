import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TextDumbComponent } from '../../dumb/text-dumb/text-dumb.component';

@Component({
  selector: 'lib-text-smart',
  imports: [CommonModule, TextDumbComponent],
  templateUrl: './text-smart.component.html',
})
export class TextSmartComponent {
  @Input() isUppercase = false;

  @Input() isSecondaryTextColor = false;

  @Input() isAccentTextColor = false;

  @Input() isLatterSpacing = false;

  @Input() isTinySize = false;

  @Input() isMediumSize = false;

  @Input() isLargeSize = false;

  @Input() isTextCenter = false;

  @Input() isLineHeight = false;
}
