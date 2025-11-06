import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterStoreModel } from '../../store/model/store/footer-store.model';

@Component({
  selector: 'footer-view',
  template: '<p>{{ model() | json }}</p>',
  imports: [CommonModule],
})
export class FooterViewComponent {
  model = input.required<FooterStoreModel>();
}
