import { Component, input } from '@angular/core';

import { ColorType } from '../../old/type2/color.type';
import { PropertyType } from '../../old/type2/property.type';

@Component({
  selector: 'base',
  template: '',
})
export class BaseComponent {
  color = input<[PropertyType, ColorType][]>([]);

  styles = input<Record<string, string>>();

  debug = input(false);

  protected buildColor() {
    return this.color().map((array) => `${array[0]}__${[array[1]]}`);
  }
}
