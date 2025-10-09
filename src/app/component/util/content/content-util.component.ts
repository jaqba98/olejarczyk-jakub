import { Component, input } from '@angular/core';

import { HeadingTextComponent } from '../../text/heading/heading-text.component';
import { ColorType } from '../../../type/color.type';

@Component({
  selector: 'content-util',
  templateUrl: './content-util.component.html',
  styleUrl: './content-util.component.scss',
  imports: [HeadingTextComponent],
})
export class ContentUtilComponent {
  color = input.required<ColorType>();
}
