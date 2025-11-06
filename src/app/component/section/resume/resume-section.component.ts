import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { ResumeStoreState } from '../../../store/state/resume-store.state';
import { ResumeStoreModel } from '../../../store/model/store/resume-store.model';
import { ViewComponent } from '../../view/view.component';

@Component({
  selector: 'resume-section',
  template: '<view [state]="state$"></view>',
  imports: [CommonModule, ViewComponent],
})
@SectionDecorator('resume')
export class ResumeSectionComponent {
  state$: Observable<ResumeStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(ResumeStoreState.getState);
  }
}
