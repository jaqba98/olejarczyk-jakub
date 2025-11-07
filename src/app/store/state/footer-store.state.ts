// import { Selector, State } from '@ngxs/store';
// import { Injectable } from '@angular/core';

// import { FooterStoreModel } from '../model/store/footer-store.model';
// import { SectionBuilder } from '../../builder/service/section.builder';
// import { PersonalBuilder } from '../../builder/service/personal.builder';
// import { FooterBuilder } from '../../builder/service/footer.builder';

// @State<FooterStoreModel>({
//   name: 'footer',
//   defaults: {
//     ownSection: SectionBuilder.buildDataForKind('footer'),
//     personal: PersonalBuilder.buildData(),
//     footer: FooterBuilder.buildData(),
//   },
// })
// @Injectable()
// export class FooterStoreState {
//   @Selector()
//   static getState(state: FooterStoreModel) {
//     return state;
//   }
// }
