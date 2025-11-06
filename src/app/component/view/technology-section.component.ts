import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyStoreModel } from '../../store/model/store/technology-store.model';

@Component({
  selector: 'technology-view',
  template: '<p>{{ model() | json }}</p>',
  imports: [CommonModule],
})
export class TechnologyViewComponent {
  model = input.required<TechnologyStoreModel>();
}
