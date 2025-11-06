import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { EducationStoreState } from '../../../store/state/education-store.state';
import { EducationStoreModel } from '../../../store/model/store/education-store.model';
import { ViewComponent } from '../../view/view.component';

@Component({
  selector: 'education-section',
  template: '<view [state]="state$ | async"></view>',
  imports: [CommonModule, ViewComponent],
})
@SectionDecorator('education')
export class EducationSectionComponent {
  state$: Observable<EducationStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(EducationStoreState.getState);
  }
}
