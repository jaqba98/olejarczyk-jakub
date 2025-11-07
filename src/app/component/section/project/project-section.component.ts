// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Store } from '@ngxs/store';

// import { SectionDecorator } from '../../../decorator/section.decorator';
// import { ProjectViewComponent } from '../../view/project-section.component';
// import { ProjectStoreModel } from '../../../store/model/store/project-store.model';
// import { ProjectStoreState } from '../../../store/state/project-store.state';

// @Component({
//   selector: 'project-section',
//   template: `
//     @if (state$ | async; as state) {
//       <project-view [model]="state"></project-view>
//     }
//   `,
//   imports: [CommonModule, ProjectViewComponent],
// })
// @SectionDecorator('project')
// export class ProjectSectionComponent {
//   state$: Observable<ProjectStoreModel>;

//   constructor(private readonly store: Store) {
//     this.state$ = this.store.selectOnce(ProjectStoreState.getState);
//   }
// }
