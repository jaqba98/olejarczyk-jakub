import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { GroupLayoutModel, LayoutModel, LeafLayoutModel } from '../model/layout/layout.model';
import { getComponent } from '../decorator/component.decorator';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  imports: [CommonModule],
})
export class Generator {
  layout = input.required<LayoutModel>();

  get leaf(): LeafLayoutModel | null {
    const model = this.layout();
    return model.kind === 'leaf' ? model : null;
  }

  get group(): GroupLayoutModel | null {
    const model = this.layout();
    return model.kind === 'group' ? model : null;
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
