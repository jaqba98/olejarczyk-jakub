import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { FooterStoreState } from '../../../store/state/footer-store.state';
import { FooterStoreModel } from '../../../store/model/store/footer-store.model';
import { ViewComponent } from '../../view/view.component';

@Component({
  selector: 'footer-section',
  template: '<view [state]="state$ | async"></view>',
  imports: [CommonModule, ViewComponent],
})
@SectionDecorator('footer')
export class FooterSectionComponent {
  state$: Observable<FooterStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(FooterStoreState.getState);
  }
}
