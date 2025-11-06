import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { EducationViewComponent } from '../../view/education-section.component';
import { EducationStoreModel } from '../../../store/model/store/education-store.model';
import { EducationStoreState } from '../../../store/state/education-store.state';

@Component({
  selector: 'education-section',
  template: `
    @if (state$ | async; as state) {
      <education-view [model]="state"></education-view>
    }
  `,
  imports: [CommonModule, EducationViewComponent],
})
@SectionDecorator('education')
export class EducationSectionComponent {
  state$: Observable<EducationStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(EducationStoreState.getState);
  }
}
