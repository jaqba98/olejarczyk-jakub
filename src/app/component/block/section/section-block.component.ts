import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '../../base/base.component';
import { PaddingUtilComponent } from '../../util/padding/padding-util.component';
import { HeadingTextComponent } from '../../text/heading/heading-text.component';
import { ColorType } from '../../../type/color.type';
import { MarginUtilComponent } from '../../util/margin/margin-util.component';

@Component({
  selector: 'section-block',
  templateUrl: './section-block.component.html',
  imports: [CommonModule, PaddingUtilComponent, HeadingTextComponent, MarginUtilComponent],
})
export class SectionBlockComponent extends BaseComponent {
  id = input.required<string>();

  title = input.required<string>();

  titleColor = input.required<ColorType>();
}
