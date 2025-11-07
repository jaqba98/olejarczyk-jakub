// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Store } from '@ngxs/store';

// import { SectionDecorator } from '../../../decorator/section.decorator';
// import { NavViewComponent } from '../../view/nav-section.component';
// import { NavStoreModel } from '../../../store/model/store/nav-store.model';
// import { NavStoreState } from '../../../store/state/nav-store.state';

// @Component({
//   selector: 'nav-section',
//   template: `
//     @if (state$ | async; as state) {
//       <nav-view [model]="state"></nav-view>
//     }
//   `,
//   imports: [CommonModule, NavViewComponent],
// })
// @SectionDecorator('nav')
// export class NavSectionComponent {
//   state$: Observable<NavStoreModel>;

//   constructor(private readonly store: Store) {
//     this.state$ = this.store.selectOnce(NavStoreState.getState);
//   }
// }
