import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { HomeStoreState } from '../../../store/state/home-store.state';
import { HomeStoreModel } from '../../../store/model/store/home-store.model';
import { ViewComponent } from '../../view/view.component';

@Component({
  selector: 'home-section',
  template: '<view [state]="state$"></view>',
  imports: [CommonModule, ViewComponent],
})
@SectionDecorator('home')
export class HomeSectionComponent {
  state$: Observable<HomeStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(HomeStoreState.getState);
  }
}
