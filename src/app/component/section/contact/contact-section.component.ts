// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Store } from '@ngxs/store';

// import { SectionDecorator } from '../../../decorator/section.decorator';
// import { ContactViewComponent } from '../../view/contact-section.component';
// import { ContactStoreModel } from '../../../store/model/store/contact-store.model';
// import { ContactStoreState } from '../../../store/state/contact-store.state';

// @Component({
//   selector: 'contact-section',
//   template: `
//     @if (state$ | async; as state) {
//       <contact-view [model]="state"></contact-view>
//     }
//   `,
//   imports: [CommonModule, ContactViewComponent],
// })
// @SectionDecorator('contact')
// export class ContactSectionComponent {
//   state$: Observable<ContactStoreModel>;

//   constructor(private readonly store: Store) {
//     this.state$ = this.store.selectOnce(ContactStoreState.getState);
//   }
// }
