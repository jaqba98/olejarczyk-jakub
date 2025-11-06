import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavStoreModel } from '../../store/model/store/nav-store.model';

@Component({
  selector: 'nav-view',
  template: '<p>{{ model() | json }}</p>',
  imports: [CommonModule],
})
export class NavViewComponent {
  model = input.required<NavStoreModel>();
}
