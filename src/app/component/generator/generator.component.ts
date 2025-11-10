import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModel } from '../../layout/model/layout.model';
import { getLayoutComponent } from '../../decorator/layout-component.decorator';

@Component({
  selector: 'generator-component',
  templateUrl: './generator.component.html',
  imports: [CommonModule],
})
export class GeneratorComponent {
  model = input.required<LayoutModel>();

  getLayoutComponent() {
    return getLayoutComponent(this.model().kind);
  }

  getLayoutInputs() {
    return { model: this.model() };
  }
}
