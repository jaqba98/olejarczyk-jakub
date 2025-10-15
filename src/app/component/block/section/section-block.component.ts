import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '../../base/base.component';
import { PaddingUtilComponent } from '../../util/padding/padding-util.component';
import { HeadingTextComponent } from '../../text/heading/heading-text.component';
import { MarginUtilComponent } from '../../util/margin/margin-util.component';
import { ColorType } from '../../../type/color.type';
import { PropertyType } from '../../../type/property.type';
import { ParagraphTextComponent } from '../../text/paragraph/paragraph-text.component';
import { InterspaceUtilComponent } from '../../util/interspace/interspace-util.component';
import { FlexUtilComponent } from '../../util/flex/flex-util.component';

@Component({
  selector: 'section-block',
  templateUrl: './section-block.component.html',
  imports: [
    CommonModule,
    PaddingUtilComponent,
    HeadingTextComponent,
    MarginUtilComponent,
    ParagraphTextComponent,
    InterspaceUtilComponent,
    FlexUtilComponent,
  ],
})
export class SectionBlockComponent extends BaseComponent {
  id = input.required<string>();

  title = input.required<string>();

  titleColor = input.required<[PropertyType, ColorType]>();
}
