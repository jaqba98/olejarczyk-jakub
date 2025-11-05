import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { ResumeStoreState } from '../../../store/state/resume-store.state';

@Component({
  selector: 'resume-section',
  templateUrl: './resume-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('resume')
export class ResumeSectionComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(ResumeStoreState.getState);
  }
}
