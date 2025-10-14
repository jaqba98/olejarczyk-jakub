import { Component, input } from '@angular/core';

import { ColorType } from '../../type/color.type';
import { PropertyType } from '../../type/property.type';

@Component({
  selector: 'base',
  template: '',
})
export class BaseComponent {
  color = input.required<[PropertyType, ColorType][]>();

  protected buildColor() {
    const aaa = this.color().map((array) => `${array[0]}__${[array[1]]}`);
    console.log(aaa);

    return aaa;
  }
}
