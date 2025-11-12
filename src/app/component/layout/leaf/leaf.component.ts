import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponentDecorator } from '../../../decorator/layout-component.decorator';
import { LeafLayoutModel } from '../../../layout/model/layout.model';
import { getDataComponent } from '../../../decorator/data-component.decorator';

@Component({
  selector: 'leaf-layout-component',
  templateUrl: './leaf.component.html',
  imports: [CommonModule],
})
@LayoutComponentDecorator('leaf')
export class LeafComponent {
  model = input.required<LeafLayoutModel>();

  getComponent() {
    const { kind } = this.model().data;
    return getDataComponent(kind);
  }

  getInputs() {
    const model = this.model().data;
    return { model };
  }
}
