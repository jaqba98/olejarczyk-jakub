// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Store } from '@ngxs/store';

// import { SectionDecorator } from '../../../decorator/section.decorator';
// import { AboutMeStoreModel } from '../../../store/model/store/about-me-store.model';
// import { AboutMeStoreState } from '../../../store/state/about-me-store.state';
// import { AboutMeViewComponent } from '../../view/about-me-section.component';

// @Component({
//   selector: 'about-me-section',
//   template: `
//     @if (state$ | async; as state) {
//       <about-me-view [model]="state"></about-me-view>
//     }
//   `,
//   imports: [CommonModule, AboutMeViewComponent],
// })
// @SectionDecorator('aboutMe')
// export class AboutMeSectionComponent {
//   state$: Observable<AboutMeStoreModel>;

//   constructor(private readonly store: Store) {
//     this.state$ = this.store.selectOnce(AboutMeStoreState.getState);
//   }
// }
