import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceStoreModel } from '../../store/model/store/experience-store.model';

@Component({
  selector: 'experience-view',
  template: '<p>{{ model() | json }}</p>',
  imports: [CommonModule],
})
export class ExperienceViewComponent {
  model = input.required<ExperienceStoreModel>();
}
