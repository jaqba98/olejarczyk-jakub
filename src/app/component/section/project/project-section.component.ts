import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { ProjectStoreState } from '../../../store/state/project-store.state';

@Component({
  selector: 'project-section',
  templateUrl: './project-section.component.html',
  imports: [CommonModule],
})
@SectionDecorator('project')
export class ProjectSectionComponent {
  state$;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(ProjectStoreState.getState);
  }
}
