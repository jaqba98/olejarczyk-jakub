import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { HomeViewComponent } from '../../view/home-section.component';
import { HomeStoreModel } from '../../../store/model/store/home-store.model';
import { HomeStoreState } from '../../../store/state/home-store.state';

@Component({
  selector: 'home-section',
  template: `
    @if (state$ | async; as state) {
      <home-view [model]="state"></home-view>
    }
  `,
  imports: [CommonModule, HomeViewComponent],
})
@SectionDecorator('home')
export class HomeSectionComponent {
  state$: Observable<HomeStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(HomeStoreState.getState);
  }
}
