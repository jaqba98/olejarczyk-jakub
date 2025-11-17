import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupLayoutModel, LayoutModel, LeafLayoutModel } from '../model/layout/layout.model';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  imports: [CommonModule],
})
export class Generator {
  model = input.required<LayoutModel>();

  get leaf(): LeafLayoutModel | null {
    const selfModel = this.model();
    return selfModel.kind === 'leaf' ? selfModel : null;
  }

  get group(): GroupLayoutModel | null {
    const selfModel = this.model();
    return selfModel.kind === 'group' ? selfModel : null;
  }

  // getComponent() {
  //   if (this.leaf) {
  //     return getDomainComponent(this.leaf.domain.kind);
  //   } else if (this.group && this.group.domain) {
  //     return getDomainComponent(this.group.domain.kind);
  //   }
  //   throw new Error('The model is not defined!');
  // }

  // getInputs() {
  //   if (this.leaf) {
  //     return {
  //       data: this.leaf.domain.data,
  //       metadata: this.leaf.domain.metadata,
  //       appearance: this.leaf.domain.appearance,
  //       children: [],
  //     };
  //   } else if (this.group && this.group.domain) {
  //     return {
  //       data: this.group.domain.data,
  //       metadata: this.group.domain.metadata,
  //       appearance: this.group.domain.appearance,
  //       children: this.group.children,
  //     };
  //   }
  //   throw new Error('The model is not defined!');
  // }
}
