import { Component, input } from '@angular/core';

import { LayoutModel } from '../../layout/model/layout.model';

@Component({
  selector: 'generator-component',
  templateUrl: './generator.component.html',
})
export class GeneratorComponent {
  layout = input.required<LayoutModel>();
}
