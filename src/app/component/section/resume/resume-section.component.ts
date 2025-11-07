// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Store } from '@ngxs/store';

// import { SectionDecorator } from '../../../decorator/section.decorator';
// import { ResumeViewComponent } from '../../view/resume-section.component';
// import { ResumeStoreModel } from '../../../store/model/store/resume-store.model';
// import { ResumeStoreState } from '../../../store/state/resume-store.state';

// @Component({
//   selector: 'resume-section',
//   template: `
//     @if (state$ | async; as state) {
//       <resume-view [model]="state"></resume-view>
//     }
//   `,
//   imports: [CommonModule, ResumeViewComponent],
// })
// @SectionDecorator('resume')
// export class ResumeSectionComponent {
//   state$: Observable<ResumeStoreModel>;

//   constructor(private readonly store: Store) {
//     this.state$ = this.store.selectOnce(ResumeStoreState.getState);
//   }
// }
