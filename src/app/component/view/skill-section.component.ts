import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillStoreModel } from '../../store/model/store/skill-store.model';

@Component({
  selector: 'skill-view',
  template: '<p>{{ model() | json }}</p>',
  imports: [CommonModule],
})
export class SkillViewComponent {
  model = input.required<SkillStoreModel>();
}
