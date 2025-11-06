import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { ExperienceStoreState } from '../../../store/state/experience-store.state';
import { ExperienceStoreModel } from '../../../store/model/store/experience-store.model';
import { ViewComponent } from '../../view/view.component';

@Component({
  selector: 'experience-section',
  template: '<view [state]="state$"></view>',
  imports: [CommonModule, ViewComponent],
})
@SectionDecorator('experience')
export class ExperienceSectionComponent {
  state$: Observable<ExperienceStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(ExperienceStoreState.getState);
  }
}
