import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { FooterViewComponent } from '../../view/footer-section.component';
import { FooterStoreModel } from '../../../store/model/store/footer-store.model';
import { FooterStoreState } from '../../../store/state/footer-store.state';

@Component({
  selector: 'footer-section',
  template: `
    @if (state$ | async; as state) {
      <footer-view [model]="state"></footer-view>
    }
  `,
  imports: [CommonModule, FooterViewComponent],
})
@SectionDecorator('footer')
export class FooterSectionComponent {
  state$: Observable<FooterStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(FooterStoreState.getState);
  }
}
