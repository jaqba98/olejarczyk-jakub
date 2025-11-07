// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Store } from '@ngxs/store';

// import { SectionDecorator } from '../../../decorator/section.decorator';
// import { ExperienceViewComponent } from '../../view/experience-section.component';
// import { ExperienceStoreState } from '../../../store/state/experience-store.state';
// import { ExperienceStoreModel } from '../../../store/model/store/experience-store.model';

// @Component({
//   selector: 'experience-section',
//   template: `
//     @if (state$ | async; as state) {
//       <experience-view [model]="state"></experience-view>
//     }
//   `,
//   imports: [CommonModule, ExperienceViewComponent],
// })
// @SectionDecorator('experience')
// export class ExperienceSectionComponent {
//   state$: Observable<ExperienceStoreModel>;

//   constructor(private readonly store: Store) {
//     this.state$ = this.store.selectOnce(ExperienceStoreState.getState);
//   }
// }
