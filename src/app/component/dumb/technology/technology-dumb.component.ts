import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { SvgModel } from '../../../model/svg.model';
import { SvgImageComponent } from '../../image/svg/svg-image.component';
import { HeadingTextComponent } from '../../text/heading/heading-text.component';
import { FlexUtilComponent } from '../../util/flex/flex-util.component';
import { FlexItemUtilComponent } from '../../util/flex-item/flex-item-util.component';
import { BaseComponent } from '../../base/base.component';
import { PaddingUtilComponent } from '../../util/padding/padding-util.component';

@Component({
  selector: 'technology-dumb',
  templateUrl: './technology-dumb.component.html',
  styleUrl: './technology-dumb.component.scss',
  imports: [
    CommonModule,
    SvgImageComponent,
    HeadingTextComponent,
    FlexUtilComponent,
    FlexItemUtilComponent,
    PaddingUtilComponent,
  ],
})
export class TechnologyDumbComponent extends BaseComponent {
  value = input.required<string>();

  svg = input.required<SvgModel>();

  type = input.required<'light' | 'dark'>();
}
