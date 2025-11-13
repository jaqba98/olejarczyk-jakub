import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponentDecorator } from '../../../decorator/layout-component.decorator';
import { LeafLayoutModel } from '../../../layout/model/layout.model';
import { getComplexComponent } from '../../../decorator/domain-component.decorator';

@Component({
  selector: 'leaf-layout-component',
  templateUrl: './leaf.component.html',
  imports: [CommonModule],
})
@LayoutComponentDecorator('leaf')
export class LeafComponent {
  model = input.required<LeafLayoutModel>();

  getComponent() {
    const { kind } = this.model().complex;
    return getComplexComponent(kind);
  }

  getInputs() {
    const model = this.model().complex;
    return { model };
  }
}
