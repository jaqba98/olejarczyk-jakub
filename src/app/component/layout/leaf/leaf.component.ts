import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponentDecorator } from '../../../decorator/layout-component.decorator';
import { KindLayoutEnum } from '../../../layout/enum/kind-layout.enum';
import { LeafLayoutModel } from '../../../layout/model/layout.model';
import { KindDataEnum } from '../../../data/enum/kind-data.enum';
import { getDataComponent } from '../../../decorator/data-component.decorator';

@Component({
  selector: 'layout-leaf-component',
  templateUrl: './leaf.component.html',
  imports: [CommonModule],
})
@LayoutComponentDecorator(KindLayoutEnum.leaf)
export class LeafComponent {
  model = input.required<LeafLayoutModel>();

  readonly EMPTY = KindDataEnum.empty;

  getDataComponent() {
    return getDataComponent(this.model().data.kind);
  }

  getDataInputs() {
    return {
      model: this.model().data,
    };
  }
}
