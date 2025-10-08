import { Component, input } from '@angular/core';

import { ColorType } from '../../../type/color.type';

@Component({
  selector: 'section-block',
  templateUrl: './section-block.component.html',
  styleUrl: './section-block.component.scss',
})
export class SectionBlockComponent {
  id = input.required<string>();

  color = input.required<ColorType>();
}
