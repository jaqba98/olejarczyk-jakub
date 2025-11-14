import { Component, input } from '@angular/core';
import { GroupLayoutModel, LayoutModel, LeafLayoutModel } from '../layout/model/layout.model';

// import { GroupLayoutModel, LayoutModel, LeafLayoutModel } from '../../layout/model/layout.model';
// import { LeafComponent } from '../layout/leaf/leaf.component';
// import { GroupComponent } from '../layout/group/group.component';

@Component({
  selector: 'generator',
  templateUrl: './generator.html',
  // imports: [CommonModule, LeafComponent, GroupComponent],
})
export class Generator {
  model = input.required<LayoutModel>();

  get leaf(): LeafLayoutModel | null {
    const model = this.model();
    return model.kind === 'leaf' ? model : null;
  }

  get group(): GroupLayoutModel | null {
    const model = this.model();
    return model.kind === 'group' ? model : null;
  }
}
