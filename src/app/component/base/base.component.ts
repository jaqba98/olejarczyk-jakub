import { Component, input } from '@angular/core';

import { ColorType } from '../../type/color.type';
import { PropertyType } from '../../type/property.type';

@Component({
  selector: 'base',
  template: '',
})
export class BaseComponent {
  property = input.required<PropertyType>();

  color = input.required<ColorType>();

  protected buildColor() {
    return `${this.property()}__${this.color()}`;
  }
}
