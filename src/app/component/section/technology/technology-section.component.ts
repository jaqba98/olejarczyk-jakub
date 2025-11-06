import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { TechnologyStoreState } from '../../../store/state/technology-store.state';
import { TechnologyStoreModel } from '../../../store/model/store/technology-store.model';

@Component({
  selector: 'technology-section',
  templateUrl: './technology-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('technology')
export class TechnologySectionComponent {
  state$: Observable<TechnologyStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(TechnologyStoreState.getState);
  }
}
