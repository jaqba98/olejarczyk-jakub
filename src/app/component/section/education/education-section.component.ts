import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { EducationStoreState } from '../../../store/state/education-store.state';
import { EducationStoreModel } from '../../../store/model/store/education-store.model';

@Component({
  selector: 'education-section',
  templateUrl: './education-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('education')
export class EducationSectionComponent {
  state$: Observable<EducationStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(EducationStoreState.getState);
  }
}
