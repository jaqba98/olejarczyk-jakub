import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { EducationStoreState } from '../../../store/state/education-store.state';

@Component({
  selector: 'education-section',
  templateUrl: './education-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('education')
export class EducationSectionComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(EducationStoreState.getState);
  }
}
