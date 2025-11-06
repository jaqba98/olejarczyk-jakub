import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { NavStoreState } from '../../../store/state/nav-store.state';
import { NavStoreModel } from '../../../store/model/store/nav-store.model';
import { ViewComponent } from '../../view/view.component';

@Component({
  selector: 'nav-section',
  template: '<view [state]="state$ | async"></view>',
  imports: [CommonModule, ViewComponent],
})
@SectionDecorator('nav')
export class NavSectionComponent {
  state$: Observable<NavStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(NavStoreState.getState);
  }
}
