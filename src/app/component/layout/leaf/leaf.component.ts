import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { LayoutComponentDecorator } from '../../../decorator/layout-component.decorator';
import { LeafLayoutModel } from '../../../layout/model/layout.model';
import { getDomainComponent } from '../../../decorator/domain-component.decorator';

@Component({
  selector: 'leaf-layout-component',
  templateUrl: './leaf.component.html',
  imports: [CommonModule],
})
@LayoutComponentDecorator('leaf')
export class LeafComponent {
  model = input.required<LeafLayoutModel>();

  getComponent() {
    const { kind } = this.model().domain;
    return getDomainComponent(kind);
  }

  getInputs() {
    const { data, metadata } = this.model().domain;
    return { data, metadata };
  }
}
