import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../base/base.component';
import { TextDumbComponent } from '../../dumb/text-dumb/text-dumb.component';

@Component({
  selector: 'lib-text-smart',
  imports: [CommonModule, TextDumbComponent],
  templateUrl: './text-smart.component.html',
})
export class TextSmartComponent extends BaseComponent {
  @Input() isUppercase = false;

  @Input() isSecondaryTextColor = false;

  @Input() isAccentTextColor = false;

  @Input() isLatterSpacing = false;

  @Input() isMediumSize = false;
}
