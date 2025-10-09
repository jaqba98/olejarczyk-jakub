import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

import { ColorType } from '../../../type/color.type';
import { BemUtil } from '../../../util/bem.util';
import { HeadingTextComponent } from '../../text/heading/heading-text.component';
import { MarginUtilComponent } from '../../util/margin/margin-util.component';
import { FlexUtilComponent } from '../../util/flex/flex-util.component';
import { FlexItemUtilComponent } from '../../util/flex-item/flex-item-util.component';

@Component({
  selector: 'section-block',
  templateUrl: './section-block.component.html',
  styleUrl: './section-block.component.scss',
  imports: [
    NgClass,
    HeadingTextComponent,
    MarginUtilComponent,
    FlexUtilComponent,
    FlexItemUtilComponent,
  ],
})
export class SectionBlockComponent {
  id = input.required<string>();

  title = input.required<string>();

  color = input.required<ColorType>();

  constructor(private readonly bemUtil: BemUtil) {}

  buildClassNames() {
    const sectionColor = this.bemUtil.build('section', 'color', this.color());
    return {
      [sectionColor]: true,
    };
  }
}
