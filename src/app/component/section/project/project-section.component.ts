import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SectionDecorator } from '../../../decorator/section.decorator';
import { ProjectStoreState } from '../../../store/state/project-store.state';
import { ProjectStoreModel } from '../../../store/model/store/project-store.model';
import { ViewComponent } from '../../view/view.component';

@Component({
  selector: 'project-section',
  template: '<view [state]="state$"></view>',
  imports: [CommonModule, ViewComponent],
})
@SectionDecorator('project')
export class ProjectSectionComponent {
  state$: Observable<ProjectStoreModel>;

  constructor(private readonly store: Store) {
    this.state$ = this.store.selectOnce(ProjectStoreState.getState);
  }
}
