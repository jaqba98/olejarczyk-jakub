import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { LayoutGroupModel, LayoutModel, LayoutLeafModel } from '../model/layout/layout.model';
import { getComponent } from '../decorator/component.decorator';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  imports: [CommonModule],
})
export class Generator {
  layout = input.required<LayoutModel>();

  get leaf(): LayoutLeafModel | null {
    const layout = this.layout();
    return layout.kind === 'leaf' ? layout : null;
  }

  get group(): LayoutGroupModel | null {
    const layout = this.layout();
    return layout.kind === 'group' ? layout : null;
  }

  getComponent() {
    if (this.leaf) {
      return getComponent(this.leaf.component.kind);
    }
    if (this.group && this.group.component) {
      return getComponent(this.group.component.kind);
    }
    throw new Error('Neither leaf nor group defined!');
  }

  getInputs() {
    if (this.leaf) {
      return {
        data: this.leaf.component.data,
        metadata: this.leaf.component.metadata,
        appearance: this.leaf.component.appearance,
        children: [],
      };
    }
    if (this.group && this.group.component) {
      return {
        data: this.group.component.data,
        metadata: this.group.component.metadata,
        appearance: this.group.component.appearance,
        children: this.group.children,
      };
    }
    throw new Error('Neither leaf nor group defined!');
  }
}
