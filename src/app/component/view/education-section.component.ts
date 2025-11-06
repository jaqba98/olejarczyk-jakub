import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationStoreModel } from '../../store/model/store/education-store.model';

@Component({
  selector: 'education-view',
  template: '<p>{{ model() | json }}</p>',
  imports: [CommonModule],
})
export class EducationViewComponent {
  model = input.required<EducationStoreModel>();
}
