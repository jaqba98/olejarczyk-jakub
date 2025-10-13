import { Component, input } from '@angular/core';

import { ColorType } from '../../type/color.type';

@Component({
  selector: 'base',
  template: '',
})
export class BaseComponent {
  color = input.required<ColorType>();

  protected buildFillColor() {
    return `fill__${this.color()}`;
  }
}
