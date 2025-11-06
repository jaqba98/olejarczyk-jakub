import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { TechnologyViewComponent } from '../../view/technology-section.component';
import { TechnologyStoreModel } from '../../../store/model/store/technology-store.model';
import { TechnologyStoreState } from '../../../store/state/technology-store.state';

@Component({
  selector: 'technology-section',
  template: `
    @if (state$ | async; as state) {
      <technology-view [model]="state"></technology-view>
    }
  `,
  imports: [CommonModule, TechnologyViewComponent],
})
@SectionDecorator('technology')
export class TechnologySectionComponent {
  state$: Observable<TechnologyStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(TechnologyStoreState.getState);
  }
}
